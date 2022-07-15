const express = require('express');
const route = express.Router();
const homePage = require('./src/controllers/homeController');
const contats = require('./src/controllers/contatsController')


// rotas da home
route.get('/',homePage.homePage, (req, ress)=>{
    console.log()
    console.log('ainda estou aqui');
});
route.post('/', homePage.firstPost)

// pagina de contatos

route.get('/contats',contats.homePage)

module.exports = route