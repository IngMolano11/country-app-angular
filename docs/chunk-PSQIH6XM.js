import{A as k,B as q,C as B,D as f,E as T,F as G,J as H,L as J,M as Q,N as L,Q as _,R,T as W,U as C,a as z,b as w,c as g,d as S,e as V,f as U,g as E,h as a,i as u,j as p,k as s,l as i,m as t,n as c,o as $,p as y,q as x,r as I,s as o,t as h,u as m,v as N,w as K,x as Y,y as M,z as O}from"./chunk-CNJNRFKR.js";var re=n=>["/countries/by",n];function ae(n,d){n&1&&(i(0,"div",2),o(1,` No hay pa\xEDses para mostrar
`),t())}function ce(n,d){if(n&1&&(i(0,"tr")(1,"td"),o(2),t(),i(3,"td"),o(4),t(),i(5,"td"),c(6,"img",6),t(),i(7,"td")(8,"strong"),o(9),t()(),i(10,"td"),o(11),t(),i(12,"td",7),o(13),M(14,"number"),t(),i(15,"td")(16,"a",8),o(17,"Ver m\xE1s"),t()()()),n&2){let e=d.$implicit,r=d.index;a(2),h(r+1),a(2),h(e.flag),a(2),s("src",e.flags.svg,E)("alt",e.name.common),a(3),h(e.name.common),a(2),h(e.capital),a(2),h(O(14,8,e.population)),a(3),s("routerLink",K(10,re,e.cca3))}}function le(n,d){if(n&1&&(i(0,"div",3)(1,"table",4)(2,"thead")(3,"tr")(4,"th"),o(5,"#"),t(),i(6,"th"),o(7,"Icon"),t(),i(8,"th"),o(9,"Bandera"),t(),i(10,"th"),o(11,"Nombre"),t(),i(12,"th"),o(13,"Capital"),t(),i(14,"th"),o(15,"Poblaci\xF3n"),t(),i(16,"th"),o(17,"Informaci\xF3n"),t()()(),i(18,"tbody"),p(19,ce,18,12,"tr",5),t()()()),n&2){let e=x();a(19),s("ngForOf",e.countries)}}var P=(()=>{class n{constructor(){this.countries=[]}static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275cmp=g({type:n,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["table",""],["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],[1,"alert","alert-warning","text-center"],[1,"table-container"],[1,"table"],[4,"ngFor","ngForOf"],["loading","lazy",3,"src","alt"],[1,"population-cell"],[3,"routerLink"]],template:function(r,l){if(r&1&&p(0,ae,2,0,"div",1)(1,le,20,1,"ng-template",null,0,k),r&2){let b=I(2);s("ngIf",l.countries.length===0)("ngIfElse",b)}},dependencies:[B,f,Q,T],styles:[".table-container[_ngcontent-%COMP%]{max-height:65vh;overflow-y:auto;overflow-x:hidden;margin-bottom:1rem;border-radius:8px;box-shadow:0 2px 8px #0000001a;background-color:#f8f9fa}.table[_ngcontent-%COMP%]{margin-bottom:0;background-color:#f8f9fa;table-layout:fixed;width:100%}.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{position:sticky;top:0;background-color:#3498db;color:#fff;padding:1rem;font-weight:500;border:none;z-index:1}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1), .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1){width:5%}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2){width:7%}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3), .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3){width:10%}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4), .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4){width:23%}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(5), .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5){width:20%}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(6), .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(6){width:15%}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(7), .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(7){width:15%;padding-right:1.5rem}.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:1rem .5rem;white-space:nowrap}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.8rem 1rem;vertical-align:middle;background-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{transition:all .2s ease-in-out;color:#2c3e50}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#fff;transform:scale(1.01);box-shadow:0 2px 4px #0000000d;color:#1a252f}img[_ngcontent-%COMP%]{width:30px;height:auto;border-radius:4px;box-shadow:0 1px 3px #0003;background-color:#e9ecef}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#3498db;text-decoration:none;padding:.4rem .8rem;border-radius:4px;transition:all .2s ease;display:inline-block;max-width:100%}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#3498db;color:#fff}.population-cell[_ngcontent-%COMP%]{font-family:Roboto Mono,monospace;text-align:right}.alert-warning[_ngcontent-%COMP%]{background-color:#fff3cd;color:#856404;padding:1rem;border-radius:8px;border:1px solid #ffeeba;margin:1rem 0}"]})}}return n})();function me(n,d){n&1&&c(0,"shared-loading-spinner")}var Z=(()=>{class n{constructor(e){this.countriesService=e,this.countries=[],this.isLoanding=!1}searchByCapital(e){this.isLoanding=!0,this.countriesService.searchCapital(e).subscribe(r=>{this.countries=r,this.isLoanding=!1})}static{this.\u0275fac=function(r){return new(r||n)(u(C))}}static{this.\u0275cmp=g({type:n,selectors:[["countries-by-capital-page"]],decls:11,vars:2,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por capital",3,"onDebounce"],[4,"ngIf"],[3,"countries"]],template:function(r,l){r&1&&(i(0,"h2"),o(1,"Capitales"),t(),c(2,"hr"),i(3,"div",0)(4,"div",1)(5,"shared-search-box",2),y("onDebounce",function(D){return l.searchByCapital(D)}),t()()(),i(6,"div",0)(7,"div",1),c(8,"hr"),p(9,me,1,0,"shared-loading-spinner",3),c(10,"countries-table",4),t()()),r&2&&(a(9),s("ngIf",l.isLoanding),a(),s("countries",l.countries))},dependencies:[f,_,R,P]})}}return n})();function de(n,d){n&1&&c(0,"shared-loading-spinner")}var ee=(()=>{class n{constructor(e){this.countriesService=e,this.countries=[],this.isLoanding=!1}searchByCountry(e){this.isLoanding=!0,this.countriesService.searchCountry(e).subscribe(r=>{this.countries=r,this.isLoanding=!1})}static{this.\u0275fac=function(r){return new(r||n)(u(C))}}static{this.\u0275cmp=g({type:n,selectors:[["countries-by-country-page"]],decls:11,vars:2,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por pais",3,"onDebounce"],[4,"ngIf"],[3,"countries"]],template:function(r,l){r&1&&(i(0,"h2"),o(1,"Por Pais"),t(),c(2,"hr"),i(3,"div",0)(4,"div",1)(5,"shared-search-box",2),y("onDebounce",function(D){return l.searchByCountry(D)}),t()()(),i(6,"div",0)(7,"div",1),c(8,"hr"),p(9,de,1,0,"shared-loading-spinner",3),c(10,"countries-table",4),t()()),r&2&&(a(9),s("ngIf",l.isLoanding),a(),s("countries",l.countries))},dependencies:[f,_,R,P]})}}return n})();var pe=(n,d)=>({"btn-primary":n,"btn-light":d});function ge(n,d){if(n&1){let e=$();i(0,"button",7),y("click",function(){let l=V(e).$implicit,b=x();return U(b.searchByRegion(l))}),o(1),t()}if(n&2){let e=d.$implicit,r=x();s("ngClass",Y(2,pe,r.selectedRegion===e,r.selectedRegion!==e)),a(),m(" ",e," ")}}function ue(n,d){n&1&&c(0,"shared-loading-spinner")}var te=(()=>{class n{constructor(e){this.countriesService=e,this.countries=[],this.regions=["Africa","Americas","Asia","Europe","Oceania"],this.isLoanding=!1}searchByRegion(e){this.selectedRegion=e,this.isLoanding=!0,this.countriesService.searchRegion(e).subscribe(r=>{this.countries=r,this.isLoanding=!1})}static{this.\u0275fac=function(r){return new(r||n)(u(C))}}static{this.\u0275cmp=g({type:n,selectors:[["countries-by-region-page"]],decls:11,vars:3,consts:[[1,"bg-white","rounded-lg","shadow-sm","mb-4","text-center"],[1,"flex","flex-wrap","justify-content-between","p-2","gap-2"],["class","btn flex-grow-1 min-width-100",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"row"],[1,"col"],[4,"ngIf"],[3,"countries"],[1,"btn","flex-grow-1","min-width-100",3,"click","ngClass"]],template:function(r,l){r&1&&(i(0,"h2"),o(1,"Por Region"),t(),c(2,"hr"),i(3,"div",0)(4,"div",1),p(5,ge,2,5,"button",2),t()(),i(6,"div",3)(7,"div",4),c(8,"hr"),p(9,ue,1,0,"shared-loading-spinner",5),c(10,"countries-table",6),t()()),r&2&&(a(5),s("ngForOf",l.regions),a(4),s("ngIf",l.isLoanding),a(),s("countries",l.countries))},dependencies:[q,B,f,_,P],styles:[".min-width-100[_ngcontent-%COMP%]{min-width:100px}.btn[_ngcontent-%COMP%]{padding:.5rem 1rem;border-radius:.375rem;transition:all .2s ease-in-out;border:1px solid transparent}.btn-primary[_ngcontent-%COMP%]{background-color:#0d6efd;color:#fff}.btn-primary[_ngcontent-%COMP%]:hover{background-color:#0b5ed7}.btn-light[_ngcontent-%COMP%]{background-color:#f8f9fa;color:#212529;border-color:#dee2e6}.btn-light[_ngcontent-%COMP%]:hover{background-color:#e9ecef}"]})}}return n})();function fe(n,d){n&1&&(i(0,"div",2),o(1," Espere por favor "),t())}function he(n,d){if(n&1&&(i(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),o(4,"Pais: "),i(5,"strong",5),o(6),t()(),c(7,"hr"),t()(),i(8,"div",3)(9,"div",6)(10,"h1",7),o(11,"Bandera"),t(),c(12,"img",8),t(),i(13,"div",9)(14,"h1",7),o(15,"Informaci\xF3n"),t(),i(16,"ul",10)(17,"li",11)(18,"strong"),o(19,"Capital: "),t(),o(20),t(),i(21,"li",12)(22,"strong"),o(23,"Moneda: "),t(),o(24),t(),i(25,"li",12)(26,"strong"),o(27,"Poblaci\xF3n: "),t(),o(28),M(29,"number"),t(),i(30,"li",12)(31,"strong"),o(32,"Area: "),t(),o(33),M(34,"number"),t(),i(35,"li",12)(36,"strong"),o(37,"Codigo Numerico: "),t(),i(38,"div",13),o(39),t()(),i(40,"li",12)(41,"strong"),o(42,"Abreviatura: "),t(),o(43),t()()()(),i(44,"div",14)(45,"div",9)(46,"h3"),o(47,"Traducciones"),t(),c(48,"hr"),i(49,"div",15)(50,"span",16),o(51),t(),i(52,"span",16),o(53),t(),i(54,"span",16),o(55),t(),i(56,"span",16),o(57),t(),i(58,"span",16),o(59),t(),i(60,"span",16),o(61),t(),i(62,"span",16),o(63),t(),i(64,"span",16),o(65),t(),i(66,"span",16),o(67),t(),i(68,"span",16),o(69),t(),i(70,"span",16),o(71),t()()()()()),n&2){let e=x();a(6),h(e.country.name.common),a(6),s("src",e.country.flags.svg,E)("alt",e.country.name.common),a(8),m(" ",e.country.capital," "),a(4),N(" ",e.getCurrencyName(e.country.currencies)," ( ",e.getCurrencySymbol(e.country.currencies)," ) "),a(4),m(" ",O(29,22,e.country.population)," habitantes "),a(5),m(" ",O(34,24,e.country.area)," km\xB2 "),a(6),N(" ",e.country.idd.root,"",e.country.idd.suffixes," "),a(4),m(" ",e.country.fifa," "),a(8),m(" ",e.country.translations.ara.common," "),a(2),m(" ",e.country.translations.bre.common," "),a(2),m(" ",e.country.translations.rus.common," "),a(2),m(" ",e.country.translations.per.common," "),a(2),m(" ",e.country.translations.fra.common," "),a(2),m(" ",e.country.translations.jpn.common," "),a(2),m(" ",e.country.translations.zho.common," "),a(2),m(" ",e.country.translations.spa.common," "),a(2),m(" ",e.country.translations.kor.common," "),a(2),m(" ",e.country.translations.srp.common," "),a(2),m(" ",e.country.translations.urd.common," ")}}var ne=(()=>{class n{constructor(e,r,l){this.activatedRoute=e,this.router=r,this.countriesService=l}ngOnInit(){this.activatedRoute.params.pipe(z(({id:e})=>this.countriesService.searchCountryByAlphaCode(e))).subscribe(e=>e?this.country=e:this.router.navigateByUrl(""))}getCurrencyName(e){let r=Object.keys(e)[0];return e[r]?.name||"No disponible"}getCurrencySymbol(e){let r=Object.keys(e)[0];return e[r]?.symbol||"No disponible"}static{this.\u0275fac=function(r){return new(r||n)(u(H),u(J),u(C))}}static{this.\u0275cmp=g({type:n,selectors:[["countries-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col-12"],[1,"text-primary"],[1,"col-6"],[1,"text-center"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item","mt-2"],[1,"list-group-item"],[1,"col","phone-code-container"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(r,l){if(r&1&&p(0,fe,2,0,"ng-template",null,0,k)(2,he,72,26,"div",1),r&2){let b=I(1);a(2),s("ngIf",l.country)("ngIfElse",b)}},dependencies:[f,T],styles:[".phone-code-container[_ngcontent-%COMP%]{display:inline-block;max-width:200px;overflow-x:auto;white-space:nowrap;vertical-align:middle;min-height:24px;line-height:24px}.phone-code-container[_ngcontent-%COMP%]::-webkit-scrollbar{height:4px;background-color:transparent}.phone-code-container[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:transparent}.phone-code-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#ccc;border-radius:2px}img[_ngcontent-%COMP%]{width:100%;border-radius:8px;box-shadow:0 4px 10px #00000026;transition:transform .3s ease;object-fit:cover}img[_ngcontent-%COMP%]:hover{transform:scale(1.05)}.list-group-item[_ngcontent-%COMP%]{background-color:#f8f9fa;border:1px solid #ddd;border-radius:8px;box-shadow:0 4px 10px #0000001a;transition:transform .3s ease,box-shadow .3s ease}.list-group-item[_ngcontent-%COMP%]:hover{transform:translateY(-5px);box-shadow:0 6px 15px #0003}.list-group-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#000;font-weight:700;transition:color .3s ease}.list-group-item[_ngcontent-%COMP%]:hover   strong[_ngcontent-%COMP%]{color:#0056b3}.phone-code-container[_ngcontent-%COMP%]{display:inline-block;max-width:200px;overflow-x:auto;white-space:nowrap;vertical-align:middle;min-height:24px;line-height:24px;background-color:#f1f1f1;padding:5px;border-radius:5px;transition:background-color .3s ease}.phone-code-container[_ngcontent-%COMP%]:hover{background-color:#e2e6ea}.list-group[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn .5s ease-out}.badge[_ngcontent-%COMP%]{transition:all .3s ease;box-shadow:0 2px 4px #0000001a;cursor:pointer;font-size:.9rem;padding:.5rem .8rem}.badge[_ngcontent-%COMP%]:hover{transform:scale(1.05);box-shadow:0 4px 8px #0003;background-color:#0056b3!important}.d-flex.flex-wrap[_ngcontent-%COMP%]{gap:.5rem;padding:.5rem}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}"]})}}return n})();var Ce=[{path:"by-capital",component:Z},{path:"by-country",component:ee},{path:"by-region",component:te},{path:"by/:id",component:ne},{path:"**",redirectTo:"by-capital"}],ie=(()=>{class n{static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275mod=S({type:n})}static{this.\u0275inj=w({imports:[L.forChild(Ce),L]})}}return n})();var Ue=(()=>{class n{static{this.\u0275fac=function(r){return new(r||n)}}static{this.\u0275mod=S({type:n})}static{this.\u0275inj=w({imports:[G,ie,W]})}}return n})();export{Ue as CountriesModule};
