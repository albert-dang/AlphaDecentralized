(this.webpackJsonpalphadecentralized=this.webpackJsonpalphadecentralized||[]).push([[0],{30:function(e,t,a){},49:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),s=a.n(c),r=a(22),i=a.n(r),o=(a(30),a(5)),l=a(6),j=a(7),b=a(9),d=a(8),u=a(23),h=a.n(u),O=(a(49),function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).onChange=function(t){e.setState(Object(o.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a=e.state,n=a.apiKey,c=a.startDate,s=a.endDate;h.a.post("/",{apiKey:n,startDate:c,endDate:s}).then((function(e){}))},e.state={apiKey:"",startDate:"",endDate:""},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this.state,t=e.apiKey,a=e.startDate,c=e.endDate;return Object(n.jsxs)("form",{className:"QueryForm",onSubmit:this.onSubmit,children:[Object(n.jsx)("label",{children:"Cryptocurrencies"}),Object(n.jsx)("label",{children:Object(n.jsx)("a",{href:"https://coinlayer.com/signup/free",target:"_blank",children:"Need a free API Key?"})}),Object(n.jsxs)("label",{className:"CoinLayerKeyLabel",children:["API Key:",Object(n.jsx)("input",{type:"text",name:"apiKey",value:t,onChange:this.onChange})]}),Object(n.jsxs)("label",{className:"StartDateLabel",children:["Start Date:",Object(n.jsx)("input",{type:"text",name:"startDate",value:a,onChange:this.onChange})]}),Object(n.jsxs)("label",{className:"EndDateLabel",children:["End Date:",Object(n.jsx)("input",{type:"text",name:"endDate",value:c,onChange:this.onChange})]}),Object(n.jsx)("button",{className:"QueryButton",type:"submit",children:"Query"})]})}}]),a}(c.Component)),p=a(11),g=a(24),m=a.n(g),x=a.p+"static/media/coinlayer_logo.be650831.svg";a(65);function f(){return Object(n.jsx)("a",{href:"https://coinlayer.com",target:"_blank",children:Object(n.jsx)("div",{className:"CoinLayer-showcase",children:Object(n.jsx)("img",{src:x,className:"CoinLayer-logo",alt:"coinlayer logo"})})})}var v=a.p+"static/media/Pandas_logo.47aa8f84.svg";a(66);function y(){return Object(n.jsx)("a",{href:"https://pandas.pydata.org/",target:"_blank",children:Object(n.jsx)("div",{className:"Pandas-showcase",children:Object(n.jsx)("img",{src:v,className:"Pandas-logo",alt:"Pandas logo"})})})}var D=a.p+"static/media/logo.6ce24c58.svg";a(67);function C(){return Object(n.jsx)("a",{href:"https://reactjs.org",target:"_blank",children:Object(n.jsx)("div",{className:"React-showcase",children:Object(n.jsx)("img",{src:D,className:"App-logo",alt:"react logo"})})})}a(68);var N=function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"Showcase-container",children:Object(n.jsxs)(m.a,Object(p.a)(Object(p.a)({},{dots:!0,infinite:!0,speed:315,slidesToShow:1,slidesToScroll:1}),{},{children:[Object(n.jsx)("div",{children:Object(n.jsx)(C,{})}),Object(n.jsx)("div",{children:Object(n.jsx)(f,{})}),Object(n.jsx)("div",{children:Object(n.jsx)(y,{})})]}))})}}]),a}(c.Component);a(69);function S(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(O,{}),Object(n.jsx)(N,{})]})}var k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,71)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};document.title="Alpha, Decentralized.",i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("root")),k()}},[[70,1,2]]]);
//# sourceMappingURL=main.c7718de7.chunk.js.map