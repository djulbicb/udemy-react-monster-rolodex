(this.webpackJsonprolodex=this.webpackJsonprolodex||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),o=n(9),i=n.n(o),a=(n(14),n(2)),r=n(3),l=n(5),h=n(4),u=(n.p,n(15),n(0)),d=(s.a.Component,function(e){var t=e.monster;return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{src:"https://robohash.org/>".concat(t.id,"?set=set2")}),Object(u.jsxs)("h2",{children:[t.id," ",t.name]}),Object(u.jsx)("p",{children:t.email})]})}),j=(n(8),function(e){return Object(u.jsxs)(u.Fragment,{children:[e.children,Object(u.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(u.jsx)(d,{monster:e},e.id)}))})]})}),b=function(e){var t=e.placeholder,n=void 0===t?"Type here":t,c=e.handleChange;return Object(u.jsx)("input",{className:"search-field",type:"search",placeholder:n,onChange:c})},O=n(6),f=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).handleClick3=function(){console.log("Button 03",Object(O.a)(c))},c.handleClick2=c.handleClick2.bind(Object(O.a)(c)),c}return Object(r.a)(n,[{key:"handleClick1",value:function(){console.log("Button 01",this)}},{key:"handleClick2",value:function(){console.log("Button 02",this)}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:this.handleClick1(),children:"Button 1 - Izvrsi se svaki put kad se renderuje. This postoji"}),Object(u.jsx)("button",{onClick:this.handleClick1,children:"Button 2 - Izvrsi se na klik. This ne postoji"}),Object(u.jsx)("button",{onClick:this.handleClick2,children:"Button 3 - Radi zbog binda"}),Object(u.jsx)("button",{onClick:this.handleClick3,children:"Button 4 - Radi zbog arrow funkcije"})]})}}]),n}(s.a.Component),k=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).state={monsters:[],searchVal:""},c}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({monsters:t},(function(){console.log("Callback kad se state izvrsi")}))}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,c=t.searchVal,s=n.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(f,{}),Object(u.jsx)(b,{placeholder:"Call me a monster!!!",handleChange:function(t){e.setState({searchVal:t.target.value})}}),Object(u.jsx)("hr",{}),Object(u.jsx)(j,{monsters:s,className:"card-list",children:Object(u.jsx)("h1",{children:"Monster Rolodex"})})]})}}]),n}(s.a.Component),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),o(e),i(e)}))};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root")),m()},8:function(e,t,n){}},[[17,1,2]]]);
//# sourceMappingURL=main.2d605871.chunk.js.map