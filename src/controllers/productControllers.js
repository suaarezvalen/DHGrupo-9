const productControllers =  
{
    tienda: (req, res) => {
        res.render('product/tienda')
    },
    detalle: (req, res) => {
        res.render('product/detalle')
    }
}   
module.exports = productControllers;                                   