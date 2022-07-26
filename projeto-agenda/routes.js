const express = require('express');
const route = express.Router();
const homePage = require('./src/controllers/homeController');
const loginPage = require('./src/controllers/loginController')

route.get('/',homePage.index);

// pagina de login

route.get('/login/index', loginPage.index);

module.exports = route