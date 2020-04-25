const restful = require('node-restful')
const mongoose = restful.mongoose
const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, min: 6, max: 12, required: true},
    bd: {type: Date, required: false},
    comunidade: { type: String, uppercase: true, default: 'PROPEDEUTICO',
      enum: ['PROPEDEUTICO', 'FILOSOFIA' ,'TEOLOGIA', 'TIROCINIO']},
    equipe: { type: String, uppercase: true, default: 'OUTROS',
      enum: [
        'COMPRAS',
        'REDES_SOCIAIS',
        'JARDINAGEM',
        'TIROCINIO',
        'PARTILHA_SOLIDARIA',
        'PRODUTOS',
        'OUTROS'
      ]},
    hierarquia: {type: String, uppercase: true, default: 'SEMINARISTA',
      enum: ['SEMINARISTA', 'FORMADOR', 'REITOR']},
    ativo: {type: Boolean, default: true},
    coordenaEquipe: {type: Boolean, default: false},
    tolkenConvite: {type: String}
});
module.exports = restful.model('User', userSchema)
