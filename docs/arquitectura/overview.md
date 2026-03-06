---
id: overview
title: Visión general del sistema
sidebar_label: Overview
---

# Visión general del sistema

:::note Disponible desde
Día 2 del sprint. Esta página se completa con diagramas una vez confirmada la arquitectura final con el equipo.
:::

## Niveles del sistema

SupCrud opera con una arquitectura multi-tenant basada en **workspaces**. Cada workspace representa un negocio independiente con su propio `workspaceKey`.

```
Owner Global (nombredelteam@crudzaso.com)
└── Workspace A (negocio 1)
    ├── Admin
    ├── Agent 1
    └── Agent 2
└── Workspace B (negocio 2)
    ├── Admin
    └── Agent 1
```

### Roles

| Rol | Descripción |
|---|---|
| **Owner Global** | Administrador de toda la plataforma. Email `nombredelteam@crudzaso.com`. Sin Google OAuth. |
| **Admin** | Administra su workspace. Puede pertenecer a múltiples workspaces. |
| **Agent** | Gestiona tickets asignados. Puede pertenecer a múltiples workspaces. |
| **Usuario final** | Sin cuenta. Crea tickets desde el widget usando solo su email. |

---

## Flujo de alto nivel

> Diagrama por agregar en D2.

1. El negocio instala el widget JS con su `workspaceKey`
2. El usuario final llena el formulario del widget → se crea el ticket
3. Se genera un `referenceCode` único global
4. El usuario puede consultar su ticket con ese código (sin autenticación)
5. Si quiere ver el detalle completo, verifica su identidad con OTP al email
6. Los agentes gestionan el ticket desde el panel de administración
