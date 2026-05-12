var mongoose = require('mongoose');
//Cria a estrutura dos livros no MongoDB
var LivroSchema = new mongoose.Schema({

    titulo: {
        type: String,
        required: true
    },

    autor: {
        type: String,
        required: true
    },

    descricao: {
        type: String,
        required: true
    },

    capa: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Livro', LivroSchema, 'livrosDisponiveis');