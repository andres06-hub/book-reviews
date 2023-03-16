# BooksReviews API

This is a project where there are books and users leave their reviews.

Technical test (fullStack) of [ControlBox.it](https://my.controlbox.net/) and [Letsbos.it](https://letsbox.it/#/Main)

- Clone repository

```bash
#SSH
git clone --depth 1 git@github.com:andres06-hub/book-reviews.git
git clone git@github.com:andres06-hub/book-reviews.git
#HTTPS
git clone --depth 1 https://github.com/andres06-hub/book-reviews.git
git clone https://github.com/andres06-hub/book-reviews.git
```

## Prerequisite

Have the following installed

| Dependecia | Link                                               | version |
| ---------- | -------------------------------------------------- | ------- |
| Docker     | [docs.docker](https://docs.docker.com/get-docker/) | 23.0.1  |
| NodeJs     | [nodejs](https://nodejs.org/)                      | 18.14.2 |
| Angular    | [angular](https://angular.io/)                     | 15.2.2  |
| NestJs     | [docs.nestjs](https://docs.nestjs.com)             | 9.2.0   |

- In order to build the project, Docker compose must be raised
  `docker-compose up --build`
- Or build the server first and then the Frontend.

## Important

- Installed or activated pnpm : [See more](https://pnpm.io/)

```bash
# activated
corepack enable

#Installed
npm install -g pnpm
```

- then run: to install the dependencies

```bash
pnpm i
```

## Backend

- Install dependencies with `pnpm i`

You must create a file in the root (/) called app.env and add to it the following environment variables.

| Propiedades | Valores    |
| ----------- | ---------- |
| DB_NAME     | booksR     |
| DB_USER     | root       |
| DB_PWD      | 12345      |
| DB_PORT     | 3306       |
| DB_HOST     | localhost  |
| JWT_KEY     | <your_key> |
| JWT_EXPIRES | '1h'       |

## Frontend

- Install dependencies with `pnpm i`
