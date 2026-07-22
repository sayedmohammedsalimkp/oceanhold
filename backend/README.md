# Oceanhold Exports API

NestJS backend for the Oceanhold Exports marketing site.

## Local run

```bash
cp .env.example .env
# fill DATABASE_URL, SMTP_*, FRONTEND_URL
npm install
npm run start:dev
```

Health: `GET http://localhost:3001/api/health`  
Contact: `POST http://localhost:3001/api/contact`
