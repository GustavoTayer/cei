const SolicitacaoProduto = require('./solicitacao-produto2')
const ProdutoSolicitado = require('../produto_solicitado/produto-solicitado')
const Produto = require('../produto/produto')
const errorHandler = require('../common/errorHandler')
SolicitacaoProduto.methods(['get', 'post', 'put'])
SolicitacaoProduto.updateOptions({new: true, runValidators: true})
SolicitacaoProduto.after('post', errorHandler).after('put', errorHandler)
const eStatus = new Set(['ABERTO', 'PRODUZINDO' ,'ENTREGUE', 'PAGO', 'SLC_CANCELAMENTO', 'CANCELADO'])
const EmailService = require('../../config/emailService');
const User = require('../user/user')
const env = require('../../.env');
const moment = require('moment')
const setFiltroBusca = (filtro, res) => {
  const query = {}
  if(filtro) {
    if(filtro.status) {
      if(eStatus.has(filtro.status)) {
        query['status'] = filtro.status
      } else {
        console.warn(new Date(), `Status ${filtro.status} não encontrado`)
        // return res.status(200).json({errors: [`Status ${filtro.status} não encontrado`]})
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
      SolicitacaoProduto.countDocuments(query, (errCount, count) => {
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
 return buscar(setFiltroBusca(req.body.filtro, res), res, req.body.pageNumber, req.body.nPerPage)
})

SolicitacaoProduto.route('solicitarCancelamento', (req, res, next) => {
  const id = req.body.solicitacaoId
  const usuario = req.decoded._id
  User.findById(usuario, (err, usr) => {
    SolicitacaoProduto.findById(id)
    .populate({
      path: 'produtos',
      populate: {
        path: 'produto'
      }
    }).exec((err, sol) => {
      if(err) {
        print(err)
      } else {
        if(sol.status !== 'ABERTO') {
          return res.status(403).json({errors: ['Somente é possivel cancelar solicitações em aberto.']})
        }
        const dataDesejada = moment(sol.dataDesejada).format('DD/MM/YYYY')
        const dataDesejadaQuery = moment(sol.dataDesejada).format('YYYY-MM-DD')
        const href = `${env.url}/pages/admin/solicitacoes?status=${'SLC_CANCELAMENTO'}&dtDjEnd=${dataDesejadaQuery}&dtDjStart=${dataDesejadaQuery}&usuario=${usuario}`
        const produtos = sol.produtos.map(element => `<li>${element.produto.nome} - ${element.quantidade}</li>`);
        sol.status = 'SLC_CANCELAMENTO'
        sol.save()
        EmailService.enviarEmail({
          subject: `${usr.name} solicitou um cancelamento - Dt. Desejada: ${dataDesejada}`,
          html: `<p><b>Data Deseja:</b> ${dataDesejada}</p>
          <p><b>produtos:</b>
          <ul>
            ${produtos.toString().replace(/,/g, '')}
          </ul></p>
          <p>Acesse a solicitação <a href="${href}">clicando aqui</a></p>`
        })
        return res.json(sol)
      }
    })
  })
})

// Alterar status
SolicitacaoProduto.route('alterar-status', (req, res, next) => {
  const solicitacoes = req.body.solicitacoes
  const cancelamento = req.body.cancelamento
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
      case 'SLC_CANCELAMENTO':
        if(cancelamento.cancelado) {
          novoStatus = 'CANCELADO'
          EmailService.enviarEmail({
            subject: `Sua solicitação de cancelamento foi aprovada`,
            html: `
              <p>Sua solicitação de cancelamento foi aprovada e seu status já foi aprovado</p>
              <p>Veja sua solicitação <a>clicando aqui</a></p>
            `
          })
        } else {
          novoStatus = 'ABERTO'
          EmailService.enviarEmail({
            subject: `Sua solicitação de cancelamento não foi aprovada`,
            html: `
              <p>Sua solicitação de cancelamento não foi aprovada pelo seguinte motivo: </p>
              <p>${cancelamento.justificativa}</p>
            `
          })
        }
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
  // const query = {usuario, ...setFiltroBusca(req.body.filtro, res)};
  buscar({usuario, ...setFiltroBusca(req.body.filtro, res)}, res, req.body.pageNumber, req.body.nPerPage)
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
