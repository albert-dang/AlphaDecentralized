(this.webpackJsonpalphadecentralized=this.webpackJsonpalphadecentralized||[]).push([[0],{26:function(e,t,a){},33:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),s=a.n(n),r=a(27),i=a.n(r),l=(a(33),a(7)),o=a(3),j=a(4),b=a(6),d=a(5),u=a(9),O=a.n(u),m=a(8),h=a(12),p=a.n(h),f=(a(26),function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).onChange=function(t){e.setState(Object(m.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a=e.state,c=a.apiKey,n=a.symbol;p.a.post("/",{apiKey:c,symbol:n}).then((function(e){}))},e.state={apiKey:"c4b654682c080684f623cba908b1133a",symbol:"BTC, ETH, XLM"},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this.state,t=e.apiKey,a=e.symbol;return Object(c.jsx)("div",{className:"QueryPadder",children:Object(c.jsxs)("form",{className:"QueryForm",onSubmit:this.onSubmit,children:[Object(c.jsx)("h1",{children:"Crypto"}),Object(c.jsx)("label",{children:Object(c.jsx)("a",{href:"https://coinlayer.com/signup/free",rel:"noreferrer",target:"_blank",children:"Need a free API Key?"})}),Object(c.jsxs)("label",{className:"CoinLayerKeyLabel",children:["API Key:",Object(c.jsx)("input",{type:"text",name:"apiKey",value:t,onChange:this.onChange})]}),Object(c.jsxs)("label",{className:"SymbolLabel",children:["Symbol(s):",Object(c.jsx)("input",{type:"text",name:"symbol",value:a,onChange:this.onChange})]}),Object(c.jsx)("div",{className:"QueryButtonWrapped",children:Object(c.jsx)("button",{className:"QueryButton",type:"submit",children:"Analyze"})})]})})}}]),a}(n.Component)),N=function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).onChange=function(t){e.setState(Object(m.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a=e.state.symbol;p.a.post("/",{symbol:a}).then((function(e){}))},e.state={symbol:"FB, AMZN, NFLX, GOOG"},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this.state.symbol;return Object(c.jsx)("div",{className:"QueryPadder",children:Object(c.jsxs)("form",{className:"QueryForm",onSubmit:this.onSubmit,children:[Object(c.jsx)("h1",{children:"Stocks (NYSE)"}),Object(c.jsxs)("label",{className:"SymbolLabel",children:["Symbol(s):",Object(c.jsx)("input",{type:"text",name:"symbol",value:e,onChange:this.onChange})]}),Object(c.jsx)("div",{className:"QueryButtonWrapped",children:Object(c.jsx)("button",{className:"QueryButton",type:"submit",children:"Analyze"})})]})})}}]),a}(n.Component),x=(a(14),a(15),a(67),function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"FormSliderWrapper",children:[Object(c.jsx)("i",{class:"fa fa-arrow-right",className:"nextForm"}),Object(c.jsx)("label",{className:"formLabel",children:"Stocks"}),Object(c.jsx)("i",{class:"fa fa-arrow-left",className:"prevForm"}),Object(c.jsxs)(O.a,Object(l.a)(Object(l.a)({},{arrows:!1,dots:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,speed:785}),{},{className:"FormSlider",children:[Object(c.jsx)(N,{}),Object(c.jsx)(f,{})]}))]})}}]),a}(n.Component)),g=(a(68),function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"ReportWrapper",children:Object(c.jsxs)(O.a,Object(l.a)(Object(l.a)({},{dots:!0,infinite:!0,slidesToShow:1,slidesToScroll:1}),{},{className:"ReportSlider",children:[Object(c.jsxs)("div",{className:"signals",children:[Object(c.jsx)("h2",{children:"Signals"}),Object(c.jsx)("div",{className:"signalsBody"})]}),Object(c.jsxs)("div",{className:"indicators",children:[Object(c.jsx)("h2",{children:"Indicators"}),Object(c.jsx)("div",{className:"indicatorsBody"})]}),Object(c.jsxs)("div",{className:"metrics",children:[Object(c.jsx)("h2",{children:"Metrics"}),Object(c.jsx)("div",{className:"metricsBody"})]})]}))})}}]),a}(n.Component)),v=a.p+"static/media/coinlayer_logo.be650831.svg";a(69);function S(){return Object(c.jsx)("a",{href:"https://coinlayer.com",rel:"noreferrer",target:"_blank",children:Object(c.jsx)("div",{className:"CoinLayer-showcase",children:Object(c.jsx)("img",{src:v,className:"CoinLayer-logo",alt:"coinlayer logo"})})})}var y=a.p+"static/media/enigmaco-logo.b17aa4d4.svg";a(70);function A(){return Object(c.jsx)("a",{href:"https://www.enigma.co/",rel:"noreferrer",target:"_blank",children:Object(c.jsx)("div",{className:"Enigma-showcase",children:Object(c.jsx)("img",{src:y,className:"Enigma-logo",alt:"Enigma logo"})})})}var T=a.p+"static/media/Pandas_logo.47aa8f84.svg";a(71);function C(){return Object(c.jsx)("a",{href:"https://pandas.pydata.org/",rel:"noreferrer",target:"_blank",children:Object(c.jsx)("div",{className:"Pandas-showcase",children:Object(c.jsx)("img",{src:T,className:"Pandas-logo",alt:"Pandas logo"})})})}var z=a.p+"static/media/logo.6ce24c58.svg";a(72);function k(){return Object(c.jsx)("a",{href:"https://reactjs.org",rel:"noreferrer",target:"_blank",children:Object(c.jsx)("div",{className:"React-showcase",children:Object(c.jsx)("img",{src:z,className:"App-logo",alt:"react logo"})})})}a(73);function E(){return Object(c.jsx)("a",{href:"https://www.zipline.io/",rel:"noreferrer",target:"_blank",children:Object(c.jsx)("div",{className:"Zipline-showcase",children:Object(c.jsx)("img",{src:"data:image/png;base64,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",className:"Zipline-logo",alt:"Zipline logo"})})})}a(74);var U=function(e){Object(b.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"SliderWrapper",children:Object(c.jsxs)(O.a,Object(l.a)(Object(l.a)({},{arrows:!1,autoplay:!0,autoplaySpeed:1618,dots:!1,infinite:!0,slidesToShow:1,slidesToScroll:1}),{},{className:"ShowcaseSlider",children:[Object(c.jsx)("div",{children:Object(c.jsx)(k,{})}),Object(c.jsx)("div",{children:Object(c.jsx)(S,{})}),Object(c.jsx)("div",{children:Object(c.jsx)(C,{})}),Object(c.jsx)("div",{children:Object(c.jsx)(E,{})}),Object(c.jsx)("div",{children:Object(c.jsx)(A,{})})]}))})}}]),a}(n.Component);a(75);function V(){return Object(c.jsx)("div",{className:"AppWrapper",children:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(x,{}),Object(c.jsx)(g,{}),Object(c.jsx)(U,{})]})})}var w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,77)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};document.title="Alpha, Decentralized.",i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(V,{})}),document.getElementById("root")),w()}},[[76,1,2]]]);
//# sourceMappingURL=main.5b861c88.chunk.js.map