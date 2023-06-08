let express = require('express');
let app = express();
require('dotenv').config()

app.get("/json", function(req, res) {
  const message_style = process.env.MESSAGE_STYLE
  if (message_style === "uppercase") {
    res.json({"message": "HELLO JSON"})
  } else {
    res.json({"message": "Hello json"})
  }
  
})
























 module.exports = app;
