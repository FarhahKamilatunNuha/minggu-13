var express = require('express');
var Router = express.Router();

/* GET home page. */
Router.get('/', function(req, res, next){
    res.render('register/index', { title: 'Page baru'});
});

module.exports= Router;
