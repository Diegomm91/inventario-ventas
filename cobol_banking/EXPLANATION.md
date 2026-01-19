# Caso de Estudio: Sistemas Críticos con COBOL

## Descripción del Proyecto
Este simulador demuestra el procesamiento batch de transacciones bancarias, un pilar de los sistemas financieros globales. Se enfoca en la robustez y el manejo eficiente de archivos indexados.

## Conceptos Clave Demostrados

### 1. Estructura de Divisiones
- **IDENTIFICATION DIVISION**: Metadatos del programa.
- **ENVIRONMENT DIVISION**: Configuración del entorno y mapeo de archivos físicos (`ACCOUNTS.DAT`).
- **DATA DIVISION**: Definición de estructuras de datos. Uso de `COMP-3` para optimizar el almacenamiento numérico (Packed Decimal).
- **PROCEDURE DIVISION**: Lógica de negocio modularizada mediante `PERFORM`.

### 2. Copybooks (`ACCOUNT.CPY`)
Uso de archivos externos para definir estructuras de registro, garantizando la consistencia entre múltiples programas (similar a las Interfaces en TS o Clases en C#).

### 3. Manejo de Archivos Indexados
- **ORGANIZATION IS INDEXED**: Acceso rápido mediante llaves primarias (`ACCOUNT-ID`).
- **REWRITE**: Actualización in-place del registro después de procesar la transacción.

## Flujo Técnico
1. **Apertura**: Se abre el archivo en modo I-O (lectura/escritura).
2. **Lectura Secuencial**: Se recorre el archivo de cuentas.
3. **Cálculo**: Se aplica el monto de la transacción al balance.
4. **Persistencia**: Se actualiza el archivo físico.
5. **Cierre**: Se liberan los recursos del sistema.

---
*Este proyecto demuestra mi capacidad para comprender y mantener sistemas legados de misión crítica.*
