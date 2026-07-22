# Oceanhold Exports

Single-page marketing site for **Oceanhold Exports LLP** — NestJS API + Next.js frontend, Supabase Postgres for contact inquiries, SMTP for email notify + auto-reply.

```
oceanhold/
  frontend/     Next.js (Vercel)
  backend/      NestJS (Render)
  supabase/     schema.sql
```

## Stack
- **Frontend:** Next.js App Router, Tailwind CSS, Framer Motion → deploy on **Vercel**
- **Backend:** NestJS, TypeORM, class-validator → deploy on **Render** (free web service)
- **Database:** Supabase Postgres
- **Email:** SMTP via Nodemailer (company notify + sender auto-reply)

## 1. Supabase
1. Create a project at [supabase.com](https://supabase.com)
2. Open **SQL Editor**, paste and run [`supabase/schema.sql`](supabase/schema.sql)
3. Copy **Project Settings → Database → Connection string** (prefer Session / Transaction pooler URI for Render)
4. Use that as `DATABASE_URL`

## 2. SMTP email (Gmail example)
1. Open Google Account → **Security** → enable 2-Step Verification
2. Create an **App Password** for Mail
3. Set in `backend/.env`:
   - `SMTP_HOST=smtp.gmail.com`
   - `SMTP_PORT=587`
   - `SMTP_SECURE=false`
   - `SMTP_USER=oceanholdexports@gmail.com`
   - `SMTP_PASS=` (the 16-char app password)
   - `MAIL_FROM=Oceanhold Exports <oceanholdexports@gmail.com>`
   - `MAIL_TO=oceanholdexports@gmail.com`

Any SMTP provider works (Outlook, Zoho, SendGrid SMTP, etc.) — just change host/port/creds.

## 3. Local development

### Backend
```bash
cd backend
cp .env.example .env
# fill DATABASE_URL, SMTP_*, FRONTEND_URL=http://localhost:3000
npm install
npm run start:dev
```
API: `http://localhost:3001`  
Health: `GET /api/health`  
Contact: `POST /api/contact`

### Frontend
```bash
cd frontend
cp .env.example .env.local
# NEXT_PUBLIC_API_URL=http://localhost:3001
npm install
npm run dev
```
Site: `http://localhost:3000`

## 4. Deploy backend on Render
1. Push this repo to GitHub
2. [Render](https://render.com) → **New Web Service** → connect repo
3. Settings:
   - **Root Directory:** `backend`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm run start:prod`
   - **Instance:** Free
4. Environment variables (same as `.env.example`):
   - `DATABASE_URL` — Supabase pooler URI
   - `DB_SSL=true`
   - `SMTP_HOST` / `SMTP_PORT` / `SMTP_SECURE`
   - `SMTP_USER` / `SMTP_PASS`
   - `MAIL_FROM`
   - `MAIL_TO=oceanholdexports@gmail.com`
   - `FRONTEND_URL` — your Vercel URL (e.g. `https://oceanhold.vercel.app`)
   - `PORT` — Render sets this automatically; do not hardcode
5. Health check path: `/api/health`
6. Copy the Render service URL (e.g. `https://oceanhold-api.onrender.com`)

> Free Render instances **spin down** after idle. First request may take ~30–60s.

## 5. Deploy frontend on Vercel
1. [Vercel](https://vercel.com) → **New Project** → import repo
2. **Root Directory:** `frontend`
3. Env:
   - `NEXT_PUBLIC_API_URL` = Render URL (no trailing slash), e.g. `https://oceanhold-api.onrender.com`
4. Deploy
5. Update Render `FRONTEND_URL` to the Vercel domain (and redeploy backend if needed for CORS)

## Contact form flow
1. Visitor submits form on Next.js page
2. Nest validates + saves row to `contact_inquiries`
3. SMTP emails company (`MAIL_TO`) and auto-replies to the sender

## Scripts cheat sheet
| Where | Command | Purpose |
|-------|---------|---------|
| backend | `npm run start:dev` | Nest watch mode |
| backend | `npm run build` / `start:prod` | Production |
| frontend | `npm run dev` | Next dev |
| frontend | `npm run build` | Production build |
