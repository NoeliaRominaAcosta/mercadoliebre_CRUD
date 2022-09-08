module.exports = (req,res,next) => {

    if(req.cookies.mercadoLiebre){
        req.session.userLogin = req.cookies.mercadoLiebre
    }
    next()
}