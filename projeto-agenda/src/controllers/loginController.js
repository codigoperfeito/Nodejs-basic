const Login = require('../models/LoginModel')

exports.index = (req, res) => {
    res.render('login')
}
exports.register = async (req , res) => {
    const login = new Login(req.body)
    await login.register();

    if(login.errors.length > 0){
        req.flash('erros', login.errors)
        req.session.save(function () {
            return res.redirection('/login/index')
        })
        return;
    }

    res.send(login.errors)
}