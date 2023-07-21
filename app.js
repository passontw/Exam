require('dotenv-flow').config();
const express = require('express');
const bodyParser = require('body-parser')
const logger = require('morgan');
const expressSwaggerWrapper = require("express-swagger-generator");

const exampleRouter = require('./controllers/example');
const packageJson = require('./package.json');

const { PORT } = process.env;

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use('/example', exampleRouter);

const expressSwagger = expressSwaggerWrapper(app);
const options = {
  swaggerDefinition: {
    info: {
      title: "Backend Exam API Service",
      description: "Backend Exam API Service",
      version: packageJson.version,
    },
    host: `localhost:${PORT}`,
    basePath: "/",
    produces: ["application/json"],
    schemes: ["http", "https"],
    securityDefinitions: {
      JWT: {
        type: "apiKey",
        in: "header",
        name: "Authorization",
        description: "",
      },
    },
  },
  basedir: __dirname, //app absolute path
  files: ["./controllers/**/*.js"], //Path to the API handle folder
};
expressSwagger(options);

module.exports = app;
