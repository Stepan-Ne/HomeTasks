(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],{12:function(e,a,t){e.exports={superInput:"SuperInputText_superInput__3XH9u",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S"}},13:function(e,a,t){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",inputErr:"HW4_inputErr__27pZY"}},15:function(e,a,t){e.exports={default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_"}},16:function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},2:function(e,a,t){e.exports={sidebar:"Header_sidebar__3GT2U",check:"Header_check__wZ4xC",btn:"Header_btn__1UEqj",cancel:"Header_cancel__23kix",jun:"Header_jun__2Zqcf",err404:"Header_err404__OVUAm",titleErr:"Header_titleErr__1SyS1",type:"Header_type__3XClN",active:"Header_active__2HXpm"}},23:function(e,a,t){e.exports={App:"App_App__1Sc4o"}},26:function(e,a,t){e.exports=t(37)},31:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(22),c=t.n(l),o=(t(31),t(23)),i=t.n(o),u=t(6),s=t(2),m=t.n(s),d=t(1),E=t(3),f={margin:"0 auto",borderRadius:"5px",backgroundColor:"#f2f2f2",padding:"20px",maxWidth:"200px"},p={fontSize:"2rem",border:"1px solid black",padding:"5px"},b={border:"1px solid black",marginTop:"2px",padding:"10px"},_={border:"1px solid black",padding:"10px",borderRadius:"2px",display:"inline-block",marginLeft:"20px"},h={color:"orange",fontSize:"2.5rem",border:"1px solid black",padding:"5px"},v=function(e){return r.a.createElement("div",{style:f},r.a.createElement("div",{style:e.flag?h:p,onChange:function(e){console.log(e.currentTarget)}},e.countValue),r.a.createElement("div",{style:b},r.a.createElement("div",{style:_},r.a.createElement("button",{disabled:e.flag,onClick:function(){e.incrementValue()}},"inc")),r.a.createElement("div",{style:_},r.a.createElement("button",{disabled:!e.flag,onClick:function(){e.resetValue()}},"reset"))))};var g=function(){var e=Object(n.useState)(!1),a=Object(E.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(0),o=Object(E.a)(c,2),i=o[0],u=o[1];return r.a.createElement("div",null,r.a.createElement(v,{countValue:i,flag:t,resetValue:function(){u(0),l(!1)},incrementValue:function(){i<=4&&u(i+1),4!==i||l(!0)}}))};var k=function(e){return r.a.createElement("div",null,e.affair.name,r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var C=function(e){var a=e.data.map((function(a){return r.a.createElement(k,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},N=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var x=function(){var e=Object(n.useState)(N),a=Object(E.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(E.a)(c,2),i=o[0],u=o[1],s=function(e,a){switch(a){case"high":return e.filter((function(e){return"high"===e.priority}));case"low":return e.filter((function(e){return"low"===e.priority}));case"middle":return e.filter((function(e){return"middle"===e.priority}));default:return e}}(t,i);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(C,{data:s,setFilter:u,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return a!==e._id}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},j=t(25),y=t(8),O=t.n(y),w=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l.length?O.a.error:O.a.general;return r.a.createElement("div",{className:O.a.block},r.a.createElement("input",{value:a,onChange:t,className:o}),r.a.createElement("span",{className:O.a.err},l),r.a.createElement("button",{onClick:n,className:O.a.btn},"add"),r.a.createElement("span",null,"Total users: ",c))},S=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(E.a)(l,2),o=c[0],i=c[1],u=Object(n.useState)(""),s=Object(E.a)(u,2),m=s[0],d=s[1],f=a.length;return r.a.createElement(w,{name:o,setNameCallback:function(e){i(e.currentTarget.value)},addUser:function(){0!==o.length?(alert("Hello ".concat(o," !")),t(o),d(""),i("")):(d("Error!"),i(""))},error:m,totalUsers:f})},H=t(39);var I=function(){var e=Object(n.useState)([]),a=Object(E.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(S,{users:t,addUserCallback:function(e){0===t.length?l([{_id:Object(H.a)(),name:e}]):l([{_id:Object(H.a)(),name:e}].concat(Object(j.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},T=t(7),A=t(12),G=t.n(A),U=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,i=e.spanClassName,u=Object(T.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(G.a.error," ").concat(i||""),m="".concat(G.a.superInput," ").concat(c?G.a.errorInput:o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:m},u)),c&&r.a.createElement("span",{className:s},c))},J=t(13),P=t.n(J),F=t(15),V=t.n(F),W=function(e){var a=e.red,t=e.className,n=Object(T.a)(e,["red","className"]),l="".concat(a?V.a.red:V.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},R=t(16),B=t.n(R),K=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(T.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(B.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({checked:c.checked,type:"checkbox",onChange:t?function(e){t&&t(e.currentTarget.checked)}:a,className:o},c)),l&&r.a.createElement("span",{className:B.a.spanClassName},l))};var X=function(){var e=Object(n.useState)(""),a=Object(E.a)(e,2),t=a[0],l=a[1],c=t.trim()?"":"error",o=function(){c?(alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."),l("")):(alert(t),l(""))},i=Object(n.useState)(!1),u=Object(E.a)(i,2),s=u[0],m=u[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:P.a.column},r.a.createElement(U,{value:t,onChangeText:l,onEnter:o,spanClassName:P.a.inputErr,error:c,className:P.a.blue}),r.a.createElement(W,{red:!!c,onClick:o},"delete "),r.a.createElement(K,{checked:s,onChangeChecked:m},"some text "),r.a.createElement(K,{checked:s,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var z=function(){return r.a.createElement("div",{className:m.a.jun},r.a.createElement(g,null),r.a.createElement(x,null),r.a.createElement(I,null),r.a.createElement(X,null))};var Z=function(){return r.a.createElement("div",{className:m.a.jun},"Hello! I`m Junior!")};var L=function(){return r.a.createElement("div",{className:m.a.jun},"Hello! I`m JuniorPlus!")};var M=function(){return r.a.createElement("div",{id:m.a.err404},r.a.createElement("div",{className:m.a.titleErr},r.a.createElement("h1",null,"Error 404")))},q="/pre-junior",Q="/junior",Y="/junior-plus";var $=function(){return r.a.createElement("div",null,r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/",exact:!0,render:function(){return r.a.createElement(d.a,{to:q})}}),r.a.createElement(d.b,{path:q,render:function(){return r.a.createElement(z,null)}}),r.a.createElement(d.b,{path:Q,render:function(){return r.a.createElement(Z,null)}}),r.a.createElement(d.b,{path:Y,render:function(){return r.a.createElement(L,null)}}),"// add routes",r.a.createElement(d.b,{render:function(){return r.a.createElement(M,null)}})))};var D=function(){return r.a.createElement("div",{className:m.a.navbar},r.a.createElement("input",{type:"checkbox",id:"check",className:m.a.check}),r.a.createElement("label",{htmlFor:"check"},r.a.createElement("i",{className:"fas fa-bars",id:m.a.btn}),r.a.createElement("i",{className:"fas fa-times",id:m.a.cancel})),r.a.createElement("div",{className:m.a.sidebar},r.a.createElement("header",null,"React HomeWorks"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(u.b,{activeClassName:m.a.active,to:"/pre-junior"},r.a.createElement("i",{className:"fas fa-link"}),"PreJunior")),r.a.createElement("li",null,r.a.createElement(u.b,{activeClassName:m.a.active,to:"/junior"},r.a.createElement("i",{className:"fas fa-link"}),"Junior")),r.a.createElement("li",null,r.a.createElement(u.b,{activeClassName:m.a.active,to:"/junior-plus"},r.a.createElement("i",{className:"fas fa-link"}),"JuniorPlus")),r.a.createElement("li",null,r.a.createElement(u.b,{activeClassName:m.a.active,to:"/overview"},r.a.createElement("i",{className:"fas fa-stream"}),"Overview")),r.a.createElement("li",null,r.a.createElement(u.b,{activeClassName:m.a.active,to:"/contact"},r.a.createElement("i",{className:"fas fa-envelope"}),"Contact")))),r.a.createElement("section",null,r.a.createElement($,null)))};var ee=function(){return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(D,null)))};var ae=function(){return r.a.createElement("div",{className:i.a.App},r.a.createElement(ee,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,t){e.exports={someClass:"Greeting_someClass__uGflL",error:"Greeting_error__1uvQ8",general:"Greeting_general__3Gf12",btn:"Greeting_btn__1zEPl",block:"Greeting_block__1MsEr",err:"Greeting_err__3wKRP"}}},[[26,1,2]]]);
//# sourceMappingURL=main.d03d0ca0.chunk.js.map