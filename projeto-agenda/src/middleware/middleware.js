exports.middlewareGlobal = (req,res,next) => {
    next()
}
exports.middlewareCsrfConfig = (err ,req,res,next)=>{
    if(err && 'EBADCSRFTOKEN' === err.code){
        return res.render('404')
    }
}
exports.csrfMiddlewarePass = (req, res, next)=>{
    res.locals.csrfToken = req.csrfToken();
    next()
}