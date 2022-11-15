var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', formdata: undefined });
});

router.post('/', function(req, res, next) {
  res.render('index', { title: 'Express', formdata: req.body });
});

module.exports = router;
