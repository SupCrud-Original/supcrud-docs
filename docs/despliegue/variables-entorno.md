---
id: variables-entorno
title: Variables de entorno
sidebar_label: Variables de entorno
---

# Variables de entorno

## Backend (Node.js + Express en Render)

```bash
# Servidor
PORT=3000
NODE_ENV=production

# PostgreSQL — Supabase
DATABASE_URL=postgresql://...

# MongoDB — Atlas
MONGODB_URI=mongodb+srv://...

# JWT
JWT_SECRET=
JWT_EXPIRES_IN=7d

# Google OAuth
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_CALLBACK_URL=

# Cloudinary (add-on Attachments)
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# OpenAI (add-on AI Assist)
OPENAI_API_KEY=

# Email (OTP)
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=

# Frontend URL (para CORS)
FRONTEND_URL=
```

> ⚠️ Nunca subas valores reales a GitHub. Usa `.env` local y configura las variables en el dashboard de Render.
