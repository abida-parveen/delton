(this["webpackJsonpcrwn-db"]=this["webpackJsonpcrwn-db"]||[]).push([[0],{43:function(e,t,a){e.exports=a(81)},48:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),i=a.n(c),l=(a(48),a(7)),s=a.n(l),o=a(4),m=a(12),u=a(18),p=a(19),d=a(21),b=a(20),h=a(22),g=(a(50),a(51),a(13)),f=(a(52),a(53),a(14)),v=Object(f.g)((function(e){var t=e.title,a=e.imageUrl,n=e.size,c=e.history,i=e.linkUrl,l=e.match;return r.a.createElement("div",{className:"".concat(n," menu-item"),onClick:function(){return c.push("".concat(l.url).concat(i))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(a,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("span",{className:"subtitle"},"SHOP NOW")))})),E=a(2),y=Object(E.a)([function(e){return e.directory}],(function(e){return e.sections})),k=a(3),O=Object(E.b)({sections:y}),w=Object(k.b)(O)((function(e){var t=e.sections;return r.a.createElement("div",{className:"directory-menu"},t.map((function(e){var t=e.id,a=Object(g.a)(e,["id"]);return r.a.createElement(v,Object.assign({key:t},a))})))})),N=function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(w,null))},j=(a(59),a(60),a(61),a(62),a(63),function(e){var t=e.children,a=e.isGoogleSignin,n=e.inverted,c=Object(g.a)(e,["children","isGoogleSignin","inverted"]);return r.a.createElement("button",Object.assign({className:" ".concat(n?"inverted":"","\n            ").concat(a?"google-sign-in":""," \n            custom-button")},c),t)}),U="TOGGLE_CART_HIDDEN",C="ADD_ITEM",x="REMOVE_ITEM",S="CLEAR_ITEM_FROM_CART",I=function(e){return{type:C,payload:e}},P=function(){return{type:U}},A=Object(k.b)(null,(function(e){return{addItem:function(t){return e(I(t))}}}))((function(e){var t=e.item,a=e.addItem,n=t.name,c=t.price,i=t.imageUrl;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},n),r.a.createElement("span",{className:"price"},"$",c)),r.a.createElement(j,{onClick:function(){return a(t)},inverted:!0},"Add to cart"))})),B=function(e){var t=e.title,a=e.items;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("div",{className:"preview"},a.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(A,{key:e.id,item:e})}))))},T=Object(E.a)([function(e){return e.shop}],(function(e){return e.collections})),M=Object(E.a)([T],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),R=Object(E.b)({collections:M}),G=Object(k.b)(R)((function(e){var t=e.collections;return r.a.createElement("div",{className:"collections-overview"},t.map((function(e){var t=e.id,a=Object(g.a)(e,["id"]);return r.a.createElement(B,Object.assign({key:t},a))})))})),H=(a(64),Object(k.b)((function(e,t){return{collection:(a=t.match.params.collectionId,Object(E.a)([T],(function(e){return e[a]})))(e)};var a}))((function(e){var t=e.collection,a=t.title,n=t.items;return r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",{className:"title"},a),r.a.createElement("div",{className:"items"},n.map((function(e){return r.a.createElement(A,{key:e.id,item:e})}))))}))),D=function(e){var t=e.match;return r.a.createElement("div",null,r.a.createElement(f.b,{exact:!0,path:"".concat(t.path),component:G}),r.a.createElement(f.b,{exact:!0,path:"".concat(t.path,"/:collectionId"),component:H}))},q=a(9);a(65);function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function J(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var z=r.a.createElement("title",null,"Group"),L=r.a.createElement("desc",null,"Created with Sketch."),V=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),F=function(e){var t=e.svgRef,a=e.title,n=J(e,["svgRef","title"]);return r.a.createElement("svg",W({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},n),void 0===a?z:a?r.a.createElement("title",null,a):null,L,V)},_=r.a.forwardRef((function(e,t){return r.a.createElement(F,W({svgRef:t},e))})),K=(a.p,a(23)),Q=a.n(K);a(68),a(69);Q.a.initializeApp({apiKey:"AIzaSyCoewSbAbCGLoDl-miyyAGMP19Cc_hyP34",authDomain:"crwn-db-1829a.firebaseapp.com",databaseURL:"https://crwn-db-1829a.firebaseio.com",projectId:"crwn-db-1829a",storageBucket:"crwn-db-1829a.appspot.com",messagingSenderId:"164648756042",appId:"1:164648756042:web:a827b8e16ace1d7eadd7b3",measurementId:"G-SG5ZL0XHMJ"});var Y=function(){var e=Object(m.a)(s.a.mark((function e(t,a){var n,r,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=Z.doc("users/".concat(t.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=25;break}if(r=t.displayName,c=t.email,i=new Date,e.prev=9,null!==r){e.next=18;break}if(void 0!==a){e.next=14;break}e.next=16;break;case 14:return e.next=16,n.set(Object(o.a)({displayName:r,email:c,createdAt:i},a));case 16:e.next=20;break;case 18:return e.next=20,n.set(Object(o.a)({displayName:r,email:c,createdAt:i},a));case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(9),console.log("Error creating user ",e.t0.message);case 25:return e.abrupt("return",n);case 26:case"end":return e.stop()}}),e,null,[[9,22]])})));return function(t,a){return e.apply(this,arguments)}}(),X=Q.a.auth(),Z=Q.a.firestore(),$=new Q.a.auth.GoogleAuthProvider;$.setCustomParameters({prompt:"select_account"});var ee=function(){return X.signInWithPopup($)};Q.a;function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function ae(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var ne=r.a.createElement("g",null),re=r.a.createElement("g",null),ce=r.a.createElement("g",null),ie=r.a.createElement("g",null),le=r.a.createElement("g",null),se=r.a.createElement("g",null),oe=r.a.createElement("g",null),me=r.a.createElement("g",null),ue=r.a.createElement("g",null),pe=r.a.createElement("g",null),de=r.a.createElement("g",null),be=r.a.createElement("g",null),he=r.a.createElement("g",null),ge=r.a.createElement("g",null),fe=r.a.createElement("g",null),ve=function(e){var t=e.svgRef,a=e.title,n=ae(e,["svgRef","title"]);return r.a.createElement("svg",te({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},n),a?r.a.createElement("title",null,a):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),ne,re,ce,ie,le,se,oe,me,ue,pe,de,be,he,ge,fe)},Ee=r.a.forwardRef((function(e,t){return r.a.createElement(ve,te({svgRef:t},e))})),ye=(a.p,a(70),function(e){return e.cart}),ke=Object(E.a)([ye],(function(e){return e.cartItems})),Oe=Object(E.a)([ye],(function(e){return e.hidden})),we=Object(E.a)([ke],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),Ne=Object(E.a)([ke],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),je=Object(E.b)({itemCount:we}),Ue=Object(k.b)(je,(function(e){return{toggleCartHidden:function(){return e(P())}}}))((function(e){var t=e.toggleCartHidden,a=e.itemCount;return r.a.createElement("div",{className:"cart-icon",onClick:t},r.a.createElement(Ee,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},a))})),Ce=(a(71),a(72),function(e){var t=e.item,a=t.imageUrl,n=t.name,c=t.quantity,i=t.price;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:a,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},n),r.a.createElement("span",{className:"price"},c," x $",i)))}),xe=Object(E.b)({cartItems:ke}),Se=Object(f.g)(Object(k.b)(xe)((function(e){var t=e.cartItems,a=e.history,n=e.dispatch;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return r.a.createElement(Ce,{key:e.id,item:e})})):r.a.createElement("span",{className:"empty-message"},"Your cart is empty")),r.a.createElement(j,{onClick:function(){a.push("/checkout"),n(P())}},"GO TO CHECKOUT"))}))),Ie=Object(E.a)([function(e){return e.user}],(function(e){return e.currentUser})),Pe=Object(E.b)({currentUser:Ie,hidden:Oe}),Ae=Object(k.b)(Pe)((function(e){var t=e.currentUser,a=e.hidden;return r.a.createElement("div",{className:"header"},r.a.createElement(q.b,{to:"/",className:"logo-container"},r.a.createElement(_,{className:"logo"})),r.a.createElement("div",{className:"options"},r.a.createElement(q.b,{className:"option",to:"/shop"},"SHOP"),r.a.createElement(q.b,{className:"option",to:"/shop"},"CONTACT"),t?r.a.createElement("div",{className:"option",onClick:function(){return X.signOut()}},"SIGN OUT"):r.a.createElement(q.b,{className:"option",to:"/signin"},"SIGN IN"),r.a.createElement(Ue,null)),a?null:r.a.createElement(Se,null))})),Be=(a(73),a(17)),Te=(a(74),a(75),function(e){var t=e.handleChange,a=e.label,n=Object(g.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},n)),a?r.a.createElement("label",{className:"".concat(n.value.length?"shrink":""," form-input-label")},a):null)}),Me=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(b.a)(t).call(this,e))).handleSubmit=function(){var e=Object(m.a)(s.a.mark((function e(t){var n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state,r=n.email,c=n.password,e.prev=2,e.next=5,X.signInWithEmailAndPassword(r,c);case 5:a.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0,"im in signin component");case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(Be.a)({},r,n))},a.state={email:"",password:""},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",{className:"title"},"Sign in with your email and password"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(Te,{name:"email",type:"email",value:this.state.email,handleChange:this.handleChange,label:"email",required:!0}),r.a.createElement(Te,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(j,{type:"submit"}," Sign In "),r.a.createElement(j,{onClick:ee,isGoogleSignin:!0},"Sign In With Google"))))}}]),t}(r.a.Component),Re=(a(76),function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(b.a)(t).call(this))).handleSubmit=function(){var t=Object(m.a)(s.a.mark((function t(a){var n,r,c,i,l,o,m;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=e.state,r=n.displayName,c=n.email,i=n.password,l=n.confirmPassword,i===l){t.next=5;break}return alert("password don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,X.createUserWithEmailAndPassword(c,i);case 8:return o=t.sent,m=o.user,t.next=12,Y(m,{displayName:r});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error("error occured while sign up ",t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var a=t.target,n=a.value,r=a.name;e.setState(Object(Be.a)({},r,n))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state,t=e.displayName,a=e.email,n=e.password,c=e.confirmPassword;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not have a account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(Te,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),r.a.createElement(Te,{type:"email",name:"email",value:a,onChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(Te,{type:"password",name:"password",value:n,onChange:this.handleChange,label:"Password",required:!0}),r.a.createElement(Te,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm Password",required:!0}),r.a.createElement(j,{type:"submit"}," SIGN UP ")))}}]),t}(r.a.Component)),Ge=function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(Me,null),r.a.createElement(Re,null))},He="SET_CURRENT_USER",De=(a(77),a(78),Object(k.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:S,payload:e}}(t))},addItem:function(t){return e(I(t))},removeItem:function(t){return e(function(e){return{type:x,payload:e}}(t))}}}))((function(e){var t=e.cartItem,a=e.clearItem,n=e.addItem,c=e.removeItem,i=t.name,l=t.quantity,s=t.price,o=t.imageUrl;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:o,alt:"item"})),r.a.createElement("span",{className:"name"},i),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return c(t)}},"\u276e"),r.a.createElement("span",{className:"value"},l),r.a.createElement("div",{className:"arrow",onClick:function(){return n(t)}},"\u276f")),r.a.createElement("span",{className:"price"},s),r.a.createElement("div",{className:"remove-button",onClick:function(){return a(t)}},"\u2715"))}))),qe=a(38),We=a.n(qe),Je=function(e){var t=e.price,a=167.57*t;return r.a.createElement(We.a,{label:"Pay Now",name:"DELTON Save Mart Ltd.",billingAddress:!0,shippingAddress:!0,image:"http://svgshare.com/i/CUz.svg",description:"Your total is $".concat(t),amount:a,panelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Successful")},stripeKey:"pk_test_51H1FybAwfAo1wnYHlaRN3KCPPq3NoAMcaAckKF6n2ZypxxwZ2M0mGkpMa75HjpI5lQQYQwNDaHuFDHvzud8AtO4d00tb52ubVP"})},ze=Object(E.b)({cartItems:ke,total:Ne}),Le=Object(k.b)(ze)((function(e){var t=e.cartItems,a=e.total;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),t.map((function(e){return r.a.createElement(De,{key:e.id,cartItem:e})})),r.a.createElement("div",{className:"total"},r.a.createElement("span",null,"TOTAL: $",a)),r.a.createElement("div",{className:"test-warning"},"*Please use the following test credit card for payments*",r.a.createElement("br",null),"4242 4242 4242 4242 - Exp: 08/20 - CVV: 123"),r.a.createElement(Je,{price:a}))})),Ve=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).unsubscribeFromAuth=null,a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=X.onAuthStateChanged(function(){var t=Object(m.a)(s.a.mark((function t(a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=5;break}return t.next=3,Y(a);case 3:t.sent.onSnapshot((function(t){e(Object(o.a)({id:t.id},t.data()),console.log("set current user",e))}));case 5:e(a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(Ae,null),r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:"/",component:N}),r.a.createElement(f.b,{path:"/shop",component:D}),r.a.createElement(f.b,{exact:!0,path:"/checkout",component:Le}),r.a.createElement(f.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?r.a.createElement(f.a,{to:"/"}):r.a.createElement(Ge,null)}})))}}]),t}(r.a.Component),Fe=Object(E.b)({currentUser:Ie}),_e=Object(k.b)(Fe,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:He,payload:e}}(t))}}}))(Ve),Ke=a(39),Qe=a.n(Ke),Ye=a(10),Xe={currentUser:null},Ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case He:return Object(o.a)({},e,{currentUser:t.payload});default:return e}},$e=a(42),et=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(o.a)({},e,{quantity:e.quantity+1}):e})):[].concat(Object($e.a)(e),[Object(o.a)({},t,{quantity:1})])},tt=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(o.a)({},e,{quantity:e.quantity-1}):e}))},at={hidden:!0,cartItems:[]},nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return Object(o.a)({},e,{hidden:!e.hidden});case C:return Object(o.a)({},e,{cartItems:et(e.cartItems,t.payload)});case S:return Object(o.a)({},e,{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case x:return Object(o.a)({},e,{cartItems:tt(e.cartItems,t.payload)});default:return e}},rt=a(40),ct=a.n(rt),it=a(27),lt={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=arguments.length>1?arguments[1]:void 0;return t.type,e},ot={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},mt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,t=arguments.length>1?arguments[1]:void 0;return t.type,e},ut={key:"root",storage:ct.a,whitelist:["cart"]},pt=Object(Ye.c)({user:Ze,cart:nt,directory:st,shop:mt}),dt=Object(it.a)(ut,pt),bt=[Qe.a],ht=Object(Ye.d)(dt,Ye.a.apply(void 0,bt)),gt=Object(it.b)(ht),ft=ht,vt=a(41);i.a.render(r.a.createElement(k.a,{store:ft},r.a.createElement(q.a,null,r.a.createElement(vt.a,{persistor:gt},r.a.createElement(_e,null)))),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.24a2362f.chunk.js.map