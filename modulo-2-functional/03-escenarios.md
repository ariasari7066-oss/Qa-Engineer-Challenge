#  Escenarios de Prueba - Modelo gherkin
---

## Escenario 1: Envío exitoso
Dado que el usuario está autenticado  
Y tiene saldo suficiente  
Cuando envía dinero a un usuario válido  
Entonces la transacción debe ser exitosa  
Y el movimiento debe disminuir el saldo del remitente y aumentar el saldo del destinatario  

---

## Escenario 2: Validación de mensaje de error

Cuando una transacción falla  
Entonces el sistema debe mostrar un mensaje de error claro y descriptivo  

---

## Escenario 3: Monto menor al mínimo
Cuando el usuario envía menos de 5.000  
Entonces la transacción debe ser rechazada  

---

## Escenario 4: Monto mayor al máximo
Cuando el usuario envía más de 2.000.000  
Entonces la transacción debe fallar  

---

## Escenario 5: Saldo insuficiente
Cuando el monto supera el saldo  
Entonces la transacción debe ser rechazada

---

## Escenario 6: Envío a sí mismo
Cuando el usuario envía dinero a su mismo número  
Entonces la transacción debe ser rechazada

---

## Escenario 7: Usuario inválido
Cuando el número no está registrado  
Entonces debe fallar la operación 

---

## Escenario 8: Fallo en transacción sin afectar saldo
Cuando la operacion tiene status fallida
Entonces el saldo del usuario no debe modificarse  
Y no debe registrarse ningún movimiento en el historial





