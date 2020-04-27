const SolicitacaoProduto = require('./solicitacao-produto2')
const ProdutoSolicitado = require('../produto_solicitado/produto-solicitado')
const Produto = require('../produto/produto')
const errorHandler = require('../common/errorHandler')
SolicitacaoProduto.methods(['get', 'post', 'put'])
SolicitacaoProduto.updateOptions({new: true, runValidators: true})
SolicitacaoProduto.after('post', errorHandler).after('put', errorHandler)
const eStatus = new Set(['ABERTO', 'PRODUZINDO' ,'ENTREGUE', 'PAGO'])
const setFiltroBusca = (filtro, res) => {
  const query = {}
  if(filtro) {
    if(filtro.status) {
      if(eStatus.has(filtro.status)) {
        query['status'] = filtro.status
      } else {
        return res.status(400).json({errors: [`Status ${filtro.status} não encontrado`]})
      }
    }

    if(filtro.dataDesejada) {
      query['dataDesejada'] = {}
      if (filtro.dataDesejada.start) {
        query['dataDesejada']['$gte'] = filtro.dataDesejada.start
      }
      if(filtro.dataDesejada.end) {
        query['dataDesejada']['$lte'] = filtro.dataDesejada.end
      }
    }

    if(filtro.dataCriacao) {
      query['criadoEm'] = {}
      if (filtro.dataCriacao.start) {
        query['criadoEm']['$gte'] = filtro.dataCriacao.start
      }
      if(filtro.dataCriacao.end) {
        query['criadoEm']['$lte'] = filtro.dataCriacao.end
      }
    }
  }
  return query;
}

const buscar = (query, res, pageNumber = 1, nPerPage = 10) => {
  SolicitacaoProduto.find(query)
    .populate('usuario')
    .populate({
      path: 'produtos',
      populate: {
        path: 'produto'
      }
    }).sort({status: -0, criadoEm: -1})
    .skip( pageNumber > 0 ? ( ( pageNumber - 1 ) * (nPerPage) ) : 0 )
    .limit( nPerPage)
    .exec((err, solicitacoes) => {
    if(err) {
      return res.status(500).json({errors: [err.message]})
    } else {
      SolicitacaoProduto.count(query, (errCount, count) => {
        if(errCount) {
          return res.status(500).json({errors: [errCount.message]})
        } else {
          return res.json({solicitacoes, count})
        }
      })

    }
  })
}

// Buscar - Todas solicitações
SolicitacaoProduto.route('buscarGeral', (req, res, next) => {
  buscar(setFiltroBusca(req.body.filtro, res), res, req.body.pageNumber, req.body.nPerPage)
})

// Alterar status
SolicitacaoProduto.route('alterar-status', (req, res, next) => {
  const solicitacoes = req.body.solicitacoes
  const status = req.body.status
    let novoStatus; // Altera para o próximo status na cadeia
    switch(status) {
      case 'ABERTO':
        novoStatus = 'PRODUZINDO';
        break;
      case 'PRODUZINDO':
        novoStatus = 'ENTREGUE'
        break;
      case 'ENTREGUE':
        novoStatus = 'PAGO'
        break;
      case 'PAGO':
      case undefined:
        return res.status(403)
    }
  SolicitacaoProduto.updateMany({
    _id: { $in: solicitacoes}
  }, {
    $set: {status: novoStatus}
  }, (err, rs) => {
    if(err) {
      return res.status(500).json({errors: [err]})
    } else {
      return res.json(rs)
    }
  })
})

// Buscar - Solicitações usuário
SolicitacaoProduto.route('buscar', (req, res, next) => {
  const usuario = req.decoded._id
  const query = {usuario, ...setFiltroBusca(req.body.filtro, res)};
  buscar(query, res, req.body.pageNumber, req.body.nPerPage)
})

SolicitacaoProduto.route('salvar',  (req, res, next) => {
  const usuario = req.decoded._id
  const produtosSolicitados = req.body.produtos;
  let valorTotal = 0;
  Produto.find({}).then(p => {
        const prodSolValor = produtosSolicitados.map(ps => {
        const prr = p.find(prod => prod._id == ps.produto)
        const valor = prr.valor * ps.quantidade
        valorTotal += valor
        return {
        ...ps,
        valor,
        }
      })
      const sp = new SolicitacaoProduto({
        dataDesejada: req.body.dataDesejada,
        usuario,
        valorTotal
      })
      sp.save((err, solProd) => {
        if(err) {
          return sendErrorsFromDB(res, err)
        } else {
          const prods = prodSolValor.map(it => ({...it, solicitacao: solProd._id}))
          ProdutoSolicitado.insertMany(prods, ((err, prodsSol) => {
            if(err) {
              return sendErrorsFromDB(res, err)
            } else {
              solProd.produtos = prodsSol.map(it => it._id)
              solProd.save((err, solProd2) => {
                if(err) {
                    console.log(err)
                    return res.status(500).json({errors: [err]})
                  } else {
                    return res.json(solProd2)
                  }
              })
            }
          }))
        }
      })

  })
  return res.status(200)
})


module.exports = SolicitacaoProduto
