const express = require('express');
const auth = require('./auth');

module.exports = function(server) {
    /*
    * Rotas protegidas por Token JWT
    */
    const AuthService = require('../api/user/authService');
    const ConviteService = require('../api/usuario_convidado/UsuarioConvidadoService')
    const protectedApi = express.Router();
    server.use('/api', protectedApi);
    protectedApi.use(auth);
    const BillingCycle = require('../api/billingCycle/billingCycleService');
    BillingCycle.register(protectedApi, '/billingCycles');
    const Produto = require('../api/produto/ProdutoService');
    Produto.register(protectedApi, '/produto')
    const SolicitacaoProduto = require('../api/produto_solicitacao/Solicitacao-ProdutoService')
    SolicitacaoProduto.register(protectedApi, '/solicitacao-produto')
    const SolicitacaoProduto2 = require('../api/solicitacao_produto/Solicitacao-ProdutoService2')
    SolicitacaoProduto2.register(protectedApi, '/solicitacao-produto2')
    const ProdutoSolicitado = require('../api/produto_solicitado/Produto-SolicitadoService.js')
    ProdutoSolicitado.register(protectedApi, '/produtos-solicitados')
    protectedApi.get('/user/select', AuthService.usuariosSelect)
    protectedApi.post('/user/buscar', AuthService.userList)
    protectedApi.post('/user/buscarPorId', AuthService.findById)
    protectedApi.post('/user/atualizarUsuario', AuthService.atualizarUsuario)
    protectedApi.post('/user/criarConvite', ConviteService.criarConvite)
    protectedApi.get('/user/usuarioLogado', AuthService.usuarioLogado)
    /*
    * Rotas abertas
    */
    const openApi = express.Router();
    server.use('/oapi', openApi);
    openApi.post('/login', AuthService.login);
    openApi.post('/signup', AuthService.signup);
    openApi.post('/validateToken', AuthService.validateToken)
    openApi.post('/obterConvite', ConviteService.obterConvite)
};
