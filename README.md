# Backend Exam

## Usage Packages

* express
  * version: 4.x
  * Nodejs API Framework
* express-swagger-generator
  * version: 1.x
  * Generate Swagger UI
* morgan
  * version: 1.9.x
  * handle system or process logs


## Prepare

### Docker compose

[Install Docker](https://www.cherryservers.com/blog/how-to-install-and-use-docker-compose-on-ubuntu-20-04)

```
  $ cd ./mysqlServices
  $ docker-compose up -d
```

### MySQL initial sql

**create default schema**

**database**

```
CREATE DATABASE examdemo;
```

**users table**

```
CREATE TABLE users (
    id    SMALLINT     UNSIGNED NOT NULL AUTO_INCREMENT,
    name  VARCHAR(30)     NOT NULL,
    password    VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT   CURRENT_TIMESTAMP,
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);
```
