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

const PORT = process.env.PORT || 3000;

server.listen(PORT, function() {
    console.log('Servidor rodando');
});