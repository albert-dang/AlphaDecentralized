(this.webpackJsonpalphadecentralized=this.webpackJsonpalphadecentralized||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(2),r=a.n(c),s=a(12),i=a.n(s),l=(a(24),a.p+"static/media/logo.6ce24c58.svg");a(25);var o=function(){return Object(n.jsxs)("div",{className:"React-header",children:[Object(n.jsx)("img",{src:l,className:"App-logo",alt:"logo"}),Object(n.jsx)("p",{children:"Powered by"}),Object(n.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"React"})]})},j=a(13),u=a(14),b=a(15),h=a(18),d=a(17),p=a(16),m=a.n(p),O=(a(44),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).onChange=function(t){e.setState(Object(j.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a=e.state,n=a.apiKey,c=a.startDate,r=a.endDate;m.a.post("/",{apiKey:n,startDate:c,endDate:r}).then((function(e){}))},e.state={apiKey:"",startDate:"",endDate:""},e}return Object(b.a)(a,[{key:"render",value:function(){var e=this.state,t=e.apiKey,a=e.startDate,c=e.endDate;return Object(n.jsxs)("form",{className:"QueryForm",onSubmit:this.onSubmit,children:[Object(n.jsx)("label",{children:"Cryptocurrencies"}),Object(n.jsx)("label",{children:Object(n.jsx)("a",{href:"https://coinlayer.com/signup/free",children:"Need a free API Key?"})}),Object(n.jsxs)("label",{className:"CoinLayerKeyLabel",children:["API Key:",Object(n.jsx)("input",{type:"text",name:"apiKey",value:t,onChange:this.onChange})]}),Object(n.jsxs)("label",{className:"StartDateLabel",children:["Start Date:",Object(n.jsx)("input",{type:"text",name:"startDate",value:a,onChange:this.onChange})]}),Object(n.jsxs)("label",{className:"EndDateLabel",children:["End Date:",Object(n.jsx)("input",{type:"text",name:"endDate",value:c,onChange:this.onChange})]}),Object(n.jsx)("button",{className:"QueryButton",type:"submit",children:"Query"})]})}}]),a}(c.Component));a(45);var g=function(){return Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)(o,{}),Object(n.jsx)(O,{})]})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,47)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};document.title="Alpha, Decentralized.",i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root")),f()}},[[46,1,2]]]);
//# sourceMappingURL=main.d3ed1027.chunk.js.map