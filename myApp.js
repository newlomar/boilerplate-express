let express = require('express');
let app = express();
require('dotenv').config()

app.use(function(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`)

  next()
})

app.get("/now", function(req, res, next) {
  req.time = new Date().toString()
  next()
}, function(req, res) {
  res.json({time: req.time})
})

app.get("/json", function(req, res) {
  const message_style = process.env.MESSAGE_STYLE
  if (message_style === "uppercase") {
    res.json({"message": "HELLO JSON"})
  } else {
    res.json({"message": "Hello json"})
  }
  
})
























 module.exports = app;
