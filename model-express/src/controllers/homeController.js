const HomeModel = require('../models/HomeModel')

HomeModel.create({
    titulo: 'Segundo titulo enviado',
    descicao: 'terceiro teste enviado'
}).then((data)=>console.log(data))
.catch((e)=>console.log('Erro: ',e))

exports.homePage = (req,res)=> {
    res.render('index');
}
exports.firstPost = (req,res) => {
    res.send('Agora foi mlk')
}