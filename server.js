var http = require('http');
var express = require('express');
var mongoose = require('mongoose');
var Livro = require('./model/livro');

var app = express();
const path = require('path');
app.use(express.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'loginSingUp.html'));
});

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(
    "mongodb+srv://katarinakrich:Kiwiw13z24l27@lefer.yobwpju.mongodb.net/Lefer?appName=Lefer"
)

.then(() => {
    console.log("MongoDB conectado");
})

.catch((erro) => {
    console.log(erro);
});

// Esta é a rota que o seu fetch('/recomendacoes') chama
app.get('/recomendacoes', async function(req, res) {
    try {
        // O modelo Livro vai buscar na coleção configurada no model/livro.js
        const livros = await Livro.find().limit(18); 
        
        // Se o banco retornar uma lista vazia, o console.log no seu script não vai disparar
        res.json(livros); 
    } catch (error) {
        console.error("Erro no servidor:", error);
        res.status(500).json(error);
    }
});

app.post('/buscar', async function(req, res) {
    try {
        livros = await Livro.find({
            $or: [
                { titulo: { $regex: req.body.query, $options: 'i' } },
                { autor: { $regex: req.body.query, $options: 'i' } }
            ]
        })
        res.json(livros);
    } catch (error) {
        console.error("Erro no servidor:", error);
        res.status(500).json(error);
    }

});

app.post('/cadastro', async function(req, res) {
    try {
        var Usuario = require('./model/usuarios');
        const usuarios = await Usuario.create({
            username: req.body.username,
            email: req.body.email,
            senha: req.body.senha,
            dataNascimento: req.body.dataNascimento
        });
        res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
    } catch (error) {
        console.error("Erro no servidor:", error);
        res.status(500).json(error);
    }
    
});

app.post('/login', async function(req, res) {
    try {
        var Usuario = require('./model/usuarios');
        const user = await Usuario.findOne({
            username: req.body.user,
            senha: req.body.senha
        });
        if (user) {
            res.json({ message: 'Login bem-sucedido!' });
        } else {
            res.status(401).json({ message: 'Credenciais inválidas!' });
        }
    } catch (error) {
        console.error("Erro no servidor:", error);
        res.status(500).json(error);
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Servidor rodando na porta ' + PORT);
});


