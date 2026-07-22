import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactModule } from './contact/contact.module';
import { HealthModule } from './health/health.module';
import { ContactInquiry } from './contact/contact-inquiry.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres' as const,
        url: config.get<string>('DATABASE_URL'),
        entities: [ContactInquiry],
        synchronize: false,
        ssl:
          config.get<string>('DB_SSL') === 'false'
            ? false
            : { rejectUnauthorized: false },
      }),
    }),
    ContactModule,
    HealthModule,
  ],
})
export class AppModule {}
