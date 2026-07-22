import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';
import { CreateContactDto } from '../contact/dto/create-contact.dto';

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);
  private readonly transporter: Transporter | null;
  private readonly from: string;
  private readonly to: string;

  constructor(private readonly config: ConfigService) {
    const host = this.config.get<string>('SMTP_HOST');
    const user = this.config.get<string>('SMTP_USER');
    const pass = this.config.get<string>('SMTP_PASS');
    const port = Number(this.config.get<string>('SMTP_PORT') || 587);
    const secure =
      this.config.get<string>('SMTP_SECURE') === 'true' || port === 465;

    this.from =
      this.config.get<string>('MAIL_FROM') ||
      `Oceanhold Exports <${user || 'oceanholdexports@gmail.com'}>`;
    this.to =
      this.config.get<string>('MAIL_TO') || 'oceanholdexports@gmail.com';

    if (host && user && pass) {
      this.transporter = nodemailer.createTransport({
        host,
        port,
        secure,
        auth: { user, pass },
      });
    } else {
      this.transporter = null;
      this.logger.warn(
        'SMTP_HOST / SMTP_USER / SMTP_PASS missing — email send disabled',
      );
    }
  }

  async sendInquiryEmails(dto: CreateContactDto): Promise<void> {
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
