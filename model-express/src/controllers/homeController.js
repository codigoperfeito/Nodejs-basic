exports.homePage = (req,res)=> {
    //mensagem de cookie por tempo que foi definido no servidor
    // req.session.usuario = {nome: 'wesley',logado: true}
    // para mostrar ele smp fica
    // console.log(req.session.usuario)
    // feito para criar sessão que expira na segunda vez
    // flash.req('adb' 'mensagem')
    // flash.req('def' 'mensagem')
    // flash.req('ghi' 'mensagem')
    // feito para vizualiar as coisas
    //console.log(res.flash('adb'),res.flash('def'),res.flash('ghi'))
    res.render('index');
}
exports.firstPost = (req,res) => {
    res.send('Agora foi mlk')
}