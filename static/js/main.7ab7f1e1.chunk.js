(this.webpackJsonpalphadecentralized=this.webpackJsonpalphadecentralized||[]).push([[0],{24:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(2),s=a.n(c),r=a(12),i=a.n(r),o=(a(24),a(13)),l=a(14),j=a(15),u=a(18),b=a(17),h=a(16),d=a.n(h),p=(a(43),function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).onChange=function(t){e.setState(Object(o.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a=e.state,n=a.apiKey,c=a.startDate,s=a.endDate;d.a.post("/",{apiKey:n,startDate:c,endDate:s}).then((function(e){}))},e.state={apiKey:"",startDate:"",endDate:""},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this.state,t=e.apiKey,a=e.startDate,c=e.endDate;return Object(n.jsxs)("form",{className:"QueryForm",onSubmit:this.onSubmit,children:[Object(n.jsx)("label",{children:"Cryptocurrencies"}),Object(n.jsx)("label",{children:Object(n.jsx)("a",{href:"https://coinlayer.com/signup/free",target:"_blank",children:"Need a free API Key?"})}),Object(n.jsxs)("label",{className:"CoinLayerKeyLabel",children:["API Key:",Object(n.jsx)("input",{type:"text",name:"apiKey",value:t,onChange:this.onChange})]}),Object(n.jsxs)("label",{className:"StartDateLabel",children:["Start Date:",Object(n.jsx)("input",{type:"text",name:"startDate",value:a,onChange:this.onChange})]}),Object(n.jsxs)("label",{className:"EndDateLabel",children:["End Date:",Object(n.jsx)("input",{type:"text",name:"endDate",value:c,onChange:this.onChange})]}),Object(n.jsx)("button",{className:"QueryButton",type:"submit",children:"Query"})]})}}]),a}(c.Component)),m=a.p+"static/media/coinlayer_logo.be650831.svg";a(44);function g(){return Object(n.jsx)("div",{className:"CoinLayer-showcase",children:Object(n.jsx)("img",{src:m,className:"CoinLayer-logo",alt:"coinlayer logo",href:"https://coinlayer.com"})})}var f=a.p+"static/media/logo.6ce24c58.svg";a(45);function O(){return Object(n.jsx)("div",{className:"React-showcase",children:Object(n.jsx)("img",{src:f,className:"App-logo",alt:"react logo",href:"https://reactjs.org"})})}a(46);function x(){return Object(n.jsxs)("div",{class:"float-container",children:[Object(n.jsx)(O,{}),Object(n.jsx)(g,{})]})}a(47);function y(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(p,{}),Object(n.jsx)(x,{})]})}var v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,49)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};document.title="Alpha, Decentralized.",i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(y,{})}),document.getElementById("root")),v()}},[[48,1,2]]]);
//# sourceMappingURL=main.7ab7f1e1.chunk.js.map