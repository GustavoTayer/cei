const Produto = require('./produto')
const User = require('../user/user')
const errorHandler = require('../common/errorHandler')

Produto.methods(['get', 'post', 'put'])
Produto.updateOptions({new: true, runValidators: true})
Produto.after('post', errorHandler).after('put', errorHandler)

Produto.route('validarTela', (req, res, next) => {
  const usuario = req.decoded._id
  User.findById(usuario, (err, usr) => {
    if(err) {
    } else {
      return usr.hierarquia === 'REITOR' ?
        res.status(200).json({autorizado: true}) :
        res.status(403).json({autorizado: true})
    }
  })
})

Produto.route('buscar', (req, res, next) => {
  Produto.find({}, (err, prod) => {
    if (err) {
      console.log(err)
    } else {
      return res.json(prod)
    }
  })
})

Produto.route('count', (req, res, next) => {
    Produto.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})

module.exports = Produto
