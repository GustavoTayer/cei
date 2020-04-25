const ProdutoSolicitado = require('./produto-solicitado')
const errorHandler = require('../common/errorHandler')

ProdutoSolicitado.methods([])
ProdutoSolicitado.updateOptions({new: true, runValidators: true})
ProdutoSolicitado.after('post', errorHandler).after('put', errorHandler)
var mongoose = require('mongoose');

ProdutoSolicitado.route('count', (req, res, next) => {
  const filtroSolicitacao = [{$eq: ['$_id', '$$solicitacaoId']}]
  const filtro = req.body.filtro;
  if(filtro) {
    if(filtro.status) {
      filtroSolicitacao.push({$eq: ['$status', filtro.status]})
    }

    if(filtro.usuario) {
      filtroSolicitacao.push({$eq: ['$usuario',  mongoose.Types.ObjectId(filtro.usuario)]})
    }

    if(filtro.dataDesejada) {
      if(filtro.dataDesejada.start) {
        filtroSolicitacao.push({$gte: ['$dataDesejada', new Date(filtro.dataDesejada.start)]})
      }
      if(filtro.dataDesejada.end) {
        filtroSolicitacao.push({$lte: ['$dataDesejada', new Date(filtro.dataDesejada.end)]})
      }
    }

    if(filtro.dataCriacao) {
      if(filtro.dataCriacao.start) {
        filtroSolicitacao.push({$gte: ['$criadoEm', new Date(filtro.dataCriacao.start)]})
      }
      if(filtro.dataCriacao.end) {
        filtroSolicitacao.push({$lte: ['$criadoEm', new Date(filtro.dataCriacao.end)]})
      }
    }
  }

  ProdutoSolicitado.aggregate([
    {
      $lookup: {
        from: 'solicitacaoprodutos',
        let: { solicitacaoId: '$solicitacao'},
        pipeline: [
          {
            $match: {
              $expr: {
                $and: filtroSolicitacao
              }
            }
          }
        ],
        as: "score"
      }
    }, {
      $match: {
        score: {$not: {$size: 0}}
      }
    },
    {
      $group: {
        _id: '$produto',
        count: {$sum: '$quantidade'}
      }
    },
    {
      $lookup: {
         from: "produtos",
         localField: "_id",    // field in the orders collection
         foreignField: "_id",  // field in the items collection
         as: "produto"
      }
    }
    ], (err, produtos) => {
      if(err) {
        return res.status(500).json({errors: [err]})
      }
      res.json(produtos)
    })
})


module.exports = ProdutoSolicitado
