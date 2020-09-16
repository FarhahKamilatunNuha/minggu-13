var express = require('express');
var router = express.router();
const barang = require('../model/barang');

router.barang('/store', function(req, res) {
   barang.store(req,body, function(err, result){
       //redirect ke halaman yang diinginkan
       res.redirect('/barang');
   });
});

module.exports = router;