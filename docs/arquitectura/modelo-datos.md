---
id: modelo-datos
title: Modelo de datos
sidebar_label: Modelo de datos
---

# Modelo de datos

## PostgreSQL (Supabase)

Tablas previstas:

- `users` — Usuarios de la plataforma (admins, agents, owner global)
- `workspaces` — Negocios registrados en SupCrud
- `workspace_members` — Relación usuarios ↔ workspaces con rol
- `addons` — Catálogo de add-ons disponibles
- `workspace_addons` — Add-ons activados por workspace
- `otps` — Códigos OTP generados para verificación de usuarios finales
- `agent_preferences` — Preferencias de notificación por agente

## MongoDB Atlas

Colecciones previstas:

- `tickets` — Tickets creados desde el widget
- `ticket_events` — Historial de cambios de estado por ticket
- `ticket_messages` — Mensajes del hilo de soporte por ticket
- `attachments` — Metadatos de archivos adjuntos (requiere add-on Attachments)

---

> Los diagramas ER y esquemas detallados se agregan en D2.
