const express = require("express");
const bodyParser = require("body-parser");
const routerA = require("./routes/index.js");

const app = express();
app.use(bodyParser.json());
app.use(routerA);
app.listen(8080);
