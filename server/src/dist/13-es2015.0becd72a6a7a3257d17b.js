(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{UrDz:function(a,r,e){"use strict";e.r(r),e.d(r,"RegisterModule",(function(){return W}));var i=e("ofXK"),t=e("3Pt+"),o=e("qXBG"),n=e("fXoL"),s=e("tyNb"),l=e("aceb");function c(a,r){if(1&a&&(n.Xb(0,"li",20),n.Gc(1),n.Wb()),2&a){const a=r.$implicit;n.Eb(1),n.Hc(a)}}function b(a,r){if(1&a&&(n.Xb(0,"nb-alert",16),n.Xb(1,"p",17),n.Xb(2,"b"),n.Gc(3,"Oh snap!"),n.Wb(),n.Wb(),n.Xb(4,"ul",18),n.Ec(5,c,2,1,"li",19),n.Wb(),n.Wb()),2&a){const a=n.jc();n.Eb(5),n.pc("ngForOf",a.errors)}}function u(a,r){1&a&&(n.Xb(0,"p",22),n.Gc(1," Campo obrigat\xf3rio! "),n.Wb())}function d(a,r){if(1&a&&(n.Vb(0),n.Ec(1,u,2,0,"p",21),n.Ub()),2&a){const a=n.jc();n.Eb(1),n.pc("ngIf",a.verificaValidacaoCampo("name","required"))}}function p(a,r){1&a&&(n.Xb(0,"p",22),n.Gc(1," Senha \xe9 obrigat\xf3rio! "),n.Wb())}function f(a,r){1&a&&(n.Xb(0,"p",22),n.Gc(1," Senha precisar ter: uma letra mai\xfascula, uma letra min\xfascula, um n\xfamero, um caractere especial (@#$%) e tamanho entre 6-20. "),n.Wb())}function m(a,r){if(1&a&&(n.Vb(0),n.Ec(1,p,2,0,"p",21),n.Ec(2,f,2,0,"p",21),n.Ub()),2&a){const a=n.jc();n.Eb(1),n.pc("ngIf",a.verificaValidacaoCampo("password","required")),n.Eb(1),n.pc("ngIf",a.verificaValidacaoCampo("password","senhaFraca"))}}function g(a,r){1&a&&(n.Xb(0,"p",22),n.Gc(1," Confimar senha \xe9 obrigat\xf3rio! "),n.Wb())}function h(a,r){1&a&&(n.Xb(0,"p",22),n.Gc(1," As senhas n\xe3o est\xe3o combinando "),n.Wb())}function v(a,r){if(1&a&&(n.Vb(0),n.Ec(1,g,2,0,"p",21),n.Ec(2,h,2,0,"p",21),n.Ub()),2&a){const a=n.jc();n.Eb(1),n.pc("ngIf",a.verificaValidacaoCampo("confirm_password","required")),n.Eb(1),n.pc("ngIf",a.validateEqualPassword())}}const w=function(){return["/auth/login"]};let E=(()=>{class a{constructor(a,r,e,i){this.fb=a,this.authService=r,this.route=e,this.router=i,this.form=this.fb.group({name:[null,t.x.required],email:null,comunidade:null,password:[null,[t.x.required,this.validatePassword]],confirm_password:[null,t.x.required],bd:null}),this.password="",this.route.params.subscribe(a=>{this.id=a.id,"novo"!==this.id&&this.authService.obterConvite(this.id).subscribe(a=>{this.form.patchValue(Object.assign({},a)),this.form.controls.email.disable()},a=>alert(a))})}ngOnInit(){this.form.controls.password.valueChanges.subscribe(a=>{this.password=a})}validateEqualPassword(){return this.form.value.password!==this.form.value.confirm_password}validatePassword(a){return a.value&&a.value.match(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/)?null:{senhaFraca:{valid:!1}}}register(){this.authService.registerUser(Object.assign(Object.assign({},this.form.getRawValue()),{conviteId:this.id})).subscribe(a=>{localStorage.setItem("usuarioNome",a.name),localStorage.setItem("token",a.token),this.router.navigate(["pages/dashboard"])})}verificaValidacaoCampo(a,r){return this.form.controls[a].dirty&&(r?this.form.controls[a].errors&&this.form.controls[a].errors[r]:this.form.controls[a].invalid)}getConfigValue(){}}return a.\u0275fac=function(r){return new(r||a)(n.Rb(t.c),n.Rb(o.a),n.Rb(s.a),n.Rb(s.c))},a.\u0275cmp=n.Lb({type:a,selectors:[["ngx-register"]],decls:29,vars:11,consts:[["id","title",1,"title"],["outline","danger","role","alert",4,"ngIf"],["aria-labelledby","title",3,"formGroup","ngSubmit"],[1,"form-control-group"],["for","input-name",1,"label"],["nbInput","","formControlName","name","id","input-name","name","fullName","placeholder","Nome","autofocus","","fullWidth","","fieldSize","large",3,"status"],[4,"ngIf"],["for","input-email",1,"label"],["nbInput","","formControlName","email","id","input-email","name","email","placeholder","Email","fullWidth","","fieldSize","large"],["for","input-password",1,"label"],["nbInput","","formControlName","password","type","password","id","input-password","name","password","placeholder","Senha","fullWidth","","fieldSize","large",3,"status"],["for","input-re-password",1,"label"],["nbInput","","formControlName","confirm_password","type","password","id","input-re-password","name","rePass","placeholder","Confirmar senha","fullWidth","","fieldSize","large",3,"status"],["nbButton","","fullWidth","","status","primary","size","large",3,"disabled"],["aria-label","Sign in",1,"another-action"],[1,"text-link",3,"routerLink"],["outline","danger","role","alert"],[1,"alert-title"],[1,"alert-message-list"],["class","alert-message",4,"ngFor","ngForOf"],[1,"alert-message"],["class","caption status-danger",4,"ngIf"],[1,"caption","status-danger"]],template:function(a,r){1&a&&(n.Xb(0,"h1",0),n.Gc(1,"Registro"),n.Wb(),n.Ec(2,b,6,1,"nb-alert",1),n.Xb(3,"form",2),n.fc("ngSubmit",(function(){return r.register()})),n.Xb(4,"div",3),n.Xb(5,"label",4),n.Gc(6,"Nome:"),n.Wb(),n.Sb(7,"input",5),n.Ec(8,d,2,1,"ng-container",6),n.Wb(),n.Xb(9,"div",3),n.Xb(10,"label",7),n.Gc(11,"Email:"),n.Wb(),n.Sb(12,"input",8),n.Wb(),n.Xb(13,"div",3),n.Xb(14,"label",9),n.Gc(15,"Senha:"),n.Wb(),n.Sb(16,"input",10),n.Ec(17,m,3,2,"ng-container",6),n.Wb(),n.Xb(18,"div",3),n.Xb(19,"label",11),n.Gc(20,"Confirmar senha:"),n.Wb(),n.Sb(21,"input",12),n.Ec(22,v,3,2,"ng-container",6),n.Wb(),n.Xb(23,"button",13),n.Gc(24," Criar conta "),n.Wb(),n.Wb(),n.Xb(25,"section",14),n.Gc(26," J\xe1 possui uma conta? "),n.Xb(27,"a",15),n.Gc(28,"entrar"),n.Wb(),n.Wb()),2&a&&(n.Eb(2),n.pc("ngIf",null==r.errors?null:r.errors.length),n.Eb(1),n.pc("formGroup",r.form),n.Eb(4),n.pc("status",r.verificaValidacaoCampo("name")?"danger":"basic"),n.Eb(1),n.pc("ngIf",r.verificaValidacaoCampo("name")),n.Eb(8),n.pc("status",r.verificaValidacaoCampo("password")?"danger":"basic"),n.Eb(1),n.pc("ngIf",r.verificaValidacaoCampo("password")),n.Eb(4),n.pc("status",r.verificaValidacaoCampo("confirm_password")||r.validateEqualPassword()?"danger":"basic"),n.Eb(1),n.pc("ngIf",r.verificaValidacaoCampo("confirm_password")||r.validateEqualPassword()),n.Eb(1),n.pc("disabled",!r.form.valid||r.validateEqualPassword()),n.Eb(4),n.pc("routerLink",n.rc(10,w)))},directives:[i.m,t.z,t.o,t.g,l.H,t.b,t.n,t.f,l.l,s.f,l.j,i.l],styles:[""]}),a})(),W=(()=>{class a{}return a.\u0275mod=n.Pb({type:a}),a.\u0275inj=n.Ob({factory:function(r){return new(r||a)},imports:[[i.c,l.G,l.I,t.u,l.k,l.m,t.h,l.u,s.g.forChild([{path:":id",component:E}])]]}),a})()}}]);