# ACrud

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.8.

### Inspiration

The project was inspired by the Angular 19 CRUD Example Tutorial found on the [ItSolutionStuff.com website](https://www.itsolutionstuff.com/post/angular-19-crud-application-tutorial-exampleexample.html).

### Fix and improving

The tutorial for Angular 19 on the ItSolutionStuff.com website the contained some errors and incompatibilities. I have been fixed and improved its. UI was improved too.

## Frontend toolkit:

### To install Bootstrap 5.3.5, run:

```bash
npm install bootstrap@5.3.5
```

### Fontawesome-free Installation

It might be useful to install fontawesome-free for icons usage, run:

```bash
npm i @fortawesome/fontawesome-free
```

#### Update angular.json after frontend toolkits installation

In architect/build/options/styles add:

```
"styles": [
  "node_modules/@fortawesome/fontawesome-free/css/all.min.css",
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
],
```

In architect/build/options/scripts add:

```
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]
```

## Web Service API

The data was mocked with [JSONPlaceholder](https://jsonplaceholder.typicode.com/) wich provides all the necessary APIs to do Create, Read, Update and Delete data (CRUD).

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
