(function(t){function e(e){for(var r,u,s=e[0],i=e[1],c=e[2],l=0,p=[];l<s.length;l++)u=s[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);f&&f(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function u(t){return s.p+"js/"+({state:"state"}[t]||t)+"."+{state:"f58f86b9"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=u(t);var c=new Error;a=function(e){i.onerror=i.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,n[1](c)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/todo-app-vue/",s.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var f=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u=(n("034f"),n("2877")),s={},i=Object(u["a"])(s,o,a,!1,null,null,null),c=i.exports,l=n("2909"),f=(n("d81d"),n("99af"),n("4de4"),n("2f62"));r["a"].use(f["a"]);var p=function(t,e){localStorage.setItem(t,JSON.stringify(e))},d=new f["a"].Store({state:{tasks:localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[{id:1,value:"Instalar vue-cli",completed:!0}]},mutations:{toggleCompletedTask:function(t,e){t.tasks=t.tasks.map((function(t){return t.id===e&&(t.completed=!t.completed),t})),p("tasks",t.tasks)},addNewTask:function(t,e){t.tasks=[].concat(Object(l["a"])(t.tasks),[{id:t.tasks.length+1,value:e,completed:!1}]),p("tasks",t.tasks)},removeItem:function(t,e){t.tasks=t.tasks.filter((function(t){return t.id!==e})).map((function(t,e){return t.id=e,t})),p("tasks",t.tasks)}},actions:{TOGGLE_ITEM:function(t,e){var n=t.commit;n("toggleCompletedTask",e)},ADD_ITEM:function(t,e){var n=t.commit;n("addNewTask",e)},REMOVE_ITEM:function(t,e){var n=t.commit;n("removeItem",e)}},getters:{getTasks:function(t){return t.tasks}}}),m=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));r["a"].use(m["a"]);var v=[{path:"/",name:"Home",component:function(){return n.e("state").then(n.bind(null,"3c20"))}}],g=new m["a"]({mode:"history",base:"/todo-app-vue/",routes:v}),b=g;n("b059"),n("7d05");r["a"].config.productionTip=!1,new r["a"]({router:b,store:d,render:function(t){return t(c)}}).$mount("#app")},"7d05":function(t,e,n){},"85ec":function(t,e,n){},b059:function(t,e,n){}});
//# sourceMappingURL=app.36e10f70.js.map