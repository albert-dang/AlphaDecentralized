(this.webpackJsonpalphadecentralized=this.webpackJsonpalphadecentralized||[]).push([[0],{26:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),r=n(27),i=n.n(r),o=n(7),l=n(3),j=n(4),b=n(6),u=n(5),d=n(9),h=n.n(d),O=n(8),m=n(12),p=n.n(m),f=(n(26),function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).onChange=function(t){e.setState(Object(O.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var n=e.state.symbol;p.a.post("/",{symbol:n}).then((function(e){})),fetch("https://dangitsal.pythonanywhere.com/api/fullsheet").then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){console.error(e)}))},e.state={symbol:"BTC, ETH, XLM"},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state.symbol;return Object(a.jsx)("div",{className:"queryFormWrapper",children:Object(a.jsxs)("form",{className:"queryForm",onSubmit:this.onSubmit,children:[Object(a.jsx)("h1",{children:"Crypto"}),Object(a.jsxs)("label",{className:"SymbolLabel",children:["Symbol(s):",Object(a.jsx)("input",{type:"text",name:"symbol",value:e,onChange:this.onChange})]}),Object(a.jsx)("div",{className:"queryButtonWrapped",children:Object(a.jsx)("button",{className:"queryButton",type:"submit",children:"Analyze"})})]})})}}]),n}(c.Component)),x=Object(c.createContext)(),N=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={data:"Analyze some assets!"},e.setData=function(t){e.setState((function(e){return{data:t}}))},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props.children,t=this.state.data,n=this.setData;return Object(a.jsx)(x.Provider,{value:{data:t,setData:n},children:e})}}]),n}(c.Component),v=x,g=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).dataPush={},e.onChange=function(t){e.setState(Object(O.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var n=e.context.setData,a=e.state.symbol;p.a.post("/",{symbol:a}).then((function(e){})),fetch("https://dangitsal.pythonanywhere.com/api/fullsheet").then((function(e){return e.json()})).then((function(e){console.log(e),n(e)})).catch((function(e){console.error(e)}))},e.state={symbol:"FB, AMZN, NFLX, GOOG"},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state.symbol;return Object(a.jsx)("div",{className:"queryFormWrapper",children:Object(a.jsxs)("form",{className:"queryForm",onSubmit:this.onSubmit,children:[Object(a.jsx)("h1",{children:"Stocks (NYSE)"}),Object(a.jsxs)("label",{className:"symbolLabel",children:["Symbol(s):",Object(a.jsx)("input",{type:"text",name:"symbol",value:e,onChange:this.onChange})]}),Object(a.jsx)("div",{className:"queryButtonWrapped",children:Object(a.jsx)("button",{className:"queryButton",type:"submit",children:"Analyze"})})]})})}}]),n}(c.Component);g.contextType=v;n(14),n(15),n(66);var y=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"formSliderWrapper",children:Object(a.jsxs)(h.a,Object(o.a)(Object(o.a)({},{arrows:!1,dots:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,speed:785}),{},{className:"formSlider",children:[Object(a.jsx)(g,{}),Object(a.jsx)(f,{})]}))})}}]),n}(c.Component),S=function(){var e=Object(c.useContext)(v);return Object(a.jsx)("div",{style:{marginTop:"30px"},children:Object(a.jsxs)("h2",{className:"is-size-4",children:[Object(a.jsx)("strong",{children:"Data"}),": ",e.data]})})},T=(n(67),function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"reportWrapper",children:Object(a.jsxs)(h.a,Object(o.a)(Object(o.a)({},{arrows:!1,dots:!0,infinite:!0,slidesToShow:1,slidesToScroll:1}),{},{className:"reportSlider",children:[Object(a.jsxs)("div",{className:"signals",children:[Object(a.jsx)("h2",{children:"Signals"}),Object(a.jsx)("div",{className:"signalsBody"})]}),Object(a.jsxs)("div",{className:"indicators",children:[Object(a.jsx)("h2",{children:"Indicators"}),Object(a.jsx)("div",{className:"indicatorsBody"})]}),Object(a.jsxs)("div",{className:"metrics",children:[Object(a.jsx)("h2",{children:"Metrics"}),Object(a.jsx)(S,{})]})]}))})}}]),n}(c.Component)),A=n.p+"static/media/coinlayer_logo.be650831.svg";n(68);function C(){return Object(a.jsx)("a",{href:"https://coinlayer.com",rel:"noreferrer",target:"_blank",children:Object(a.jsx)("div",{className:"CoinLayer-showcase",children:Object(a.jsx)("img",{src:A,className:"CoinLayer-logo",alt:"coinlayer logo"})})})}var z=n.p+"static/media/enigmaco-logo.b17aa4d4.svg";n(69);function k(){return Object(a.jsx)("a",{href:"https://www.enigma.co/",rel:"noreferrer",target:"_blank",children:Object(a.jsx)("div",{className:"Enigma-showcase",children:Object(a.jsx)("img",{src:z,className:"Enigma-logo",alt:"Enigma logo"})})})}var E=n.p+"static/media/Pandas_logo.47aa8f84.svg";n(70);function U(){return Object(a.jsx)("a",{href:"https://pandas.pydata.org/",rel:"noreferrer",target:"_blank",children:Object(a.jsx)("div",{className:"Pandas-showcase",children:Object(a.jsx)("img",{src:E,className:"Pandas-logo",alt:"Pandas logo"})})})}var V=n.p+"static/media/logo.6ce24c58.svg";n(71);function w(){return Object(a.jsx)("a",{href:"https://reactjs.org",rel:"noreferrer",target:"_blank",children:Object(a.jsx)("div",{className:"React-showcase",children:Object(a.jsx)("img",{src:V,className:"App-logo",alt:"react logo"})})})}n(72);function B(){return Object(a.jsx)("a",{href:"https://www.zipline.io/",rel:"noreferrer",target:"_blank",children:Object(a.jsx)("div",{className:"Zipline-showcase",children:Object(a.jsx)("img",{src:"data:image/png;base64,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",className:"Zipline-logo",alt:"Zipline logo"})})})}n(73);var I=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"sliderWrapper",children:Object(a.jsxs)(h.a,Object(o.a)(Object(o.a)({},{arrows:!1,autoplay:!0,autoplaySpeed:1618,dots:!1,infinite:!0,slidesToShow:1,slidesToScroll:1}),{},{className:"showcaseSlider",children:[Object(a.jsx)("div",{children:Object(a.jsx)(w,{})}),Object(a.jsx)("div",{children:Object(a.jsx)(C,{})}),Object(a.jsx)("div",{children:Object(a.jsx)(U,{})}),Object(a.jsx)("div",{children:Object(a.jsx)(B,{})}),Object(a.jsx)("div",{children:Object(a.jsx)(k,{})})]}))})}}]),n}(c.Component);n(74);function M(){return Object(a.jsx)("div",{className:"appWrapper",children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(y,{}),Object(a.jsx)(T,{}),Object(a.jsx)(I,{})]})})}var R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};n(75);document.title="Alpha, Decentralized.",i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(N,{children:Object(a.jsx)(M,{})})}),document.getElementById("root")),R()}},[[76,1,2]]]);
//# sourceMappingURL=main.3d460689.chunk.js.map