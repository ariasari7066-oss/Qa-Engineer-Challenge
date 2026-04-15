# BUG-01: Doble clic en “Confirmar” duplica la transacción

## Precondiciones
- Usuario autenticado

## Pasos para reproducir
1. Iniciar sesión
2. Ingresar datos válidos
3. Confirmar la operación con dos clicks rápidos

## Resultado actual
El sistema ejecuta la operación dos veces y realiza el descuento doble

## Resultado esperado
El sistema debe procesar una sola transacción

## Severidad
Crítica

## Prioridad
Alta

## Estado
Abierto

---

#  BUG-02: No se valida correctamente el monto mínimo permitido

## Precondiciones
- Usuario autenticado

## Pasos para reproducir
1. Iniciar sesión
2. Ingresar un número de destinatario válido
3. Ingresar un monto menor a 5.000
4. Confirmar la transacción

## Resultado actual
El sistema permite la operación.

## Resultado esperado
El sistema debe rechazar la transacción y mostrar un mensaje indicando que el monto mínimo es 5.000

## Severidad
Media

## Prioridad
Alta

## Estado
Abierto
