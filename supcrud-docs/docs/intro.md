---
id: intro
title: SupCrud by Crudzaso
sidebar_label: Introducción

---

# SupCrud by Crudzaso

**Documentación técnica oficial** — Clan Turing

---

## ¿Qué es SupCrud?

SupCrud es una plataforma SaaS de gestión de **PQRS** (Peticiones, Quejas, Reclamos y Sugerencias) que permite a cualquier negocio integrar un sistema de soporte en su sitio web mediante un **widget embebible de JavaScript**.

Los usuarios finales no necesitan crear una cuenta. Crean tickets directamente desde el widget usando solo su email y pueden consultarlos después con un código único de referencia.

---

## El problema que resuelve

La mayoría de los negocios pequeños y medianos no tienen un sistema centralizado para gestionar las solicitudes de soporte de sus clientes. Las PQRS llegan por WhatsApp, email o redes sociales sin trazabilidad, sin historial y sin métricas.

SupCrud resuelve esto con:

- Un widget que se instala con **una sola línea de código** en cualquier sitio web
- Un panel de administración para que los agentes gestionen tickets
- Identidad del usuario final verificada por **OTP** (sin registro requerido)
- Historial completo de mensajes por ticket
- Add-ons activables por workspace: archivos adjuntos e IA

---

## Propuesta de valor

| Para el negocio | Para el usuario final |
|---|---|
| Centraliza todas las PQRS en un solo lugar | No necesita crear cuenta |
| Asigna agentes por workspace | Crea tickets desde cualquier dispositivo |
| Activa funcionalidades según sus necesidades | Consulta el estado de su ticket con un código |
| Integración en minutos con el widget JS | Verifica su identidad de forma segura con OTP |

---

## Stack general

| Capa | Tecnología | Servicio |
|---|---|---|
| Frontend | HTML + CSS + JS Vanilla + Tailwind CDN | GitHub Pages |
| Backend | Node.js + Express | Render (free tier) |
| Base de datos SQL | PostgreSQL | Supabase (free tier) |
| Base de datos NoSQL | MongoDB | Atlas (free tier) |
| Autenticación | JWT + Google OAuth (passport.js) | — |
| Archivos | Cloudinary SDK | Cloudinary (free tier) |
| IA | OpenAI API (gpt-4o-mini) | OpenAI |
| Documentación | Docusaurus v3 | GitHub Pages |
| Widget | JS Vanilla (script tag) | GitHub Pages |

---

## Cómo navegar esta documentación

- **[Arquitectura](/arquitectura/overview)** — Diagrama del sistema, stack y modelo de datos
- **[Flujos](/flujos/creacion-ticket)** — Creación de tickets, consulta pública y validación OTP
- **[Add-ons](/addons/overview)** — Attachments e IA Assist por workspace
- **[Despliegue](/despliegue/links)** — Variables de entorno y URLs públicas del proyecto

---

:::info Proyecto en construcción
Esta documentación se construye en paralelo con el MVP. Algunas secciones estarán completas a partir del Día 2 del sprint.
:::
