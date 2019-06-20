let express = require('express');
let router = express.Router();
let model = require('../db/model');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Express' });
});

module.exports = router;
