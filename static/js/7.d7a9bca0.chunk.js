(this["webpackJsonpgoose-frontend"]=this["webpackJsonpgoose-frontend"]||[]).push([[7],{1005:function(n,e){},1007:function(n,e){},1009:function(n,e){},1052:function(n,e){},1059:function(n,e){},1061:function(n,e){},1224:function(n,e){},1384:function(n,e,t){"use strict";t.d(e,"a",(function(){return d}));var r,c,i,a=t(59),o=(t(0),t(3)),u=t(15),s=o.e.div(r||(r=Object(a.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: ",";\n  display: flex;\n  height: 72px;\n  padding: 0 ","px;\n"])),(function(n){return n.theme.colors.input}),(function(n){return n.theme.radii.default}),(function(n){return n.theme.spacing[3]})),l=o.e.input(c||(c=Object(a.a)(["\n  /* display: none; */\n  width: 100%;\n  background: none;\n  border: 0;\n  color: ",";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"])),(function(n){return n.theme.colors.primary})),d=(o.e.img(i||(i=Object(a.a)(["\n  width: 200px;\n  height: auto;\n  \n"]))),function(n){var e=n.onChange;return Object(u.jsx)(s,{children:Object(u.jsx)(l,{name:"document",id:"file-upload",type:"file",accept:".gif, image/png, image/jpeg, image/jpg",onChange:e})})})},1390:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return a}));t(0);var r=t(168),c=t(928),i=t(15),a=function(){return Object(i.jsx)(r.a,{children:Object(i.jsx)("div",{style:{margin:"0 auto",maxWidth:500,marginTop:50},children:Object(i.jsx)(c.a,{})})})}},770:function(n,e){},789:function(n,e,t){"use strict";t.d(e,"a",(function(){return b}));var r,c,i,a=t(59),o=t(0),u=t.n(o),s=t(3),l=t(15),d=s.e.div(r||(r=Object(a.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(n){return n.size}),(function(n){return n.size})),f=function(n){var e,t=n.size,r=void 0===t?"md":t,c=Object(o.useContext)(s.a).spacing;switch(r){case"lg":e=c[6];break;case"sm":e=c[2];break;case"md":default:e=c[4]}return Object(l.jsx)(d,{size:e})},j=s.e.div(c||(c=Object(a.a)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  margin: 0;\n  padding: ","px;\n"])),(function(n){return n.theme.colors.primaryDark}),(function(n){return n.theme.spacing[4]})),p=s.e.div(i||(i=Object(a.a)(["\n  flex: 1;\n  text-align: center;\n"]))),b=function(n){var e=n.children,t=u.a.Children.toArray(e).length;return Object(l.jsx)(j,{children:u.a.Children.map(e,(function(n,e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(p,{children:n}),e<t-1&&Object(l.jsx)(f,{})]})}))})}},791:function(n,e,t){"use strict";t.d(e,"a",(function(){return l}));var r,c,i=t(59),a=(t(0),t(3)),o=t(15),u=a.e.div(r||(r=Object(i.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: ",";\n  display: flex;\n  height: 72px;\n  padding: 0 ","px;\n"])),(function(n){return n.theme.colors.input}),(function(n){return n.theme.radii.default}),(function(n){return n.theme.spacing[3]})),s=a.e.input(c||(c=Object(i.a)(["\n  width: 100%;\n  background: none;\n  border: 0;\n  color: ",";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"])),(function(n){return n.theme.colors.primary})),l=function(n){var e=n.endAdornment,t=n.onChange,r=n.placeholder,c=n.startAdornment,i=n.value;return Object(o.jsxs)(u,{children:[!!c&&c,Object(o.jsx)(s,{placeholder:r,value:i,onChange:t}),!!e&&e]})}},891:function(n,e){},928:function(n,e,t){"use strict";(function(n){var r=t(4),c=t.n(r),i=t(16),a=t(27),o=t(0),u=t(28),s=t(50),l=t(67),d=t(789),f=t(666),j=t(720),p=t(791),b=t(1384),h=t(929),g=t(15);e.a=function(e){var t=e.onDismiss,r=Object(j.a)(),m=Object(l.m)().account,O=Object(o.useState)(null),x=Object(a.a)(O,2),v=x[0],y=x[1],w=Object(o.useState)(null),k=Object(a.a)(w,2),C=k[0],T=k[1],A=Object(o.useState)(null),S=Object(a.a)(A,2),z=S[0],B=S[1],R=Object(o.useState)(null),D=Object(a.a)(R,2),F=D[0],I=D[1],J=Object(o.useState)(!1),N=Object(a.a)(J,2),U=N[0],q=N[1],E=Object(o.useState)(!1),W=Object(a.a)(E,2),G=W[0],H=W[1],K=Object(o.useState)(!1),L=Object(a.a)(K,2),M=L[0],P=L[1],Q=Object(o.useCallback)((function(n){y(n.currentTarget.value),H(!1)}),[y]),V=Object(o.useCallback)((function(n){T(n.currentTarget.value),H(!1)}),[T]),X=Object(o.useCallback)((function(n){B(n.currentTarget.files[0]),H(!1)}),[B]),Y=Object(o.useCallback)((function(n){I(n.currentTarget.value),H(!1)}),[I]),Z=Object(o.useCallback)(Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=new window.FileReader,""===F&&I("1"),parseInt(F)>5&&I("5"),v&&C&&z?(H(!1),P(!0),t.readAsArrayBuffer(z),t.onloadend=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{h.a.files.add(n.from(t.result),function(){var n=Object(i.a)(c.a.mark((function n(e,t){var i;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=4;break}console.log("ERR",e),n.next=9;break;case 4:return i=t[0].hash,console.log("ipfs",i),n.next=8,Object(f.j)(r,i,v,C,F,m);case 8:q(!0);case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}())}catch(a){console.log(a)}case 1:case"end":return e.stop()}}),e)})))):H(!0);case 6:case"end":return e.stop()}}),e)}))),[z,r,v,C,m,F]);return Object(g.jsxs)(s.m,{title:"Create NFT",onDismiss:t,hideCloseButton:!0,children:[G?Object(g.jsx)("span",{style:{color:"red",textAlign:"center",marginBottom:30,fontSize:18},children:"Required information empty."}):null,U?Object(g.jsx)(u.a,{to:"/wallet"}):null,Object(g.jsx)(p.a,{endAdornment:null,onChange:Q,placeholder:"Name",value:v}),Object(g.jsx)("div",{style:{marginTop:20}}),M?Object(g.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",marginRight:60},children:Object(g.jsx)(s.p,{})}):null,Object(g.jsx)(p.a,{endAdornment:null,onChange:V,placeholder:"Description",value:C}),Object(g.jsx)("div",{style:{marginTop:20}}),Object(g.jsx)(p.a,{endAdornment:null,onChange:Y,placeholder:"Units - maximum units: 5",value:F}),Object(g.jsx)("div",{style:{marginTop:20}}),Object(g.jsx)("span",{style:{color:"#c52727",marginBottom:3,marginTop:15,fontSize:12},children:"** Attention! Upload only images, in formats (jpg, jpeg, png, gif), if it is another file type, the smart contract will disregard it and you will lose the transaction."}),Object(g.jsx)("span",{style:{color:"#c52727",marginBottom:10,marginTop:2,fontSize:12},children:"Other file types will soon be supported."}),Object(g.jsx)(b.a,{onChange:X}),Object(g.jsx)(d.a,{children:Object(g.jsx)(s.a,{disabled:!1,onClick:Z,style:{width:300},children:"Create"})})]})}}).call(this,t(10).Buffer)},929:function(n,e,t){"use strict";(function(n){t.d(e,"a",(function(){return i}));t(4),t(16);var r=t(930),c=t.n(r),i=(t(663),new c.a({host:"ipfs.infura.io",port:5001,protocol:"https"}))}).call(this,t(10).Buffer)},941:function(n,e){},943:function(n,e){},972:function(n,e){},973:function(n,e){}}]);
//# sourceMappingURL=7.d7a9bca0.chunk.js.map