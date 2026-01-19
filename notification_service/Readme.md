# 🔔 Notification Service - Java Spring Boot

Este microservicio es el encargado de gestionar las alertas y notificaciones del sistema. Está diseñado para ser desacoplado, permitiendo que otros módulos (como el Backend en .NET o el Script de Python) se comuniquen con él.

### Características Técnicas
* **Framework:** Spring Boot 3.5.9.
* **Lenguaje:** Java 17+.
* **Propósito:** Centralizar el envío de correos electrónicos, alertas de stock bajo y confirmaciones de venta.
* **Arquitectura:** Microservicio reactivo orientado a eventos.

### Endpoints
* `POST /api/notifications/send`: Recibe un objeto JSON con el destinatario y el mensaje a enviar.

### ¿Por qué Java aquí?
La elección de Java Spring Boot para este módulo demuestra la capacidad de trabajar en un entorno **Políglota**, donde se elige la mejor herramienta para cada tarea específica, garantizando escalabilidad y robustez en el manejo de colas de mensajería.