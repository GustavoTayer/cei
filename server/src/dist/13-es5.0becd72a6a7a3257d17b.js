function _classCallCheck(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(a,i.key,i)}}function _createClass(a,e,r){return e&&_defineProperties(a.prototype,e),r&&_defineProperties(a,r),a}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{UrDz:function(a,e,r){"use strict";r.r(e),r.d(e,"RegisterModule",(function(){return X}));var i=r("ofXK"),n=r("3Pt+"),t=r("qXBG"),o=r("fXoL"),s=r("tyNb"),l=r("aceb");function c(a,e){if(1&a&&(o.Xb(0,"li",20),o.Gc(1),o.Wb()),2&a){var r=e.$implicit;o.Eb(1),o.Hc(r)}}function u(a,e){if(1&a&&(o.Xb(0,"nb-alert",16),o.Xb(1,"p",17),o.Xb(2,"b"),o.Gc(3,"Oh snap!"),o.Wb(),o.Wb(),o.Xb(4,"ul",18),o.Ec(5,c,2,1,"li",19),o.Wb(),o.Wb()),2&a){var r=o.jc();o.Eb(5),o.pc("ngForOf",r.errors)}}function b(a,e){1&a&&(o.Xb(0,"p",22),o.Gc(1," Campo obrigat\xf3rio! "),o.Wb())}function f(a,e){if(1&a&&(o.Vb(0),o.Ec(1,b,2,0,"p",21),o.Ub()),2&a){var r=o.jc();o.Eb(1),o.pc("ngIf",r.verificaValidacaoCampo("name","required"))}}function d(a,e){1&a&&(o.Xb(0,"p",22),o.Gc(1," Senha \xe9 obrigat\xf3rio! "),o.Wb())}function p(a,e){1&a&&(o.Xb(0,"p",22),o.Gc(1," Senha precisar ter: uma letra mai\xfascula, uma letra min\xfascula, um n\xfamero, um caractere especial (@#$%) e tamanho entre 6-20. "),o.Wb())}function m(a,e){if(1&a&&(o.Vb(0),o.Ec(1,d,2,0,"p",21),o.Ec(2,p,2,0,"p",21),o.Ub()),2&a){var r=o.jc();o.Eb(1),o.pc("ngIf",r.verificaValidacaoCampo("password","required")),o.Eb(1),o.pc("ngIf",r.verificaValidacaoCampo("password","senhaFraca"))}}function g(a,e){1&a&&(o.Xb(0,"p",22),o.Gc(1," Confimar senha \xe9 obrigat\xf3rio! "),o.Wb())}function h(a,e){1&a&&(o.Xb(0,"p",22),o.Gc(1," As senhas n\xe3o est\xe3o combinando "),o.Wb())}function v(a,e){if(1&a&&(o.Vb(0),o.Ec(1,g,2,0,"p",21),o.Ec(2,h,2,0,"p",21),o.Ub()),2&a){var r=o.jc();o.Eb(1),o.pc("ngIf",r.verificaValidacaoCampo("confirm_password","required")),o.Eb(1),o.pc("ngIf",r.validateEqualPassword())}}var w,E,C=function(){return["/auth/login"]},W=((E=function(){function a(e,r,i,t){var o=this;_classCallCheck(this,a),this.fb=e,this.authService=r,this.route=i,this.router=t,this.form=this.fb.group({name:[null,n.x.required],email:null,comunidade:null,password:[null,[n.x.required,this.validatePassword]],confirm_password:[null,n.x.required],bd:null}),this.password="",this.route.params.subscribe((function(a){o.id=a.id,"novo"!==o.id&&o.authService.obterConvite(o.id).subscribe((function(a){o.form.patchValue(Object.assign({},a)),o.form.controls.email.disable()}),(function(a){return alert(a)}))}))}return _createClass(a,[{key:"ngOnInit",value:function(){var a=this;this.form.controls.password.valueChanges.subscribe((function(e){a.password=e}))}},{key:"validateEqualPassword",value:function(){return this.form.value.password!==this.form.value.confirm_password}},{key:"validatePassword",value:function(a){return a.value&&a.value.match(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/)?null:{senhaFraca:{valid:!1}}}},{key:"register",value:function(){var a=this;this.authService.registerUser(Object.assign(Object.assign({},this.form.getRawValue()),{conviteId:this.id})).subscribe((function(e){localStorage.setItem("usuarioNome",e.name),localStorage.setItem("token",e.token),a.router.navigate(["pages/dashboard"])}))}},{key:"verificaValidacaoCampo",value:function(a,e){return this.form.controls[a].dirty&&(e?this.form.controls[a].errors&&this.form.controls[a].errors[e]:this.form.controls[a].invalid)}},{key:"getConfigValue",value:function(){}}]),a}()).\u0275fac=function(a){return new(a||E)(o.Rb(n.c),o.Rb(t.a),o.Rb(s.a),o.Rb(s.c))},E.\u0275cmp=o.Lb({type:E,selectors:[["ngx-register"]],decls:29,vars:11,consts:[["id","title",1,"title"],["outline","danger","role","alert",4,"ngIf"],["aria-labelledby","title",3,"formGroup","ngSubmit"],[1,"form-control-group"],["for","input-name",1,"label"],["nbInput","","formControlName","name","id","input-name","name","fullName","placeholder","Nome","autofocus","","fullWidth","","fieldSize","large",3,"status"],[4,"ngIf"],["for","input-email",1,"label"],["nbInput","","formControlName","email","id","input-email","name","email","placeholder","Email","fullWidth","","fieldSize","large"],["for","input-password",1,"label"],["nbInput","","formControlName","password","type","password","id","input-password","name","password","placeholder","Senha","fullWidth","","fieldSize","large",3,"status"],["for","input-re-password",1,"label"],["nbInput","","formControlName","confirm_password","type","password","id","input-re-password","name","rePass","placeholder","Confirmar senha","fullWidth","","fieldSize","large",3,"status"],["nbButton","","fullWidth","","status","primary","size","large",3,"disabled"],["aria-label","Sign in",1,"another-action"],[1,"text-link",3,"routerLink"],["outline","danger","role","alert"],[1,"alert-title"],[1,"alert-message-list"],["class","alert-message",4,"ngFor","ngForOf"],[1,"alert-message"],["class","caption status-danger",4,"ngIf"],[1,"caption","status-danger"]],template:function(a,e){1&a&&(o.Xb(0,"h1",0),o.Gc(1,"Registro"),o.Wb(),o.Ec(2,u,6,1,"nb-alert",1),o.Xb(3,"form",2),o.fc("ngSubmit",(function(){return e.register()})),o.Xb(4,"div",3),o.Xb(5,"label",4),o.Gc(6,"Nome:"),o.Wb(),o.Sb(7,"input",5),o.Ec(8,f,2,1,"ng-container",6),o.Wb(),o.Xb(9,"div",3),o.Xb(10,"label",7),o.Gc(11,"Email:"),o.Wb(),o.Sb(12,"input",8),o.Wb(),o.Xb(13,"div",3),o.Xb(14,"label",9),o.Gc(15,"Senha:"),o.Wb(),o.Sb(16,"input",10),o.Ec(17,m,3,2,"ng-container",6),o.Wb(),o.Xb(18,"div",3),o.Xb(19,"label",11),o.Gc(20,"Confirmar senha:"),o.Wb(),o.Sb(21,"input",12),o.Ec(22,v,3,2,"ng-container",6),o.Wb(),o.Xb(23,"button",13),o.Gc(24," Criar conta "),o.Wb(),o.Wb(),o.Xb(25,"section",14),o.Gc(26," J\xe1 possui uma conta? "),o.Xb(27,"a",15),o.Gc(28,"entrar"),o.Wb(),o.Wb()),2&a&&(o.Eb(2),o.pc("ngIf",null==e.errors?null:e.errors.length),o.Eb(1),o.pc("formGroup",e.form),o.Eb(4),o.pc("status",e.verificaValidacaoCampo("name")?"danger":"basic"),o.Eb(1),o.pc("ngIf",e.verificaValidacaoCampo("name")),o.Eb(8),o.pc("status",e.verificaValidacaoCampo("password")?"danger":"basic"),o.Eb(1),o.pc("ngIf",e.verificaValidacaoCampo("password")),o.Eb(4),o.pc("status",e.verificaValidacaoCampo("confirm_password")||e.validateEqualPassword()?"danger":"basic"),o.Eb(1),o.pc("ngIf",e.verificaValidacaoCampo("confirm_password")||e.validateEqualPassword()),o.Eb(1),o.pc("disabled",!e.form.valid||e.validateEqualPassword()),o.Eb(4),o.pc("routerLink",o.rc(10,C)))},directives:[i.m,n.z,n.o,n.g,l.H,n.b,n.n,n.f,l.l,s.f,l.j,i.l],styles:[""]}),E),X=((w=function a(){_classCallCheck(this,a)}).\u0275mod=o.Pb({type:w}),w.\u0275inj=o.Ob({factory:function(a){return new(a||w)},imports:[[i.c,l.G,l.I,n.u,l.k,l.m,n.h,l.u,s.g.forChild([{path:":id",component:W}])]]}),w)}}]);