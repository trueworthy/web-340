var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

var app = express(); 

app.set('views', path.resolve(__dirname, 'views')) //telling express to look in the views folder
app.set('view engine', 'ejs');

app.use(logger('dev'));

// this is when someone types a slash in the url
app.get('/', function(req, res){
    res.render('index', {
        message: 'Welcome to Lea Trueworthys Logger IF She did it correctly'
    });
})

http.createServer(app).listen(3000, function(){
    console.log('Allication started and listenign on port %s', 3000);
});