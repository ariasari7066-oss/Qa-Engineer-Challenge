#  Técnicas de Prueba

##  Partición de Equivalencia

Se agrupan los valores de entrada en clases válidas e inválidas para reducir la cantidad de pruebas necesarias.

Ejemplo:
- Válido: 5.000 - 2.000.000
- Inválido: < 5.000 o > 2.000.000

---

##  Análisis de Valores Límite

Se prueban los valores en los extremos del rango permitido.

Casos clave:
- 4.999 
- 5.000 
- 2.000.000 
- 2.000.001 

---

##  Pruebas Negativas

Se validan comportamientos incorrectos del sistema.

Ejemplos:
- Saldo insuficiente
- Envío a sí mismo
- Usuario no registrado

---

## Pruebas de transicion de estados

Se valida el comportamiento del sistema ante cambios de estado de la transacción.

Estados considerados:
- Pendiente → En proceso
- Exitoso → Impacta saldo e historial
- Fallido → No afecta saldo ni historial


---

##  Pruebas Funcionales

Validación del flujo principal del sistema:
- Envío de dinero
- Actualización de saldo
- Registro en historial