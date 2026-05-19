var mongose = require('mongoose');
//Cria a estrutura dos usuários no MongoDB
var UsuarioSchema = new mongose.Schema({
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    senha: {
        type: String,
        required: true
    },   

    dataNascimento: {
        type: Date,
        required: true
    },

    dataCadastro: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongose.model('Usuario', UsuarioSchema, 'usuarios');