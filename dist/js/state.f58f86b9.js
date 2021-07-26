(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["state"],{"3c20":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"state"},[a("div",{attrs:{id:"container"}},[a("ul",{attrs:{id:"list"}},t._l(t.tasks,(function(e,s){return a("ListItem",{key:s,attrs:{item:e},on:{toggleItem:t.toggleItem,removeItem:t.removeItem}})})),1),a("div",{attrs:{id:"new-item-box"}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.addItem.apply(null,arguments)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newItem,expression:"newItem"}],attrs:{type:"text",name:"",placeholder:"Digite a nova tarefa..."},domProps:{value:t.newItem},on:{input:function(e){e.target.composing||(t.newItem=e.target.value)}}}),a("button",{attrs:{type:"submit"}},[a("Icon",{attrs:{name:"plus"}})],1)])])])])},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"list-item",class:{completed:t.item.completed}},[a("div",{staticClass:"list-item-content",on:{click:function(e){return t.toggleItem(t.item.id)}}},[a("Icon",{attrs:{name:t.item.completed?"check":"circle"}}),a("p",[t._v(t._s(t.item.value))])],1),a("button",{staticClass:"list-item-remove",on:{click:function(e){return t.removeItem(t.item)}}},[a("Icon",{attrs:{name:"times"}})],1)])},c=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",["check"===t.name?a("svg",{staticClass:"svg-inline--fa fa-check fa-w-16 icon",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}})]):t._e(),"circle"===t.name?a("svg",{staticClass:"svg-inline--fa fa-circle fa-w-16 icon",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"circle",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"}})]):t._e(),"times"===t.name?a("svg",{staticClass:"svg-inline--fa fa-times fa-w-11 icon",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"times",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512"}},[a("path",{attrs:{fill:"currentColor",d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}})]):t._e(),"plus"===t.name?a("svg",{staticClass:"svg-inline--fa fa-plus fa-w-14 icon",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"plus",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"}},[a("path",{attrs:{fill:"currentColor",d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"}})]):t._e()])},l=[],o={name:"Icon",props:{name:{required:!0}}},m=o,u=a("2877"),f=Object(u["a"])(m,r,l,!1,null,null,null),d=f.exports,p={name:"ListItem",components:{Icon:d},props:["item"],methods:{toggleItem:function(t){this.$emit("toggleItem",t)},removeItem:function(t){this.$emit("removeItem",t)}}},v=p,w=Object(u["a"])(v,i,c,!1,null,null,null),h=w.exports,g={name:"State",components:{ListItem:h,Icon:d},data:function(){return{newItem:""}},computed:{tasks:function(){return this.$store.getters.getTasks}},methods:{toggleItem:function(t){this.$store.dispatch("TOGGLE_ITEM",t)},addItem:function(){this.newItem.length&&(this.$store.dispatch("ADD_ITEM",this.newItem),this.newItem="")},removeItem:function(t){var e=window.confirm('Tem certeza que deseja remover: "'.concat(t.value,'" ?'));e&&this.$store.dispatch("REMOVE_ITEM",t.id)}}},I=g,x=Object(u["a"])(I,s,n,!1,null,null,null);e["default"]=x.exports}}]);
//# sourceMappingURL=state.f58f86b9.js.map