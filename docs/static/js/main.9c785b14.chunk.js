(this["webpackJsonpgif-expert"]=this["webpackJsonpgif-expert"]||[]).push([[0],{15:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(8),r=n.n(c),i=(n(15),n(2)),s=n(10),u=n(0),o=function(t){var e=t.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1],j=function(t){t.preventDefault(),r.trim().length>2&&(e((function(t){return[r].concat(Object(s.a)(t))})),o(""))};return Object(u.jsx)("form",{onSubmit:j,children:Object(u.jsx)("input",{type:"text",value:r,onChange:function(t){o(t.target.value)},onSubmit:j})})},j=n(7),d=function(t){t.id;var e=t.title,n=t.url;return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{src:n,alt:e}),Object(u.jsx)("p",{children:e})]})},l=n(6),b=n.n(l),f=n(9),h=function(){var t=Object(f.a)(b.a.mark((function t(e){var n,a,c,r,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"nYthjbnG6oCLPov42WcOUhM4mvYIFjHD",n="https://api.giphy.com/v1/gifs/search?api_key=nYthjbnG6oCLPov42WcOUhM4mvYIFjHD&q=".concat(encodeURI(e),"&limit=10"),t.next=4,fetch(n);case 4:return a=t.sent,t.next=7,a.json();case 7:return c=t.sent,r=c.data,i=r.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){h(t).then((function(t){r({data:t,loading:!1})}))}),[t]),c}(e),c=n.data,r=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"animate__animated animate__fadeIn",children:e}),r&&Object(u.jsx)("p",{className:"animate__animated animate__flash",children:"Loading"}),Object(u.jsx)("div",{className:"card-grid",children:c.map((function(t){return Object(a.createElement)(d,Object(j.a)(Object(j.a)({},t),{},{key:t.id}))}))})]})},O=function(){var t=Object(a.useState)(["Dragon Ball Z"]),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"GifExpertApp"}),Object(u.jsx)(o,{setCategories:c}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(m,{category:t},t)}))})]})};r.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.9c785b14.chunk.js.map