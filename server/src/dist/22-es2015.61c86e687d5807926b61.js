(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"3ZFV":function(t,e,n){"use strict";n.r(e),n.d(e,"ListaSolicitacaoModule",(function(){return K}));var r=n("ofXK"),o=n("lJxs"),a=n("UXun"),c=n("fXoL"),i=n("nLfN"),s=n("XNiG"),b=n("itXk"),d=n("GyhO"),u=n("HDdC"),l=n("IzEk"),m=n("zP0r"),p=n("Kj3r"),f=n("JX91"),h=n("1G5W"),g=n("8LU1");const w=new Set;let O,S=(()=>{class t{constructor(t){this._platform=t,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):v}matchMedia(t){return this._platform.WEBKIT&&function(t){if(!w.has(t))try{O||(O=document.createElement("style"),O.setAttribute("type","text/css"),document.head.appendChild(O)),O.sheet&&(O.sheet.insertRule(`@media ${t} {.fx-query-test{ }}`,0),w.add(t))}catch(e){console.error(e)}}(t),this._matchMedia(t)}}return t.\u0275fac=function(e){return new(e||t)(c.bc(i.a))},t.\u0275prov=Object(c.Nb)({factory:function(){return new t(Object(c.bc)(i.a))},token:t,providedIn:"root"}),t})();function v(t){return{matches:"all"===t||""===t,media:t,addListener:()=>{},removeListener:()=>{}}}let C=(()=>{class t{constructor(t,e){this._mediaMatcher=t,this._zone=e,this._queries=new Map,this._destroySubject=new s.a}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return D(Object(g.a)(t)).some(t=>this._registerQuery(t).mql.matches)}observe(t){const e=D(Object(g.a)(t)).map(t=>this._registerQuery(t).observable);let n=Object(b.a)(e);return n=Object(d.a)(n.pipe(Object(l.a)(1)),n.pipe(Object(m.a)(1),Object(p.a)(0))),n.pipe(Object(o.a)(t=>{const e={matches:!1,breakpoints:{}};return t.forEach(t=>{e.matches=e.matches||t.matches,e.breakpoints[t.query]=t.matches}),e}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);const e=this._mediaMatcher.matchMedia(t),n={observable:new u.a(t=>{const n=e=>this._zone.run(()=>t.next(e));return e.addListener(n),()=>{e.removeListener(n)}}).pipe(Object(f.a)(e),Object(o.a)(e=>({query:t,matches:e.matches})),Object(h.a)(this._destroySubject)),mql:e};return this._queries.set(t,n),n}}return t.\u0275fac=function(e){return new(e||t)(c.bc(S),c.bc(c.A))},t.\u0275prov=Object(c.Nb)({factory:function(){return new t(Object(c.bc)(S),Object(c.bc)(c.A))},token:t,providedIn:"root"}),t})();function D(t){return t.map(t=>t.split(",")).reduce((t,e)=>t.concat(e)).map(t=>t.trim())}var G=n("mrSG"),j=n("aceb"),E=n("8/IB"),X=n("vI6V"),y=n("wd/R"),W=n("wHSu"),_=n("3Pt+"),M=n("6NWb"),k=n("tyNb");function T(t,e){if(1&t&&(c.Xb(0,"nb-option",27),c.Gc(1),c.Wb()),2&t){const t=e.$implicit;c.pc("value",t),c.Eb(1),c.Hc(t.charAt(0)+t.slice(1).toLowerCase())}}function x(t,e){1&t&&c.Sb(0,"tr",28)}function P(t,e){1&t&&c.Sb(0,"tr",29)}function I(t,e){if(1&t&&(c.Xb(0,"th",30),c.Gc(1," Status/Produto "),c.Wb()),2&t){const t=c.jc();c.pc("nbSortHeader",t.getSortDirection("nome"))}}function H(t,e){if(1&t&&(c.Xb(0,"td",31),c.Gc(1),c.Wb()),2&t){const t=e.$implicit;c.Eb(1),c.Ic(" ",t.data.nome," ")}}function R(t,e){if(1&t&&(c.Xb(0,"th",30),c.Gc(1," Dt. Desejada/Qtd. Solicitada "),c.Wb()),2&t){const t=c.jc();c.pc("nbSortHeader",t.getSortDirection("uq"))}}function q(t,e){if(1&t&&(c.Xb(0,"td",31),c.Gc(1),c.Wb()),2&t){const t=e.$implicit;c.Eb(1),c.Ic(" ",t.data.uq," ")}}function L(t,e){if(1&t&&(c.Xb(0,"th",30),c.Gc(1," Valor "),c.Wb()),2&t){const t=c.jc();c.pc("nbSortHeader",t.getSortDirection("valor"))}}function N(t,e){if(1&t&&(c.Xb(0,"td",31),c.Gc(1),c.Wb()),2&t){const t=e.$implicit;c.Eb(1),c.Ic(" ",t.data.valor," ")}}function Y(t,e){if(1&t&&(c.Xb(0,"th",30),c.Gc(1," Criado em "),c.Wb()),2&t){const t=c.jc();c.pc("nbSortHeader",t.getSortDirection("dataDesejada"))}}function $(t,e){if(1&t&&(c.Xb(0,"td",31),c.Gc(1),c.Wb()),2&t){const t=e.$implicit;c.Eb(1),c.Ic(" ",t.data.criadoEm," ")}}let z=(()=>{class t{constructor(t,e,n){this.dataSourceBuilder=t,this.solicitacaoProdutoService=e,this.fb=n,this.customColumn="nome",this.defaultColumns=[],this.allColumns=["nome","uq","valor","dataDesejada"],this.status=Object.values(X.d),this.sortDirection=j.fb.NONE,this.filtro=this.fb.group({dataCriacao:null,dataDesejada:null,status:null}),this.faSearch=W.c,this.faPlus=W.b}ngOnInit(){return Object(G.a)(this,void 0,void 0,(function*(){const t=y().startOf("month"),e=y().endOf("month");this.filtro.patchValue({status:X.d.ABERTO,dataCriacao:{start:t,end:e},dataDesejada:{start:t,end:e}}),this.solicitacaoProdutoService.buscarSolicitacoes(this.filtro.value).subscribe(t=>this.setData(t))}))}setData(t){this.data=t.map(t=>{const e=t.produtos;delete t.produtos;const n=e.map(t=>({data:{uq:t.quantidade,nome:t.produto.nome,valor:`R$ ${t.valor.toFixed(2)}`}})),r=y(t.dataDesejada).format("DD/MM/YYYY"),o=y(t.criadoEm).format("DD/MM/YYYY");return{data:{nome:t.status.charAt(0)+t.status.slice(1).toLowerCase(),uq:r,valor:`R$ ${t.valorTotal.toFixed(2)}`,criadoEm:o},children:n}}),this.dataSource=this.dataSourceBuilder.create(this.data)}buscar(){this.solicitacaoProdutoService.buscarSolicitacoes(this.filtro.value).subscribe(t=>this.setData(t))}updateSort(t){this.sortColumn=t.column,this.sortDirection=t.direction}getSortDirection(t){return this.sortColumn===t?this.sortDirection:j.fb.NONE}getShowOn(t){return 400+100*t}}return t.\u0275fac=function(e){return new(e||t)(c.Rb(j.vb),c.Rb(E.a),c.Rb(_.c))},t.\u0275cmp=c.Lb({type:t,selectors:[["ngx-lista-solicitacao-desktop"]],decls:51,vars:11,consts:[[3,"formGroup"],[1,"row","form-group"],[1,"form-group","col-md-4"],["for","Nome","required","",1,"label"],["placeholder","Status","formControlName","status","fullWidth",""],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"col-md-4"],[1,"form-control-group"],[1,"label"],["nbInput","","formControlName","dataCriacao",3,"nbDatepicker"],["format","DD/MM/YYYY"],["rangepicker",""],["nbInput","","formControlName","dataDesejada",3,"nbDatepicker"],["dataDesejada",""],["nbButton","","status","basic",2,"padding","6px","margin-right","8px",3,"click"],[2,"margin-right","5px",3,"icon"],["nbButton","","status","primary","routerLink","/pages/solicitacao-produto/solicitar",2,"padding","6px"],[3,"nbTreeGrid","nbSort","sort"],["nbTreeGridHeaderRow","",4,"nbTreeGridHeaderRowDef"],["nbTreeGridRow","",4,"nbTreeGridRowDef","nbTreeGridRowDefColumns"],[3,"nbTreeGridColumnDef"],["nbTreeGridHeaderCell","",3,"nbSortHeader",4,"nbTreeGridHeaderCellDef"],["nbTreeGridCell","",4,"nbTreeGridCellDef"],["nbTreeGridColumnDef","uq"],["nbTreeGridColumnDef","valor"],["nbTreeGridColumnDef","dataDesejada"],[3,"value"],["nbTreeGridHeaderRow",""],["nbTreeGridRow",""],["nbTreeGridHeaderCell","",3,"nbSortHeader"],["nbTreeGridCell",""]],template:function(t,e){if(1&t&&(c.Xb(0,"nb-card"),c.Xb(1,"nb-card-header"),c.Gc(2," Minhas solicita\xe7\xf5es "),c.Wb(),c.Xb(3,"nb-card-body"),c.Xb(4,"form",0),c.Xb(5,"div",1),c.Xb(6,"div",2),c.Xb(7,"label",3),c.Gc(8,"Status"),c.Wb(),c.Xb(9,"nb-select",4),c.Xb(10,"nb-option",5),c.Gc(11,"Todos"),c.Wb(),c.Ec(12,T,2,2,"nb-option",6),c.Wb(),c.Wb(),c.Xb(13,"div",7),c.Xb(14,"div",8),c.Xb(15,"label",9),c.Gc(16,"Data de cria\xe7\xe3o:"),c.Wb(),c.Sb(17,"input",10),c.Sb(18,"nb-rangepicker",11,12),c.Wb(),c.Wb(),c.Xb(20,"div",7),c.Xb(21,"div",8),c.Xb(22,"label",9),c.Gc(23,"Data desejada:"),c.Wb(),c.Sb(24,"input",13),c.Sb(25,"nb-rangepicker",11,14),c.Wb(),c.Wb(),c.Wb(),c.Wb(),c.Wb(),c.Xb(27,"nb-card-footer"),c.Xb(28,"button",15),c.fc("click",(function(){return e.buscar()})),c.Sb(29,"fa-icon",16),c.Gc(30,"buscar "),c.Wb(),c.Xb(31,"button",17),c.Sb(32,"fa-icon",16),c.Gc(33,"solicita\xe7\xe3o "),c.Wb(),c.Wb(),c.Wb(),c.Xb(34,"nb-card"),c.Xb(35,"nb-card-body"),c.Xb(36,"table",18),c.fc("sort",(function(t){return e.updateSort(t)})),c.Ec(37,x,1,0,"tr",19),c.Ec(38,P,1,0,"tr",20),c.Vb(39,21),c.Ec(40,I,2,1,"th",22),c.Ec(41,H,2,1,"td",23),c.Ub(),c.Vb(42,24),c.Ec(43,R,2,1,"th",22),c.Ec(44,q,2,1,"td",23),c.Ub(),c.Vb(45,25),c.Ec(46,L,2,1,"th",22),c.Ec(47,N,2,1,"td",23),c.Ub(),c.Vb(48,26),c.Ec(49,Y,2,1,"th",22),c.Ec(50,$,2,1,"td",23),c.Ub(),c.Wb(),c.Wb(),c.Wb()),2&t){const t=c.wc(19),n=c.wc(26);c.Eb(4),c.pc("formGroup",e.filtro),c.Eb(8),c.pc("ngForOf",e.status),c.Eb(5),c.pc("nbDatepicker",t),c.Eb(7),c.pc("nbDatepicker",n),c.Eb(5),c.pc("icon",e.faSearch),c.Eb(3),c.pc("icon",e.faPlus),c.Eb(4),c.pc("nbTreeGrid",e.dataSource)("nbSort",e.dataSource),c.Eb(1),c.pc("nbTreeGridHeaderRowDef",e.allColumns),c.Eb(1),c.pc("nbTreeGridRowDefColumns",e.allColumns),c.Eb(1),c.pc("nbTreeGridColumnDef",e.customColumn)}},directives:[j.o,j.q,j.n,_.z,_.o,_.g,j.ab,_.n,_.f,j.X,r.l,j.H,_.b,j.z,j.Y,j.p,j.l,M.a,k.d,j.ub,j.gb,j.zb,j.Cb,j.tb,j.wb,j.rb,j.yb,j.Bb,j.xb,j.hb,j.sb],styles:["button[nbTreeGridRowToggle][_ngcontent-%COMP%]{background:transparent;border:none;padding:0}.search-label[_ngcontent-%COMP%]{display:block}.search-input[_ngcontent-%COMP%]{margin-bottom:1rem}.nb-column-name[_ngcontent-%COMP%]{width:100%}@media screen and (min-width:400px){.nb-column-name[_ngcontent-%COMP%], .nb-column-size[_ngcontent-%COMP%]{width:50%}}@media screen and (min-width:500px){.nb-column-kind[_ngcontent-%COMP%], .nb-column-name[_ngcontent-%COMP%], .nb-column-size[_ngcontent-%COMP%]{width:33.333%}}@media screen and (min-width:600px){.nb-column-name[_ngcontent-%COMP%]{width:31%}.nb-column-items[_ngcontent-%COMP%], .nb-column-kind[_ngcontent-%COMP%], .nb-column-size[_ngcontent-%COMP%]{width:23%}}"]}),t})(),B=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Lb({type:t,selectors:[["ngx-lista-solicitacao-mobile"]],decls:2,vars:0,template:function(t,e){1&t&&(c.Xb(0,"p"),c.Gc(1," lista-solicitacao-mobile works!\n"),c.Wb())},styles:[""]}),t})();function A(t,e){1&t&&c.Sb(0,"ngx-lista-solicitacao-desktop")}function V(t,e){1&t&&c.Sb(0,"ngx-lista-solicitacao-mobile")}let F=(()=>{class t{constructor(t){this.breakpointObserver=t,this.isHandset$=this.breakpointObserver.observe("(max-width: 599.99px) and (orientation: portrait), (max-width: 959.99px) and (orientation: landscape)").pipe(Object(o.a)(t=>t.matches),Object(a.a)())}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(c.Rb(C))},t.\u0275cmp=c.Lb({type:t,selectors:[["ngx-lista-solicitacao"]],decls:4,vars:4,consts:[[4,"ngIf","ngIfElse"],["mobileList",""]],template:function(t,e){if(1&t&&(c.Ec(0,A,1,0,"ngx-lista-solicitacao-desktop",0),c.kc(1,"async"),c.Ec(2,V,1,0,"ng-template",null,1,c.Fc)),2&t){const t=c.wc(3);c.pc("ngIf",!1===c.lc(1,2,e.isHandset$))("ngIfElse",t)}},directives:[r.m,z,B],pipes:[r.b],styles:[""]}),t})(),U=(()=>{class t{}return t.\u0275mod=c.Pb({type:t}),t.\u0275inj=c.Ob({factory:function(e){return new(e||t)},imports:[[r.c,j.S,j.r]]}),t})();var J=n("eW8b");let Q=(()=>{class t{}return t.\u0275mod=c.Pb({type:t}),t.\u0275inj=c.Ob({factory:function(e){return new(e||t)},imports:[[r.c,j.Ab,j.r,_.u,_.h,j.m,j.I,k.g,j.A,J.a,M.b,j.bb]]}),t})(),K=(()=>{class t{}return t.\u0275mod=c.Pb({type:t}),t.\u0275inj=c.Ob({factory:function(e){return new(e||t)},imports:[[r.c,U,Q,k.g.forChild([{path:"",component:F}])]]}),t})()}}]);