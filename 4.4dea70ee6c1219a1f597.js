(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{lu3c:function(t,n,e){"use strict";e.r(n),e.d(n,"LoginModule",(function(){return g}));var o=e("ofXK"),r=e("3Pt+"),i=e("tk/3"),a=e("NA4g"),l=e("tyNb"),c=e("fXoL"),b=e("dNgK"),m=e("kmnG"),p=e("qFsG"),d=e("bTqV");const s=[{path:"",component:(()=>{class t{constructor(t,n,e){this.fb=t,this.router=n,this._snackBar=e,this.invalidUser=!1}ngOnInit(){this.loginForm=this.fb.group({vendorEmail:["",r.o.required],vendorOtp:["",r.o.required]})}login(){"shiva@gmail.com"===this.loginForm.value.vendorEmail&&"12345678"===this.loginForm.value.vendorOtp?(this.router.navigate(["/dashboard"]),this.invalidUser=!1):(this.invalidUser=!0,this._snackBar.open("Invalid Email Or OTP","",{duration:5e3,panelClass:["error-snackbar"],horizontalPosition:"right",verticalPosition:"top"}),setTimeout(()=>{this.invalidUser=!1},5e3))}}return t.\u0275fac=function(n){return new(n||t)(c.Mb(r.d),c.Mb(l.a),c.Mb(b.a))},t.\u0275cmp=c.Gb({type:t,selectors:[["app-login"]],decls:35,vars:2,consts:[[1,"container-fluid","bg-light-black","h-100"],[1,"row","d-flex","align-items-center","justify-content-center","h-100"],[1,"col-md-4"],[1,"login-card","bg-black"],[1,"d-flex","align-items-center"],[1,"text-light","pt-3","pl-3"],["src","../../../assets/images/favicon.png","height","15px","width","15px"],[1,"card","bg-black","pt-2","pb-5","pl-5","pr-5","mt-5"],[3,"formGroup"],[1,"w-100"],["type","text","matInput","","placeholder","Vendor Email","formControlName","vendorEmail"],[1,"w-100","mt-3"],["type","password","matInput","","placeholder","Enter OTP","formControlName","vendorOtp"],[1,"btn-section","text-right"],["mat-raised-button","","color","primary",1,"bg-primary","login-btn","mt-4",3,"disabled","click"],[1,"text-center"],[1,"powered-by"],[1,"contact-mail"],["href","mailto:someone@example.com"]],template:function(t,n){1&t&&(c.Sb(0,"div",0),c.Sb(1,"div",1),c.Nb(2,"div",2),c.Sb(3,"div",2),c.Sb(4,"div",3),c.Sb(5,"div",4),c.Sb(6,"p",5),c.Nb(7,"img",6),c.Ac(8,"VENDOR LOGIN"),c.Rb(),c.Rb(),c.Sb(9,"div",7),c.Sb(10,"form",8),c.Sb(11,"mat-form-field",9),c.Sb(12,"mat-label"),c.Ac(13,"VENDOR EMAIL"),c.Rb(),c.Nb(14,"input",10),c.Rb(),c.Sb(15,"mat-form-field",11),c.Sb(16,"mat-label"),c.Ac(17,"ENTER OTP"),c.Rb(),c.Nb(18,"input",12),c.Rb(),c.Sb(19,"div",13),c.Sb(20,"button",14),c.Zb("click",(function(){return n.login()})),c.Ac(21,"LOGIN"),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Sb(22,"div",15),c.Sb(23,"p",16),c.Ac(24,"Powerd by "),c.Sb(25,"span"),c.Ac(26,"AMXR"),c.Rb(),c.Rb(),c.Sb(27,"p",17),c.Ac(28,"Contact "),c.Sb(29,"span"),c.Sb(30,"a",18),c.Ac(31,"Support"),c.Rb(),c.Rb(),c.Rb(),c.Sb(32,"p"),c.Ac(33,"\xa9 2023 Alter Mate X Reality"),c.Rb(),c.Rb(),c.Rb(),c.Nb(34,"div",2),c.Rb(),c.Rb()),2&t&&(c.Bb(10),c.ic("formGroup",n.loginForm),c.Bb(10),c.ic("disabled",n.loginForm.invalid))},directives:[r.p,r.l,r.f,m.b,m.e,p.b,r.c,r.k,r.e,d.a],styles:[".login-card[_ngcontent-%COMP%]{border-radius:5px}.login-card[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]{padding:0 25px;font-weight:300;color:#fff}.text-center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#606060;font-size:12px;margin:5px 0 10px}.text-center[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#b0951f}.text-center[_ngcontent-%COMP%]   .powered-by[_ngcontent-%COMP%]{margin:5px 0 0}.text-center[_ngcontent-%COMP%]   .contact-mail[_ngcontent-%COMP%]{margin:0}.mat-input-element[_ngcontent-%COMP%]{color:#949494}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%],   .mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{color:#949494!important}  .mat-form-field-appearance-legacy .mat-form-field-underline{background-color:#949494!important}  .mat-form-field-appearance-legacy .mat-form-field-label{color:#949494!important}"]}),t})()}];let f=(()=>{class t{}return t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({factory:function(n){return new(n||t)},imports:[[l.b.forChild(s)],l.b]}),t})(),g=(()=>{class t{}return t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({factory:function(n){return new(n||t)},imports:[[o.c,f,r.g,r.n,i.b,a.a]]}),t})()}}]);