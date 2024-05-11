# Node js Express API

Plantilla de API RESTful en Node.js con Express.

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
