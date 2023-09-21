# AngularDashboard

Plantilla inicial para dashboards desarrollada en [Angular CLI](https://github.com/angular/angular-cli) versión 16.0.2.

## Servidor de desarrollo

Ejecuta `ng serve` para iniciar un servidor de desarrollo. Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

## Generación de código

Ejecuta `ng generate component nombre-componente` para generar un nuevo componente. También puedes usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Compilación

Ejecuta `ng build` para construir el proyecto. Los artefactos de construcción se almacenarán en el directorio `dist/`.

## Ejecución de pruebas unitarias

Ejecuta `ng test` para ejecutar las pruebas unitarias a través de [Karma](https://karma-runner.github.io).

## Ejecución de pruebas de extremo a extremo

Ejecuta `ng e2e` para ejecutar las pruebas de extremo a extremo a través de una plataforma de tu elección. Para utilizar este comando, primero debes agregar un paquete que implemente capacidades de pruebas de extremo a extremo.

## Estructura inicial propuesta

src/
|-- app/
|   |-- core/
|   |   |-- authentication/
|   |   |   |-- authentication.service.ts
|   |   |   |-- authentication.guard.ts
|   |   |-- http/
|   |   |   |-- http.interceptor.ts
|   |   |-- services/
|   |   |   |-- data.service.ts
|   |   |-- models/
|   |   |   |-- user.model.ts
|   |-- shared/
|   |   |-- components/
|   |   |   |-- header/
|   |   |   |   |-- header.component.html
|   |   |   |   |-- header.component.ts
|   |   |   |-- footer/
|   |   |   |   |-- footer.component.html
|   |   |   |   |-- footer.component.ts
|   |   |   |-- sidebar/
|   |   |   |   |-- sidebar.component.html
|   |   |   |   |-- sidebar.component.ts
|   |   |-- directives/
|   |   |-- pipes/
|   |-- modules/
|   |   |-- layout/
|   |   |   |-- layout.module.ts
|   |   |   |-- layout-routing.module.ts
|   |   |   |-- layout.component.html
|   |   |   |-- layout.component.ts
|   |-- features/
|   |   |-- dashboard/
|   |   |   |-- dashboard.module.ts
|   |   |   |-- dashboard-routing.module.ts
|   |   |   |-- dashboard.component.html
|   |   |   |-- dashboard.component.ts
|   |   |-- users/
|   |   |   |-- users.module.ts
|   |   |   |-- users-routing.module.ts
|   |   |   |-- user-list/
|   |   |   |   |-- user-list.component.html
|   |   |   |   |-- user-list.component.ts
|   |   |   |   |-- user-detail/
|   |   |   |   |   |-- user-detail.component.html
|   |   |   |   |   |-- user-detail.component.ts
|   |-- app-routing.module.ts
|   |-- app.component.html
|   |-- app.component.ts
|-- assets/
|-- environments/
|-- index.html
|-- styles.css
|-- main.ts
|-- polyfills.ts
|-- tsconfig.json