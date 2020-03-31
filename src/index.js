const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const routes = require("./routes/wishlist-routes");

const port = 3000;

app.use(bodyParser.json());
app.use(routes);

app.get("/status", function(req, res) {
  res.send("API is running");
});

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`);
});

/*
  mkdir pastadoprojeto
  cd pastatdoprojeto
  npm init -y
  npm install --save express
  mkdir src
  cria o arquivo index.js 
  e escreve o código acima

  npm install nodemon --save-dev | npm install nodemon -D 
*/
