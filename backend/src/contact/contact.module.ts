import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailModule } from '../mail/mail.module';
import { ContactInquiry } from './contact-inquiry.entity';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';

@Module({
  imports: [TypeOrmModule.forFeature([ContactInquiry]), MailModule],
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}
