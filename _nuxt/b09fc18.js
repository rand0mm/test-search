(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(e,t,r){"use strict";t.a=function(e){var t=e.$axios,r=e.redirect;t.onError((function(e){var code=parseInt(e.response&&e.response.status,10);400===code&&r("/400"),500===code&&r("/sorry")})),t.onRequest((function(e){console.log("Making request to ".concat(e.url))}))}},138:function(e,t,r){"use strict";var o=r(0),n=r(213),d=r.n(n);o.default.use(d.a)},139:function(e,t,r){"use strict";var o=r(214);r(0).default.use(o.a)},140:function(e,t,r){"use strict";var o=r(0),n=r(215),d=r.n(n);o.default.use(d.a)},193:function(e,t,r){var content=r(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(54).default)("3662a648",content,!0,{sourceMap:!1})},197:function(e,t,r){var content=r(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(54).default)("d03a838a",content,!0,{sourceMap:!1})},198:function(e,t,r){var content=r(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(54).default)("3f8a17db",content,!0,{sourceMap:!1})},217:function(e,t,r){"use strict";var o={mounted:function(){this.$store.dispatch("users/getLocal")}},n=r(22),component=Object(n.a)(o,(function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("header",{staticClass:"header"},[t("div",{staticClass:"header__wrapper"},[t("NuxtLink",{staticClass:"header__logo",attrs:{to:"/test-search/"}},[t("img",{attrs:{src:r(285),alt:"Логотип",width:"121",height:"33"}})]),e._v(" "),t("div",{staticClass:"header__user"},[e._v("\n        Пользователь\n      ")])],1)]),e._v(" "),t("div",{staticClass:"content-container"},[t("Sidebar"),e._v(" "),t("nuxt")],1),e._v(" "),t("portal-target",{attrs:{name:"destination"}})],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{Sidebar:r(315).default})},218:function(e,t,r){r(219),e.exports=r(220)},283:function(e,t,r){var content=r(284);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(54).default)("7b1fe90b",content,!0,{sourceMap:!1})},284:function(e,t,r){var o=r(53)(!1);o.push([e.i,'*{box-sizing:border-box;margin:0;padding:0;outline:none;list-style:none;text-decoration:none}html{font-family:"Montserrat",sans-serif;font-size:12px}@media(max-width: 760px){html{font-size:10px}}body{position:relative;min-width:320px;min-height:110vh;margin:0;padding:0;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}button{cursor:pointer;outline:none}.container{width:100%;margin:0 auto;padding-left:1.25rem;padding-right:1.25rem}img,svg{width:100%;transition-property:border,outline,color,background-color,transform,fill,stroke,opacity,filter;transition-duration:.3s;transition-timing-function:ease-in-out}path{transition-property:border,outline,color,background-color,transform,fill,stroke,opacity,filter;transition-duration:.3s;transition-timing-function:ease-in-out}h1,h2,h3,h4,p,ul,li{margin:0}.active{display:block}.deactivate{display:none}div .visually-hidden{position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;clip:rect(0, 0, 0, 0);overflow:hidden}.overflow-hidden{overflow:hidden}input[type=number]{-moz-appearance:textfield;-webkit-appearance:textfield;appearance:textfield}input[type=number]::-webkit-outer-spin-button,input[type=number]::-webkit-inner-spin-button{display:none}.header{margin-bottom:5rem;width:100%}.header__wrapper{padding:0 5.25rem;display:grid;grid-template-columns:1fr 100px;grid-column-gap:3rem;align-items:flex-end;justify-content:space-between;align-items:center;padding-top:2rem;padding-bottom:2rem;border-bottom:1px solid #d1dce5}.header__info{font-size:2rem;text-transform:uppercase}.header__logo{display:flex;width:16.7rem;height:5rem;font-size:2rem;font-weight:700;text-align:center;text-transform:uppercase;color:#000}.header__logo img{height:100%;object-fit:contain}.header__user{font-weight:500;font-size:16}.form{display:flex;flex-direction:column;width:100%}.form__input-wrapper{display:flex;flex-direction:column}.form__label{font-size:14px;font-weight:bold;width:100%}.form__input,.form__button{flex-grow:1;height:3rem;box-shadow:none;outline:none;padding-left:1rem;padding-right:1rem;border-radius:.5rem;font-size:18px;margin-top:.5rem;margin-bottom:1rem}.form__input{background-color:rgba(0,0,0,0);border:1.5px solid #e9ecef;color:inherit}.form__item-btn{margin-left:1.5rem}.form__button-group{display:flex;justify-content:space-between;align-items:center}.form__button-group .form__btn{margin:0;width:22%}.form__btn{margin-bottom:20px;height:48px}.checkbox{position:relative;display:flex;margin-left:20px;width:1.5rem;height:1.5rem;border:1.5px solid #e9ecef;border-radius:.5rem}.checkbox__input{position:absolute;width:0px;height:0px;font-size:0;margin:0;opacity:0}.checkbox__label{display:flex;position:relative;justify-content:center;width:100%;height:100%}.checkbox__label::before{content:"Done";position:absolute;top:-24px;left:-8px;font-family:Avenir,Helvetica,Arial,sans-serif;font-weight:600;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#000}.checkbox__icon{font-size:1.5rem;line-height:1.5rem;color:#07f}body{background-color:#fdfdfd;color:#000}h1{font-weight:bold;font-size:2.3rem;text-align:center}h2{font-size:2rem;padding-bottom:.5rem}#__nuxt .teleport-modal__content{background-color:#fdfdfd;min-width:500px}.content-container{display:flex;margin-left:5.25rem;margin-right:5.25rem;border-radius:10px;box-shadow:1px 1px 2px 0px rgba(0,0,0,.2);min-height:575px;border:1px solid #dededd}.confirm{display:flex;flex-wrap:wrap}.confirm__title{width:100%;margin-bottom:2rem}.confirm__button-group{display:flex;justify-content:space-between;width:100%}.confirm__btn{width:40%;height:3rem}.add{display:flex;flex-direction:column;position:relative;margin-bottom:2rem}.add_error .add__user-name{color:#c71717}.add__title{margin-bottom:2rem}.add__label{display:flex;align-items:center;justify-content:center;width:100%}.add__input{display:flex;align-items:center;justify-content:space-between;padding:.5rem 2rem;border-radius:.5rem;border:1.5px solid #e9ecef;width:100%;outline:0;font-weight:400;font-size:1.7rem;line-height:150%;color:#000;color:#000;background-color:#fff;transition:border-color .3s ease;font-size:14px}.add__input::placeholder{color:#76787d}.add__input:hover,.add__input:focus-within{border-color:#07f}.add__btn{display:flex;align-items:center;justify-content:space-between;padding:.5rem 2rem;transition:background-color .3s ease;background-color:#4185d3;border-radius:40px;border:0;font-weight:400;font-size:1.7rem;line-height:150%;color:#000;color:#fff;transition:background-color .3 ease}.add__btn:hover,.add__btn:focus-within{background-color:#07f}.add__users{width:110%}.add__users .users__item:hover::before{opacity:1}.add__users .users__item:hover .users__name{color:#fff}.add__users .users__info-container{display:flex;flex-direction:column;width:85%}.users{z-index:3}.users__wrapper{max-height:50rem;margin-bottom:20rem;border-radius:1rem;padding:1rem}.users__list{display:flex;flex-direction:column;padding:1rem;padding-top:1.3rem;width:100%;background-color:#fdfdfd;box-shadow:0px 0px 5px 3px rgba(197,197,197,.49)}.users__list_friends .users__item:hover::before{opacity:1}.users__list_friends .users__item:hover .users__name{color:#fff}.users__list_friends .users__name{width:85%}.users__item{display:flex;align-items:center;justify-content:space-between;position:relative;border-radius:1rem;padding:5px;z-index:1;cursor:pointer}.users__item::before{position:absolute;content:"";top:-4%;left:-4%;bottom:0;right:0;width:108%;height:108%;background-color:#07f;border-radius:.5rem;opacity:0;z-index:-1;transition:opacity .1s ease}.users__item:not(:last-child){margin-bottom:1rem}.users__photo{display:flex;justify-content:center;align-items:center;border-radius:.8rem;width:10%}.users__photo img{height:3rem;width:3rem;border-radius:.8rem;border:1px solid rgba(0,0,0,.11)}.users__info{display:flex;flex-wrap:wrap;justify-content:space-between;width:70%}.users__info .users__name{width:100%}.users__name{transition:color .1s ease;font-weight:400;font-size:1.7rem;line-height:150%;color:#000}.users__name_friends{width:85%}.users__sex{width:30%}.users__age{width:30%}.users__friends{width:30%}.users__friends_error{color:#c71717}.users__remove{width:15%}.content__title{margin-bottom:2rem}.btn{display:flex;justify-content:center;align-items:center;border-radius:1rem;border:1.5px solid #e9ecef;outline:0;padding:.3rem;transition:background-color .1s ease,color .1s ease,border-color .1s ease;color:#000;cursor:pointer}.btn_back{width:20rem;margin-bottom:1rem;font-size:1.8rem}.btn:hover{background-color:#7cb3f3;border-color:#7cb3f3;color:#fdfdfd}.btn:active{background-color:#0468db;border-color:#0468db}.build-btn{width:75%;font-size:1.5rem;margin:2rem auto}.wall{margin-top:2rem;margin-bottom:2rem}.wall__list{display:flex;flex-direction:column;padding:1rem;padding-top:1.3rem;width:100%;border-radius:1rem;background-color:#fdfdfd;box-shadow:0px 0px 5px 5px rgba(197,197,197,.6)}.wall__item{display:flex;align-items:center;justify-content:space-between;position:relative;z-index:1;border-bottom:1px solid #07f}.wall__item:not(:last-child){margin-bottom:1rem}',""]),e.exports=o},285:function(e,t,r){e.exports=r.p+"img/logo.a16370a.svg"},286:function(e,t,r){"use strict";r(193)},287:function(e,t,r){var o=r(53)(!1);o.push([e.i,".sidebar[data-v-1c9acd0a]{width:370px;padding:2rem 3rem 2rem 1rem;border-right:2px solid #dededd}",""]),e.exports=o},291:function(e,t,r){"use strict";r(197)},292:function(e,t,r){var o=r(53)(!1);o.push([e.i,".add__label[data-v-b8f8dcf8]{margin-bottom:1.5rem}.add__caption[data-v-b8f8dcf8]{margin-bottom:1rem;color:#333;font-size:16px;font-style:normal;font-weight:600;line-height:140%}.add__not-found[data-v-b8f8dcf8]{color:#76787d;font-size:14px;font-style:normal;font-weight:400;line-height:normal}",""]),e.exports=o},293:function(e,t,r){"use strict";r(198)},294:function(e,t,r){var o=r(53)(!1);o.push([e.i,"\n.infinite-scroll[data-v-7c30941d] {\r\n  height: 20rem;\n}\r\n",""]),e.exports=o},295:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return o})),r.d(t,"getters",(function(){return n})),r.d(t,"mutations",(function(){return d})),r.d(t,"actions",(function(){return c}));var o=function(){return{}},n={},d={},c={}},296:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return n})),r.d(t,"getters",(function(){return d})),r.d(t,"mutations",(function(){return c})),r.d(t,"actions",(function(){return l}));var o=r(141),n=(r(82),function(){return{foundUsersData:{},pagUsersData:{},toLoadFoundUsers:null,lastLoadedUser:null}}),d={getToLoadUsers:function(e){return e.toLoadFoundUsers?e.toLoadFoundUsers:[]},getLastLoadedUser:function(e){return e.lastLoadedUser?e.lastLoadedUser:1},getUser:function(e){return function(t){return console.log(t),console.log(e.foundUsersData),console.log(e.foundUsersData[t]),e.foundUsersData[t]}}},c={setToLoadUsers:function(e,t){e.toLoadFoundUsers=t},setFoundUsersData:function(e,t){e.foundUsersData=t},setPagUsersData:function(e,t){e.pagUsersData=t},setLastLoadedUser:function(e,t){var r;e.lastLoadedUser=null!==(r=e.pagUsersData)&&void 0!==r&&r[t]?t:e.lastLoadedUser}},l={updateLoadedUsers:function(e,t){var r,n=e.commit,d=e.state;if(null!==(r=d.pagUsersData)&&void 0!==r&&r[t]){var c=[].concat(Object(o.a)(d.toLoadFoundUsers),Object(o.a)(d.pagUsersData[t]));n("setLastLoadedUser",t),n("setToLoadUsers",c)}}}},315:function(e,t,r){"use strict";r.r(t);var o={data:function(){return{}},methods:{}},n=(r(286),r(22)),component=Object(n.a)(o,(function(){var e=this._self._c;return e("div",{staticClass:"sidebar"},[e("SearchInput")],1)}),[],!1,null,"1c9acd0a",null);t.default=component.exports;installComponents(component,{SearchInput:r(316).default})},316:function(e,t,r){"use strict";r.r(t);var o=r(10),n=(r(65),r(37),r(131),r(52),r(288),r(14),r(31),r(83),r(25),r(130),r(196),function(e){var t=e.split(",").map((function(e){return e.trim()})),r=[],o=[];t.forEach((function(e){var t;isNaN(e)?o.push((t=e).charAt(0).toUpperCase()+t.slice(1)):r.push(parseFloat(e))}));var n=r.map((function(e){return"id=".concat(e)})).join("&"),d=function(e){return e.map((function(e){return"username=".concat(e)})).join("&")}(o);return{words:d,ids:n}}),d={data:function(){return{searchStr:"",delay:null,isSomeAxiosError:!1,isShowFoundData:!1,isLoading:!1}},computed:{isShowFound:function(){return!!this.isShowFoundData&&this.users.length>0},users:function(){return this.foundUsers?this.foundUsers.map((function(i){return{id:i.id,username:"".concat(i.username),email:"".concat(i.email)}})):[]},foundUsers:{get:function(){return this.$store.getters["users/getToLoadUsers"]},set:function(e){this.$store.commit("users/setToLoadUsers",e)}}},watch:{searchStr:function(){var e=this;this.delay=clearTimeout(this.delay),this.delay=setTimeout(Object(o.a)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.searchStr,e.foundUsers=[],(o=n(r)).words.length>0?e.search(o.words):o.ids.length>0&&e.search(o.ids);case 4:case"end":return t.stop()}}),t)}))),600)}},beforeMount:function(){window.addEventListener("click",(function(e){e.target.closest(".add")}))},methods:{search:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t.isLoading=!0,r.next=4,t.$axios("https://jsonplaceholder.typicode.com/users?".concat(e));case 4:if(!(o=r.sent).error){r.next=8;break}throw t.isSomeAxiosError=!0,o.error.error_msg;case 8:null!=o&&o.data.length&&!t.isSomeAxiosError&&t.saveToStore(o.data),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),t.foundUsers=[{first_name:"Ошибка при запросе",last_name:r.t0.message||r.t0}];case 14:return r.prev=14,t.isLoading=!1,r.finish(14);case 17:case"end":return r.stop()}}),r,null,[[0,11,14,17]])})))()},choiceUser:function(e){console.log("test selected"),this.$router.push({path:"/test-search/user/".concat(e)})},saveToStore:function(e){var t=this,r={},o={},n=1,d=0,c=[];return e.map((function(i){return c.length<5&&c.push(i),5===c.length&&d>4&&1===n&&(t.foundUsers=c),n=d>4?Number(n)+1:n,d=d>4?0:Number(d)+1,r[i.id]=i,o[n]?o[n].push(i):o[n]=[i],i})),this.$store.commit("users/setFoundUsersData",r),this.$store.commit("users/setPagUsersData",o),this.$store.commit("users/setLastLoadedUser",1),r}}},c=(r(291),r(22)),component=Object(c.a)(d,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"content__add add"},[t("h2",{staticClass:"add__caption"},[e._v("\n    Поиск сотрудников\n  ")]),e._v(" "),t("label",{staticClass:"add__label",attrs:{for:"users"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchStr,expression:"searchStr"}],staticClass:"add__input",attrs:{type:"text",name:"users",placeholder:"Введите id или имя",autocomplete:"off"},domProps:{value:e.searchStr},on:{focus:function(t){t.preventDefault(),e.isShowFoundData=!0},input:function(t){t.target.composing||(e.searchStr=t.target.value)}}})]),e._v(" "),t("h2",{staticClass:"add__caption"},[e._v("\n    Результат\n  ")]),e._v(" "),e.isShowFound&&!e.isLoading?t("infinite-scroll",{staticClass:"users add__users",class:{add_error:e.isSomeAxiosError}},[t("ul",{staticClass:"users__list"},e._l(e.users,(function(r){return t("li",{key:"foundUser-"+r.id,staticClass:"users__item",on:{click:function(t){return t.preventDefault(),e.choiceUser(r.id)}}},[e.isSomeAxiosError?e._e():t("span",{staticClass:"users__photo"},[t("img",{staticClass:"users__img",attrs:{src:"https://cdn.quasar.dev/img/parallax2.jpg",alt:"фото"+r.username}})]),e._v(" "),t("div",{staticClass:"users__info-container"},[t("span",{staticClass:"users__name"},[e._v(e._s(r.username)+" ")]),e._v(" "),t("span",{staticClass:"users__email"},[e._v(e._s(r.email)+" ")])])])})),0)]):e.isLoading?t("div",{staticClass:"add__not-found"},[e._v("\n    Загрузка...\n  ")]):t("div",{staticClass:"add__not-found"},[e._v("\n    Ничего не найдено\n  ")])],1)}),[],!1,null,"b8f8dcf8",null);t.default=component.exports;installComponents(component,{InfiniteScroll:r(317).default})},317:function(e,t,r){"use strict";r.r(t);r(196);var o={data:function(){return{}},computed:{currentPage:{get:function(){return this.$store.getters["users/getLastLoadedUser"]},set:function(e){this.$store.commit("users/setLastLoadedUser",e)}}},methods:{onScroll:function(){var e;"end"===(null===(e=this.$refs.scrollbar.ps.reach)||void 0===e?void 0:e.y)&&this.$store.dispatch("users/updateLoadedUsers",Number(this.currentPage)+1)}}},n=(r(293),r(22)),component=Object(n.a)(o,(function(){var e=this,t=e._self._c;return t("perfect-scrollbar",{ref:"scrollbar",on:{"ps-scroll-y":e.onScroll}},[t("div",{ref:"scrollContainer",staticClass:"infinite-scroll"},[e._t("default")],2)])}),[],!1,null,"7c30941d",null);t.default=component.exports},43:function(e,t,r){"use strict";var o={layout:"blog",props:["error"]},n=r(22),component=Object(n.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[404===e.error.statusCode?t("h1",[e._v("\n    Страница не найдена\n  ")]):t("h1",[e._v("\n    "+e._s(e.error.message)+"\n  ")]),e._v(" "),t("NuxtLink",{attrs:{to:"/test-search"}},[e._v("\n    Веруться на главную\n  ")])],1)}),[],!1,null,null,null);t.a=component.exports}},[[218,4,1,5]]]);