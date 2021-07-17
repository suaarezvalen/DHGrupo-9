const express = require('express');
const app = express();
const path = require('path');


const carritoRoutes = require('./src/routes/carritoRoutes');
const indexRoutes = require('./src/routes/indexRoutes');
const productRoutes = require('./src/routes/productRoutes');
const userRoutes = require('./src/routes/userRoutes');


app.use('/carrito', carritoRoutes);
app.use('/', indexRoutes);
app.use('/', productRoutes);
app.use('/', userRoutes);



const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

const publicPath2 = path.resolve(__dirname, "./views");
app.use(express.static(publicPath2));


app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/index.ejs"));
});

app.listen(process.env.PORT || 3001, function() {
  console.log("Corriendo servidor en el puerto 3001");
}
)