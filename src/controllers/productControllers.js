const fs = require('fs');
const path = require("path");

const productFilePath = path.join(__dirname, "../database/product.JSON");
let product = JSON.parse(fs.readFileSync(productFilePath, "utf-8"));

const productControllers =  
{
    tienda: (req, res) => {
        product = JSON.parse(fs.readFileSync(productFilePath, "utf-8"));
        res.render('product/tienda', {dataProductos : product})
    },



    detalle: (req, res) => {
        let idParaURL = req.params.id;

        let aux;

        for (let i of product){
            if (i.id==idParaURL){
                aux=i;
                break;
            }
        }                              //FOR DE JERO

        const novedades = product.slice(-4)

        res.render('product/detalle', {detalleProducto : aux, novedadesProducto : novedades})
    },



    crearProducto: (req, res) => {
        res.render('product/crearProducto')
    },



    crearProductoAccion: (req, res) => {
        let idNuevo = 0;

        for(let i=0;i<product.length; i++) {
            if(idNuevo<product[i].id){
                idNuevo=product[i].id
            }
        }
        
        /*for (let i of product){
            if (idNuevo<i.id){
                idNuevo=i.id;
            }
        }*/                              //FOR DE JERO

        idNuevo++;

        let nombreImagen = req.file.filename

        let productoNuevo = {
            id: idNuevo,
            titulo: req.body.titulo,
            precio: req.body.precio,
            descuento: req.body.descuento,
            descripcion: req.body.descripcion,
            img: nombreImagen
        }

        product.push(productoNuevo);

        fs.writeFileSync(productFilePath, JSON.stringify(product, null, " "))

        res.redirect("/product/tienda")
    },



    editarProducto: (req, res) => {
        let id = req.params.id

        let productoEncontrado;

        for(let i=0;i<product.length;i++){
            if(id==product[i].id){
                productoEncontrado=product[i];
            }
        }

        res.render('product/editarProducto', {productoAEditar : productoEncontrado})
    },



    editarProductoAccion :(req, res) => {
        let id = req.params.id;
        let nombreImagen = req.file.filename
        
        for(let i=0;i<product.length;i++){
            if(id==product[i].id){
                product[i].titulo = req.body.titulo,
                product[i].precio = req.body.precio,
                product[i].descuento = req.body.descuento,
                product[i].descripcion = req.body.descripcion
                product[i].img = nombreImagen
                break;
            }
            
        }

        /*for (let s of product){
            if (id==s.id){
                s.titulo= req.body.titulo;
                s.precio= req.body.precio;
                s.descuento= req.body.descuento;
                s.descripcion= req.body.descripcion;
                s.img= req.body.Imagen;
                break;
            }
        }    */                             //FOR JERO

        fs.writeFileSync(productFilePath, JSON.stringify(product,null,' '));

        res.redirect("/product/tienda")
    },



    eliminarProducto: (req, res) => {
        let id = req.params.id;
		let ProductoEncontrado;
        console.log("estoy aqui")
		let Nproducts = product.filter(function(e){
			return id!=e.id;
		})

		for (let producto of product){
			if (producto.id == id){
			    ProductoEncontrado=producto;
			}
		}

		fs.unlinkSync(path.join(__dirname, '../../public/img', ProductoEncontrado.img));

		fs.writeFileSync(productFilePath, JSON.stringify(Nproducts,null,' '));

		res.redirect('/product/tienda');
	}
    

}   
module.exports = productControllers;                                   