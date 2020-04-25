const Produto = require('./produto')
const errorHandler = require('../common/errorHandler')

Produto.methods(['get', 'post', 'put', 'delete'])
Produto.updateOptions({new: true, runValidators: true})
Produto.after('post', errorHandler).after('put', errorHandler)


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
