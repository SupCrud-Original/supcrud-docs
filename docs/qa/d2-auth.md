---
id: 'd2-auth'
title: Revisión QA D2
sidebar_label: Revisión QA D2
---

# QA D2 — Autenticación

**Sprint:** Día 2  
**Ejecutado por:** Jose  
**Fecha:** 2026-03-06

---

## Endpoints revisados

| Endpoint | Método | Resultado | Notas |
|----------|--------|-----------|-------|
| `/api/auth/register` | POST | ✅ Validado D1 | Sin cambios |
| `/api/auth/login` | POST | ✅ Validado D1 | Sin cambios |
| `/api/auth/google` | GET | ✅ Validado D1 | Validado en navegador |
| `/api/auth/google/callback` | GET | ✅ Validado D1 | Flujo OAuth completo |
| `/api/auth/me` | GET | ✅ Aprobado D2 | Era ❌ 404 en D1, implementado correctamente |
| `/api/auth/owner/login` | POST | ✅ Aprobado D2 | Primera prueba, sin issues |

---

## Detalle de pruebas D2

### GET /api/auth/me

Requiere header `Authorization: Bearer {{token}}`. Protegido por middleware `authenticate`.

| Caso | Input | Status esperado | Status obtenido | Resultado |
|------|-------|----------------|-----------------|-----------|
| Token válido | Bearer token JWT vigente | 200 | 200 | ✅ |
| Sin token | Sin header Authorization | 401 | 401 | ✅ |
| Token malformado | Bearer `tokenbasura123` | 401 | 401 | ✅ |
| Token expirado | Bearer JWT con `exp` en 2023 | 401 | 401 | ✅ |

**Respuesta exitosa (200):**
```json
{
  "success": true,
  "data": {
    "id": "4372ee26-7ede-46d1-bcc1-7c557cdd90db",
    "name": "Test QA Jose",
    "email": "testqa@gmail.com",
    "is_owner": false,
    "created_at": "2026-03-06T02:22:40.807Z",
    "workspaces": []
  }
}
```

---

### POST /api/auth/owner/login

Endpoint exclusivo para Owner Global. Solo acepta emails con dominio `@crudzaso.com`.

| Caso | Input | Status esperado | Status obtenido | Resultado |
|------|-------|----------------|-----------------|-----------|
| Credenciales owner válidas | `crudzaso@crudzaso.com` / `SupCrud2024` | 200 | 200 | ✅ |
| Dominio incorrecto | `crudzaso@gmail.com` / `SupCrud2024` | 401 | 401 | ✅ |
| Contraseña incorrecta | `crudzaso@crudzaso.com` / `wrongpassword` | 401 | 401 | ✅ |
| Campos vacíos | `""` / `""` | 400 | 400 | ✅ |

**Respuesta exitosa (200):**
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGci...",
    "user": {
      "id": "0bb1f79e-8f7d-457e-a9e4-9af6013fe742",
      "name": "Crudzaso Owner",
      "email": "crudzaso@crudzaso.com",
      "is_owner": true
    }
  }
}
```

---

## Bugs encontrados

Sin bugs encontrados en esta sesión.

> **Nota:** Durante la sesión de QA se detectó un falso positivo — el endpoint `POST /api/auth/owner/login` devolvió 404 momentáneamente debido a un error de configuración en Postman (método GET en lugar de POST). Corregido el método, el endpoint respondió correctamente. No se trata de un bug del backend.

---

## Observaciones generales

- **`getMe` correctamente implementado:** Carlos resolvió el 404 del D1. El controlador obtiene el usuario a partir de `req.user.id`, lo que indica que el middleware `authenticate` inyecta correctamente el payload del JWT en el request.

- **Manejo de errores consistente:** Todos los endpoints siguen la estructura `{ success: false, message: "..." }` para errores, y `{ success: true, data: { ... } }` para respuestas exitosas. Consistente con el estándar del proyecto.

- **Owner login devuelve `is_owner: true`:** El campo `is_owner` en la respuesta permite al frontend distinguir el rol sin necesidad de un endpoint adicional. Decisión técnica acertada.

- **Dominio owner manejado a nivel de servicio:** La validación del dominio `@crudzaso.com` ocurre en `authService.loginOwner`. El controlador unifica el mensaje de error entre "Credenciales inválidas" y "Acceso denegado", lo que es correcto desde el punto de vista de seguridad (no revela si el email existe).

- **`workspaces: []` en usuario de prueba:** El usuario `testqa@gmail.com` no tiene workspaces asignados. Esto es esperado en esta etapa del sprint y deberá cubrirse en QA de días posteriores cuando se implementen los endpoints de workspaces.
