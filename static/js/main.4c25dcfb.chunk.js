(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{135:function(e,t,a){e.exports=a(262)},261:function(e,t,a){},262:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),l=a.n(c),s=a(24),o=a.n(s),i=a(42),u=a(25),m=a(270),d=a(275),p=a(263),E=a(276),f=a(274),h=a(272),g=a(31),b=function(e){var t=new Date;return t.setDate(t.getDate()-e),t.toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric"})},v=function(e){var t=e.id,a=e.cmtsId,n=e.name,c=e.email,l=e.address;return r.a.createElement(h.a,{className:"user"},r.a.createElement(h.a.Event,null,r.a.createElement(h.a.Content,null,r.a.createElement(h.a.Summary,{className:"user__summary"},r.a.createElement(h.a.User,null,n),r.a.createElement(h.a.Date,null,"added this post on ".concat(b(a+t)))),r.a.createElement("p",{className:"user__address","aria-label":c},"email: ".concat(c)),r.a.createElement("p",{className:"user__address","aria-label":l.city},"city: ".concat(l.city)),r.a.createElement(h.a.Meta,null,r.a.createElement(h.a.Like,null,r.a.createElement(g.a,{name:"like"}),"".concat(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:70;return Math.floor(Math.random()*(t-e+1)+e)}()," Likes"))))))},y=a(273),j=function(e){var t=e.id,a=e.name,n=e.email,c=e.body;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{className:"comment"},r.a.createElement(y.a.Content,null,r.a.createElement(y.a.Author,{className:"comment__title",content:a}),r.a.createElement(y.a.Metadata,null,"comment was added on ".concat(b(t))),r.a.createElement(y.a.Text,{className:"comment__text",content:c}),r.a.createElement(y.a.Metadata,null,r.a.createElement(y.a.Action,{content:n})))))},_=function(e){var t=e.comments;return r.a.createElement(y.a.Group,null,r.a.createElement(d.a,{as:"h3",dividing:!0,content:"Comments"}),t.map((function(e){return r.a.createElement(j,Object.assign({key:e.id},e))})))},O=function(e){var t=e.title,a=e.body,c=e.user,l=e.comments,s=e.highlightedText,o=function(e){return s?e.split(new RegExp("(".concat(s,")"),"gi")).map((function(e,t){return r.a.createElement(n.Fragment,{key:"".concat(e+t)},e.toLowerCase()===s.toLowerCase()?r.a.createElement("span",{className:"highlighted-text"},e):e)})):e};return r.a.createElement(E.a,{raised:!0,color:"blue",className:"post"},r.a.createElement(f.a.Group,null,r.a.createElement(f.a,null,r.a.createElement(f.a.Image,{size:"tiny",src:c.photo||"img/noavatar.png"}),r.a.createElement(f.a.Content,null,r.a.createElement(f.a.Header,{as:"h2",title:t,className:"post__title",content:o(t)}),r.a.createElement(f.a.Meta,null,r.a.createElement(v,Object.assign({},c,{cmtsId:l[l.length-1].id}))),r.a.createElement(f.a.Description,{className:"post__text",content:o(a)}),r.a.createElement(f.a.Extra,null,r.a.createElement(_,{comments:l}))))))},w=function(e){var t=e.list,a=e.highlightSearch;return t.map((function(e){return r.a.createElement(O,Object.assign({},e,{key:e.id,highlightedText:a}))}))},x=a(269),N=function(e){var t=e.setSearchQuery,a=function(e,t){var a;return function(){clearTimeout(a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];a=setTimeout.apply(void 0,[e,t].concat(r))}}((function(e){return t(e)}),1e3);return r.a.createElement("div",{className:"field"},r.a.createElement(x.a,{className:"field__search",placeholder:"Search...",size:"big",icon:!0},r.a.createElement("input",{onChange:function(e){return function(e){var t=e.target.value.toLowerCase().slice(0,30);a(t)}(e)}}),r.a.createElement(g.a,{name:"search"})))},k=a(85),S="https://seialek.github.io/react_dynamic-list-of-posts/api",C=function(){var e=Object(i.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(i.a)(o.a.mark((function e(){var t,a,n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([C("".concat(S,"/posts.json")),C("".concat(S,"/users.json")),C("".concat(S,"/comments.json"))]);case 2:return t=e.sent,a=Object(u.a)(t,3),n=a[0],r=a[1],c=a[2],e.abrupt("return",n.map((function(e){return Object(k.a)(Object(k.a)({},e),{},{user:r.find((function(t){return t.id===e.userId})),comments:c.filter((function(t){return t.postId===e.id}))})})));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=(a(261),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),s=Object(u.a)(l,2),E=s[0],f=s[1],h=Object(n.useState)(!1),g=Object(u.a)(h,2),b=g[0],v=g[1],y=Object(n.useState)(""),j=Object(u.a)(y,2),_=j[0],O=j[1],x=Object(n.useState)(""),k=Object(u.a)(x,2),S=k[0],C=k[1],D=function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.prev=1,e.next=4,L();case 4:t=e.sent,c(t),v(!1),f(!0),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),v(!1),O("Something went wrong! ".concat(e.t0.message));case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),I=S?a.filter((function(e){var t=e.title,a=e.body;return"".concat(t," ").concat(a).toLowerCase().includes(S)})):a;return r.a.createElement(m.a,{className:"page"},r.a.createElement(d.a,{as:"h1",className:"page__title",color:"blue"},"Dynamic list of posts"),E?r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{setSearchQuery:C}),r.a.createElement(w,{list:I,highlightSearch:S})):r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{as:"h2",color:"red"},_),r.a.createElement(p.a,{className:"page__btn",loading:b,content:"Load TodoList",color:"blue",size:"big",onClick:D})))});l.a.render(r.a.createElement(D,null),document.getElementById("root"))}},[[135,1,2]]]);
//# sourceMappingURL=main.4c25dcfb.chunk.js.map