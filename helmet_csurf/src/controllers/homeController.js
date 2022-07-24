exports.homePage = (req,res)=> {
    res.render('index');
}
exports.firstPost = (req,res) => {
    res.send(req.body)
}