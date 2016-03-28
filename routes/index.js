var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/projects', function(req, res){
  res.render('projects')
})

router.get('/contact', function(req,res,next){
  res.render('contact')
})


module.exports = router;
