const ProdutoSolicitado = require('./produto-solicitado')
const errorHandler = require('../common/errorHandler')
const moment = require('moment')
ProdutoSolicitado.methods([])
ProdutoSolicitado.updateOptions({new: true, runValidators: true})
ProdutoSolicitado.after('post', errorHandler).after('put', errorHandler)
var mongoose = require('mongoose');

ProdutoSolicitado.route('count', (req, res, next) => {
  const filtroSolicitacao = [{$eq: ['$_id', '$$solicitacaoId']}]
  const filtro = req.body.filtro;
  if(filtro) {
    if(filtro.status) {
      filtroSolicitacao.push({$eq: ['$status', filtro.status]} )
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


ProdutoSolicitado.route('relProd', (req, res, next) => {
  const filtroSolicitacao= [{$eq: ['$_id', '$$solicitacaoId']}]
  let dayQuery;
  let inicio, fim;
  switch(req.body.frequencia) {
    case 'semana':
    default:
      inicio = moment().day(0); // domingo desta semana
      fim = moment().day(6);
      filtroSolicitacao.push({$gte: ['$criadoEm', new Date(inicio.format('YYYY-MM-DD'))]})
      filtroSolicitacao.push({$lte: ['$criadoEm', new Date(fim.format('YYYY-MM-DD'))]})
      dayQuery = {$dayOfWeek: '$criadoEm'}
      break;
    case 'mes':
      inicio = moment().startOf('month');
      fim = moment().endOf('month');
      filtroSolicitacao.push({$gte: ['$dataDesejada', new Date(inicio.format('YYYY-MM-DD'))]})
      filtroSolicitacao.push({$lte: ['$dataDesejada', new Date(fim.format('YYYY-MM-DD'))]})
      dayQuery = {$dayOfMonth: '$dataDesejada'}
      break;
    case 'ano':
      inicio = moment().startOf('year');
      fim = moment().endOf('year');
      filtroSolicitacao.push({$gte: ['$dataDesejada', new Date(inicio.format('YYYY-MM-DD'))]})
      filtroSolicitacao.push({$lte: ['$dataDesejada', new Date(fim.format('YYYY-MM-DD'))]})
      dayQuery = {$month: '$dataDesejada'}
      break;
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
        as: "solicitacao"
      }
    },
    {
      $match: {
        solicitacao: {$not: {$size: 0}}
      }
    },
    {
      $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$solicitacao", 0 ] }, "$$ROOT" ] } }
    },
    {
      $project: {
        day: dayQuery,
        quantidade: 1,
        produto: 1,
      }
    },
    {
      $group: {
        _id: {produto: '$produto', dia: '$day'},
        count: {$sum: '$quantidade'}
      }
    },
    {
      $lookup: {
         from: "produtos",
         localField: "_id.produto",    // field in the orders collection
         foreignField: "_id",  // field in the items collection
         as: "produto"
      }
    },
    {
      $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$produto", 0 ] }, "$$ROOT" ] } }
    },
    {
      $project: {
        cor: 1,
        count: 1,
        nome: 1,
        produtoId: '$_id.produto',
        dia: '$_id.dia',
        _id: 0
      }
    }
    ]).exec((err, produtos) => {
      if(err) {
        return res.status(500).json({errors: [err]})
      }
      res.json(produtos)
    })
})

module.exports = ProdutoSolicitado
