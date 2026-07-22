import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('contact_inquiries')
export class ContactInquiry {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  email: string;

  @Column({ type: 'text', nullable: true })
  phone: string | null;

  @Column({ type: 'text', nullable: true })
  company: string | null;

  @Column({ type: 'text' })
  message: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;
}
