(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f1f7d78"],{"428f":function(t,e,n){var r=n("da84");t.exports=r},"4fec":function(t,e,n){t.exports=n.p+"img/spotImg.51238b31.jpg"},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"5d42":function(t,e,n){t.exports=n.p+"img/roomImg.774a43e5.jpg"},"746f":function(t,e,n){var r=n("428f"),o=n("1a2d"),c=n("e538"),a=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||a(e,t,{value:c.f(t)})}},"88e9":function(t,e,n){"use strict";n.r(e);var r=n("7a23"),o={class:"fixNav"},c=Object(r["g"])("p",{class:"py-6 fs-2 fw-bold text-light"},"說走就走的台灣旅行",-1),a=[c],i=Object(r["g"])("p",{class:"py-6 fs-2 fw-bold text-light"},"就像在自己家一樣的台灣旅店",-1),s=[i],u={class:"main container"},f={class:"row"},l={class:"col-lg-2"},b={class:"col-lg-10"};function g(t,e,n,c,i,g){var p=Object(r["z"])("Navbar"),d=Object(r["z"])("SubNav"),v=Object(r["z"])("router-view"),m=Object(r["z"])("GoTop"),O=Object(r["z"])("Footer");return Object(r["u"])(),Object(r["f"])(r["a"],null,[Object(r["g"])("div",o,[Object(r["j"])(p)]),i.isSpots?(Object(r["u"])(),Object(r["f"])("div",{key:0,class:"d-center bg-center bg-cover py-6 mb-4 mt-5",style:Object(r["q"])({backgroundImage:"url("+i.spotImg+")"})},a,4)):(Object(r["u"])(),Object(r["f"])("div",{key:1,class:"d-center bg-center bg-cover py-6 mb-4 mt-5",style:Object(r["q"])({backgroundImage:"url("+i.roomImg+")"})},s,4)),Object(r["g"])("div",u,[Object(r["g"])("div",f,[Object(r["g"])("div",l,[Object(r["j"])(d)]),Object(r["g"])("div",b,[Object(r["j"])(v)])])]),Object(r["j"])(m),Object(r["j"])(O)],64)}var p=n("f8b8");function d(){var t=document.querySelector("#mainNav");t.classList.contains("show")&&t.classList.remove("show")}var v=n("d178"),m=n("fd2d"),O={class:"subNav nav nav-pills flex-lg-column justify-content-center mb-3"},j={class:"nav-item mb-2"};function h(t,e,n,o,c,a){var i=this;return Object(r["u"])(),Object(r["f"])("ul",O,[Object(r["g"])("li",j,[Object(r["g"])("button",{class:Object(r["p"])(["btn nav-link w-100",{active:"全部"===this.$route.query.region}]),type:"button",onClick:e[0]||(e[0]=function(){return a.emitRegion&&a.emitRegion.apply(a,arguments)})}," 全部 ",2)]),(Object(r["u"])(!0),Object(r["f"])(r["a"],null,Object(r["y"])(t.regions,(function(t){return Object(r["u"])(),Object(r["f"])("li",{key:t,class:"nav-item mb-2"},[Object(r["g"])("button",{class:Object(r["p"])(["btn nav-link w-100",{active:i.$route.query.region===t}]),type:"button",onClick:e[1]||(e[1]=function(){return a.emitRegion&&a.emitRegion.apply(a,arguments)})},Object(r["B"])(t),3)])})),128))])}var y=n("5530"),w=(n("b0c0"),n("498a"),n("5502")),S={data:function(){return{region:this.$route.query.region,pathName:this.$route.name,goPath:""}},watch:{$route:function(){this.$route.name!==this.pathName&&(this.pathName=this.$route.name)}},computed:Object(y["a"])({},Object(w["d"])(["regions"])),methods:{emitRegion:function(t){this.region=t.target.textContent.trim(),"Spots"!==this.pathName&&(this.pathName="".concat(this.pathName,"s")),this.$router.push({path:"/".concat(this.pathName),query:{region:this.region,page:1}}),p["a"].emit("emit-region",this.region)}}},k=n("6b0d"),N=n.n(k);const P=N()(S,[["render",h]]);var x=P,E=n("c12c"),T=n("4fec"),C=n.n(T),I=n("5d42"),$=n.n(I),q={data:function(){return{isSpots:!0,spotImg:C.a,roomImg:$.a}},components:{Navbar:v["a"],Footer:m["a"],SubNav:x,GoTop:E["a"]},watch:{$route:function(){"layout"!==this.$route.path&&d()}},mounted:function(){var t=this;p["a"].on("emit-category",(function(e){t.isSpots=e}))},unmounted:function(){p["a"].off("emit-category")}};const D=N()(q,[["render",g]]);e["default"]=D},a4d3:function(t,e,n){"use strict";var r=n("23e7"),o=n("da84"),c=n("d066"),a=n("c430"),i=n("83ab"),s=n("4930"),u=n("d039"),f=n("1a2d"),l=n("e8b5"),b=n("1626"),g=n("861d"),p=n("d9b5"),d=n("825a"),v=n("7b0b"),m=n("fc6a"),O=n("a04b"),j=n("577e"),h=n("5c6c"),y=n("7c73"),w=n("df75"),S=n("241c"),k=n("057f"),N=n("7418"),P=n("06cf"),x=n("9bf2"),E=n("d1e7"),T=n("6eeb"),C=n("5692"),I=n("f772"),$=n("d012"),q=n("90e3"),D=n("b622"),Y=n("e538"),z=n("746f"),L=n("d44e"),F=n("69f3"),R=n("b727").forEach,J=I("hidden"),B="Symbol",G="prototype",_=D("toPrimitive"),H=F.set,M=F.getterFor(B),Q=Object[G],X=o.Symbol,A=c("JSON","stringify"),K=P.f,U=x.f,V=k.f,W=E.f,Z=C("symbols"),tt=C("op-symbols"),et=C("string-to-symbol-registry"),nt=C("symbol-to-string-registry"),rt=C("wks"),ot=o.QObject,ct=!ot||!ot[G]||!ot[G].findChild,at=i&&u((function(){return 7!=y(U({},"a",{get:function(){return U(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=K(Q,e);r&&delete Q[e],U(t,e,n),r&&t!==Q&&U(Q,e,r)}:U,it=function(t,e){var n=Z[t]=y(X[G]);return H(n,{type:B,tag:t,description:e}),i||(n.description=e),n},st=function(t,e,n){t===Q&&st(tt,e,n),d(t);var r=O(e);return d(n),f(Z,r)?(n.enumerable?(f(t,J)&&t[J][r]&&(t[J][r]=!1),n=y(n,{enumerable:h(0,!1)})):(f(t,J)||U(t,J,h(1,{})),t[J][r]=!0),at(t,r,n)):U(t,r,n)},ut=function(t,e){d(t);var n=m(e),r=w(n).concat(pt(n));return R(r,(function(e){i&&!lt.call(n,e)||st(t,e,n[e])})),t},ft=function(t,e){return void 0===e?y(t):ut(y(t),e)},lt=function(t){var e=O(t),n=W.call(this,e);return!(this===Q&&f(Z,e)&&!f(tt,e))&&(!(n||!f(this,e)||!f(Z,e)||f(this,J)&&this[J][e])||n)},bt=function(t,e){var n=m(t),r=O(e);if(n!==Q||!f(Z,r)||f(tt,r)){var o=K(n,r);return!o||!f(Z,r)||f(n,J)&&n[J][r]||(o.enumerable=!0),o}},gt=function(t){var e=V(m(t)),n=[];return R(e,(function(t){f(Z,t)||f($,t)||n.push(t)})),n},pt=function(t){var e=t===Q,n=V(e?tt:m(t)),r=[];return R(n,(function(t){!f(Z,t)||e&&!f(Q,t)||r.push(Z[t])})),r};if(s||(X=function(){if(this instanceof X)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?j(arguments[0]):void 0,e=q(t),n=function(t){this===Q&&n.call(tt,t),f(this,J)&&f(this[J],e)&&(this[J][e]=!1),at(this,e,h(1,t))};return i&&ct&&at(Q,e,{configurable:!0,set:n}),it(e,t)},T(X[G],"toString",(function(){return M(this).tag})),T(X,"withoutSetter",(function(t){return it(q(t),t)})),E.f=lt,x.f=st,P.f=bt,S.f=k.f=gt,N.f=pt,Y.f=function(t){return it(D(t),t)},i&&(U(X[G],"description",{configurable:!0,get:function(){return M(this).description}}),a||T(Q,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:X}),R(w(rt),(function(t){z(t)})),r({target:B,stat:!0,forced:!s},{for:function(t){var e=j(t);if(f(et,e))return et[e];var n=X(e);return et[e]=n,nt[n]=e,n},keyFor:function(t){if(!p(t))throw TypeError(t+" is not a symbol");if(f(nt,t))return nt[t]},useSetter:function(){ct=!0},useSimple:function(){ct=!1}}),r({target:"Object",stat:!0,forced:!s,sham:!i},{create:ft,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:bt}),r({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:gt,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:u((function(){N.f(1)}))},{getOwnPropertySymbols:function(t){return N.f(v(t))}}),A){var dt=!s||u((function(){var t=X();return"[null]"!=A([t])||"{}"!=A({a:t})||"{}"!=A(Object(t))}));r({target:"JSON",stat:!0,forced:dt},{stringify:function(t,e,n){var r,o=[t],c=1;while(arguments.length>c)o.push(arguments[c++]);if(r=e,(g(e)||void 0!==t)&&!p(t))return l(e)||(e=function(t,e){if(b(r)&&(e=r.call(this,t,e)),!p(e))return e}),o[1]=e,A.apply(null,o)}})}if(!X[G][_]){var vt=X[G].valueOf;T(X[G],_,(function(){return vt.apply(this,arguments)}))}L(X,B),$[J]=!0},b0c0:function(t,e,n){var r=n("83ab"),o=n("5e77").EXISTS,c=n("9bf2").f,a=Function.prototype,i=a.toString,s=/^\s*function ([^ (]*)/,u="name";r&&!o&&c(a,u,{configurable:!0,get:function(){try{return i.call(this).match(s)[1]}catch(t){return""}}})},b64b:function(t,e,n){var r=n("23e7"),o=n("7b0b"),c=n("df75"),a=n("d039"),i=a((function(){c(1)}));r({target:"Object",stat:!0,forced:i},{keys:function(t){return c(o(t))}})},c12c:function(t,e,n){"use strict";var r=n("7a23"),o=Object(r["g"])("i",{class:"fas fa-angle-up"},null,-1),c=[o];function a(t,e,n,o,a,i){return Object(r["u"])(),Object(r["f"])("button",{class:Object(r["p"])(["topBtn btn rounded",{"d-block":i.top}]),onClick:e[0]||(e[0]=function(){return i.goTop&&i.goTop.apply(i,arguments)})},c,2)}var i={data:function(){return{pageY:""}},computed:{top:function(){var t=!1;return this.pageY>200&&(t=!0),t}},methods:{goTop:function(){window.scroll(0,0)}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){t.pageY=window.pageYOffset}))},unmounted:function(){var t=this;window.removeEventListener("scroll",(function(){t.pageY=window.pageYOffset}))}},s=n("6b0d"),u=n.n(s);const f=u()(i,[["render",a]]);e["a"]=f},d178:function(t,e,n){"use strict";var r=n("7a23"),o={class:"container"},c=Object(r["g"])("a",{class:"navbar-brand",href:"#"},"Taiwan",-1),a=Object(r["g"])("button",{class:"btn d-lg-none",type:"button","data-bs-toggle":"collapse","data-bs-target":"#mainNav","aria-controls":"mainNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(r["g"])("span",{class:"navbar-toggler-icon"})],-1),i={class:"collapse navbar-collapse",id:"mainNav"},s={class:"navbar-nav ms-auto mb-2 mb-lg-0"},u={class:"nav-item"},f=Object(r["i"])(" 景點 "),l={class:"nav-item"},b=Object(r["i"])(" 住宿 ");function g(t,e,n,g,p,d){var v=Object(r["z"])("router-link");return Object(r["u"])(),Object(r["f"])("nav",{class:Object(r["p"])(["navbar navbar-expand-lg navbar-light",{changeNav:p.scroll}])},[Object(r["g"])("div",o,[c,a,Object(r["g"])("div",i,[Object(r["g"])("ul",s,[Object(r["g"])("li",u,[Object(r["j"])(v,{to:"/Spots",class:"nav-link",onClick:e[0]||(e[0]=function(t){return d.emitCategory(!0)})},{default:Object(r["E"])((function(){return[f]})),_:1})]),Object(r["g"])("li",l,[Object(r["j"])(v,{to:"/Hotels",class:"nav-link",onClick:e[1]||(e[1]=function(t){return d.emitCategory(!1)})},{default:Object(r["E"])((function(){return[b]})),_:1})])])])])],2)}var p=n("f8b8"),d={data:function(){return{scroll:""}},methods:{emitCategory:function(t){p["a"].emit("emit-category",t)}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){t.scroll=document.documentElement.scrollTop>40}))},unmounted:function(){var t=this;window.removeEventListener("scroll",(function(){t.scroll=document.documentElement.scrollTop>40}))}},v=n("6b0d"),m=n.n(v);const O=m()(d,[["render",g]]);e["a"]=O},dbb4:function(t,e,n){var r=n("23e7"),o=n("83ab"),c=n("56ef"),a=n("fc6a"),i=n("06cf"),s=n("8418");r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,n,r=a(t),o=i.f,u=c(r),f={},l=0;while(u.length>l)n=o(r,e=u[l++]),void 0!==n&&s(f,e,n);return f}})},e439:function(t,e,n){var r=n("23e7"),o=n("d039"),c=n("fc6a"),a=n("06cf").f,i=n("83ab"),s=o((function(){a(1)})),u=!i||s;r({target:"Object",stat:!0,forced:u,sham:!i},{getOwnPropertyDescriptor:function(t,e){return a(c(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},f8b8:function(t,e,n){"use strict";var r=function(t){return{all:t=t||new Map,on:function(e,n){var r=t.get(e);r?r.push(n):t.set(e,[n])},off:function(e,n){var r=t.get(e);r&&(n?r.splice(r.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var r=t.get(e);r&&r.slice().map((function(t){t(n)})),(r=t.get("*"))&&r.slice().map((function(t){t(e,n)}))}}},o=r();e["a"]=o},fd2d:function(t,e,n){"use strict";var r=n("7a23"),o={class:"bg-primary"},c=Object(r["h"])('<div class="container"><ul class="d-flex justify-content-between align-items-center list-unstyled mb-0"><li class="nav-item"><a href="https://tdx.transportdata.tw/" class="nav-link ps-0 text-light"> 資料來源 </a></li><li class="nav-item"><span class="text-light">Copyright © 2021 Yiren</span></li></ul></div>',1),a=[c];function i(t,e){return Object(r["u"])(),Object(r["f"])("div",o,a)}var s=n("6b0d"),u=n.n(s);const f={},l=u()(f,[["render",i]]);e["a"]=l}}]);
//# sourceMappingURL=chunk-6f1f7d78.276a0928.js.map