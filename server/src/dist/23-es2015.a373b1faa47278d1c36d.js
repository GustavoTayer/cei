(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{hsNc:function(a,i,o){"use strict";o.r(i),o.d(i,"UsuarioEditarModule",(function(){return q}));var e=o("ofXK"),r=o("tyNb"),t=o("v8Ly"),b=o("3Pt+"),n=o("vI6V"),c=o("wd/R"),l=o("fXoL"),s=o("aceb");function d(a,i){1&a&&(l.Yb(0,"p",26),l.Ic(1," Campo obrigat\xf3rio! "),l.Xb())}function u(a,i){1&a&&(l.Yb(0,"p",26),l.Ic(1," Campo obrigat\xf3rio! "),l.Xb())}function p(a,i){1&a&&(l.Yb(0,"p",26),l.Ic(1," Favor digitar uma data v\xe1lida! "),l.Xb())}function m(a,i){if(1&a&&(l.Yb(0,"nb-option",27),l.Ic(1),l.Xb()),2&a){const a=i.$implicit;l.qc("value",a.k),l.Fb(1),l.Jc(a.v)}}function f(a,i){if(1&a&&(l.Yb(0,"nb-option",27),l.Ic(1),l.Xb()),2&a){const a=i.$implicit;l.qc("value",a.k),l.Fb(1),l.Jc(a.v)}}function v(a,i){if(1&a&&(l.Yb(0,"nb-option",27),l.Ic(1),l.Xb()),2&a){const a=i.$implicit;l.qc("value",a.k),l.Fb(1),l.Jc(a.v)}}const h=[{path:":id",component:(()=>{class a{constructor(a,i,o,e){this.route=a,this.router=i,this.fb=o,this.usuarioService=e,this.dados=this.fb.group({ativo:null,comunidade:null,email:null,equipe:null,hierarquia:null,name:[null,b.x.required],bd:[null,this.validarDataAniversario],coordenaEquipe:null}),this.equipes=Object.keys(n.b).map(a=>({k:a,v:n.b[a]})),this.comunidades=Object.keys(n.a).map(a=>({k:a,v:n.a[a]})),this.hierarquia=Object.keys(n.c).map(a=>({k:a,v:n.c[a]})),this.route.params.subscribe(a=>{this.id=a.id,"novo"!==this.id&&this.usuarioService.buscarPorId(this.id).subscribe(a=>{this.dados.patchValue(Object.assign(Object.assign({},a),{bd:a.bd&&c(a.bd)}))})})}ngOnInit(){this.dados.controls.email.disable()}validarDataAniversario(a){return a.value&&c().subtract(10,"years")<=a.value?{dataInvalida:!0}:null}salvar(){this.dados.valid&&this.usuarioService.atualizarUsuario(Object.assign({_id:this.id},this.dados.value)).subscribe(a=>{a&&this.router.navigate(["/pages/admin/usuarios"])})}verificaValidacaoCampo(a,i){return this.dados.controls[a].dirty&&(i?this.dados.controls[a].errors&&this.dados.controls[a].errors[i]:this.dados.controls[a].invalid)}}return a.\u0275fac=function(i){return new(i||a)(l.Sb(r.a),l.Sb(r.c),l.Sb(b.c),l.Sb(t.a))},a.\u0275cmp=l.Mb({type:a,selectors:[["ngx-usuario-editar"]],decls:51,vars:11,consts:[[3,"formGroup"],["nbButton","","size","small","ghost","","routerLink","/pages/admin/usuarios"],["icon","arrow-left"],[1,"row","form-group"],[1,"form-group","col-md-4"],["for","Nome","required","",1,"label"],["type","text","nbInput","","placeholder","Nome","fullWidth","","id","nome","formControlName","name",3,"status"],["class","caption status-danger",4,"ngIf"],["for","Email","required","",1,"label"],["type","email","nbInput","","placeholder","Email","fullWidth","","id","Email","formControlName","email",3,"status"],["labelPosition","start","formControlName","ativo","id","ativo"],[1,"row"],[1,"label"],["fullWidth","","nbInput","","formControlName","bd",3,"status","nbDatepicker"],["format","DD/MM/YYYY"],["dp",""],["for","equipe","required","",1,"label"],["placeholder","Equipe","fullWidth","","formControlName","equipe"],[3,"value",4,"ngFor","ngForOf"],["labelPosition","start","formControlName","coordenaEquipe"],[1,"form-group","row"],["for","hierarquia","required","",1,"label"],["placeholder","Posi\xe7\xe3o","fullWidth","","formControlName","hierarquia"],["for","comunidade","required","",1,"label"],["placeholder","Comunidade","fullWidth","","formControlName","comunidade"],["nbButton","",3,"click"],[1,"caption","status-danger"],[3,"value"]],template:function(a,i){if(1&a&&(l.Yb(0,"form",0),l.Yb(1,"nb-card"),l.Yb(2,"nb-card-header"),l.Yb(3,"button",1),l.Tb(4,"nb-icon",2),l.Xb(),l.Ic(5," Editar usu\xe1rio "),l.Xb(),l.Yb(6,"nb-card-body"),l.Yb(7,"div",3),l.Yb(8,"div",4),l.Yb(9,"label",5),l.Ic(10,"Nome "),l.Xb(),l.Tb(11,"input",6),l.Gc(12,d,2,0,"p",7),l.Xb(),l.Yb(13,"div",4),l.Yb(14,"label",8),l.Ic(15,"Email "),l.Xb(),l.Tb(16,"input",9),l.Gc(17,u,2,0,"p",7),l.Xb(),l.Yb(18,"div",4),l.Yb(19,"nb-toggle",10),l.Ic(20,"Ativo"),l.Xb(),l.Xb(),l.Xb(),l.Yb(21,"div",11),l.Yb(22,"div",4),l.Yb(23,"label",12),l.Ic(24,"Anivers\xe1rio:"),l.Xb(),l.Tb(25,"input",13),l.Tb(26,"nb-datepicker",14,15),l.Gc(28,p,2,0,"p",7),l.Xb(),l.Yb(29,"div",4),l.Yb(30,"label",16),l.Ic(31,"Equipe "),l.Xb(),l.Yb(32,"nb-select",17),l.Gc(33,m,2,2,"nb-option",18),l.Xb(),l.Xb(),l.Yb(34,"div",4),l.Yb(35,"nb-toggle",19),l.Ic(36,"Coordena Equipe?"),l.Xb(),l.Xb(),l.Xb(),l.Yb(37,"div",20),l.Yb(38,"div",4),l.Yb(39,"label",21),l.Ic(40,"Posi\xe7\xe3o "),l.Xb(),l.Yb(41,"nb-select",22),l.Gc(42,f,2,2,"nb-option",18),l.Xb(),l.Xb(),l.Yb(43,"div",4),l.Yb(44,"label",23),l.Ic(45,"Comunidade "),l.Xb(),l.Yb(46,"nb-select",24),l.Gc(47,v,2,2,"nb-option",18),l.Xb(),l.Xb(),l.Xb(),l.Xb(),l.Yb(48,"nb-card-footer"),l.Yb(49,"button",25),l.gc("click",(function(){return i.salvar()})),l.Ic(50,"Salvar"),l.Xb(),l.Xb(),l.Xb(),l.Xb()),2&a){const a=l.xc(27);l.qc("formGroup",i.dados),l.Fb(11),l.qc("status",i.verificaValidacaoCampo("name")?"danger":""),l.Fb(1),l.qc("ngIf",i.verificaValidacaoCampo("name","required")),l.Fb(4),l.qc("status",i.verificaValidacaoCampo("email")?"danger":""),l.Fb(1),l.qc("ngIf",i.verificaValidacaoCampo("email","required")),l.Fb(8),l.qc("status",i.verificaValidacaoCampo("bd")?"danger":"")("nbDatepicker",a),l.Fb(3),l.qc("ngIf",i.verificaValidacaoCampo("bd","dataInvalida")),l.Fb(5),l.qc("ngForOf",i.equipes),l.Fb(9),l.qc("ngForOf",i.hierarquia),l.Fb(5),l.qc("ngForOf",i.comunidades)}},directives:[b.z,b.o,b.g,s.u,s.x,s.q,r.d,s.M,s.t,s.P,b.b,b.n,b.f,e.m,s.wb,s.G,s.F,s.jb,e.l,s.v,s.gb],styles:[""]}),a})()}];let g=(()=>{class a{}return a.\u0275mod=l.Qb({type:a}),a.\u0275inj=l.Pb({factory:function(i){return new(i||a)},imports:[[r.g.forChild(h)],r.g]}),a})();var Y=o("eW8b");let q=(()=>{class a{}return a.\u0275mod=l.Qb({type:a}),a.\u0275inj=l.Pb({factory:function(i){return new(i||a)},imports:[[e.c,b.u,b.h,s.y,s.O,s.Q,s.kb,s.xb,s.r,s.H,Y.a,g]]}),a})()}}]);