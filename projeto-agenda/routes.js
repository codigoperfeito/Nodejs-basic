const express = require('express');
const route = express.Router();
const homePage = require('./src/controllers/homeController');

route.get('/',homePage.homePage);

module.exports = route