
/**
 * Module dependencies.
 */

var express = require('express');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'your secret here' }));
  app.use(express.compiler({ src: __dirname + '/public', enable: ['sass'] }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', function(req, res){
  res.render('index', {
    title: 'Action boy demo'
  });
});

app.get('/form', function(req, res){
  res.render('form', {
    title: 'Form Sample'
  });
});

app.get('/actionlink', function(req, res){
  res.render('actionlink', {
    title: 'Action Link Sample'
  });
});

app.post('/actionlink', function(req, res) {
  console.log('action link called');
  res.send({
    foo: 'bar'
  });
});

app.post('/form', function(req, res) {
  console.log(req.body.user);
  res.send({status: 'ok'});
});

// Only listen on $ node app.js

if (!module.parent) {
  app.listen(3000);
  console.log("Express server listening on port %d", app.address().port);
}
