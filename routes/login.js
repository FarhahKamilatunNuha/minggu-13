var express = require('express');
var Router = express.Router();

/* GET home page. */
Router.get('/', function(req, res, next){
    res.render('login/index', { title: 'Page baru'});
});

var User = require('../model/user');
/** POST check login */
Router.post('/', async function(req, res){
  const { body } = req;
  User.authLogin(body, function(err,result){
    res.send({
      result,
      error: err
    })
  })
})

module.exports= Router;
