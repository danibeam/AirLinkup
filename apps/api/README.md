<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Folder structure pattern

/project-root
│
├── /src
│ ├── /modules # Módulos de la aplicación
│ │ ├── /auth # Módulo de autenticación
│ │ │ ├── auth.controller.ts
│ │ │ ├── auth.service.ts
│ │ │ ├── auth.module.ts
│ │ │ └── dto # DTOs para autenticación
│ │ │ └── login.dto.ts
│ │ ├── /users # Módulo de usuarios
│ │ │ ├── users.controller.ts
│ │ │ ├── users.service.ts
│ │ │ ├── users.module.ts
│ │ │ └── dto # DTOs para usuarios
│ │ │ └── create-user.dto.ts
│ │ └── /... # Otros módulos (productos, pedidos, etc.)
│ │
│ ├── /common # Código reutilizable y utilidades
│ │ ├── /decorators # Decoradores personalizados
│ │ ├── /filters # Filtros globales de excepciones
│ │ ├── /guards # Guards para la autenticación/roles
│ │ ├── /interceptors # Interceptores para modificar requests/responses
│ │ ├── /interfaces # Interfaces compartidas
│ │ ├── /pipes # Pipes personalizados
│ │ └── /services # Servicios compartidos (ej: EmailService)
│ │
│ ├── /config # Configuración de la aplicación
│ │ ├── config.module.ts
│ │ ├── config.service.ts
│ │ └── /environments # Archivos de configuración para diferentes entornos
│ │ ├── development.ts
│ │ ├── production.ts
│ │ └── testing.ts
│ │
│ ├── /database # Configuración de la base de datos
│ │ ├── /entities # Entidades de TypeORM/Mongoose/etc.
│ │ │ └── user.entity.ts
│ │ ├── /migrations # Migraciones de la base de datos
│ │ └── database.module.ts
│ │
│ ├── /middleware # Middleware de la aplicación
│ │ └── logger.middleware.ts
│ │
│ ├── app.module.ts # Módulo raíz de la aplicación
│ ├── main.ts # Archivo de entrada de la aplicación
│ └── app.controller.ts # Controlador raíz (opcional)
│
├── /test # Pruebas unitarias y de integración
│ ├── /e2e # Pruebas end-to-end
│ └── /unit # Pruebas unitarias
│
├── /docs # Documentación del proyecto
│
├── /scripts # Scripts útiles para tareas automatizadas
│
├── nest-cli.json # Configuración del CLI de NestJS
├── tsconfig.json # Configuración de TypeScript
├── package.json # Dependencias y scripts del proyecto
├── .env # Variables de entorno
└── README.md # Documentación inicial del proyecto

### Descripcion de las carpetas

Descripción de las carpetas:
/src: Es el directorio principal donde se encuentra el código fuente de la aplicación.

/modules: Aquí se colocan los módulos de la aplicación, cada uno con sus controladores, servicios, entidades, DTOs, etc.
/common: Código reutilizable que puede ser compartido entre diferentes módulos, como decoradores, pipes, guards, etc.
/config: Archivos relacionados con la configuración de la aplicación, incluyendo la configuración específica por entorno.
/database: Configuración de la base de datos, incluyendo entidades, migraciones y configuraciones de conexión.
/middleware: Middleware de la aplicación que se ejecutan antes de que los controladores manejen las solicitudes.
app.module.ts y main.ts: El módulo principal y el archivo de arranque de la aplicación respectivamente.
/test: Directorio para las pruebas unitarias y de integración. Puedes separar las pruebas end-to-end y las pruebas unitarias en carpetas distintas.

/docs: Documentación del proyecto.

/scripts: Scripts útiles para automatizar tareas de desarrollo, como migraciones o despliegues.

nest-cli.json: Configuración específica del CLI de NestJS.

tsconfig.json: Configuración de TypeScript.

.env: Archivo para las variables de entorno.

README.md: Documentación básica del proyecto.

Esta estructura es flexible y se puede ajustar según las necesidades específicas de tu proyecto.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
