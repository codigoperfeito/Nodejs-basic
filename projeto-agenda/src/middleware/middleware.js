exports.middlewareGlobal = (req,res,next) => {
    res.locals.errors  = req.flash('errors')
    next()
}
exports.middlewareCsrfConfig = (err ,req,res,next)=>{
    if(err){
        return res.render('404')
    }
    next();
}
exports.csrfMiddlewarePass = (req, res, next)=>{
    res.locals.csrfToken = req.csrfToken();
    next()
}