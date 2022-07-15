const express = require('express');
const route = express.Router();
const homePage = require('./src/controllers/homeController');
const contats = require('./src/controllers/contatsController')

route.get('/',homePage.homePage);
route.post('/', homePage.firstPost)

// pagina de contatos

route.get('/contats',contats.homePage)

module.exports = route