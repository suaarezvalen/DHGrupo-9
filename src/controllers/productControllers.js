const productControllers =  
{
    tienda: (req, res) => {
        res.render('product/tienda')
    },
    detalle: (req, res) => {
        res.render('product/detalle')
    },
    crearProducto: (req, res) => {
        res.render('product/crearProducto')
    },
    editarProducto: (req, res) => {
        res.render('product/editarProducto')
    },
}   
module.exports = productControllers;                                   