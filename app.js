var express = require('express');   // 引入express
var nunjucks = require('nunjucks'); // 模板引擎
var axios = require('axios');       // 网络请求
var app = express();

// 初始化模板引擎
nunjucks.configure('./views', {express: app});
app.set('view engine', 'html');

// 路由处理
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
  })
});

// 启动web服务
var server = app.listen(3000, function () {
  console.log('listening at http://localhost:3000');
});
