function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{dgmN:function(e,t,n){"use strict";n.r(t),n.d(t,"PagesModule",(function(){return C}));var o,i,a,r,c,l=n("aceb"),s=n("vTDv"),u=n("fXoL"),d=((o=function e(){_classCallCheck(this,e)}).\u0275mod=u.Qb({type:o}),o.\u0275inj=u.Pb({factory:function(e){return new(e||o)},imports:[[l.y,s.a]]}),o),h=n("tyNb"),b=n("MAky"),f=n("tk/3"),p=n("mgFL"),m=[{path:"",component:(a=function(){function e(t){_classCallCheck(this,e),this.http=t}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.menu=[{title:"Dashboard",icon:"text-outline",link:"/pages/dashboard",home:!0},{title:"Partilha Solid\xe1ria",icon:"gift-outline",link:"/pages/dashboard"},{title:"Minhas solicita\xe7\xf5es",icon:"cube-outline",link:"/pages/solicitacao-produto"},{title:"Escalas",icon:"briefcase-outline",link:"/pages/dashboard"},{title:"Calend\xe1rio",icon:"calendar-outline",link:"/pages/dashboard"}],this.http.get("".concat(b.b,"/user/menuAdmin")).subscribe((function(t){e.menu.push(t.menu)}))}}]),e}(),a.\u0275fac=function(e){return new(e||a)(u.Sb(f.b))},a.\u0275cmp=u.Mb({type:a,selectors:[["ngx-pages"]],decls:3,vars:1,consts:[[3,"items"]],template:function(e,t){1&e&&(u.Yb(0,"ngx-one-column-layout"),u.Tb(1,"nb-menu",0),u.Tb(2,"router-outlet"),u.Xb()),2&e&&(u.Fb(1),u.qc("items",t.menu))},directives:[p.a,l.cb,h.h],styles:[".nb-theme-default   [_nghost-%COMP%]     router-outlet+*{display:block;-webkit-animation:fade 1s;animation:fade 1s}@-webkit-keyframes fade{0%{opacity:0}to{opacity:1}}.nb-theme-cnv   [_nghost-%COMP%]     router-outlet+*, .nb-theme-corporate   [_nghost-%COMP%]     router-outlet+*, .nb-theme-cosmic   [_nghost-%COMP%]     router-outlet+*, .nb-theme-dark   [_nghost-%COMP%]     router-outlet+*{display:block;-webkit-animation:fade 1s;animation:fade 1s}@keyframes fade{0%{opacity:0}to{opacity:1}}"]}),a),children:[{path:"dashboard",component:(i=function e(){_classCallCheck(this,e)},i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=u.Mb({type:i,selectors:[["ngx-dashboard"]],decls:4,vars:0,consts:[[1,"row"]],template:function(e,t){1&e&&(u.Yb(0,"div",0),u.Yb(1,"nb-card"),u.Yb(2,"nb-card-body"),u.Ic(3,"Tela em desenvolvimento."),u.Xb(),u.Xb(),u.Xb())},directives:[l.u,l.t],encapsulation:2}),i)},{path:"403",loadChildren:function(){return n.e(24).then(n.bind(null,"8XfP")).then((function(e){return e.Erro403Module}))}},{path:"solicitacao-produto",loadChildren:function(){return n.e(27).then(n.bind(null,"wGm/")).then((function(e){return e.SolicitacaoProdutoModule}))}},{path:"perfil",loadChildren:function(){return Promise.all([n.e(4),n.e(26)]).then(n.bind(null,"wWZX")).then((function(e){return e.PerfilModule}))}},{path:"admin",loadChildren:function(){return n.e(16).then(n.bind(null,"GCp2")).then((function(e){return e.AdminModule}))}},{path:"",redirectTo:"dashboard",pathMatch:"full"}]}],y=((c=function e(){_classCallCheck(this,e)}).\u0275mod=u.Qb({type:c}),c.\u0275inj=u.Pb({factory:function(e){return new(e||c)},imports:[[h.g.forChild(m)],h.g]}),c),C=((r=function e(){_classCallCheck(this,e)}).\u0275mod=u.Qb({type:r}),r.\u0275inj=u.Pb({factory:function(e){return new(e||r)},imports:[[y,s.a,l.db,d]]}),r)}}]);