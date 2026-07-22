import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MailService } from '../mail/mail.service';
import { ContactInquiry } from './contact-inquiry.entity';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(ContactInquiry)
    private readonly inquiries: Repository<ContactInquiry>,
    private readonly mail: MailService,
  ) {}

  async create(dto: CreateContactDto) {
    // Honeypot — pretend success so bots don't retry
    if (dto.website && dto.website.trim().length > 0) {
      return { ok: true };
    }

    const inquiry = this.inquiries.create({
      name: dto.name.trim(),
      email: dto.email.trim().toLowerCase(),
      phone: dto.phone?.trim() || null,
      company: dto.company?.trim() || null,
      message: dto.message.trim(),
    });

    await this.inquiries.save(inquiry);
    await this.mail.sendInquiryEmails(dto);

    return { ok: true };
  }
}
