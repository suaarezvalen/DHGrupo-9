const express = require('express');
const app = express();
const path = require('path');



const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.get("/index", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/index.html"));
});
app.get("/detalle", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/detalle.html"));
});
app.get("/carrito", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/carrito.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/login.html"));
});
app.get("/registro", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/registro.html"));
});
app.get("/tienda", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/tienda.html"));
});

app.listen(3001, function() {
  console.log("Corriendo servidor en el puerto 3001");
}
)