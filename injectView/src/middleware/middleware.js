module.exports = (req,res,next)=>{
    res.locals.umaVariavelLocal = 'Está é a variavel local.';
    next();
}