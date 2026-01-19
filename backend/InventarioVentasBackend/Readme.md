# ⚙️ Backend API - Inventario & Ventas

API REST robusta desarrollada con **.NET 8** y **C#**. Gestiona el núcleo de la lógica de negocio, incluyendo la persistencia de datos y el control de transacciones.

### Características Técnicas
* **Framework:** .NET 8 (LTS)
* **ORM:** Entity Framework Core con enfoque Code-First.
* **Base de Datos:** SQL Server.
* **Endpoints Principales:**
    * `GET /api/Products`: Listado completo de inventario.
    * `POST /api/Sales`: Procesamiento de ventas con descuento automático de stock.

### Lógica Destacada
El controlador de ventas (`SalesController`) valida la existencia del producto y la disponibilidad de stock antes de confirmar cualquier transacción, asegurando la integridad de la base de datos.