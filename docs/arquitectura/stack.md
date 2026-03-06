---
id: stack
title: Stack tecnológico
sidebar_label: Stack
---

# Stack tecnológico

## Capas del sistema

| Capa | Tecnología | Servicio de despliegue |
|---|---|---|
| Frontend | HTML + CSS + JS Vanilla + Tailwind CDN | GitHub Pages |
| Backend | Node.js + Express | Render (free tier) |
| Base de datos SQL | PostgreSQL | Supabase (free tier) |
| Base de datos NoSQL | MongoDB | Atlas (free tier) |
| Autenticación | JWT + Google OAuth (passport.js) | — |
| Archivos adjuntos | Cloudinary SDK | Cloudinary (free tier) |
| IA | OpenAI API (gpt-4o-mini) | OpenAI |
| Documentación | Docusaurus v3 | GitHub Pages |
| Widget embebible | JS Vanilla (script tag) | GitHub Pages |

---

## Decisiones técnicas clave

### Dos bases de datos
SupCrud usa **PostgreSQL (Supabase)** para datos estructurados y relacionales (usuarios, workspaces, membresías, OTPs) y **MongoDB (Atlas)** para datos de tickets, que tienen estructura variable según tipo y add-ons activos.

### JWT sin sesiones
La autenticación usa **JWT stateless**. Los tokens se envían en el header `Authorization: Bearer <token>`.

### Google OAuth solo para admins/agents
Los **usuarios finales** no tienen cuenta ni autenticación. Solo los admins y agents pueden hacer login con Google. El Owner Global usa email/password exclusivamente.

### Widget embebible
El widget es un script JS que se instala con una sola línea de código y se identifica ante el backend con el `workspaceKey` del negocio.
