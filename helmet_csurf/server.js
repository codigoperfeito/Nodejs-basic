require('dotenv').config();

const express = require('express');
const app = express();
const { middlewareGlobal, middlewareCsrfConfig, csrfMiddlewarePass } = require('./src/middleware/middleware')
const moongose = require('mongoose');
moongose.connect(process.env.urlEncoded)
.then(()=> {
    console.log('base de dados conectada')
    app.emit('conected')
})
const session = require('express-session');
const MongoStory = require('connect-mongo');
const flash = require('express-session');
const routes = require('./routes')
const path = require('path');
const { default: mongoose } = require('mongoose');


const helmet = require('helmet')
const csrf = require('csurf');

app.use(helmet())
app.use(
    express.urlencoded({
        extended:true
    })
)
app.use(express.static(path.resolve(__dirname, 'public')))
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs');

const sessionOption = session({
    secret: 'mensagem que vai ser enviada escondido',
    store: MongoStory.create({ mongoUrl: process.env.urlEncoded}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});
app.use(sessionOption);
app.use(flash())

app.use(csrf())
// middleware
app.use(middlewareGlobal)
app.use(csrfMiddlewarePass)
app.use(middlewareCsrfConfig)


app.use(routes);
app.on('conected', ()=>{
    app.listen(3000, ()=>{
       console.log('servido funcionando')
    })
})