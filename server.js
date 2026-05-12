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

// Esta é a rota que o seu fetch('/livros') chama
app.get('/livros', async function(req, res) {
    try {
        // O modelo Livro vai buscar na coleção configurada no model/livro.js
        const livros = await Livro.find(); 
        
        // Se o banco retornar uma lista vazia, o console.log no seu script não vai disparar
        res.json(livros); 
    } catch (error) {
        console.error("Erro no servidor:", error);
        res.status(500).json(error);
    }
});
//POST para criar livro 
// app.post('/livros', async function(req, res){

//     try{

//         var novoLivro = await Livro.create({

//             titulo: req.body.titulo,
//             autor: req.body.autor,
//             descricao: req.body.descricao,
//             capa: req.body.capa

//         });

//         res.json(novoLivro);

//     }

//     catch(erro){

//         res.status(400).json(erro);

//     }

// });

//GET para buscar livros
// app.get('/livros', async function(req,res){
//     try {
//         var livros = await Livro.find();
//         res.json(livros);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// });

// //Deletar livros 
// app.delete('/livros/:id',async function (req,res) {
//     try {
//         var livro = await Livro.findByIdAndDelete(req.params.id);
//         res.json(livro);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// });




const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Servidor rodando na porta ' + PORT);
});


