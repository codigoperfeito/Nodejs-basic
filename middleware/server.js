const express = require('express');
const app = express();
const routes = require('./routes')
const path = require('path')
const middleware = require('./src/middleware/middleware')

try{
    app.use(
        express.urlencoded({
            extended:true
        })
    )
}catch(e){
    console.log(e)
}
app.use(express.static(path.resolve(__dirname, 'public')))
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs');

//nosso proprio middleware
app.use(middleware);
app.use(routes)


 app.listen(3000, ()=>{
    console.log('servido funcionando')
})