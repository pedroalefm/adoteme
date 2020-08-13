const express = require("express");
const bodyParser = require("body-parser");
const routerA = require("./routes/index.js");
const cors = require("cors");

const app = express();
app.use((req, res, next) => {
  //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
  res.header("Access-Control-Allow-Origin", "*");
  //Quais são os métodos que a conexão pode realizar na API
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  app.use(cors());
  next();
});
app.use(bodyParser.json());

app.use(routerA);

app.listen(8080);
