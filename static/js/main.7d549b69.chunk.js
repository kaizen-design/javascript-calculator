(this["webpackJsonpjavascript-calculator"]=this["webpackJsonpjavascript-calculator"]||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),s=a(8),i=a.n(s),c=a(2),o=a(3),l=a(5),u=a(4),p=a(1),b=a(6),d=function(t){return r.a.createElement("nav",{className:"navbar navbar-dark bg-gradient-dark shadow-sm"},r.a.createElement("div",{className:"container justify-content-center"},r.a.createElement("span",{className:"navbar-brand mb-0 h1"},t.brand)))},m=function(){return r.a.createElement("footer",{className:"container py-3 text-center"},r.a.createElement("small",null,"Designed & built by ",r.a.createElement("a",{href:"https://github.com/kaizen-design",target:"_blank",rel:"noopener noreferrer"},"Denis B.")))},h=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={output:"0",firstOperand:"",operator:"",previousKeyType:"",isNegative:!1},a.handleButtonClick=a.handleButtonClick.bind(Object(p.a)(a)),a}return Object(b.a)(e,t),Object(o.a)(e,[{key:"handleButtonClick",value:function(t){var e=t.target,a=t.target.id,n=t.target.value;switch(Array.from(e.parentNode.children).forEach((function(t){return t.classList.remove("active")})),!0){case["add","subtract","multiply","divide"].includes(a):if(""!==this.state.output){e.classList.add("active");var r=this.state.firstOperand,s=this.state.operator,i=r&&"operator"===this.state.previousKeyType&&s&&"subtract"===a;if(r&&s&&"operator"!==this.state.previousKeyType){var c=this.calculate(r,s,this.state.output);this.setState({firstOperand:c,output:c})}else this.setState({firstOperand:this.state.output});this.setState({operator:i?s:a,previousKeyType:"operator",isNegative:i})}break;case"decimal"===a:"operator"===this.state.previousKeyType?this.setState({output:"0"+n,previousKeyType:"decimal"}):""===this.state.output||this.state.output.includes(".")||this.setState({output:this.state.output+n,previousKeyType:"decimal"});break;case"clear"===a:this.setState({output:"0",firstOperand:"",operator:"",previousKeyType:"",isNegative:!1});break;case"equals"===a:""!==this.state.firstOperand&&this.setState({output:this.calculate(this.state.firstOperand,this.state.operator,this.state.output),previousKeyType:"equals",firstOperand:""});break;default:this.setState({output:"0"===this.state.output||"operator"===this.state.previousKeyType?this.state.isNegative?-n:n:this.state.output+n,previousKeyType:"number"})}}},{key:"calculate",value:function(t,e,a){var n=parseFloat(t),r=parseFloat(a);switch(e){case"add":return n+r;case"subtract":return n-r;case"multiply":return n*r;case"divide":return n/r}}},{key:"render",value:function(){return r.a.createElement("div",{className:"h-100 d-flex flex-column"},r.a.createElement(d,{brand:"Javascript Calculator"}),r.a.createElement("main",{role:"main",className:"App container my-auto py-3"},r.a.createElement("div",{className:"calculator card mx-auto shadow"},r.a.createElement("input",{id:"display",type:"text",className:"calculator-screen",value:this.state.output,disabled:!0}),r.a.createElement(k,{click:this.handleButtonClick}))),r.a.createElement(m,null))}}]),e}(r.a.Component),k=function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(b.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"calculator-keys"},r.a.createElement("button",{id:"add",type:"button",className:"operator btn btn-warning",value:"+",onClick:this.props.click},"+"),r.a.createElement("button",{id:"subtract",type:"button",className:"operator btn btn-warning",value:"-",onClick:this.props.click},"-"),r.a.createElement("button",{id:"multiply",type:"button",className:"operator btn btn-warning",value:"*",onClick:this.props.click},"\xd7"),r.a.createElement("button",{id:"divide",type:"button",className:"operator btn btn-warning",value:"/",onClick:this.props.click},"\xf7"),r.a.createElement("button",{id:"seven",type:"button",value:"7",className:"btn btn-dark",onClick:this.props.click},"7"),r.a.createElement("button",{id:"eight",type:"button",value:"8",className:"btn btn-dark",onClick:this.props.click},"8"),r.a.createElement("button",{id:"nine",type:"button",value:"9",className:"btn btn-dark",onClick:this.props.click},"9"),r.a.createElement("button",{id:"four",type:"button",value:"4",className:"btn btn-dark",onClick:this.props.click},"4"),r.a.createElement("button",{id:"five",type:"button",value:"5",className:"btn btn-dark",onClick:this.props.click},"5"),r.a.createElement("button",{id:"six",type:"button",value:"6",className:"btn btn-dark",onClick:this.props.click},"6"),r.a.createElement("button",{id:"one",type:"button",value:"1",className:"btn btn-dark",onClick:this.props.click},"1"),r.a.createElement("button",{id:"two",type:"button",value:"2",className:"btn btn-dark",onClick:this.props.click},"2"),r.a.createElement("button",{id:"three",type:"button",value:"3",className:"btn btn-dark",onClick:this.props.click},"3"),r.a.createElement("button",{id:"zero",type:"button",value:"0",className:"btn btn-dark",onClick:this.props.click},"0"),r.a.createElement("button",{id:"decimal",type:"button",value:".",className:"decimal function btn btn-dark",onClick:this.props.click},"."),r.a.createElement("button",{id:"clear",type:"button",value:"all-clear",className:"all-clear function btn btn-danger",onClick:this.props.click},"AC"),r.a.createElement("button",{id:"equals",type:"button",value:"=",className:"equal-sign operator btn btn-warning",onClick:this.props.click},"="))}}]),e}(r.a.Component),v=h;a(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},9:function(t,e,a){t.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.7d549b69.chunk.js.map