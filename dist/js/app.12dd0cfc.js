(function(t){function e(e){for(var r,a,o=e[0],i=e[1],s=e[2],u=0,d=[];u<o.length;u++)a=o[u],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);f&&f(e);while(d.length)d.shift()();return l.push.apply(l,s||[]),n()}function n(){for(var t,e=0;e<l.length;e++){for(var n=l[e],r=!0,a=1;a<n.length;a++){var o=n[a];0!==c[o]&&(r=!1)}r&&(l.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},c={app:0},l=[];function o(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-1dd1fd0c":"9c73db2d","chunk-643c23ca":"dc95c062","chunk-78a400cf":"eda20bb8","chunk-796c4458":"f0656e2a"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-1dd1fd0c":1,"chunk-643c23ca":1,"chunk-78a400cf":1,"chunk-796c4458":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-1dd1fd0c":"1b032a25","chunk-643c23ca":"f82123cf","chunk-78a400cf":"f601ca9b","chunk-796c4458":"c2631d6c"}[t]+".css",c=i.p+r,l=document.getElementsByTagName("link"),o=0;o<l.length;o++){var s=l[o],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===r||u===c))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){s=d[o],u=s.getAttribute("data-href");if(u===r||u===c)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||c,l=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=r,delete a[t],f.parentNode.removeChild(f),n(l)},f.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[t]=0})));var r=c[t];if(0!==r)if(r)e.push(r[2]);else{var l=new Promise((function(e,n){r=c[t]=[e,n]}));e.push(r[2]=l);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=o(t);var d=new Error;s=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=c[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}c[t]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/free-drag/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var f=u;l.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"2c2c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",{staticClass:"title"},[t._v("free-drag功能展示")]),n("ul",{staticClass:"list"},[n("router-link",{staticClass:"link",attrs:{to:"/basic",tag:"div"}},[t._v("基础功能：拖拽小球、限制边界")]),n("router-link",{staticClass:"link",attrs:{to:"/passby",tag:"div"}},[t._v("处理拖拽元素的通过及离开元素")]),n("router-link",{staticClass:"link",attrs:{to:"/slider",tag:"div"}},[t._v("限制运动方向和边界：滑块")]),n("router-link",{staticClass:"link",attrs:{to:"/moveHandler",tag:"div"}},[t._v("拖拽开始、进行、结束时的事件处理函数及函数节流")]),n("router-link",{staticClass:"link",attrs:{to:"/multiple",tag:"div"}},[t._v("组合示例")])],1),n("div",{staticClass:"display"},[n("router-view")],1)])},c=[],l=(n("034f"),n("2877")),o={},i=Object(l["a"])(o,a,c,!1,null,null,null),s=i.exports,u=(n("d3b7"),n("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"wrapper",staticClass:"basic-wrapper"},[n("img",{ref:"ball1",staticClass:"ball",attrs:{src:"https://js.cx/clipart/ball.svg",alt:"ball",id:"ball1"}}),n("img",{ref:"ball2",staticClass:"ball",attrs:{src:"https://js.cx/clipart/ball.svg",alt:"ball",id:"ball2"}}),n("img",{ref:"ball3",staticClass:"ball",attrs:{src:"https://js.cx/clipart/ball.svg",alt:"ball",id:"ball3"}})])},f=[],p=n("edd5"),h={mounted:function(){var t=this.$refs.wrapper,e=this.$refs.ball1,n=this.$refs.ball2,r=this.$refs.ball3,a=t.getBoundingClientRect(),c=p["a"].createNewInstance({moveHandler:{onMoveStart:function(t){t.target.style.transform="translate3d(0, 0, 0)"}},boundary:a});c(e),c({element:n}),c.draggable({element:r})}},b=h,v=(n("61e5"),Object(l["a"])(b,d,f,!1,null,null,null)),m=v.exports;r["a"].use(u["a"]);var g=[{path:"/",redirect:"/basic"},{path:"/basic",component:m},{path:"/passby",component:function(){return n.e("chunk-643c23ca").then(n.bind(null,"b2d2"))}},{path:"/slider",component:function(){return n.e("chunk-796c4458").then(n.bind(null,"1983"))}},{path:"/moveHandler",component:function(){return n.e("chunk-1dd1fd0c").then(n.bind(null,"587c"))}},{path:"/multiple",component:function(){return n.e("chunk-78a400cf").then(n.bind(null,"681e"))}}],k=new u["a"]({routes:g}),y=k;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(s)},router:y}).$mount("#app")},"61e5":function(t,e,n){"use strict";var r=n("2c2c"),a=n.n(r);a.a},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.12dd0cfc.js.map