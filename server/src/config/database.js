const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const url = 'mongodb://localhost/cnv'
module.exports = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, err => console.log(err || 'Acesso realizado com sucesso'))

mongoose.Error.messages.general.required = "O campo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min =
    "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max =
    "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum =
    "'{VALUE}' não é válido para o atributo '{PATH}'."
