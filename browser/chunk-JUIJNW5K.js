import{i}from"./chunk-OOFTIQN6.js";var g=(()=>{let t=class t{constructor(){this.isLogged=!1}login(o,r){let a=localStorage.getItem("userData");if(a){let s=JSON.parse(a);if(o===s.email&&r===s.password)return this.isLogged=!0,this.isLogged}return!1}logout(){let o=localStorage.getItem("userData");this.isLogged=!1}isLoggedIn(){return!!localStorage.getItem("userData")}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=i({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();export{g as a};
