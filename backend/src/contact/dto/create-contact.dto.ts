import { IsEmail, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateContactDto {
  @IsString()
  @MinLength(2)
  @MaxLength(120)
  name: string;

  @IsEmail()
  @MaxLength(180)
  email: string;

  @IsOptional()
  @IsString()
  @MaxLength(40)
  phone?: string;

  @IsOptional()
  @IsString()
  @MaxLength(120)
  company?: string;

  @IsString()
  @MinLength(10)
  @MaxLength(4000)
  message: string;

  /** Honeypot — bots fill this; humans leave empty */
  @IsOptional()
  @IsString()
  @MaxLength(100)
  website?: string;
}
