const express = require('express');
const Router = express.Router();

// import controllers
const {postController} = require('../controller/controller');

Router.post('/create', postController);

module.exports = Router;