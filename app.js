const express = require('express');
const app = express();
const path = require('path');



const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));


const publicPath2 = path.resolve(__dirname, "./views");
app.use(express.static(publicPath2));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/index.html"));
});

app.listen(process.env.PORT || 3001, function() {
  console.log("Corriendo servidor en el puerto 3001");
}
)