(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{dgmN:function(t,e,n){"use strict";n.r(e),n.d(e,"PagesModule",(function(){return h}));var o=n("aceb"),a=n("vTDv"),i=n("fXoL");let r=(()=>{class t{}return t.\u0275mod=i.Qb({type:t}),t.\u0275inj=i.Pb({factory:function(e){return new(e||t)},imports:[[o.y,a.a]]}),t})();var s=n("tyNb"),l=n("MAky"),c=n("tk/3"),d=n("mgFL");const u=[{path:"",component:(()=>{class t{constructor(t){this.http=t}ngOnInit(){this.menu=[{title:"Dashboard",icon:"text-outline",link:"/pages/dashboard",home:!0},{title:"Partilha Solid\xe1ria",icon:"gift-outline",link:"/pages/dashboard"},{title:"Minhas solicita\xe7\xf5es",icon:"cube-outline",link:"/pages/solicitacao-produto"},{title:"Escalas",icon:"briefcase-outline",link:"/pages/dashboard"},{title:"Calend\xe1rio",icon:"calendar-outline",link:"/pages/dashboard"}],this.http.get(`${l.b}/user/menuAdmin`).subscribe(t=>{this.menu.push(t.menu)})}}return t.\u0275fac=function(e){return new(e||t)(i.Sb(c.b))},t.\u0275cmp=i.Mb({type:t,selectors:[["ngx-pages"]],decls:3,vars:1,consts:[[3,"items"]],template:function(t,e){1&t&&(i.Yb(0,"ngx-one-column-layout"),i.Tb(1,"nb-menu",0),i.Tb(2,"router-outlet"),i.Xb()),2&t&&(i.Fb(1),i.qc("items",e.menu))},directives:[d.a,o.cb,s.h],styles:[".nb-theme-default   [_nghost-%COMP%]     router-outlet+*{display:block;-webkit-animation:fade 1s;animation:fade 1s}@-webkit-keyframes fade{0%{opacity:0}to{opacity:1}}.nb-theme-cnv   [_nghost-%COMP%]     router-outlet+*, .nb-theme-corporate   [_nghost-%COMP%]     router-outlet+*, .nb-theme-cosmic   [_nghost-%COMP%]     router-outlet+*, .nb-theme-dark   [_nghost-%COMP%]     router-outlet+*{display:block;-webkit-animation:fade 1s;animation:fade 1s}@keyframes fade{0%{opacity:0}to{opacity:1}}"]}),t})(),children:[{path:"dashboard",component:(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Mb({type:t,selectors:[["ngx-dashboard"]],decls:4,vars:0,consts:[[1,"row"]],template:function(t,e){1&t&&(i.Yb(0,"div",0),i.Yb(1,"nb-card"),i.Yb(2,"nb-card-body"),i.Ic(3,"Tela em desenvolvimento."),i.Xb(),i.Xb(),i.Xb())},directives:[o.u,o.t],encapsulation:2}),t})()},{path:"403",loadChildren:()=>n.e(24).then(n.bind(null,"8XfP")).then(t=>t.Erro403Module)},{path:"solicitacao-produto",loadChildren:()=>n.e(27).then(n.bind(null,"wGm/")).then(t=>t.SolicitacaoProdutoModule)},{path:"perfil",loadChildren:()=>Promise.all([n.e(4),n.e(26)]).then(n.bind(null,"wWZX")).then(t=>t.PerfilModule)},{path:"admin",loadChildren:()=>n.e(16).then(n.bind(null,"GCp2")).then(t=>t.AdminModule)},{path:"",redirectTo:"dashboard",pathMatch:"full"}]}];let b=(()=>{class t{}return t.\u0275mod=i.Qb({type:t}),t.\u0275inj=i.Pb({factory:function(e){return new(e||t)},imports:[[s.g.forChild(u)],s.g]}),t})(),h=(()=>{class t{}return t.\u0275mod=i.Qb({type:t}),t.\u0275inj=i.Pb({factory:function(e){return new(e||t)},imports:[[b,a.a,o.db,r]]}),t})()}}]);