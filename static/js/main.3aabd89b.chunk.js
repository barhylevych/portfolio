(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){},147:function(e,t,n){},155:function(e,t,n){},158:function(e,t,n){},160:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),i=n(12),l=n(34),u=n(83),s="START_LOADING",m="GET_WEATHER",E="REDIRECT",f="STOP_LOADING";function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b={weather:{},loading:!1,keyAPI:"pk.eyJ1IjoiYmFyaHlsZXZ5Y2giLCJhIjoiY2szMWVkNXJpMDdsaDNsbWpscjZveHczaSJ9.iz0Tb0UTzZ1_Rt0chVmooA"};var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case m:return p({},e);case s:return p({},e,{loading:!0});case f:return p({},e,{loading:!1});case E:switch(t.body){case"instagram":break;case"github":window.location.href="https://github.com"}return p({},e);default:return e}},g=Object(l.b)(h),y=n(92);n(104),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(){return{type:f}}function T(){return{type:s}}var O={TITLE:"Portfolio",JOKE:"just buy me beer :)",NAME:"Oleksandr",NAME_TITLE:"Name: ",SURNAME:"Barhylevych",SURNAME_TITLE:"Surname: ",PATRONYMIC:"Anatolievich",PATRONYMIC_TITLE:"Patronymic: ",ACTIVITY_TITLE:"Activity: ",ACTIVITY:"WEB React developer",CONTACT:"Contact",SOCIAL:"Social networks",ALT_PICTURE:"There should be picture",IMAGE:"https://instagram.fiev12-1.fna.fbcdn.net/vp/7287cd1e2074a673468fbac3499a7979/5E535EA3/t51.2885-15/e35/45376051_496337464219004_4350957362950019205_n.jpg?_nc_ht=instagram.fiev12-1.fna.fbcdn.net&_nc_cat=108"},A=(n(105),n(93)),I=function(e){var t=function(t){return e.redirect(t)};return r.a.createElement("div",{className:"left-side"},r.a.createElement("div",{className:"body"},r.a.createElement("div",{className:"left-side-info"},r.a.createElement("img",{src:O.IMAGE,alt:O.ALT_PICTURE}),r.a.createElement("br",null),r.a.createElement(A.a,{type:"instagram",onClick:function(){return t("instagram")}}),r.a.createElement(A.a,{type:"github",onClick:function(){return t("github")}})),r.a.createElement("div",{className:"right-side-info"},[O.NAME,O.SURNAME,O.ACTIVITY].map((function(e,t){return n=e,a=t,r.a.createElement("p",{key:a,className:"left-side-text"},n);var n,a})),r.a.createElement(A.a,{type:"home",onClick:e.stopLoading}),r.a.createElement("span",null,"Kiev"),r.a.createElement("br",null),r.a.createElement(A.a,{type:"code",onClick:e.startLoading}),r.a.createElement("span",null,"React js"),r.a.createElement("br",null))))},w=Object(i.b)((function(e){return{weather:e.weather}}),(function(e){return{getWeather:function(){return e({type:m})},startLoading:function(){return e(T())},stopLoading:function(){return e(v())},redirect:function(t){return e(function(e){return{type:E,action:e}}(t))}}}))(I),N=n(38),j=(n(147),n(161)),k=n(89),P=n(42),C=function(e){var t=e.size,n=(e.center,e.zoom,Object(k.a)(e,["size","center","zoom"])),a=Object(P.c)({accessToken:n.keyAPI});return r.a.createElement(a,{style:"mapbox://styles/mapbox/streets-v9",containerStyle:{height:t.height,width:t.width}},r.a.createElement(P.b,{type:"symbol",id:"marker",layout:{"icon-image":"marker-15"}},r.a.createElement(P.a,{coordinates:[-.481747846041145,51.3233379650232]})))};C.defaultProps={center:{lat:59.95,lng:320.33},zoom:11,size:{height:"300px",width:"300px"}};var _=function(e){var t=Object(a.useState)(!1),n=Object(N.a)(t,2),c=n[0],o=n[1];return r.a.createElement("div",{className:"right-side"},r.a.createElement(j.a,{onClick:function(){return o(!c)}}," Press me! "),c&&r.a.createElement("p",null," ",O.JOKE))},L=Object(i.b)((function(e){return{weather:e.weather,keyAPI:e.keyAPI}}),(function(e){return{stopLoading:function(){return e(v())},startLoading:function(){return e(T())}}}))(_),R=(n(155),n(40)),S=n(41),M=(n(158),function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"nb-spinner"}))}),z=Object(i.b)((function(e){return{loading:e.loading}}),(function(e){return{startLoading:function(){return e(T())}}}))((function(e){var t=e.loading;return console.log(t),r.a.createElement("div",{className:t?"project__loading":"project"},t&&r.a.createElement("label",{className:"loading"},r.a.createElement(M,null)),r.a.createElement("header",null,r.a.createElement("p",{className:"logo"}," ",r.a.createElement(R.a,{icon:S.a}),O.SURNAME," "),r.a.createElement("nav",null,r.a.createElement("ul",{className:"header"},r.a.createElement("li",null,r.a.createElement("p",null," ",r.a.createElement(R.a,{icon:S.b}),O.CONTACT," ")),r.a.createElement("li",null,r.a.createElement("p",null," ",r.a.createElement(R.a,{icon:S.c})))))),r.a.createElement(w,null),r.a.createElement(L,null))}));o.a.render(r.a.createElement(i.a,{store:g},r.a.createElement(y.a,null,r.a.createElement(z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},95:function(e,t,n){e.exports=n(160)}},[[95,1,2]]]);
//# sourceMappingURL=main.3aabd89b.chunk.js.map