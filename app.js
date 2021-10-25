const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const session = require("express-session");
const cors = require('cors');
//cookies

// INTALACIONES

app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({secret: "session message", resave:false, saveUninitialized:false}));
app.use(cors())

//cookies

//INTALACIONES

//RUTAS GLOBALES

const carritoRoutes = require('./src/routes/carritoRoutes');
const indexRoutes = require('./src/routes/indexRoutes');
const productRoutes = require('./src/routes/productRoutes');
const userRoutes = require('./src/routes/userRoutes');
const dashboardRoutes = require('./src/routes/dashboardRoutes');


app.use('/carrito', carritoRoutes);
app.use('/', indexRoutes);
app.use('/product', productRoutes);
app.use('/user', userRoutes);
app.use('/', dashboardRoutes);



//RUTAS GLOBALES

//ARCHIVOS PÚBLICOS

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

const publicPath2 = path.resolve(__dirname, "./views");
app.use(express.static(publicPath2));

//ARCHIVOS PÚBLICOS

//app.get("/", (req, res) => {
  //res.sendFile(path.resolve(__dirname, "./views/index.ejs"));
//});

//VIEW PORT

app.listen(process.env.PORT || 3001, function() {
  console.log("Corriendo servidor en el puerto 3001");
}
)

//VIEW PORT