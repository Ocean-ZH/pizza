(function(t){function e(e){for(var n,i,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)i=o[u],s[i]&&d.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);m&&m(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},r=[];function i(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"8c7d5386"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=s[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise(function(e,n){a=s[t]=[e,n]});e.push(a[2]=n);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=i(t),r=function(e){c.onerror=c.onload=null,clearTimeout(l);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+n+": "+r+")");i.type=n,i.request=r,a[1](i)}s[t]=void 0}};var l=setTimeout(function(){r({type:"timeout",target:c})},12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/pizza/dist/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var m=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"02e2":function(t,e,a){},"099e":function(t,e,a){"use strict";var n=a("0b89"),s=a.n(n);s.a},"0b89":function(t,e,a){},"3b40":function(t,e,a){"use strict";var n=a("02e2"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container"},[a("vHeader")],1),a("div",{staticClass:"container"},[a("router-view")],1),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col col-sm-12 col-md-4"},[a("router-view",{attrs:{name:"delivery"}})],1),a("div",{staticClass:"col col-sm-12 col-md-4"},[a("router-view",{attrs:{name:"guide"}})],1),a("div",{staticClass:"col col-sm-12 col-md-4"},[a("router-view",{attrs:{name:"history"}})],1)])])])},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("router-link",{staticClass:"mr-auto",attrs:{to:"/"}},[a("svg",{staticClass:"d-block mx-auto",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[a("circle",{attrs:{cx:"12",cy:"12",r:"10"}}),a("line",{attrs:{x1:"14.31",y1:"8",x2:"20.05",y2:"17.94"}}),a("line",{attrs:{x1:"9.69",y1:"8",x2:"21.17",y2:"8"}}),a("line",{attrs:{x1:"7.38",y1:"12",x2:"13.12",y2:"2.06"}}),a("line",{attrs:{x1:"9.69",y1:"16",x2:"3.95",y2:"6.06"}}),a("line",{attrs:{x1:"14.31",y1:"16",x2:"2.83",y2:"16"}}),a("line",{attrs:{x1:"16.62",y1:"12",x2:"10.88",y2:"21.94"}})])]),a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Pizza点餐系统")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"home"}}},[t._v("主页")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"menu"}}},[t._v("菜单")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"admin"}}},[t._v("管理")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"about"}}},[t._v("关于")])],1)]),a("ul",{staticClass:"navbar-nav ml-auto"},[a("li",{directives:[{name:"show",rawName:"v-show",value:!t.isLogin,expression:"!isLogin"}],staticClass:"nav-link"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"login"}}},[t._v("登录")])],1),a("li",{directives:[{name:"show",rawName:"v-show",value:!t.isLogin,expression:"!isLogin"}],staticClass:"nav-link"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"register"}}},[t._v("注册")])],1),a("li",{staticClass:"nav-link",staticStyle:{"line-height":"2.5"}},[t._v("\n          "+t._s(t.currentUser)+"\n        ")]),a("li",{directives:[{name:"show",rawName:"v-show",value:t.isLogin,expression:"isLogin"}],staticClass:"nav-link"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"login"}}},[t._v("[退出]")])],1)])])],1)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],c={name:"vHeader",data:function(){return{}},components:{},computed:{currentUser:function(){return this.$store.getters.currentUser},isLogin:function(){return this.$store.getters.isLogin}}},l=c,u=a("2877"),m=Object(u["a"])(l,i,o,!1,null,"ea3018de",null),d=m.exports,v={data:function(){return{}},components:{vHeader:d}},p=v,f=(a("7c55"),Object(u["a"])(p,s,r,!1,null,null,null)),h=f.exports,b=a("8c4f"),g=a("2f62"),_=(a("ac6a"),{menuItems:[]}),w={getMenuItems:function(t){return t.menuItems}},C={setMenuItems:function(t,e){t.menuItems=e},removeMenuItem:function(t,e){t.menuItems.forEach(function(a,n){a==e&&t.menuItems.splice(n,1)})},addMenuItem:function(t,e){t.menuItems.push(e)}},z={},y={state:_,getters:w,mutations:C,actions:z};n["a"].use(g["a"]);var x=new g["a"].Store({state:{currentUser:"",userId:"",isLogin:!1},getters:{currentUser:function(t){return t.currentUser},userId:function(t){return t.userId},isLogin:function(t){return t.isLogin}},mutations:{userStatus:function(t,e){e?(t.currentUser=e.email,t.userId=e.id,t.isLogin=!0):(t.currentUser=null,t.userId=null,t.isLogin=!1)}},actions:{setUser:function(t,e){var a=t.commit;a("userStatus",e)}},modules:{menu:y}}),P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home",attrs:{id:"home-head"}},[a("div",{staticClass:"row bg-gray"},[a("div",{staticClass:"col sol-sm-12 text-center "},[a("h2",[t._v("Pizza 50% off today!")]),a("h3",[t._v("So order yours now!")]),a("div",{staticClass:"col-sm-12 text-center"},[a("button",{staticClass:"btn btn-success",on:{click:t.gotoMenu}},[t._v("Let's Order!")])])])])])},k=[],$={name:"home",components:{},methods:{gotoMenu:function(){this.$router.push({name:"menu"})}}},I=$,j=(a("099e"),Object(u["a"])(I,P,k,!1,null,"5c293c8d",null)),E=j.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-8"},[a("table",{staticClass:"table"},[t._m(0),t._l(t.menuItems,function(e){return a("tbody",{key:e.name},[a("tr",[a("td",[a("strong",[t._v(t._s(e.name))])])]),t._l(e.options,function(n,s){return a("tr",{key:s},[a("td",[t._v(t._s(n.size))]),a("td",[t._v(t._s(n.price))]),a("td",[a("button",{staticClass:"btn btn-sm btn-outline-success",on:{click:function(a){return t.addToCart(e,n)}}},[t._v("+")])])])})],2)})],2)]),a("div",{staticClass:"col-md-4"},[0==t.carts.length?a("div",[t._v("购物车内没有商品")]):[a("table",{staticClass:"table"},[t._m(1),a("tbody",t._l(t.carts,function(e,n){return a("tr",{key:n},[a("td",[a("button",{staticClass:"btn btn-sm btn-outline-primary",on:{click:function(a){return t.decreaseQuantity(e)}}},[t._v("-")]),a("span",[t._v(t._s(e.quantity))]),a("button",{staticClass:"btn btn-sm btn-outline-primary",on:{click:function(a){return t.increaseQuantity(e)}}},[t._v("+")])]),a("td",[t._v(t._s(e.name)+" "+t._s(e.size))]),a("td",[t._v(t._s(e.price*e.quantity))])])}),0)]),a("p",[t._v("总价: "+t._s(t.totalPrice)+" RMB")]),a("button",{staticClass:"btn btn-success btn-block",on:{click:function(e){return e.preventDefault(),t.submitMenuData(e)}}},[t._v("提交")])]],2)])},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead-default"},[a("tr",[a("th",[t._v("尺寸")]),a("th",[t._v("价格")]),a("th",[t._v("加入")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead-default"},[a("tr",[a("th",[t._v("数量")]),a("th",[t._v("品种")]),a("th",[t._v("价格")])])])}],S=a("0a0d"),L=a.n(S),U=(a("7f7f"),{data:function(){return{carts:[]}},methods:{addToCart:function(t,e){var a={name:t.name,size:e.size,price:e.price,quantity:1};if(this.carts.length>0){var n=this.carts.filter(function(a){return a.name==t.name&&a.price==e.price});n&&n.length>0?n[0].quantity++:this.carts.push(a)}else this.carts.push(a)},decreaseQuantity:function(t){t.quantity--,t.quantity<=0&&this.removeFromCart(t)},increaseQuantity:function(t){t.quantity++},removeFromCart:function(t){this.carts.splice(this.carts.indexOf(t),1)},getMenuData:function(){var t=this;this.axios.get("https://v-pizza.firebaseio.com/menu.json").then(function(e){return t.$store.commit("setMenuItems",e.data)})},submitMenuData:function(){var t=this,e=this.$store.getters.userId,a={userid:e,email:this.$store.getters.currentUser,carts:this.carts,subtotal:this.totalPrice,date:L()()};this.axios.post("/carts.json",a).then(function(e){alert("添加成功！"),t.$router.push("/about/history")}).catch(function(t){console.log(t),alert(t)})}},created:function(){this.getMenuData()},computed:{menuItems:function(){return this.$store.getters.getMenuItems},totalPrice:function(){var t=0;for(var e in this.carts)t+=this.carts[e].quantity*this.carts[e].price;return t}}}),q=U,D=Object(u["a"])(q,M,O,!1,null,null,null),N=D.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 col-md-8"},[a("newPizza",{on:{itemAdded:t.getMenuData}})],1),a("div",{staticClass:"col-sm-12 col-md-4"},[a("h3",{staticClass:"text-muted my-5"},[t._v("菜单")]),a("table",{staticClass:"table"},[t._m(0),t._l(t.menuItems,function(e){return a("tbody",{key:e.id},[a("tr",[a("td",[t._v(t._s(e.name))]),a("td",[a("button",{staticClass:"btn btn-outline-danger",on:{click:function(a){return a.preventDefault(),t.deleteData(e)}}},[t._v("×")])])])])})],2)])])},F=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"table table-default"},[a("tr",[a("th",[t._v("品种")]),a("th",[t._v("删除")])])])}],Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("form",[a("h3",{staticClass:"text-muted my-5"},[t._v("\n            添加新的Pizza\n        ")]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-1"},[t._v("品种")]),a("div",{staticClass:"col-sm-11"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newPizza.name,expression:"newPizza.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.newPizza.name},on:{input:function(e){e.target.composing||t.$set(t.newPizza,"name",e.target.value)}}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-1"},[t._v("描述")]),a("div",{staticClass:"col-sm-11"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newPizza.description,expression:"newPizza.description"}],staticClass:"form-control",attrs:{rows:"5"},domProps:{value:t.newPizza.description},on:{input:function(e){e.target.composing||t.$set(t.newPizza,"description",e.target.value)}}})])]),t._m(0),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-1"},[t._v("尺寸")]),a("div",{staticClass:"col-sm-11"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newPizza.size1,expression:"newPizza.size1"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.newPizza.size1},on:{input:function(e){e.target.composing||t.$set(t.newPizza,"size1",e.target.value)}}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-1"},[t._v("价格")]),a("div",{staticClass:"col-sm-11"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newPizza.price1,expression:"newPizza.price1"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.newPizza.price1},on:{input:function(e){e.target.composing||t.$set(t.newPizza,"price1",e.target.value)}}})])]),t._m(1),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-1"},[t._v("尺寸")]),a("div",{staticClass:"col-sm-11"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newPizza.size2,expression:"newPizza.size2"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.newPizza.size2},on:{input:function(e){e.target.composing||t.$set(t.newPizza,"size2",e.target.value)}}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-1"},[t._v("价格")]),a("div",{staticClass:"col-sm-11"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newPizza.price2,expression:"newPizza.price2"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.newPizza.price2},on:{input:function(e){e.target.composing||t.$set(t.newPizza,"price2",e.target.value)}}})])]),a("div",{staticClass:"form-group row"},[a("button",{staticClass:"btn btn-success btn-block",on:{click:function(e){return e.preventDefault(),t.addMenuItem(e)}}},[t._v("添加")])])])])},B=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("strong",[t._v("选项1")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("strong",[t._v("选项2")])])}],H={data:function(){return{newPizza:{}}},methods:{addMenuItem:function(){var t=this,e={name:this.newPizza.name,description:this.newPizza.description,options:[{size:this.newPizza.size1,price:this.newPizza.price1},{size:this.newPizza.size2,price:this.newPizza.price2}]};this.axios.post("menu.json",e).then(function(a){e.id=a.data.name,t.$store.commit("addMenuItem",e)})}}},R=H,A=Object(u["a"])(R,Q,B,!1,null,null,null),G=A.exports,J={data:function(){return{}},components:{newPizza:G},created:function(){this.getMenuData()},methods:{deleteData:function(t){var e=this;if(!window.confirm("确认删除".concat(t.name,"?")))return null;fetch("https://v-pizza.firebaseio.com/menu/"+t.id+"/.json",{method:"DELETE",headers:{"Content-type":"application/json"}}).then(function(t){return t.json()}).then(function(a){e.$store.commit("removeMenuItem",t)}).catch(function(t){return console.log(t)})},getMenuData:function(){var t=this;fetch("https://v-pizza.firebaseio.com/menu.json").then(function(t){return t.json()}).then(function(e){var a=[];for(var n in e)e[n].id=n,a.push(e[n]);t.$store.commit("setMenuItems",a)}).catch(function(t){return console.log(t)})}},computed:{menuItems:function(){return this.$store.getters.getMenuItems}}},Y=J,K=Object(u["a"])(Y,T,F,!1,null,null,null),V=K.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col col-md-12 col-lg-12"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("img",{staticClass:"mx-auto d-block",attrs:{src:a("81bc"),alt:"pizza"}}),n("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"email"}},[t._v("邮箱")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"password"}},[t._v("密码")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),n("button",{staticClass:"btn btn-block btn-success",attrs:{type:"submit"}},[t._v("登录")])])])])])])])},X=[],Z={data:function(){return{email:"",password:""}},methods:{onSubmit:function(){var t=this;this.axios.get("/users.json").then(function(e){var a=e.data,n=[];for(var s in a)a[s].id=s,n.push(a[s]);var r=n.filter(function(e){return e.email===t.email&&e.password===e.password});null!=r&&r.length>0?(t.$store.dispatch("setUser",r[0]),t.$router.push({name:"home"}),window.localStorage.setItem("currentUser",r[0].email),window.localStorage.setItem("userId",r[0].id)):(t.$store.dispatch("setUser",null),alert("Username or password invalid!"))})}},beforeRouteEnter:function(t,e,a){a(function(t){t.$store.dispatch("setUser",null),window.localStorage.setItem("currentUser",""),window.localStorage.setItem("userId","")})}},tt=Z,et=Object(u["a"])(tt,W,X,!1,null,null,null),at=et.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col col-md-12 col-lg-12"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("img",{staticClass:"mx-auto d-block",attrs:{src:a("81bc"),alt:"pizza"}}),n("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"email"}},[t._v("邮箱")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"password"}},[t._v("密码")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"confirmPwd"}},[t._v("确认密码")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmPwd,expression:"confirmPwd"}],staticClass:"form-control",attrs:{type:"password",required:""},domProps:{value:t.confirmPwd},on:{input:function(e){e.target.composing||(t.confirmPwd=e.target.value)}}})]),n("button",{staticClass:"btn btn-block btn-success",attrs:{type:"submit"}},[t._v("注册")])])])])])])])},st=[],rt={data:function(){return{email:"",password:"",confirmPwd:""}},methods:{onSubmit:function(){var t=this;if(this.password===this.confirmPwd){var e={email:this.email,password:this.password};this.axios.get("/users.json").then(function(a){var n=a.data,s=[];for(var r in n)s.push(n[r].email);var i=null;i=s.some(function(e,a){return e==t.email}),i?alert("账号已存在！"):t.axios.post("/users.json",e).then(function(e){console.log(e),t.$router.push({name:"login"})}).catch(function(t){console.log(t),alert(t)})}).catch(function(t){console.log(t),alert(t)})}else alert("2次密码不一致")}}},it=rt,ot=Object(u["a"])(it,nt,st,!1,null,null,null),ct=ot.exports,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card text-dark bg-light mb-3"},[a("div",{staticClass:"card-header"},[t._v("\n    联系我们\n  ")]),a("div",{staticClass:"card-body"},[a("h4",{staticClass:"card-title"},[t._v("联系我们")]),a("p",[t._v("fdy409784@qq.com")]),a("router-link",{attrs:{to:{name:"about-phone"}}},[t._v("电话")]),a("span",[t._v(" ")]),a("router-link",{attrs:{to:{name:"about-name"}}},[t._v("联系人")]),a("router-view")],1)])},ut=[],mt={},dt=Object(u["a"])(mt,lt,ut,!1,null,null,null),vt=dt.exports,pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card text-dark bg-light mb-3 history-box"},[a("div",{staticClass:"card-header"},[t._v("\n    点餐历史\n  ")]),a("div",{staticClass:"card-body"},[a("ul",{staticClass:"list-group"},t._l(t.carts,function(e){return a("li",{key:e.date,staticClass:"list-group-item"},[a("p",[t._v("\n          时间："+t._s(t._f("parseDate")(e.date))+"\n        ")]),t._l(e.carts,function(e,n){return a("p",{key:n},[a("b",[t._v(t._s(e.name)+" "+t._s(e.size)+"寸: ")]),a("span",[t._v(t._s(e.quantity)+"个")])])}),a("p",[t._v("\n          总额: "+t._s(e.subtotal)+"\n        ")])],2)}),0)])])},ft=[],ht={data:function(){return{carts:[]}},filters:{parseDate:function(t){if(!t)return"";var e=new Date(t);return e.toLocaleString()}},created:function(){var t=this;this.axios.get("/carts.json").then(function(e){console.log(e);var a=t.$store.getters.userId,n=e.data,s=[];for(var r in n)s.push(n[r]);var i=s.filter(function(t){return t.userid==a});t.carts=i}).catch(function(t){console.log(t),alert(t)})}},bt=ht,gt=(a("3b40"),Object(u["a"])(bt,pt,ft,!1,null,"ccbcaaba",null)),_t=gt.exports,wt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Ct=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card text-dark bg-light mb-3"},[a("div",{staticClass:"card-header"},[t._v("\n    点餐指导\n  ")]),a("div",{staticClass:"card-body"},[a("h4",{staticClass:"card-title"},[t._v("Your Guiding book!")]),a("p",[t._v("使用了Google的Firebase作为数据库，国内使用可能需要科学上网")]),a("p",[t._v("菜单，管理，关于, 需要登陆后才能访问")]),a("p",[t._v("菜单内可以点餐")]),a("p",[t._v("管理内可以自定义菜品")])])])}],zt={},yt=Object(u["a"])(zt,wt,Ct,!1,null,null,null),xt=yt.exports,Pt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},kt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card text-dark bg-light mb-3"},[a("div",{staticClass:"card-header"},[t._v("\n    快递信息\n  ")]),a("div",{staticClass:"card-body"},[a("h4",{staticClass:"card-title"},[a("p",[t._v("Express Information")])])])])}],$t={},It=Object(u["a"])($t,Pt,kt,!1,null,null,null),jt=It.exports,Et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("\n    12345678911\n")])},Mt=[],Ot={},St=Object(u["a"])(Ot,Et,Mt,!1,null,null,null),Lt=St.exports,Ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("\n    Mr.Feng\n")])},qt=[],Dt={},Nt=Object(u["a"])(Dt,Ut,qt,!1,null,null,null),Tt=Nt.exports;n["a"].use(b["a"]);var Ft=new b["a"]({mode:"hash",routes:[{path:"/",name:"home",components:{default:E,delivery:jt,history:_t,guide:xt}},{path:"/about",name:"about",redirect:"/about/history",component:function(){return a.e("about").then(a.bind(null,"ef4c"))},children:[{path:"/about/contact",name:"about-contact",redirect:"/about/contact/phone",component:vt,children:[{path:"/about/contact/phone",name:"about-phone",component:Lt},{path:"/about/contact/name",name:"about-name",component:Tt}]},{path:"/about/history",name:"about-history",component:_t},{path:"/about/delivery",name:"about-delivery",component:jt},{path:"/about/guide",name:"about-guide",component:xt}]},{path:"/menu",name:"menu",component:N},{path:"/admin",name:"admin",component:V},{path:"/login",name:"login",component:at},{path:"/register",name:"register",component:ct},{path:"*",redirect:"/"}],scrollBehavior:function(t,e,a){return a||{x:0,y:0}}});Ft.beforeEach(function(t,e,a){var n=window.localStorage.getItem("currentUser"),s=window.localStorage.getItem("userId");n&&x.dispatch("setUser",{id:s,email:n}),"/login"==t.path||"/register"==t.path||"/"==t.path?a():x.getters.isLogin?a():(alert("请先登录!"),a("/login"))});var Qt=Ft,Bt=a("bc3a"),Ht=a.n(Bt);a("4989"),a("f9e3");n["a"].config.productionTip=!1,Ht.a.defaults.baseURL="https://v-pizza.firebaseio.com/",n["a"].prototype.axios=Ht.a,new n["a"]({router:Qt,store:x,render:function(t){return t(h)}}).$mount("#app")},"5c48":function(t,e,a){},"7c55":function(t,e,a){"use strict";var n=a("5c48"),s=a.n(n);s.a},"81bc":function(t,e,a){t.exports=a.p+"img/eyunfm06iaabvmyyqpwl.7e473bbb.png"}});
//# sourceMappingURL=app.1fe97048.js.map