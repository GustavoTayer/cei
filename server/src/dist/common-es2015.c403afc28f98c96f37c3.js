(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8/IB":function(t,r,e){"use strict";e.d(r,"a",(function(){return n}));var o=e("MAky"),s=e("lJxs"),i=e("JIr8"),u=e("fXoL"),c=e("tk/3"),a=e("aceb");let n=(()=>{class t{constructor(t,r){this.http=t,this.toastrService=r,this.url=`${o.b}/solicitacao-produto2`,this.urlProduto=`${o.b}/produtos-solicitados`}criarSolicitacao(t){return this.http.post(`${this.url}/salvar`,t)}buscarSolicitacoes(t,r,e){return this.http.post(`${this.url}/buscar`,{filtro:t,pageNumber:r,nPerPage:e}).pipe(Object(s.a)(t=>t),Object(i.a)(t=>(this.toastrService.danger(t.error.errors,"ERRO!"),[])))}countProdutos(t){return this.http.post(`${this.urlProduto}/count`,{filtro:t})}buscarSolicitacoesGeral(t,r,e){return this.http.post(`${this.url}/buscarGeral`,{filtro:t,pageNumber:r,nPerPage:e})}alterarStatus(t,r,e){return this.http.post(`${this.url}/alterar-status`,{solicitacoes:t,status:r,cancelamento:e})}usuariosSelect(){return this.http.get(`${o.b}/user/select`)}cancelar(t){return this.http.post(`${this.url}/solicitarCancelamento`,{solicitacaoId:t})}}return t.\u0275fac=function(r){return new(r||t)(u.bc(c.b),u.bc(a.pb))},t.\u0275prov=u.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},LC4e:function(t,r,e){"use strict";e.d(r,"a",(function(){return u}));var o=e("MAky"),s=e("fXoL"),i=e("tk/3");let u=(()=>{class t{constructor(t){this.http=t,this.produtoUrl=`${o.b}/produto`}buscarProdutos(){return this.http.get(`${this.produtoUrl}/buscar`)}buscarProdutoPorId(t){return this.http.get(`${this.produtoUrl}/${t}`)}criarProduto(t){return this.http.post(this.produtoUrl,t)}atualizarProduto(t,r){return this.http.put(`${this.produtoUrl}/${r}`,t)}validarTela(){return this.http.get(`${this.produtoUrl}/validarTela`)}}return t.\u0275fac=function(r){return new(r||t)(s.bc(i.b))},t.\u0275prov=s.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},mrSG:function(t,r,e){"use strict";function o(t,r,e,o){var s,i=arguments.length,u=i<3?r:null===o?o=Object.getOwnPropertyDescriptor(r,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,r,e,o);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(u=(i<3?s(u):i>3?s(r,e,u):s(r,e))||u);return i>3&&u&&Object.defineProperty(r,e,u),u}function s(t,r,e,o){return new(e||(e=Promise))((function(s,i){function u(t){try{a(o.next(t))}catch(r){i(r)}}function c(t){try{a(o.throw(t))}catch(r){i(r)}}function a(t){var r;t.done?s(t.value):(r=t.value,r instanceof e?r:new e((function(t){t(r)}))).then(u,c)}a((o=o.apply(t,r||[])).next())}))}e.d(r,"b",(function(){return o})),e.d(r,"a",(function(){return s}))},v8Ly:function(t,r,e){"use strict";e.d(r,"a",(function(){return n}));var o=e("MAky"),s=e("lJxs"),i=e("JIr8"),u=e("fXoL"),c=e("tk/3"),a=e("aceb");let n=(()=>{class t{constructor(t,r){this.http=t,this.toastrService=r,this.url=`${o.b}/user`}usuarioLogado(){return this.http.get(`${this.url}/usuarioLogado`)}select(){return this.http.get(`${this.url}/select`)}buscar(t){return this.http.post(`${this.url}/buscar`,{filtro:t})}buscarPorId(t){return this.http.post(`${this.url}/buscarPorId`,{id:t})}criarConvite(t){return this.http.post(`${this.url}/criarConvite`,{convites:t}).pipe(Object(s.a)(t=>(this.toastrService.success("","Convites enviados com sucesso"),t)),Object(i.a)(t=>(this.toastrService.danger(t.error.errors,"Erro!"),[])))}atualizarUsuario(t){return this.http.post(`${this.url}/atualizarUsuario`,t).pipe(Object(s.a)(t=>(this.toastrService.success("","Usu\xe1rio atualizado com sucesso"),!0)),Object(i.a)(t=>(this.toastrService.danger(t.message,"Erro!"),"")))}menuAdmin(){return this.http.get(`${this.url}/menuAdmin`)}}return t.\u0275fac=function(r){return new(r||t)(u.bc(c.b),u.bc(a.pb))},t.\u0275prov=u.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);