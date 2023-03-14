# BooksReviews API
This is a project where there are books and users leave their reviews.

Technical test (fullStack) of [ControlBox.it](https://my.controlbox.net/) and [Letsbos.it](https://letsbox.it/#/Main)

## Prerrequisitos

- In order to build the project, Docker compose must be raised
- Or build the server first and then the Frontend.

## Backend

You must create a file in the root (/) called app.env and add to it the following environment variables.

| Propiedades | Valores   |
|-------------|-----------|
| DB_NAME     | booksR    |
| DB_USER     | root      |
| DB_PWD      | 12345     |
| DB_PORT     | 5432      |
| DB_HOST     | localhost |
| JWT_KEY     | <your_key>|
| JWT_EXPIRES | '1h'      |

## Frontend

