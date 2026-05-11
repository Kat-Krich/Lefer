var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/loginSingUp.html');
}); 

app.use(express.static('public'));


var server = http.createServer(app);

server.listen(3000, function() {
    console.log('Servidor rodando na porta 3000');
});