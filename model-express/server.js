require('dotenv').config();

const express = require('express');
const app = express();
const moongose = require('mongoose');
moongose.connect(process.env.urlEncoded)
.then(()=> {
    console.log('base de dados conectada')
    app.emit('conected')
})

const routes = require('./routes')
const path = require('path')

app.use(
    express.urlencoded({
        extended:true
    })
)
app.use(express.static(path.resolve(__dirname, 'public')))
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs');

app.use(routes);
app.on('conected', ()=>{
    app.listen(3000, ()=>{
       console.log('servido funcionando')
    })
})
