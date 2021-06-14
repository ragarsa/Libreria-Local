var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/catalog')
});

router.get('/about', function(req,res,next){
  res.send('Hey')
});

module.exports = router;
