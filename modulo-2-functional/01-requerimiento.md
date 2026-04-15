# Requerimiento
Un usuario autenticado puede enviar dinero a otro usuario registrado usando su número de
celular.

# Reglas de Negocio
• RN-01: Monto mínimo por transacción: $5.000 COP.
• RN-02: Monto máximo por transacción: $2.000.000 COP.
• RN-03: El usuario no puede enviar más dinero del saldo disponible.
• RN-04: No se permiten envíos al mismo número de celular.
• RN-05: Si la transacción es exitosa: se descuenta el saldo del remitente, se
incrementa el saldo del destinatario y se registra el movimiento en el historial de
ambos.
• RN-06: Si la transacción falla: se muestra un mensaje de error claro y no se afecta el
saldo.