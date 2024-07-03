import './polyfills.server.mjs';
import{a as E,b as R,c as k,d as N,e as W,f as F,g as T,h as z,i as D}from"./chunk-ESL57ZJE.mjs";import{$ as _,G as y,H as l,I as M,N as x,Na as V,P as u,R as i,S as n,U as P,V as h,W as f,X as d,_ as w,aa as b,ca as v,m as C,r as p,s as g,ya as S,za as O}from"./chunk-R47TPUCW.mjs";function I(c,o){c&1&&(i(0,"div",14),d(1," Email must be a @gmail.com address. "),n())}var A=(()=>{let o=class o{constructor(r){this.route=r,this.name="",this.email="",this.password="",this.hidePassword=!0}onSubmit(r){alert("you have registered");let m={name:r.value.name,email:r.value.email,password:r.value.password};localStorage.setItem("userData",JSON.stringify(m)),this.route.navigateByUrl("login")}togglePasswordVisibility(){this.hidePassword=!this.hidePassword}};o.\u0275fac=function(m){return new(m||o)(M(V))},o.\u0275cmp=C({type:o,selectors:[["app-register"]],standalone:!0,features:[v],decls:23,vars:7,consts:[["registerForm","ngForm"],["emailCtrl","ngModel"],[1,"container"],[2,"background-color","#7ba5d2",3,"ngSubmit"],["for","name"],["type","text","name","name","required","",3,"ngModelChange","ngModel"],["for","email"],["type","email","name","email","required","","id","email","pattern",".+@gmail\\.com",3,"ngModelChange","ngModel"],["class","error",4,"ngIf"],["for","password"],[1,"password-input"],["name","password","required","","id","password",3,"ngModelChange","type","ngModel"],["alt","Toggle Password Visibility",1,"immg",3,"click","src"],["type","submit",1,"button",3,"disabled"],[1,"error"]],template:function(m,e){if(m&1){let a=P();i(0,"div",2)(1,"h1"),d(2," Register "),n(),i(3,"form",3,0),h("ngSubmit",function(){p(a);let t=f(4);return g(e.onSubmit(t))}),i(5,"div")(6,"label",4),d(7,"Name:"),n(),i(8,"input",5),b("ngModelChange",function(t){return p(a),_(e.name,t)||(e.name=t),g(t)}),n()(),i(9,"div")(10,"label",6),d(11,"Email:"),n(),i(12,"input",7,1),b("ngModelChange",function(t){return p(a),_(e.email,t)||(e.email=t),g(t)}),n(),x(14,I,2,0,"div",8),n(),i(15,"div")(16,"label",9),d(17,"Password:"),n(),i(18,"div",10)(19,"input",11),b("ngModelChange",function(t){return p(a),_(e.password,t)||(e.password=t),g(t)}),n(),i(20,"img",12),h("click",function(){return p(a),g(e.togglePasswordVisibility())}),n()()(),i(21,"button",13),d(22,"Register"),n()()()}if(m&2){let a=f(4),s=f(13);l(8),w("ngModel",e.name),l(4),w("ngModel",e.email),l(2),u("ngIf",s.invalid&&s.touched),l(5),u("type",e.hidePassword?"password":"text"),w("ngModel",e.password),l(),u("src",e.hidePassword?"assets/eyeOpenSVG.svg":"assets/eyeCloseSVG.svg",y),l(),u("disabled",!a.valid)}},dependencies:[O,S,D,F,E,R,k,T,z,W,N],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh}h1[_ngcontent-%COMP%]{font-size:35px;color:#fff;text-shadow:1px 1px 2px rgba(0,0,0,.5);margin:0;padding:20px 0}form[_ngcontent-%COMP%]{max-width:500px;width:500px;height:400px;margin:0 auto;padding:20px;border:1px solid #ccc;border-radius:8px;background-color:#fff;box-shadow:0 0 10px #0000001a}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;margin-bottom:10px;font-weight:700;color:#333}form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]{width:100%;padding:8px;margin-bottom:15px;border:1px solid #ccc;border-radius:3px;box-sizing:border-box}.button[_ngcontent-%COMP%]{width:100%;padding:10px;background-color:#007bff;border:none;border-radius:4px;color:#fff;font-size:16px;cursor:pointer;display:block;margin:30px auto 0}form[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%]:hover{background-color:#0056b3}form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-bottom:15px}.error[_ngcontent-%COMP%]{color:red;font-size:16px;margin-top:5px}.immg[_ngcontent-%COMP%]{position:absolute;top:36%;right:10px;transform:translateY(-50%);cursor:pointer;width:27px;height:27px}.password-input[_ngcontent-%COMP%]{position:relative}"]});let c=o;return c})();export{A as a};
