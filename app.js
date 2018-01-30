var express = require('express');
var nunjucks = require('nunjucks');
var axios = require('axios');
var app = express();

nunjucks.configure('./views', {
  express: app
});
app.set('view engine', 'html');

app.get('/', function (req, res) {
  // 发送ajax请求
  axios({
    method: 'get',
    url: 'http://m.7ho.com/band/bandList'
  }).then(data => {
    let banners = data.data.data || [];
    res.render('index', { 
      company: 'Duiba FED',
      banners: banners
    });
  }).catch(err => {
  });
});

var server = app.listen(3000, function () {
  console.log('listening at http://localhost:3000');
});
