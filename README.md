# SuperApp5000 / Photobrowser

This is a photo browsing app which queries different REST endpoints from [{JSON} Placeholder](http://jsonplaceholder.typicode.com/) and displays the photos behind those. You can browse through a paginated view or enter details mode and browse through photos one by one.

## Features

- fetch JSON formatted data from a REST API
- present the data in a grid
- basic navigation to different pages: browser, about, details, error
- paging functionality in the list view
- back and forth browsing functionality in the details view
- lazy loaded images in grid view
- responsive layout
- dark mode

## Development server

Run `ng serve` or `npm run start` for a dev server. Navigate to `http://localhost:4200/`.

## Build

Run `ng build` or `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Docker

Build and deploy local docker container running the application using `docker compose up`. Navigate to `http://localhost:4200/`.

## Running unit tests

Run `npm run test` to execute the unit tests via [Jest](https://jestjs.io/).

## Formatter / Linter

Run `npm run format` and `npm run lint` for inspection of needed improvements. Or `npm run format:write` and `npm run lint:write` for applying fixes immediately.

## Used tools/frameworks

- Angular
- Tailwind CSS
- Jest
- Rome
- Docker

## Live version

Take a look at a live version on GitHub Pages [here](https://superfelix5000.github.io/superApp5000/).
