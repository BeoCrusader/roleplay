var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/example', function(req, res, next) {
  res.render('jqexample');
});

module.exports = router;
