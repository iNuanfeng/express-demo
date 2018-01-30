var express = require('express');
var nunjucks = require('nunjucks');
var app = express();

nunjucks.configure('./views', {
  express: app
});
app.set('view engine', 'html');

app.get('/', function (req, res) {
  res.render('index', { 
    company: 'Duiba FED' 
  });
});

var server = app.listen(3000, function () {
  console.log('listening at http://localhost:3000');
});
