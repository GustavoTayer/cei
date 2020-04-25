const restful = require('node-restful')
const mongoose = restful.mongoose
const userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    comunidade: { type: String, uppercase: true, default: 'PROPEDEUTICO',
      enum: ['PROPEDEUTICO', 'FILOSOFIA' ,'TEOLOGIA', 'TIROCINIO']},
    convite: {type: String}
});
module.exports = restful.model('UsuarioConvidado', userSchema)
