---
id: overview
title: Add-ons
sidebar_label: ¿Qué son los add-ons?
---

# Add-ons

Los add-ons son funcionalidades opcionales que cada workspace puede activar de forma independiente. No están habilitados por defecto.

## Add-ons disponibles

| Add-on | Descripción | Servicio externo |
|---|---|---|
| **Attachments** | Permite adjuntar archivos a los tickets | Cloudinary |
| **AI Assist** | Sugerencias automáticas de respuesta para agentes | OpenAI (gpt-4o-mini) |

## Activación

Cada workspace puede activar o desactivar sus add-ons desde el panel de administración. La activación se registra en la tabla `workspace_addons` de PostgreSQL.

> Documentación detallada de cada add-on disponible en D4.
