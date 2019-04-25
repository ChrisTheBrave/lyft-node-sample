var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/test', function (req, res) {
  console.log(JSON.stringify(req.body.hiee) + ' yoooooo');
  res.send('test : ' + JSON.stringify(req.body));
  // console.log(JSON.stringify(req.body.hiee) + ' yoooooo');
  // res.send('Got a POST request')
})

module.exports = router;
