## TC_API_01 - Crear usuario exitosamente

Precondición:
API disponible

Datos:
{
  "name": "Test User",
  "job": "Automation Engineer"
}

Pasos:
1. Enviar POST /users
2. Capturar response

Resultado esperado:
- Status 201
- ID generado
- Name correcto
- Job correcto

---
## TC_API_02 - Consultar usuario creado

Precondición:
API disponible

Datos:
Path Variables: UserId

Pasos:
1. Enviar GET /user/:id
2. Capturar response

Resultado esperado:
- Status 200
- Name correcto
- Job correcto

---

## TC_API_03 - Crear usuario sin nombre

Precondición:
API disponible

Datos:
{

}

Pasos:
1. Enviar POST /users
2. Capturar response

Resultado esperado:
- Status 400 Bad request
