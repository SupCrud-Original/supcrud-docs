---
id: creacion-ticket
title: Creación de ticket
sidebar_label: Creación de ticket
---

# Flujo de creación de ticket

:::note Disponible desde
Día 3 del sprint.
:::

## Resumen

El usuario final crea un ticket desde el widget embebible sin necesidad de tener una cuenta.

**Tipos de ticket:** P (Petición), Q (Queja), R (Reclamo), S (Sugerencia)

**Estados posibles:** `OPEN` → `IN_PROGRESS` → `RESOLVED` → `CLOSED` / `REOPENED`

Al crear el ticket se genera automáticamente un `referenceCode` único global que el usuario puede usar para consultar su ticket después.

> Flujo detallado, payload y diagrama de secuencia se agregan en D3.
