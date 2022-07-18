exports.homePage = (req,res,next)=> {
    res.render('index', {
        titulo: 'este é o titulo',
        numero: [1,2,3,4,5,6,7,8,9]
    });
}
exports.firstPost = (req,res) => {
    res.send(req.body)
}