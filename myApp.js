let express = require('express');
let app = express();
const bodyParser = require('body-parser')
require('dotenv').config()

const staticPath = __dirname + "/public"
app.use("/public", express.static(staticPath))
app.use(function(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`)

  next()
})

app.use(bodyParser.urlencoded({extended: false}))

app.get("/now", function(req, res, next) {
  req.time = new Date().toString()
  next()
}, function(req, res) {
  res.json({time: req.time})
})

app.get("/:word/echo", function (req, res) {
  res.json({echo: req.params.word})
})

app.route("/name").get(function(req, res) {
  res.json({name: `${req.query.first} ${req.query.last}`})
}).post(function(req, res) {
  res.json({name: `${req.body.first} ${req.body.last}`})
})

app.get("/json", function(req, res) {
  const message_style = process.env.MESSAGE_STYLE
  if (message_style === "uppercase") {
    res.json({"message": "HELLO JSON"})
  } else {
    res.json({"message": "Hello json"})
  }
  
})


app.get("/public", serveHTML)

function serveHTML (req, res) {
  const absolutePath = __dirname + "/views/index.html"
  res.sendFile(absolutePath)
}



















 module.exports = app;
