(this.webpackJsonpgeminitest=this.webpackJsonpgeminitest||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),s=n.n(r),i=n(26),o=n.n(i),a=(n(36),n(16)),j=n(29),l=n(2),u=(n(37),n(12)),b=n.n(u),d=n(27),h=n.p+"static/media/logo.103b5fa1.svg",x=(n(39),function(e){var t=e.text,n=e.children;return Object(c.jsxs)("div",{className:"boxContainer",children:[Object(c.jsx)("div",{className:"textDiv",children:Object(c.jsx)("h1",{children:t})}),Object(c.jsx)("div",{className:"childrenDiv",children:n})]})}),O={mainComponent:{display:"flex",alighItems:"center",flexDirection:"column"}};var f=function(e){console.log(e);var t=Object(r.useRef)(),n=function(){var n=Object(d.a)(b.a.mark((function n(c){var r;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:c.preventDefault(),r=t.current.value,e.history.push("profile/".concat(r));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(c.jsxs)("div",{style:O.mainComponent,children:[Object(c.jsx)("img",{src:h,alt:"logo"}),Object(c.jsxs)(x,{text:"Welcome! Sign In With Your Jobcoin Address",children:[Object(c.jsx)("label",{htmlFor:"jobcoinAddress",children:"Do you like jobcoinAddress?"}),Object(c.jsx)("input",{type:"text",ref:t,name:"jobcoinAddress"}),Object(c.jsx)("button",{onClick:function(e){return n(e)},children:"Sign In"})]})]})},m=n(15),p=n(28),v=n.n(p),g=function(e){var t=e.balance,n=void 0===t?"-":t;return Object(c.jsx)("h1",{children:n})},y=function(e){var t=Object(r.useRef)(null),n=Object(r.useRef)(null);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("label",{htmlFor:"destination",children:"Destination Address"}),Object(c.jsx)("input",{type:"text",ref:t,name:"destination"}),Object(c.jsx)("label",{htmlFor:"amount",children:"Amount to Send"}),Object(c.jsx)("input",{type:"text",ref:n,name:"amount"}),Object(c.jsx)("button",{onClick:function(c){return function(c){c.preventDefault();var r=t.current.value,s=n.current.value;e.sendJobCoins({sendTo:r,amount:s}),t.current.value="",n.current.value=""}(c)},children:"Send Jobcoins"})]})},A=function(e){var t=e.match.params.username,n=Object(r.useState)({}),s=Object(m.a)(n,2),i=s[0],o=s[1],a=Object(r.useState)({}),j=Object(m.a)(a,2),l=j[0];j[1];Object(r.useEffect)((function(){fetch("http://jobcoin.gemini.com/debtless-divisibly/api/addresses/".concat(t)).then((function(e){return e.json()})).then((function(e){o(e),console.log(e)}))}),[]);return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:t}),Object(c.jsx)(x,{text:"Jobcoin Balance",children:Object(c.jsx)(g,{balance:i.balance})}),Object(c.jsx)(x,{text:"Send Jobcoin",children:Object(c.jsx)(y,{balance:i.balance,sendJobCoins:function(e){var n=e.sendTo,c=e.amount,r={fromAddress:t,toAddress:n,amount:c},s=new FormData;s.append("json",JSON.stringify(r)),v.a.post("http://localhost:8000/api/jobcoin/send",s,{headers:{"Content-Type":"multipart/form-data"}})},error:l})})]})};var J=function(){return Object(c.jsx)(j.a,{children:Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/",render:function(e){return Object(c.jsx)(f,Object(a.a)({},e))}}),Object(c.jsx)(l.a,{path:"/profile/:username",component:function(e){return Object(c.jsx)(A,Object(a.a)({},e))}})]})})})};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(J,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.96432d1c.chunk.js.map