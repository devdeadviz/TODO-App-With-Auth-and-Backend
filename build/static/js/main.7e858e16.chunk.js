(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{15:function(e,t,n){},30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(4),o=n.n(c),i=n(20),a=n.n(i),r=(n(30),n(12)),s=(n(15),n(25)),d=n(11);n(31),n(32),n(33);d.a.initializeApp({apiKey:"AIzaSyDU58Kp0qsd3-eu59KGDYD8WdtOvtGKpQI",authDomain:"todo-app-e309f.firebaseapp.com",projectId:"todo-app-e309f",storageBucket:"todo-app-e309f.appspot.com",messagingSenderId:"212198015422",appId:"1:212198015422:web:44c0b5ff61ef71a776b9ef"});var u=d.a.auth(),l=d.a.firestore(),j=(d.a.functions(),d.a),b=n(22),p=n(5),h=function(e){var t=e.id,n=e.complete,c=e.text,o=l.collection("users/".concat(u.currentUser.uid,"/todos"));return Object(p.jsxs)("div",{className:"todo",children:[Object(p.jsx)("button",{className:"todo-item ".concat(n?"complete":""),tabIndex:"0",onClick:function(){return function(e,t){return o.doc(e).set({complete:!t},{merge:!0})}(t,n)},children:c}),Object(p.jsx)("button",{onClick:function(){return function(e){return o.doc(e).delete()}(t)},children:"x"})]},t)},O=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],o=t[1],i=l.collection("users/".concat(u.currentUser.uid,"/todos")),a=Object(b.a)(i,{idField:"id"}),d=Object(r.a)(a,1)[0];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("header",{children:Object(p.jsx)("button",{onClick:function(){return u.signOut()},children:"Sign Out"})}),Object(p.jsx)("div",{className:"heading",children:"TODO APP"}),Object(p.jsxs)("main",{children:[Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o(""),i.add({text:n,complete:!1,createdAt:j.firestore.FieldValue.serverTimestamp()})},children:[Object(p.jsx)("input",{required:!0,value:n,onChange:function(e){return o(e.target.value)},placeholder:"What's Next?",className:"input"}),Object(p.jsx)("button",{type:"submit",className:"button-add",children:"Add"})]}),d&&d.map((function(e){return Object(p.jsx)(h,Object(s.a)({},e),e.id)}))]})]})},f=n(23),m=n(24),x=function(){return u.signInWithPopup(new m.a.auth.GoogleAuthProvider)},g=function(){return Object(p.jsxs)("body",{children:[Object(p.jsx)("nav",{className:"App-header",children:" TODO APP "}),Object(p.jsx)("main",{children:Object(p.jsx)("button",{className:"button-sign",onClick:x,children:"Sign In With Google"})}),Object(p.jsx)("footer",{className:"footer",children:Object(p.jsxs)("div",{className:"footer-div",children:["Made With \ud83e\udd0d",Object(p.jsx)("a",{href:"https://www.instagram.com/ig_deadviz/",children:"Kuldeep Gupta"})]})})]})},v=function(){var e=Object(f.a)(u);return Object(r.a)(e,1)[0]?Object(p.jsx)(O,{}):Object(p.jsx)(g,{})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),i(e),a(e)}))};a.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(v,{})}),document.getElementById("root")),I()}},[[37,1,2]]]);
//# sourceMappingURL=main.7e858e16.chunk.js.map