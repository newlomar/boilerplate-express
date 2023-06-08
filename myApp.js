let express = require('express');
let app = express();
console.log("Hello World")
app.get("/", serveHTML)

function serveHTML (req, res) {
  const absolutePath = __dirname + "/views/index.html"

  res.sendFile(absolutePath)
}

























 module.exports = app;
