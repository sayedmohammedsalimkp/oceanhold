import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as dns from 'dns/promises';
import * as nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';
import { CreateContactDto } from '../contact/dto/create-contact.dto';

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);
  private transporter: Transporter | null = null;
  private readonly from: string;
  private readonly to: string;
  private readonly smtpHost?: string;
  private readonly smtpPort: number;
  private readonly smtpSecure: boolean;
  private readonly smtpUser?: string;
  private readonly smtpPass?: string;
  private initPromise: Promise<void>;

  constructor(private readonly config: ConfigService) {
    this.smtpHost = this.config.get<string>('SMTP_HOST');
    this.smtpUser = this.config.get<string>('SMTP_USER');
    this.smtpPass = this.config.get<string>('SMTP_PASS');
    this.smtpPort = Number(this.config.get<string>('SMTP_PORT') || 587);
    this.smtpSecure =
      this.config.get<string>('SMTP_SECURE') === 'true' ||
      this.smtpPort === 465;

    this.from =
      this.config.get<string>('MAIL_FROM') ||
      `Oceanhold Exports <${this.smtpUser || 'oceanholdexports@gmail.com'}>`;
    this.to =
      this.config.get<string>('MAIL_TO') || 'oceanholdexports@gmail.com';

    this.initPromise = this.initTransporter();
  }

  private async initTransporter(): Promise<void> {
    if (!this.smtpHost || !this.smtpUser || !this.smtpPass) {
      this.logger.warn(
        'SMTP_HOST / SMTP_USER / SMTP_PASS missing — email send disabled',
      );
      return;
    }

    // Render free often cannot dial IPv6 — resolve Gmail SMTP to IPv4
    let connectHost = this.smtpHost;
    try {
      const { address } = await dns.lookup(this.smtpHost, { family: 4 });
      connectHost = address;
      this.logger.log(`SMTP IPv4 ${this.smtpHost} -> ${address}`);
    } catch (err) {
      this.logger.warn(
        `SMTP IPv4 lookup failed, falling back to hostname: ${
          err instanceof Error ? err.message : String(err)
        }`,
      );
    }

    this.transporter = nodemailer.createTransport({
      host: connectHost,
      port: this.smtpPort,
      secure: this.smtpSecure,
      auth: { user: this.smtpUser, pass: this.smtpPass },
      // Force IPv4 sockets; servername keeps TLS cert valid when host is an IP
      family: 4,
      tls: {
        servername: this.smtpHost,
        rejectUnauthorized: true,
      },
      connectionTimeout: 20000,
      greetingTimeout: 20000,
      socketTimeout: 20000,
    } as nodemailer.TransportOptions);
  }

  async sendInquiryEmails(dto: CreateContactDto): Promise<void> {
    await this.initPromise;

    if (!this.transporter) {
      this.logger.warn('SMTP not configured — skipping email send');
      return;
    }

    const companyHtml = `
      <h2>New inquiry from Oceanhold website</h2>
      <p><strong>Name:</strong> ${escapeHtml(dto.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(dto.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(dto.phone || '—')}</p>
      <p><strong>Company:</strong> ${escapeHtml(dto.company || '—')}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(dto.message).replace(/\n/g, '<br/>')}</p>
    `;

    const autoReplyHtml = `
      <p>Dear ${escapeHtml(dto.name)},</p>
      <p>Thank you for contacting <strong>Oceanhold Exports</strong>.</p>
      <p>We received your inquiry and will get back to you shortly.</p>
      <p>Connecting Oceans. Delivering Trust.</p>
      <p>— Oceanhold Exports LLP<br/>
      oceanholdexports@gmail.com<br/>
      +91 88485 38567 / +91 92071 96130</p>
    `;

    try {
      await Promise.all([
        this.transporter.sendMail({
          from: this.from,
          to: this.to,
          replyTo: dto.email,
          subject: `Website inquiry from ${dto.name}`,
          html: companyHtml,
        }),
        this.transporter.sendMail({
          from: this.from,
          to: dto.email,
          subject: 'We received your inquiry — Oceanhold Exports',
          html: autoReplyHtml,
        }),
      ]);
      this.logger.log(`Inquiry emails sent for ${dto.email}`);
    } catch (err) {
      this.logger.error(
        `SMTP send failed: ${err instanceof Error ? err.message : String(err)}`,
      );
    }
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
