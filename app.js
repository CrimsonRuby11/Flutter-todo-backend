const express = require('express');
const bodyParser = require('body-parser');
const UserRouter = require('./MVC/Routers/user.router');

const todoModel = require('./MVC/Models/todo.model');
const todoRouter = require('./MVC/Routers/todo.router');

const app = express();
app.use(bodyParser.json());

app.use('/', UserRouter);
app.use('/', todoRouter);

module.exports = app;