(this.webpackJsonpalphadecentralized=this.webpackJsonpalphadecentralized||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),s=a.n(n),r=a(16),i=a.n(r),j=a(2),l=a(3),d=a(5),o=a(4),b=(a(22),function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsxs)("ul",{id:"nav",children:[Object(c.jsxs)("li",{children:[Object(c.jsx)("a",{href:"#"}),"Analyze"]}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#",children:"Research"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#",children:"About"})})]})})}}]),a}(s.a.Component)),O=a(9),h=Object(n.createContext)(),p=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(j.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={data:"Analyze some assets!"},e.setData=function(t){e.setState((function(e){return{data:t}}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.children,t=this.state.data,a=this.setData;return Object(c.jsx)(h.Provider,{value:{data:t,setData:a},children:e})}}]),a}(n.Component),u=h,x=(a(23),function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(j.a)(this,a),(e=t.call(this)).onChange=function(t){e.setState(Object(O.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a=e.context.setData,c=e.state.assetClass,n=e.state.symbol;fetch("https://dangitsal.pythonanywhere.com/api/".concat(c,"?symbol=").concat(n)).then((function(e){return e.json()})).then((function(e){console.log(JSON.stringify(e)),a(e)})).catch((function(e){console.error(e)}))},e.state={assetClass:"stocks",symbol:"GOOGL"},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.assetClass.assetClass,t=this.state.symbol.symbol;return Object(c.jsx)("div",{className:"queryFormWrapper",children:Object(c.jsxs)("form",{className:"queryForm",onSubmit:this.onSubmit,children:[Object(c.jsxs)("select",{name:"assetClass",id:"assetClass",value:e,onChange:this.onChange,children:[Object(c.jsx)("option",{value:"crypto",children:"Stocks"}),Object(c.jsx)("option",{value:"stocks",children:"Crypto"})]}),Object(c.jsxs)("label",{className:"symbolLabel",children:["Symbol:",Object(c.jsx)("input",{type:"text",name:"symbol",value:t,onChange:this.onChange})]}),Object(c.jsx)("div",{className:"queryButtonWrapped",children:Object(c.jsx)("button",{className:"queryButton",type:"submit",children:"Analyze"})})]})})}}]),a}(n.Component));x.contextType=u;var f=a(6),m=a(10),v=a.n(m),N=(a(39),function(){var e=Object(n.useContext)(u);return Object(c.jsxs)("div",{className:"fundamentalBody",style:{marginTop:"30px"},children:[Object(c.jsxs)("div",{className:"fundamentalHeadings",children:[Object(c.jsx)("p",{children:"1Y Target (Analysts): "}),Object(c.jsx)("p",{children:"Price: "}),Object(c.jsx)("p",{children:"Ask: "}),Object(c.jsx)("p",{children:"Bid: "}),Object(c.jsx)("p",{children:"Open: "}),Object(c.jsx)("p",{children:"Previous Close: "}),Object(c.jsx)("p",{children:"Day's Range: "}),Object(c.jsx)("p",{children:"52 Week Range: "}),Object(c.jsx)("p",{children:"Beta (5Y Monthly): "}),Object(c.jsx)("p",{children:"Avg Volume: "}),Object(c.jsx)("p",{children:"Volume: "}),Object(c.jsx)("p",{children:"Market Cap: "}),Object(c.jsx)("p",{children:"Earnings Date: "}),Object(c.jsx)("p",{children:"Ex-Dividend Date: "}),Object(c.jsx)("p",{children:"Forward Dividend & Yield: "}),Object(c.jsx)("p",{children:"Earnings Per Share: "}),Object(c.jsx)("p",{children:"Price/Earnings Ratio: "})]}),Object(c.jsxs)("div",{className:"fundamentalValues",children:[Object(c.jsx)("p",{children:e.data["1y Target Est"]}),Object(c.jsx)("p",{children:e.data["Quote Price"]}),Object(c.jsx)("p",{children:e.data.Ask}),Object(c.jsx)("p",{children:e.data.Bid}),Object(c.jsx)("p",{children:e.data.Open}),Object(c.jsx)("p",{children:e.data["Previous Close"]}),Object(c.jsx)("p",{children:e.data["Day's Range"]}),Object(c.jsx)("p",{children:e.data["52 Week Range"]}),Object(c.jsx)("p",{children:e.data["Beta (5Y Monthly)"]}),Object(c.jsx)("p",{children:e.data["Avg. Volume"]}),Object(c.jsx)("p",{children:e.data.Volume}),Object(c.jsx)("p",{children:e.data["Market Cap"]}),Object(c.jsx)("p",{children:e.data["Earnings Date"]}),Object(c.jsx)("p",{children:e.data["Ex-Dividend Date"]}),Object(c.jsx)("p",{children:e.data["Forward Dividend & Yield"]}),Object(c.jsx)("p",{children:e.data["EPS (TTM)"]}),Object(c.jsx)("p",{children:e.data["PE Ratio (TTM)"]})]})]})}),g=Object(n.createContext)(),T=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(j.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={data:""},e.setData=function(t){e.setState((function(e){return{data:t}}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.children,t=this.state.data,a=this.setData;return Object(c.jsx)(g.Provider,{value:{data:t,setData:a},children:e})}}]),a}(n.Component);fetch("https://dangitsal.pythonanywhere.com/api/redditstocks").then((function(e){return e.json()})).then((function(e){console.log(JSON.stringify(e)),g.setData(e)})).catch((function(e){console.error(e)}));var A=g,C=(a(40),function(){var e=Object(n.useContext)(A);return Object(c.jsxs)("div",{className:"redditStocksBody",style:{marginTop:"30px"},children:[Object(c.jsxs)("div",{className:"tickersColumn",children:[Object(c.jsxs)("p",{children:["1: ",JSON.stringify(e.data[0])]}),Object(c.jsxs)("p",{children:["2: ",e.data[1]]}),Object(c.jsxs)("p",{children:["3: ",e.data[2]]}),Object(c.jsxs)("p",{children:["4: ",e.data[3]]}),Object(c.jsxs)("p",{children:["5: ",e.data[4]]}),Object(c.jsxs)("p",{children:["6: ",e.data[5]]}),Object(c.jsxs)("p",{children:["7: ",e.data[6]]}),Object(c.jsxs)("p",{children:["8: ",e.data[7]]}),Object(c.jsxs)("p",{children:["9: ",e.data[8]]}),Object(c.jsxs)("p",{children:["10: ",e.data[9]]})]}),Object(c.jsxs)("div",{className:"mentionsColumn",children:[Object(c.jsx)("p",{children:e.data[0]}),Object(c.jsx)("p",{children:e.data[1]}),Object(c.jsx)("p",{children:e.data[2]}),Object(c.jsx)("p",{children:e.data[3]}),Object(c.jsx)("p",{children:e.data[4]}),Object(c.jsx)("p",{children:e.data[5]}),Object(c.jsx)("p",{children:e.data[6]}),Object(c.jsx)("p",{children:e.data[7]}),Object(c.jsx)("p",{children:e.data[8]}),Object(c.jsx)("p",{children:e.data[10]})]})]})}),y=(a(14),a(15),a(41),function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"reportWrapper",children:Object(c.jsxs)(v.a,Object(f.a)(Object(f.a)({},{arrows:!1,dots:!0,infinite:!0,slidesToShow:1,slidesToScroll:1}),{},{className:"reportSlider",children:[Object(c.jsxs)("div",{className:"fundamentals",children:[Object(c.jsx)("h2",{children:"Fundamentals"}),Object(c.jsx)(N,{className:"fundamentalReport"})]}),Object(c.jsxs)("div",{className:"quantitative",children:[Object(c.jsx)("h2",{children:"Quantitative"}),Object(c.jsxs)("div",{className:"quantitativeBody",children:[Object(c.jsx)("h3",{children:"Top Mentioned Stocks (Reddit)"}),Object(c.jsx)(C,{className:"redditStocksReport"})]})]}),Object(c.jsxs)("div",{className:"indicators",children:[Object(c.jsx)("h2",{children:"Indicators"}),Object(c.jsx)("div",{className:"indicatorsBody"})]})]}))})}}]),a}(n.Component)),S=a.p+"static/media/Pandas_logo.47aa8f84.svg";a(42);function k(){return Object(c.jsx)("a",{href:"https://pandas.pydata.org/",rel:"noreferrer",target:"_blank",children:Object(c.jsx)("div",{className:"Pandas-showcase",children:Object(c.jsx)("img",{src:S,className:"Pandas-logo",alt:"Pandas logo"})})})}var z=a.p+"static/media/logo.6ce24c58.svg";a(43);function E(){return Object(c.jsx)("a",{href:"https://reactjs.org",rel:"noreferrer",target:"_blank",children:Object(c.jsx)("div",{className:"React-showcase",children:Object(c.jsx)("img",{src:z,className:"App-logo",alt:"react logo"})})})}a(44);function V(){return Object(c.jsx)("a",{href:"https://www.zipline.io/",rel:"noreferrer",target:"_blank",children:Object(c.jsx)("div",{className:"Zipline-showcase",children:Object(c.jsx)("img",{src:"data:image/png;base64,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",className:"Zipline-logo",alt:"Zipline logo"})})})}a(45);var U=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"sliderWrapper",children:Object(c.jsxs)(v.a,Object(f.a)(Object(f.a)({},{arrows:!1,autoplay:!0,autoplaySpeed:1618,dots:!1,infinite:!0,slidesToShow:1,slidesToScroll:1}),{},{className:"showcaseSlider",children:[Object(c.jsx)("div",{children:Object(c.jsx)(E,{})}),Object(c.jsx)("div",{children:Object(c.jsx)(k,{})}),Object(c.jsx)("div",{children:Object(c.jsx)(V,{})})]}))})}}]),a}(n.Component);a(46);function D(){return Object(c.jsx)("div",{className:"appWrapper",children:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(x,{}),Object(c.jsx)(y,{}),Object(c.jsx)(U,{})]})})}var R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,49)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};a(47);document.title="Alpha, Decentralized.",i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(p,{children:Object(c.jsx)(T,{children:Object(c.jsx)(D,{})})})}),document.getElementById("root")),R()}},[[48,1,2]]]);
//# sourceMappingURL=main.51fc54e8.chunk.js.map