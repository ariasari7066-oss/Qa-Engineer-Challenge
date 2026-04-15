#  Casos de Prueba

| ID   | Objetivo | Precondiciones | Datos necesarios | Pasos | Resultado esperado | Prioridad |
|------|----------|----------------|------------------|-------|--------------------|----------|
| TC01 | Validar envío exitoso | Usuario autenticado con saldo suficiente | Destinatario válido, monto 50.000 | 1. Ingresar destinatario <br> 2. Ingresar monto <br> 3. Confirmar | Transacción exitosa y actualización de saldos | Alta |
| TC02 | Validar monto menor al mínimo | Usuario autenticado | Destinatario válido, Monto 4.999 | 1. Ingresar datos <br> 2. Confirmar envío | Mensaje de error y no se realiza transacción | Alta |
| TC03 | Validar monto mayor al máximo | Usuario autenticado | Destinatario válido, Monto 2.000.001 | 1. Ingresar datos <br> 2. Confirmar | Error mostrado | Alta |
| TC04 | Validar saldo insuficiente | Usuario con saldo bajo | Monto mayor al saldo | 1. Ingresar datos <br> 2. Confirmar | Error y saldo no cambia | Alta |
| TC05 | Validar envío a sí mismo | Usuario autenticado | Número propio | 1. Ingresar número propio <br> 2. Confirmar | Transacción rechazada | Alta |
| TC06 | Validar usuario inválido | Usuario autenticado | Número no registrado | 1. Ingresar número inválido <br> 2. Confirmar | Mensaje de error | Media |
| TC07 | Validar fallo sin impacto en saldo | Usuario autenticado | Error simulado | 1. Ejecutar operación <br> 2. Provocar fallo | No cambia saldo ni historial | Alta |
| TC08 | Validar mensaje de error | Usuario autenticado | Datos inválidos | 1. Ejecutar acción inválida | Mensaje claro y descriptivo | Media |