(this.webpackJsonpairbnk=this.webpackJsonpairbnk||[]).push([[0],{109:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(66),i=n.n(a),s=(n(79),n(10)),o=n(30),d=n(20),l=n.n(d),j=n(27),p=n(15),u=n(141),b=n(140),x=n(31),h=n.n(x),g=n(142),O=n(5),f=n(136),m=n(138),v=n(69),y=n.n(v),w=(n(101),n(102),n(2)),k=Object(f.a)({Card:{width:"100%",height:350,display:"inline-block",boxShadow:"1px 1px 10px white",borderRadius:"5px",margin:"1%"},img:{height:275,width:"calc(100% - 2px)",marginLeft:"auto",marginRight:"auto",border:"1px solid rgba(0,0,0,0.3)",borderRadius:10,marginBottom:20,padding:0,overflow:"hidden","&:hover":{cursor:"pointer"}},imgContainer:{},content:{display:"inline-flex",alignItems:"center",justifyContent:"space-between","&:hover":{cursor:"pointer"}}}),C=function(e){var t=e.product;console.log("ProductsByCategory :: in product",t);var n=k(),r=Object(s.f)(),a=Object(c.useState)([]),i=Object(p.a)(a,2),o=(i[0],i[1]),d=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://fakestoreapi.com//products/".concat(t));case 2:n=e.sent,c=n.data,o(c),console.log("profuct info",c),r.push({pathname:"/".concat(c.category,"/product/").concat(c.id),state:c});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(e){console.log("clicked",e),d(e)};return Object(w.jsxs)("div",{className:n.Card,children:[Object(w.jsx)("div",{className:"item",children:Object(w.jsx)(y.a,{className:"owl-theme",items:1,loop:!0,margin:10,nav:!0,children:Object(w.jsx)("div",{className:n.imgContainer,children:Object(w.jsx)("div",{className:n.img,onClick:function(){return u(t.id)},children:Object(w.jsx)("div",{style:{width:"inherit",height:"100%",backgroundImage:"url(".concat(t.image||"https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail.jpg",")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}})})})})}),Object(w.jsxs)("div",{className:n.content,style:{width:"calc(100% - 0px)"},onClick:function(){return u(t.id)},children:[Object(w.jsxs)("div",{style:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",width:"calc(100% - 80px)",padding:"5px"},children:[Object(w.jsx)("p",{style:{margin:0,padding:0,fontWeight:"bold"},children:t.title})," "]}),Object(w.jsx)("div",{style:{width:80},children:Object(w.jsxs)("p",{style:Object(O.a)({margin:0,padding:0,textAlign:"right",textDecoration:"underline"},"padding","5px"),children:["\u20b9 ",t.price]})})]}),Object(w.jsxs)("div",{className:n.content,children:[Object(w.jsxs)("div",{style:{width:"calc(100% - 80px)",padding:"5px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[Object(w.jsx)("p",{style:{margin:0,padding:0,color:"grey"},children:t.category})," "]}),Object(w.jsxs)("p",{style:{margin:0,padding:0,textAlign:"right",color:"grey"},className:n.content,children:[Object(w.jsx)(m.a,{})," ",t.rating.rate,"(",t.rating.count,")"]})]})]})},S=function(e){var t=e.allProducts,n=e.classes;return console.log("in all products ::",t),Object(w.jsx)(b.a,{container:!0,children:t&&t.map((function(e){return Object(w.jsxs)(b.a,{item:!0,lg:3,md:4,sm:6,xs:12,style:{display:"flex",justifyContent:"center",padding:"8px 8px"},children:[Object(w.jsx)(C,{product:e,classes:n})," "]})}))})},N=n(137),P=function(){var e,t=Object(s.f)(),n=Object(c.useState)([]),r=Object(p.a)(n,2),a=r[0],i=r[1],o=Object(c.useState)([]),d=Object(p.a)(o,2),x=(d[0],d[1],function(){var e=Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://fakestoreapi.com/products/categories");case 2:t=e.sent,n=t.data,i(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),g=function(){var e=Object(j.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.push({pathname:"/category/".concat(n),state:n});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){return x()}),[]);return Object(w.jsx)(u.a,{children:Object(w.jsxs)("div",{style:(e={display:"inlineFlex",position:"sticky",top:.5,heigth:40,left:"0"},Object(O.a)(e,"top","0"),Object(O.a)(e,"zIndex",99),Object(O.a)(e,"backgroundColor","#FFF"),Object(O.a)(e,"marginBottom",10),e),children:[Object(w.jsx)(b.a,{xs:12,Container:!0,spacing:2,children:a&&a.map((function(e,t){return Object(w.jsx)("div",{style:{display:"inline-flex",marginLeft:"0px"},children:Object(w.jsx)(N.a,{style:{color:"#484848",padding:"10px"},onClick:function(){return function(e){g(e)}(e)},children:e})})}))}),Object(w.jsx)("br",{})]})})},F=function(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),n=t[0],r=t[1],a=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://fakestoreapi.com/products");case 2:t=e.sent,n=t.data,r(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return a()}),[]),Object(w.jsxs)(u.a,{children:[Object(w.jsx)(P,{}),Object(w.jsx)(g.a,{children:Object(w.jsx)(b.a,{sx:{flexGrow:1},children:Object(w.jsx)(S,{allProducts:n})})})]})},I=n(143),B=n(145),E=n.p+"static/media/anb-logo.09e3d0af.PNG",D=Object(f.a)({stickyHeader:{position:"sticky",top:.5,height:70,boxShadow:"rgb(0 0 0 / 8%) 0px 1px 1px !important"}}),L=function(){D();return Object(w.jsxs)("div",{children:[Object(w.jsx)(I.a,{position:"static",style:{boxShadow:"none"},children:Object(w.jsx)(B.a,{style:{background:"white",boxShadow:"rgb(0 0 0 / 8%) 0px 1px 1px"},children:Object(w.jsx)(o.b,{to:"/",style:{textDecoration:"none"},children:Object(w.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(w.jsx)("img",{src:E,alt:"img",height:"42"}),Object(w.jsx)("h2",{style:{color:"red"},children:"airbnb"})]})})})}),Object(w.jsx)("br",{})]})},R=function(e){var t=Object(c.useState)([]),n=Object(p.a)(t,2),r=n[0],a=n[1];console.log("gooff",e);var i=Object(s.g)(),o=e.classes,d=e.match;e.history;console.log("dataererer1 ",d.params.catogories),console.log("dataererer ",null===i||void 0===i?void 0:i.state);var x=d.params.catogories;return Object(c.useEffect)((function(){var e=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://fakestoreapi.com/products/category/".concat(x));case 2:t=e.sent,n=t.data,a(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[d.params.catogories]),Object(w.jsxs)("div",{children:[Object(w.jsx)(P,{}),Object(w.jsx)(u.a,{children:Object(w.jsx)(b.a,{sx:{flexGrow:1},container:!0,children:r.map((function(e){return Object(w.jsx)(b.a,{item:!0,lg:3,md:4,sm:6,xs:12,style:{display:"flex",justifyContent:"center",padding:"8px 8px"},children:Object(w.jsx)(C,{product:e,classes:o})})}))})})]})},A=n(146),G=Object(f.a)({image:{objectFit:"fill"},Card:{height:"300",width:"270px",margin:5}}),z=function(){var e=Object(s.g)(),t={useStyles:G},n=null===e||void 0===e?void 0:e.state;return Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{children:Object(w.jsx)(A.a,{className:t.Card,children:Object(w.jsx)("img",{src:null===n||void 0===n?void 0:n.image,style:{height:"300px",width:"270px"}})})}),Object(w.jsx)("h2",{children:null===n||void 0===n?void 0:n.title}),Object(w.jsxs)("h2",{children:[" ","Price :",null===n||void 0===n?void 0:n.price," ","  "]}),Object(w.jsxs)("span",{children:[Object(w.jsx)("b",{children:"Description :"})," ",null===n||void 0===n?void 0:n.description," ","  "]})]})},J=function(){var e=Object(s.f)();return Object(c.useEffect)((function(){return function(){"POP"===e.action&&e.replace(e.location.pathname)}}),[e]),Object(w.jsx)("div",{children:Object(w.jsxs)(o.a,{children:[Object(w.jsx)(L,{}),Object(w.jsxs)(s.c,{children:[Object(w.jsx)(s.a,{exact:!0,path:"/",component:F}),Object(w.jsx)(s.a,{exact:!0,path:"/category/:catogories",component:R}),Object(w.jsx)(s.a,{exact:!0,path:"/:catogories/product/:id",component:z})]})]})})};var T=function(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsx)(J,{})})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,148)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(T,{})}),document.getElementById("root")),H()},79:function(e,t,n){}},[[109,1,2]]]);
//# sourceMappingURL=main.3923de05.chunk.js.map