(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{wWZX:function(a,o,i){"use strict";i.r(o),i.d(o,"PerfilModule",(function(){return F}));var r=i("ofXK"),e=i("tyNb"),t=i("vI6V"),n=i("3Pt+"),s=i("v8Ly"),c=i("wd/R"),d=i("fXoL"),b=i("aceb");function l(a,o){1&a&&(d.Yb(0,"p",27),d.Ic(1," Campo obrigat\xf3rio! "),d.Xb())}function u(a,o){1&a&&(d.Yb(0,"p",27),d.Ic(1," Campo obrigat\xf3rio! "),d.Xb())}function p(a,o){1&a&&(d.Yb(0,"p",27),d.Ic(1," Favor digitar uma data v\xe1lida! "),d.Xb())}function m(a,o){if(1&a&&(d.Yb(0,"nb-option",28),d.Ic(1),d.Xb()),2&a){const a=o.$implicit;d.qc("value",a.k),d.Fb(1),d.Jc(a.v)}}function f(a,o){if(1&a&&(d.Yb(0,"nb-option",28),d.Ic(1),d.Xb()),2&a){const a=o.$implicit;d.qc("value",a.k),d.Fb(1),d.Jc(a.v)}}function h(a,o){if(1&a&&(d.Yb(0,"nb-option",28),d.Ic(1),d.Xb()),2&a){const a=o.$implicit;d.qc("value",a.k),d.Fb(1),d.Jc(a.v)}}function v(a,o){1&a&&(d.Yb(0,"p",27),d.Ic(1," Campo obrigat\xf3rio! "),d.Xb())}function q(a,o){1&a&&(d.Yb(0,"p",27),d.Ic(1," Senha precisar ter: uma letra mai\xfascula, uma letra min\xfascula, um n\xfamero, um caractere especial (@#$%) e tamanho entre 6-20. "),d.Xb())}function g(a,o){1&a&&(d.Yb(0,"p",27),d.Ic(1," Campo obrigat\xf3rio! "),d.Xb())}function Y(a,o){1&a&&(d.Yb(0,"p",27),d.Ic(1," As senhas est\xe3o diferentes "),d.Xb())}function X(a,o){if(1&a&&(d.Wb(0),d.Yb(1,"div",4),d.Yb(2,"label",5),d.Ic(3,"Senha "),d.Xb(),d.Tb(4,"input",29),d.Gc(5,v,2,0,"p",7),d.Gc(6,q,2,0,"p",7),d.Xb(),d.Yb(7,"div",4),d.Yb(8,"label",5),d.Ic(9,"confirmar senha "),d.Xb(),d.Tb(10,"input",30),d.Gc(11,g,2,0,"p",7),d.Gc(12,Y,2,0,"p",7),d.Xb(),d.Vb()),2&a){const a=d.kc();d.Fb(4),d.qc("status",a.verificaValidacaoCampo("password")?"danger":""),d.Fb(1),d.qc("ngIf",a.verificaValidacaoCampo("password","required")),d.Fb(1),d.qc("ngIf",a.verificaValidacaoCampo("password","senhaFraca")),d.Fb(4),d.qc("status",a.verificaValidacaoCampo("password_confirm")?"danger":""),d.Fb(1),d.qc("ngIf",a.verificaValidacaoCampo("password_confirm","required")),d.Fb(1),d.qc("ngIf",a.validateEqualPassword())}}const I=[{path:"",component:(()=>{class a{constructor(a,o,i){this.router=a,this.fb=o,this.usuarioService=i,this.dados=this.fb.group({ativo:null,comunidade:null,email:null,equipe:null,hierarquia:null,name:[null,n.x.required],bd:[null,this.validarDataAniversario],coordenaEquipe:null,mudarSenha:null,password:null,password_confirm:null}),this.equipes=Object.keys(t.b).map(a=>({k:a,v:t.b[a]})),this.comunidades=Object.keys(t.a).map(a=>({k:a,v:t.a[a]})),this.hierarquia=Object.keys(t.c).map(a=>({k:a,v:t.c[a]})),this.mudarSenha=!1}ngOnInit(){this.usuarioService.usuarioLogado().subscribe(a=>{this.dados.patchValue(Object.assign(Object.assign({},a),{bd:a.bd&&c(a.bd)})),this.dados.controls.email.disable(),this.dados.controls.hierarquia.disable(),this.dados.controls.coordenaEquipe.disable(),this.dados.controls.equipe.disable()}),this.dados.controls.mudarSenha.valueChanges.subscribe(a=>{a?(this.dados.controls.password.setValidators([n.x.required,this.validatePassword]),this.dados.controls.password_confirm.setValidators([n.x.required])):(this.dados.controls.password_confirm.clearValidators(),this.dados.controls.password.clearValidators()),this.mudarSenha=a})}validatePassword(a){return a.value&&a.value.match(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/)?null:{senhaFraca:{valid:!1}}}validarDataAniversario(a){return a.value&&c().subtract(10,"years")<=a.value?{dataInvalida:!0}:null}salvar(){this.dados.valid&&this.usuarioService.atualizarUsuario(this.dados.value).subscribe(a=>{a&&this.router.navigate(["/pages/admin/usuarios"])})}validateEqualPassword(){return this.dados.value.mudarSenha&&this.dados.value.password!==this.dados.value.password_confirm}verificaValidacaoCampo(a,o){return this.dados.controls[a].dirty&&(o?this.dados.controls[a].errors&&this.dados.controls[a].errors[o]:this.dados.controls[a].invalid)}}return a.\u0275fac=function(o){return new(o||a)(d.Sb(e.c),d.Sb(n.c),d.Sb(s.a))},a.\u0275cmp=d.Mb({type:a,selectors:[["ngx-perfil"]],decls:53,vars:12,consts:[[3,"formGroup"],["nbButton","","size","small","ghost","","routerLink","/pages/admin/usuarios"],["icon","arrow-left"],[1,"row","form-group"],[1,"form-group","col-md-4"],["for","Nome","required","",1,"label"],["type","text","nbInput","","placeholder","Nome","fullWidth","","id","nome","formControlName","name",3,"status"],["class","caption status-danger",4,"ngIf"],["for","Email","required","",1,"label"],["type","email","nbInput","","placeholder","Email","fullWidth","","id","Email","formControlName","email",3,"status"],[1,"row"],[1,"label"],["fullWidth","","nbInput","","formControlName","bd",3,"status","nbDatepicker"],["format","DD/MM/YYYY"],["dp",""],["for","equipe","required","",1,"label"],["placeholder","Equipe","fullWidth","","formControlName","equipe"],[3,"value",4,"ngFor","ngForOf"],["labelPosition","start","formControlName","coordenaEquipe","disabled","true"],[1,"form-group","row"],["for","hierarquia","required","",1,"label"],["placeholder","Posi\xe7\xe3o","fullWidth","","formControlName","hierarquia"],["for","comunidade","required","",1,"label"],["placeholder","Comunidade","fullWidth","","formControlName","comunidade"],["formControlName","mudarSenha"],[4,"ngIf"],["nbButton","",3,"click"],[1,"caption","status-danger"],[3,"value"],["type","password","nbInput","","placeholder","Senha","fullWidth","","id","password","formControlName","password",3,"status"],["type","password","nbInput","","placeholder","Confirmar senha","fullWidth","","id","nome","formControlName","password_confirm",3,"status"]],template:function(a,o){if(1&a&&(d.Yb(0,"form",0),d.Yb(1,"nb-card"),d.Yb(2,"nb-card-header"),d.Yb(3,"button",1),d.Tb(4,"nb-icon",2),d.Xb(),d.Ic(5," Editar usu\xe1rio "),d.Xb(),d.Yb(6,"nb-card-body"),d.Yb(7,"div",3),d.Yb(8,"div",4),d.Yb(9,"label",5),d.Ic(10,"Nome "),d.Xb(),d.Tb(11,"input",6),d.Gc(12,l,2,0,"p",7),d.Xb(),d.Yb(13,"div",4),d.Yb(14,"label",8),d.Ic(15,"Email "),d.Xb(),d.Tb(16,"input",9),d.Gc(17,u,2,0,"p",7),d.Xb(),d.Xb(),d.Yb(18,"div",10),d.Yb(19,"div",4),d.Yb(20,"label",11),d.Ic(21,"Anivers\xe1rio:"),d.Xb(),d.Tb(22,"input",12),d.Tb(23,"nb-datepicker",13,14),d.Gc(25,p,2,0,"p",7),d.Xb(),d.Yb(26,"div",4),d.Yb(27,"label",15),d.Ic(28,"Equipe "),d.Xb(),d.Yb(29,"nb-select",16),d.Gc(30,m,2,2,"nb-option",17),d.Xb(),d.Xb(),d.Yb(31,"div",4),d.Yb(32,"nb-toggle",18),d.Ic(33,"Coordena Equipe?"),d.Xb(),d.Xb(),d.Xb(),d.Yb(34,"div",19),d.Yb(35,"div",4),d.Yb(36,"label",20),d.Ic(37,"Posi\xe7\xe3o "),d.Xb(),d.Yb(38,"nb-select",21),d.Gc(39,f,2,2,"nb-option",17),d.Xb(),d.Xb(),d.Yb(40,"div",4),d.Yb(41,"label",22),d.Ic(42,"Comunidade "),d.Xb(),d.Yb(43,"nb-select",23),d.Gc(44,h,2,2,"nb-option",17),d.Xb(),d.Xb(),d.Xb(),d.Yb(45,"div",19),d.Yb(46,"div",4),d.Yb(47,"nb-checkbox",24),d.Ic(48,"Mudar Senha"),d.Xb(),d.Xb(),d.Gc(49,X,13,6,"ng-container",25),d.Xb(),d.Xb(),d.Yb(50,"nb-card-footer"),d.Yb(51,"button",26),d.gc("click",(function(){return o.salvar()})),d.Ic(52,"Salvar"),d.Xb(),d.Xb(),d.Xb(),d.Xb()),2&a){const a=d.xc(24);d.qc("formGroup",o.dados),d.Fb(11),d.qc("status",o.verificaValidacaoCampo("name")?"danger":""),d.Fb(1),d.qc("ngIf",o.verificaValidacaoCampo("name","required")),d.Fb(4),d.qc("status",o.verificaValidacaoCampo("email")?"danger":""),d.Fb(1),d.qc("ngIf",o.verificaValidacaoCampo("email","required")),d.Fb(5),d.qc("status",o.verificaValidacaoCampo("bd")?"danger":"")("nbDatepicker",a),d.Fb(3),d.qc("ngIf",o.verificaValidacaoCampo("bd","dataInvalida")),d.Fb(5),d.qc("ngForOf",o.equipes),d.Fb(9),d.qc("ngForOf",o.hierarquia),d.Fb(5),d.qc("ngForOf",o.comunidades),d.Fb(5),d.qc("ngIf",o.mudarSenha)}},directives:[n.z,n.o,n.g,b.u,b.x,b.q,e.d,b.M,b.t,b.P,n.b,n.n,n.f,r.m,b.G,b.F,b.jb,r.l,b.wb,b.A,b.v,b.gb],styles:[""]}),a})()}];let w=(()=>{class a{}return a.\u0275mod=d.Qb({type:a}),a.\u0275inj=d.Pb({factory:function(o){return new(o||a)},imports:[[e.g.forChild(I)],e.g]}),a})();var C=i("eW8b");let F=(()=>{class a{}return a.\u0275mod=d.Qb({type:a}),a.\u0275inj=d.Pb({factory:function(o){return new(o||a)},imports:[[r.c,w,n.u,n.h,b.y,b.O,b.Q,b.kb,b.xb,b.r,b.H,C.a,b.B]]}),a})()}}]);