(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{t3QZ:function(o,t,r){"use strict";r.r(t),r.d(t,"ListaProdutosModule",(function(){return p}));var n=r("ofXK"),i=r("LC4e"),c=r("fXoL"),b=r("aceb"),e=r("tyNb");const d=function(o){return["/pages/admin/produto/editar",o]};function s(o,t){if(1&o&&(c.Xb(0,"nb-list-item",5),c.Xb(1,"div",6),c.Gc(2),c.Wb(),c.Xb(3,"div",6),c.Gc(4),c.Wb(),c.Xb(5,"div",7),c.Gc(6),c.Wb(),c.Xb(7,"div",7),c.Sb(8,"nb-icon",8),c.Wb(),c.Wb()),2&o){const o=t.$implicit;c.pc("routerLink",c.sc(4,d,o._id)),c.Eb(2),c.Ic(" ",o.nome," "),c.Eb(2),c.Ic(" ",o.descricao," "),c.Eb(2),c.Ic(" R$ ",o.valor," ")}}let u=(()=>{class o{constructor(o){this.produtoService=o}ngOnInit(){this.produtoService.buscarProdutos().subscribe(o=>this.produtos=o)}}return o.\u0275fac=function(t){return new(t||o)(c.Rb(i.a))},o.\u0275cmp=c.Lb({type:o,selectors:[["ngx-lista-produtos"]],decls:11,vars:1,consts:[[1,"row"],[1,"col-md-8"],[1,"col-md-4"],["nbButton","","routerLink","/pages/admin/produto/editar/novo",2,"padding","6px"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"],[1,"col-md-4","form-group"],[1,"col-md-2","form-group"],["icon","edit-outline"]],template:function(o,t){1&o&&(c.Xb(0,"nb-card"),c.Xb(1,"nb-card-header"),c.Xb(2,"div",0),c.Xb(3,"div",1),c.Gc(4," Lista de produtos "),c.Wb(),c.Xb(5,"div",2),c.Xb(6,"button",3),c.Gc(7," Novo produto "),c.Wb(),c.Wb(),c.Wb(),c.Wb(),c.Xb(8,"nb-card-body"),c.Xb(9,"nb-list"),c.Ec(10,s,9,6,"nb-list-item",4),c.Wb(),c.Wb(),c.Wb()),2&o&&(c.Eb(10),c.pc("ngForOf",t.produtos))},directives:[b.p,b.s,b.l,e.d,b.o,b.T,n.l,b.U,b.H],styles:[""]}),o})();var a=r("tR1z");let p=(()=>{class o{}return o.\u0275mod=c.Pb({type:o}),o.\u0275inj=c.Ob({factory:function(t){return new(t||o)},imports:[[n.c,b.t,b.V,a.a,b.J,b.m,e.g.forChild([{path:"",component:u}])]]}),o})()}}]);