import{B as c,C as d,D as l,F as u,I as s,J as f,K as h,M,N as C,O as g,b as e,c as a,d as r,j as n,k as p,l as m}from"./chunk-4WNKBULN.js";var w=[{path:"about",component:f},{path:"contact",component:h},{path:"countries",loadChildren:()=>import("./chunk-TLRITVDH.js").then(t=>t.CountriesModule)},{path:"**",redirectTo:"countries"}],A=(()=>{class t{static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275mod=r({type:t})}static{this.\u0275inj=e({imports:[s.forRoot(w),s]})}}return t})();var b=(()=>{class t{constructor(){this.title="countryApp"}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=a({type:t,selectors:[["app-root"]],decls:5,vars:0,consts:[[1,"row","mt-3"],[1,"col-3"],[1,"col"]],template:function(o,N){o&1&&(n(0,"div",0)(1,"div",1),m(2,"shared-sidebar"),p(),n(3,"div",2),m(4,"router-outlet"),p()())},dependencies:[u,M]})}}return t})();var y=(()=>{class t{static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275mod=r({type:t,bootstrap:[b]})}static{this.\u0275inj=e({providers:[g],imports:[A,l,c,C]})}}return t})();d().bootstrapModule(y).catch(t=>console.error(t));
