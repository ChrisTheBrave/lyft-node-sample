var express = require('express');
var router = express.Router();

/* GET users listing. */
app.post('/', function (req, res) {
  res.send('Got a POST request')
})

module.exports = router;
