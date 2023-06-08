let express = require('express');
let app = express();
console.log("Hello World")
app.get("/", helloExpress)
function helloExpress (req, res) {
  res.send("Hello Express");
}

























 module.exports = app;
