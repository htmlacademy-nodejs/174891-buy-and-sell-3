'use strict';

const {Router} = require(`express`);
const mainRouter = require(`./main-routes`);
const myRouter = require(`./my-routes.js`);
const offersRouter = require(`./offers-routes`);

const app = new Router();

app.use(`/`, mainRouter);
app.use(`/my`, myRouter);
app.use(`/offers`, offersRouter);

module.exports = app;
