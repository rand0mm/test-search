(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{319:function(t,e,r){var content=r(323);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(54).default)("020dea9e",content,!0,{sourceMap:!1})},322:function(t,e,r){"use strict";r(319)},323:function(t,e,r){var o=r(53)(!1);o.push([t.i,".profile{display:flex;justify-content:space-between}.profile__photo{width:calc(50% - 10px)}.profile__info{width:calc(50% - 10px)}.profile__part{display:flex;align-items:center;margin-bottom:.6rem}.profile__part_about{flex-wrap:wrap}.profile__part_about .profile__part-title{width:100%}.profile__username{font-size:1rem;font-weight:600;margin-bottom:.6rem}.profile__part-title{color:#333;font-size:.8rem;font-weight:600;margin-right:.2rem}.profile__part-value{color:#76787d;font-size:.8rem}",""]),t.exports=o},325:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{}},computed:{user:function(){var t=this.$store.getters["users/getUser"](this.$route.path.split("/")[3]);return console.log(t),{phone:t.phone,username:t.username,email:t.email,photo:t.photo?t.photo:"https://cdn.quasar.dev/img/parallax2.jpg",website:t.website}}}},l=(r(322),r(22)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"content container"},[e("NuxtLink",{staticClass:"btn btn_back",attrs:{to:"/test-search"}},[t._v("\n    Сбросить поиск\n  ")]),t._v(" "),e("div",{staticClass:"profile"},[e("div",{staticClass:"profile__photo"},[e("span",{staticClass:"profile__photo-container"},[e("img",{staticClass:"profile__img",attrs:{src:t.user.photo,alt:"фото"+t.user.username}})])]),t._v(" "),e("div",{staticClass:"profile__info"},[e("h4",{staticClass:"profile__username"},[t._v("\n        "+t._s(t.user.username)+"\n      ")]),t._v(" "),e("div",{staticClass:"profile__part"},[e("div",{staticClass:"profile__part-title"},[t._v("\n          Email:\n        ")]),t._v(" "),e("div",{staticClass:"profile__part-value"},[t._v("\n          "+t._s(t.user.email)+"\n        ")])]),t._v(" "),e("div",{staticClass:"profile__part"},[e("div",{staticClass:"profile__part-title"},[t._v("\n          Phone:\n        ")]),t._v(" "),e("div",{staticClass:"profile__part-value"},[t._v("\n          "+t._s(t.user.phone)+"\n        ")])]),t._v(" "),e("div",{staticClass:"profile__part profile__part_about"},[e("h6",{staticClass:"profile__part-title"},[t._v("\n          О себе:\n        ")]),t._v(" "),e("p",[t._v("\n          Мой вебсайт :\n          "+t._s(t.user.website)+"\n        ")])])])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);