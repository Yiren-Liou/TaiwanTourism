(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e0c33da"],{2208:function(t,e,a){"use strict";a.r(e);var n=a("7a23"),i={class:"container"};function r(t,e,a,r,c,s){var o=Object(n["z"])("CardList");return Object(n["u"])(),Object(n["f"])("div",i,[Object(n["j"])(o,{category:c.category},null,8,["category"])])}var c=a("c995"),s={data:function(){return{category:"Hotel"}},components:{CardList:c["a"]}},o=a("6b0d"),l=a.n(o);const u=l()(s,[["render",r]]);e["default"]=u},"408a":function(t,e){var a=1..valueOf;t.exports=function(t){return a.call(t)}},"99af":function(t,e,a){"use strict";var n=a("23e7"),i=a("d039"),r=a("e8b5"),c=a("861d"),s=a("7b0b"),o=a("07fa"),l=a("8418"),u=a("65f0"),g=a("1dde"),p=a("b622"),f=a("2d00"),b=p("isConcatSpreadable"),h=9007199254740991,d="Maximum allowed index exceeded",m=f>=51||!i((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),j=g("concat"),O=function(t){if(!c(t))return!1;var e=t[b];return void 0!==e?!!e:r(t)},v=!m||!j;n({target:"Array",proto:!0,forced:v},{concat:function(t){var e,a,n,i,r,c=s(this),g=u(c,0),p=0;for(e=-1,n=arguments.length;e<n;e++)if(r=-1===e?c:arguments[e],O(r)){if(i=o(r),p+i>h)throw TypeError(d);for(a=0;a<i;a++,p++)a in r&&l(g,p,r[a])}else{if(p>=h)throw TypeError(d);l(g,p++,r)}return g.length=p,g}})},a9e3:function(t,e,a){"use strict";var n=a("83ab"),i=a("da84"),r=a("94ca"),c=a("6eeb"),s=a("1a2d"),o=a("7156"),l=a("d9b5"),u=a("c04e"),g=a("d039"),p=a("241c").f,f=a("06cf").f,b=a("9bf2").f,h=a("408a"),d=a("58a8").trim,m="Number",j=i[m],O=j.prototype,v=function(t){var e=u(t,"number");return"bigint"===typeof e?e:_(e)},_=function(t){var e,a,n,i,r,c,s,o,g=u(t,"number");if(l(g))throw TypeError("Cannot convert a Symbol value to a number");if("string"==typeof g&&g.length>2)if(g=d(g),e=g.charCodeAt(0),43===e||45===e){if(a=g.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(g.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+g}for(r=g.slice(2),c=r.length,s=0;s<c;s++)if(o=r.charCodeAt(s),o<48||o>i)return NaN;return parseInt(r,n)}return+g};if(r(m,!j(" 0o1")||!j("0b1")||j("+0x1"))){for(var w,y=function(t){var e=arguments.length<1?0:j(v(t)),a=this;return a instanceof y&&g((function(){h(a)}))?o(Object(e),a,y):e},N=n?p(j):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),k=0;N.length>k;k++)s(j,w=N[k])&&!s(y,w)&&b(y,w,f(j,w));y.prototype=O,O.constructor=y,c(i,m,y)}},b0c0:function(t,e,a){var n=a("83ab"),i=a("5e77").EXISTS,r=a("9bf2").f,c=Function.prototype,s=c.toString,o=/^\s*function ([^ (]*)/,l="name";n&&!i&&r(c,l,{configurable:!0,get:function(){try{return s.call(this).match(o)[1]}catch(t){return""}}})},c995:function(t,e,a){"use strict";a("99af");var n=a("7a23"),i={class:"row mb-5"},r=["src","alt"],c={class:"card-body"},s={class:"list-unstyled"},o={class:"d-flex mb-3"},l={class:"badge bg-secondary me-2"},u={class:"badge bg-secondary"},g={class:"mb-2"},p={class:"card-title fw-bold mb-0"},f={class:"mb-2"},b={class:"text-truncate"},h={key:0,class:"card-footer border-0 bg-transparent mb-2"},d=["href"],m={class:"d-center flex-column mb-4"};function j(t,e,a,j,O,v){var _=Object(n["z"])("router-link"),w=Object(n["z"])("Pagination");return Object(n["u"])(),Object(n["f"])(n["a"],null,[Object(n["g"])("div",i,[(Object(n["u"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(O.filterData,(function(t){return Object(n["u"])(),Object(n["f"])("div",{key:t.ID,class:"col-md-6 col-lg-4 mb-3"},[Object(n["j"])(_,{to:{path:"/".concat(a.category,"/").concat(t.ID),query:{region:t.Region,name:t.Name}},class:"card h-100 shadow-sm"},{default:Object(n["E"])((function(){return[Object(n["g"])("img",{src:t.Picture.PictureUrl1,class:"cardImg card-img-top img-fluid objectFit",alt:t.Name,onerror:"this.src='https://images.unsplash.com/photo-1623018035782-b269248df916?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'"},null,8,r),Object(n["g"])("div",c,[Object(n["g"])("ul",s,[Object(n["g"])("li",o,[Object(n["g"])("span",l,Object(n["B"])(t.Region),1),Object(n["g"])("span",u,Object(n["B"])(t.City),1)]),Object(n["g"])("li",g,[Object(n["g"])("h5",p,Object(n["B"])(t.Name),1)]),Object(n["g"])("li",f," 聯絡電話: "+Object(n["B"])(t.Phone),1),Object(n["g"])("li",b,Object(n["B"])(t.Description),1)])]),t.WebsiteUrl?(Object(n["u"])(),Object(n["f"])("div",h,[Object(n["g"])("a",{href:t.WebsiteUrl,target:"_blank",class:"btn btn-outline-primary rounded w-100"}," 前往網站 ",8,d)])):Object(n["e"])("",!0)]})),_:2},1032,["to"])])})),128))]),Object(n["g"])("div",m,[Object(n["j"])(w,{page:O.pagination},null,8,["page"])])],64)}a("b0c0"),a("4de4");var O=a("f8b8");a("a9e3"),a("159b");function v(t,e){var a=12,n=[],i={total_pages:Math.ceil(e.length/a),current_page:Number(t),has_pre:!1,has_next:!1,maxData:t*a,minData:(t-1)*a+1};return e.forEach((function(t,e){e+1>=i.minData&&e+1<=i.maxData&&n.push(t)})),t>1&&(i.has_pre=!0),t<i.total_pages&&(i.has_next=!0),{pages:i,filterData:n}}var _={"aria-label":"Page navigation"},w={class:"pagination"},y=Object(n["g"])("i",{class:"fas fa-angle-double-left"},null,-1),N=[y],k=Object(n["g"])("i",{class:"fas fa-angle-left"},null,-1),E=[k],I=["onClick"],P=Object(n["g"])("i",{class:"fas fa-angle-right"},null,-1),x=[P],D=Object(n["g"])("i",{class:"fas fa-angle-double-right"},null,-1),L=[D];function C(t,e,a,i,r,c){return Object(n["u"])(),Object(n["f"])(n["a"],null,[Object(n["g"])("nav",_,[Object(n["g"])("ul",w,[Object(n["g"])("li",{class:Object(n["p"])(["page-item",{disabled:1===a.page.current_page,"d-none":c.windowSmallWidth}])},[Object(n["g"])("a",{class:"page-link",href:"#",onClick:e[0]||(e[0]=Object(n["F"])((function(t){return c.emitPage(1)}),["prevent"]))}," 最前頁 ")],2),Object(n["g"])("li",{class:Object(n["p"])(["page-item",{disabled:a.page.current_page<10}])},[Object(n["g"])("a",{class:"page-link",href:"#",onClick:e[1]||(e[1]=Object(n["F"])((function(t){return c.emitPage(a.page.current_page-9)}),["prevent"]))},N)],2),Object(n["g"])("li",{class:Object(n["p"])(["page-item",{disabled:!a.page.has_pre}])},[Object(n["g"])("a",{class:"page-link",href:"#",onClick:e[2]||(e[2]=Object(n["F"])((function(t){return c.emitPage(a.page.current_page-1)}),["prevent"]))},E)],2),(Object(n["u"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(c.showPages,(function(t){return Object(n["u"])(),Object(n["f"])("li",{class:Object(n["p"])(["page-item",{active:t===a.page.current_page}]),key:"page"+t},[Object(n["g"])("a",{class:"page-link",href:"#",onClick:Object(n["F"])((function(e){return c.emitPage(t)}),["prevent"])},Object(n["B"])(t),9,I)],2)})),128)),Object(n["g"])("li",{class:Object(n["p"])(["page-item",{disabled:!a.page.has_next}])},[Object(n["g"])("a",{class:"page-link",href:"#",onClick:e[3]||(e[3]=Object(n["F"])((function(t){return c.emitPage(a.page.current_page+1)}),["prevent"]))},x)],2),Object(n["g"])("li",{class:Object(n["p"])(["page-item",{disabled:!a.page.has_next||a.page.total_pages-a.page.current_page<10}])},[Object(n["g"])("a",{class:"page-link",href:"#",onClick:e[4]||(e[4]=Object(n["F"])((function(t){return c.emitPage(a.page.current_page+9)}),["prevent"]))},L)],2),Object(n["g"])("li",{class:Object(n["p"])(["page-item",{disabled:a.page.current_page===a.page.total_pages,"d-none":c.windowSmallWidth}])},[Object(n["g"])("a",{class:"page-link",href:"#",onClick:e[5]||(e[5]=Object(n["F"])((function(t){return c.emitPage(a.page.total_pages)}),["prevent"]))}," 最尾頁 ")],2)])]),Object(n["g"])("span",null,"總共 "+Object(n["B"])(a.page.total_pages)+" 頁",1)],64)}var S={data:function(){return{docWidth:""}},props:["page"],watch:{docWidth:function(){this.docWidth=document.documentElement.scrollWidth}},computed:{showPages:function(){var t=[];if(this.page.total_pages<6)for(var e=1;e<this.page.total_pages+1;e+=1)t.push(e);else if(this.page.current_page<4)t=[1,2,3,4,5];else if(this.page.total_pages<6)for(var a=0;a<this.page.total_pages;a+=1)t.push(a);else if(this.page.total_pages-this.page.current_page<3)for(var n=this.page.total_pages-4;n<this.page.total_pages+1;n+=1)t.push(n);else for(var i=this.page.current_page-2;i<this.page.current_page+3;i+=1)t.push(i);return t},windowSmallWidth:function(){return this.docWidth<576}},methods:{emitPage:function(t){O["a"].emit("emit-page",t)}},mounted:function(){var t=this;window.addEventListener("resize",(function(){t.docWidth=document.documentElement.scrollWidth}))},unmounted:function(){var t=this;window.removeEventListener("resize",(function(){t.docWidth=document.documentElement.scrollWidth}))}},F=a("6b0d"),W=a.n(F);const A=W()(S,[["render",C]]);var M=A,T={data:function(){return{dataList:"",filterData:"",tempData:"",pagination:"",routeName:this.$route.name,path:{region:""}}},props:["category"],components:{Pagination:M},computed:{spotsList:function(){return this.$store.getters.spotsList},hotelsList:function(){return this.$store.getters.hotelsList}},methods:{filterPages:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;if("全部"!==this.path.region){var a=this.tempData.filter((function(e){return e.Region===t.path.region}));this.tempData=a}var n=v(e,this.tempData);this.pagination=n.pages,this.filterData=n.filterData,this.$router.push({path:"/".concat(this.routeName),query:{region:this.path.region,page:e}})},filterSpots:function(t){this.path.region=t,this.tempData=this.dataList,this.filterPages()},init:function(){this.path.region=this.$route.query.region?this.$route.query.region:"全部","Spots"===this.routeName?this.dataList=this.spotsList:"Hotels"===this.routeName&&(this.dataList=this.hotelsList),this.tempData=this.dataList,this.filterPages()}},mounted:function(){var t=this;this.init(),O["a"].on("emit-page",(function(e){t.filterPages(e)})),O["a"].on("emit-region",(function(e){t.path.region=e,t.filterSpots(e)}))},unmounted:function(){O["a"].off("emit-page"),O["a"].off("emit-region")}};const B=W()(T,[["render",j]]);e["a"]=B},f8b8:function(t,e,a){"use strict";var n=function(t){return{all:t=t||new Map,on:function(e,a){var n=t.get(e);n?n.push(a):t.set(e,[a])},off:function(e,a){var n=t.get(e);n&&(a?n.splice(n.indexOf(a)>>>0,1):t.set(e,[]))},emit:function(e,a){var n=t.get(e);n&&n.slice().map((function(t){t(a)})),(n=t.get("*"))&&n.slice().map((function(t){t(e,a)}))}}},i=n();e["a"]=i}}]);
//# sourceMappingURL=chunk-0e0c33da.2b228a43.js.map