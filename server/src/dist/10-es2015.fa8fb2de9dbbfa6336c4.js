(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{HYE6:function(o,i,n){"use strict";n.r(i),n.d(i,"UsuarioConvidarModule",(function(){return f}));var t=n("ofXK"),r=n("tyNb"),c=n("3Pt+"),a=n("vI6V"),e=n("v8Ly"),s=n("fXoL"),b=n("aceb");function u(o,i){if(1&o&&(s.Yb(0,"nb-option",19),s.Ic(1),s.Xb()),2&o){const o=i.$implicit;s.qc("value",o.k),s.Fb(1),s.Jc(o.v)}}function d(o,i){if(1&o){const o=s.Zb();s.Yb(0,"nb-list-item"),s.Yb(1,"form",2),s.Yb(2,"div",12),s.Yb(3,"div",13),s.Tb(4,"input",14),s.Xb(),s.Yb(5,"div",13),s.Yb(6,"nb-select",15),s.Gc(7,u,2,2,"nb-option",16),s.Xb(),s.Xb(),s.Yb(8,"div",13),s.Yb(9,"button",17),s.gc("click",(function(){s.Ac(o);const n=i.$implicit;return s.kc().remove(n)})),s.Tb(10,"nb-icon",18),s.Xb(),s.Xb(),s.Xb(),s.Xb(),s.Xb()}if(2&o){const o=i.$implicit,n=s.kc();s.Fb(1),s.qc("formGroup",o),s.Fb(6),s.qc("ngForOf",n.comunidades)}}const l=[{path:"",component:(()=>{class o{constructor(o,i){this.fb=o,this.usuarioService=i,this.form=this.fb.group({email:[null,c.x.email]}),this.comunidades=Object.keys(a.a).map(o=>({k:o,v:a.a[o]})),this.hierarquia=Object.keys(a.c).map(o=>({k:o,v:a.c[o]})),this.convidados=[]}ngOnInit(){}remove(o){this.convidados=this.convidados.filter(i=>i.value.email!==o.value.email)}add(){if(this.form.valid){const o=this.fb.group({email:null,comunidade:null});o.patchValue({email:this.form.value.email,comunidade:"PROPEDEUTICO"}),this.convidados.push(o),this.form.patchValue({email:null})}}enviarConvites(){const o=this.convidados.map(o=>({email:o.value.email,comunidade:o.value.comunidade}));this.usuarioService.criarConvite(o).subscribe(o=>{this.convidados=[]})}verificaValidacaoCampo(o,i){return this.form.controls[o].dirty&&(i?this.form.controls[o].errors&&this.form.controls[o].errors[i]:this.form.controls[o].invalid)}}return o.\u0275fac=function(i){return new(i||o)(s.Sb(c.c),s.Sb(e.a))},o.\u0275cmp=s.Mb({type:o,selectors:[["ngx-usuario-convidar"]],decls:24,vars:4,consts:[["nbButton","","size","small","ghost","","routerLink","/pages/admin/usuarios"],["icon","arrow-left"],[3,"formGroup"],[1,"row"],[1,"col-10"],["type","email","nbInput","","placeholder","Email","fullWidth","","id","Email","formControlName","email",3,"status"],[1,"col-2"],["type","submit","nbButton","","hero","","status","danger",3,"click"],["icon","plus"],["nbButton","","status","primary",3,"disabled","click"],["icon","email"],[4,"ngFor","ngForOf"],[2,"display","flex","justify-content","space-around"],[1,"form-group","col"],["nbInput","","formControlName","email","fullWidth","",2,"min-width","200px"],["placeholder","Comunidade","fullWidth","","formControlName","comunidade"],[3,"value",4,"ngFor","ngForOf"],["nbButton","","hero","","size","small","status","danger",3,"click"],["icon","minus"],[3,"value"]],template:function(o,i){1&o&&(s.Yb(0,"nb-card"),s.Yb(1,"nb-card-header"),s.Yb(2,"button",0),s.Tb(3,"nb-icon",1),s.Xb(),s.Ic(4," Convidar Usu\xe1rios"),s.Xb(),s.Yb(5,"nb-card-body"),s.Yb(6,"form",2),s.Yb(7,"div",3),s.Yb(8,"div",4),s.Tb(9,"input",5),s.Xb(),s.Yb(10,"div",6),s.Yb(11,"button",7),s.gc("click",(function(){return i.add()})),s.Tb(12,"nb-icon",8),s.Xb(),s.Xb(),s.Xb(),s.Xb(),s.Xb(),s.Yb(13,"nb-card-footer"),s.Yb(14,"div",6),s.Yb(15,"button",9),s.gc("click",(function(){return i.enviarConvites()})),s.Tb(16,"nb-icon",10),s.Ic(17," enviar convites"),s.Xb(),s.Xb(),s.Xb(),s.Xb(),s.Yb(18,"nb-card"),s.Yb(19,"nb-card-header"),s.Ic(20," Lista de convidados "),s.Xb(),s.Yb(21,"nb-card-body"),s.Yb(22,"nb-list"),s.Gc(23,d,11,2,"nb-list-item",11),s.Xb(),s.Xb(),s.Xb()),2&o&&(s.Fb(6),s.qc("formGroup",i.form),s.Fb(3),s.qc("status",i.verificaValidacaoCampo("email")?"danger":""),s.Fb(6),s.qc("disabled",!i.convidados||!i.convidados.length),s.Fb(8),s.qc("ngForOf",i.convidados))},directives:[b.p,b.s,b.l,r.d,b.H,b.o,c.z,c.o,c.g,b.K,c.b,c.n,c.f,b.q,b.T,t.l,b.U,b.db,b.ab],styles:[""]}),o})()}];let m=(()=>{class o{}return o.\u0275mod=s.Qb({type:o}),o.\u0275inj=s.Pb({factory:function(i){return new(i||o)},imports:[[r.g.forChild(l)],r.g]}),o})(),f=(()=>{class o{}return o.\u0275mod=s.Qb({type:o}),o.\u0275inj=s.Pb({factory:function(i){return new(i||o)},imports:[[t.c,b.t,b.L,b.V,b.eb,b.m,b.L,b.J,c.u,c.h,m]]}),o})()},vI6V:function(o,i,n){"use strict";n.d(i,"d",(function(){return t})),n.d(i,"a",(function(){return r})),n.d(i,"c",(function(){return c})),n.d(i,"b",(function(){return a}));var t=function(o){return o.ABERTO="Aberto",o.PRODUZINDO="Produzindo",o.ENTREGUE="Entregue",o.PAGO="Pago",o.CANCELADO="Cancelado",o.SLC_CANCELAMENTO="Slc. Canc.",o}({}),r=function(o){return o.PROPEDEUTICO="Proped\xeautico",o.FILOSOFIA="Filosofia",o.TEOLOGIA="Teologia",o.TIROCINIO="Tirocinio",o}({}),c=function(o){return o.SEMINARISTA="Seminarista",o.FORMADOR="Formador",o.REITOR="Reitor",o}({}),a=function(o){return o.COMPRAS="Compras",o.REDES_SOCIAIS="Redes Sociais",o.JARDINAGEM="Jardinagem",o.PARTILHA_SOLIDARIA="Partilha solid\xe1ria",o.PRODUTOS="Produtos",o.OUTROS="Outros",o}({})}}]);