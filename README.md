# API-Adonis-Docker-PostgreSQL
API developed with Adonisjs, Docker and PostgreSQL

# backend

## Build Setup

Install [Docker Compose](https://docs.docker.com/compose/install/).

```bash
# Create container with PostgreSQL
$ docker-compose up -d

# Create database structure
$ node ace migration:run

# install dependencies
$ npm install

# server with changes watcher
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

#Autentication User:
email: 'roncodeit@gmail.com',
      password: 'ron123'
