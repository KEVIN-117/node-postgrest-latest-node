# Node js Express API

Plantilla de API RESTful en Node.js con Express(v22.1.0) y PostgreSQL.

## Características

- **Express**: Marco web rápido, no opiniado y minimalista para Node.js.
- **PostgreSQL**: Base de datos relacional.
- **Sequelize**: ORM para Node.js que admite PostgreSQL.
- **Docker**: Contenedores de aplicaciones que facilitan el desarrollo, la implementación y la ejecución de aplicaciones.
- **Docker Compose**: Herramienta para definir y ejecutar aplicaciones Docker de múltiples contenedores.
- **Jest**: Framework de prueba de JavaScript con un enfoque en la simplicidad.
- **ESLint**: Herramienta de análisis de código estático para identificar patrones problemáticos en el código JavaScript.
- **Prettier**: Formateador de código de opinión que garantiza que todo el código en su base de código se vea y se formatee de la misma manera.
- **Husky**: Herramienta para configurar ganchos de Git.

## Requisitos

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [PostgreSQL](https://www.postgresql.org/)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/) (opcional)
- [Insomnia](https://insomnia.rest/) (opcional)
- [DataGrip](https://www.jetbrains.com/datagrip/) (opcional)
- [DBeaver](https://dbeaver.io/) (opcional)
- [pgAdmin](https://www.pgadmin.org/) (opcional)

```
project-root/
│
├── src/
│   ├── controllers/
│   │   ├── UserController.js
│   │   └── OtherController.js
│   │
│   ├── models/
│   │   ├── UserModel.js
│   │   └── OtherModel.js
│   │
│   ├── services/
│   │   ├── UserService.js
│   │   └── OtherService.js
│   │
│   ├── repositories/
│   │   ├── UserRepository.js
│   │   └── OtherRepository.js
│   │
│   ├── routes/
│   │   ├── userRoutes.js
│   │   └── otherRoutes.js
│   │
│   ├── middlewares/
│   │   └── authMiddleware.js
│   │
│   ├── utils/
│   │   ├── validation.js
│   │   └── helpers.js
│   │
│   └── app.js
│
├── config/
│   ├── config.js
│   └── database.js
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
└── package.json
```
- **src/**: Contiene el código fuente de la aplicación.
    - **controllers/**: Controladores que manejan las solicitudes HTTP y llaman a los servicios correspondientes.
    - **models/**: Definiciones de modelos de datos utilizando, por ejemplo, Mongoose para MongoDB.
    - **services/**: Lógica de negocio de la aplicación que encapsula la funcionalidad de los controladores.
    - **repositories/**: Capa de acceso a datos que interactúa directamente con la base de datos.
    - **routes/**: Definiciones de rutas de la aplicación.
    - **middlewares/**: Middleware de Express para la lógica de gestión de solicitudes HTTP.
    - **utils/**: Funciones de utilidad compartidas en toda la aplicación.
    - **app.js**: Punto de entrada de la aplicación.

- **config/**: Configuración de la aplicación, como archivos de configuración y conexión a la base de datos.

- **tests/**: Contiene los archivos de prueba de la aplicación, organizados en pruebas unitarias, de integración y de extremo a extremo.

- **package.json**: Archivo de configuración de npm que contiene metadatos del proyecto y las dependencias del paquete.


## Implementaciones

1. **Configuración del Proyecto**:
  - Inicializa un proyecto de Node.js utilizando npm o yarn.
  - Instala las dependencias necesarias, como Express para el servidor, y las bibliotecas de base de datos que prefieras (por ejemplo, Mongoose para MongoDB o Sequelize para SQL).
  - Configura un archivo `.env` para gestionar las variables de entorno.

2. **Estructura de Carpetas**:
   ```
   ├── src/
   │   ├── controllers/
   │   │   ├── clientController.js
   │   │   ├── invoiceController.js
   │   │   ├── debtController.js
   │   │   └── imageController.js
   │   ├── models/
   │   │   ├── Client.js
   │   │   ├── Invoice.js
   │   │   ├── Debt.js
   │   │   └── Image.js
   │   ├── routes/
   │   │   ├── clientRoutes.js
   │   │   ├── invoiceRoutes.js
   │   │   ├── debtRoutes.js
   │   │   └── imageRoutes.js
   │   ├── uploads/
   │   ├── app.js
   │   └── server.js
   ├── .env
   ├── package.json
   └── ...
   ```

3. **Modelos**:
  - `Client`: Modelo para gestionar la información de los clientes, como nombre, dirección, correo electrónico, etc.
  - `Invoice`: Modelo para representar las facturas, incluyendo detalles como los productos comprados, total, fecha, etc.
  - `Debt`: Modelo para manejar las deudas pendientes de los clientes.
  - `Image`: Modelo para almacenar la información de las imágenes relacionadas con los productos.

4. **Controladores**:
  - Controladores para manejar las operaciones CRUD (crear, leer, actualizar, eliminar) para cada uno de los modelos mencionados anteriormente.

5. **Rutas**:
  - Define las rutas de la API para cada uno de los controladores, especificando los métodos HTTP y los manejadores de funciones correspondientes.

6. **Subida de Imágenes**:
  - Utiliza una biblioteca como Multer para gestionar la subida de imágenes desde el cliente al servidor.
  - Almacena las imágenes en una carpeta dedicada en el servidor y guarda las referencias en la base de datos.

7. **Autenticación y Autorización** (opcional):
  - Implementa la autenticación de usuarios para proteger ciertas rutas o acciones, como la creación de facturas o la carga de imágenes.
  - Gestiona los roles de usuario para definir quién puede realizar qué acciones.

8. **Pruebas** (opcional pero recomendado):
  - Escribe pruebas unitarias y de integración para garantizar el buen funcionamiento de tu aplicación.
  - Puedes utilizar herramientas como Mocha, Chai, y Supertest para escribir y ejecutar pruebas.
