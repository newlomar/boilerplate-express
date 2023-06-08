let express = require('express');
let app = express();

const staticPath = __dirname + "/public"
app.use("/public", express.static(staticPath))

app.get("/public", serveHTML)

function serveHTML (req, res) {
  const absolutePath = __dirname + "/views/index.html"

  res.sendFile(absolutePath)
}

























 module.exports = app;
