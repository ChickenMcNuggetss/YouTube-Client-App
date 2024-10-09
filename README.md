# YouTubeClientApp

## General

The YouTubeClientApp is a application that interacts with the YouTube Data API to provide users with various YouTube functionalities such as searching for videos

# Technology stack

## Frontend

- [Angular](https://angular.dev) - The main framework used to build the application.
- [Angular Material](https://material.angular.io/) - A UI component library offering a range of ready-made components for building a modern, responsive, and consistent user interface.
- [RxJS](https://angular.dev) - Library for reactive programming.
- [NgRx](https://ngrx.io/) - A state management library.
- [TypeScript](https://www.typescriptlang.org/) - A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- [Jest](https://jestjs.io/) - Testing framework.
- [SASS(SCSS)](https://sass-lang.com/) - CSS pre-processor.

## Backend

- [YouTube Data API](https://developers.google.com/youtube/v3) - Used to interact with YouTube’s data.

## Additional instruments and technologies

- [Prettier](https://prettier.io/) - Automatic code formatting to a single style.
- [ESLint](https://eslint.org/)- A linter that provides a consistent code style.

# Available scripts

- **start**: Serves the Angular application locally using `ng serve` at `http://localhost:4200/`.

- **build**: Compiles the Angular application using `ng build` to create a production-ready bundle in the `dist` folder.

- **watch**: Runs `ng build --watch --configuration development` to build the project in development mode and watch for changes.

- **lint**: Lints TypeScript and HTML files in the `src` folder using `eslint "./src/**/*.{ts,html}"`.

- **lint:fix**: Automatically fixes linting issues in TypeScript and HTML files using `eslint "./src/**/*.{ts,html}" --fix`.

- **format**: Formats the project files in the `src` folder using `prettier --write .` to ensure consistent code style.

- **test**: Executes tests with `jest --no-cache`, providing detailed output of test results.

- **test:ci**: Runs tests in continuous integration mode using `jest` without verbose output.

- **test:watch**: Runs `jest --watch` to continuously watch and re-run tests when files change.

- **test:coverage**: Runs tests using `jest --coverage` and generates a code coverage report.

# Setup and Running ⚙️

What do you need to do to run our project locally?

1. Use node `20.x` or higher.
2. Install `Git` on your computer.
3. Install Code Editor of your choice.
4. Clone this repository to your local computer.
5. Install all dependencies using `npm ci`.
6. Finally run a development server: `npm start`