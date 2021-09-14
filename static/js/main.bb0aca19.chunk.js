(this["webpackJsonpgithub-explorer"]=this["webpackJsonpgithub-explorer"]||[]).push([[0],{40:function(n,e,t){n.exports=t.p+"static/media/logo.04f6798f.svg"},43:function(n,e,t){n.exports=t.p+"static/media/github-background.0b819d63.svg"},45:function(n,e,t){n.exports=t(73)},73:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(35),o=t.n(i),c=t(10),l=t(11),s=t(3),u=t(36),d=t.n(u),p=t(19),m=t(5);function f(){var n=Object(m.a)(["\n  height: 60px;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);return f=function(){return n},n}var x=s.e.div(f()),h=t(40),g=t.n(h),b=function(n){var e=n.toggleTheme,t=Object(a.useContext)(s.a),i=t.colors,o=t.title;return r.a.createElement(x,null,r.a.createElement(l.b,{to:"/"},r.a.createElement("img",{src:g.a,alt:"Github Explorer"})),r.a.createElement(d.a,{onChange:e,checked:"dark"===o,checkedIcon:!1,uncheckedIcon:!1,height:20,width:40,handleDiameter:20,offColor:Object(p.a)(.15,i.primary),onColor:i.secondary}))},y={title:"dark",colors:{primary:"#333",secondary:"#718AF4",background:"#5C5D6D",icon:"#cbcbd6",title:"#faf7ff",subtitle:"#f0f0f2",description:"#a8a8b3",cardTitle:"#f0f0f5",cardBackground:"#525362"}},v={title:"light",colors:{primary:"#718AF4",secondary:"#718AF4",background:"#f0f0f5",icon:"#cbcbd6",title:"#3a3a3a",subtitle:"#6c6c80",description:"#a8a8b3",cardTitle:"#3d3d4d",cardBackground:"#ffffff"}},w=t(4),E=t(2),O=t(24),j=t.n(O),k=t(44),z=t(41),S=t(12),I=t(42),C=t.n(I).a.create({baseURL:"https://api.github.com"}),_={hidden:{opacity:0,y:-32,transition:{duration:.2,ease:"easeIn"}},show:{opacity:1,y:0,transition:{duration:.2,ease:"easeOut"}},out:{opacity:0,y:-24,transition:{duration:.2,ease:"easeIn"}}},T={hidden:{opacity:0,y:-8,scale:.85,transition:{duration:.2,ease:"easeIn"}},show:{opacity:1,y:0,scale:1,transition:{delay:.2,duration:.2,ease:"easeOut"}},out:{opacity:0,y:-16,scale:.85,transition:{duration:.2,ease:"easeIn"}}},D={hidden:{opacity:0,transition:{when:"afterChildren"}},show:{opacity:1,transition:{when:"beforeChildren",staggerChildren:.1}},out:{opacity:0,transition:{when:"afterChildren",staggerChildren:.1}}},F={hidden:{opacity:0,y:-8},show:{opacity:1,y:0},out:{opacity:0,y:-24}},B={hidden:{width:60,height:60,transition:{ease:"easeIn"}},show:{width:120,height:120,transition:{ease:"easeOut"}},out:{width:60,height:60,opacity:0,transition:{ease:"easeInOut"}}},J={hidden:{opacity:0,y:-20,x:-12,transition:{ease:"easeIn"}},show:{opacity:1,y:0,x:0,transition:{delay:.2,ease:"easeOut"}},out:{opacity:0,y:-24,x:-12,transition:{ease:"easeInOut"}}};function G(){var n=Object(m.a)(["\n  margin-top: 80px;\n  max-width: 700px;\n\n  > div {\n    margin-bottom: 8px;\n  }\n\n  a {\n    width: 100%;\n    padding: 24px;\n    display: block;\n    background: ",";\n    border-radius: 5px;\n    text-decoration: none;\n    transition: transform 0.2s;\n\n    display: flex;\n    align-items: center;\n\n    @media (max-width: 480px) {\n      padding: 12px;\n      text-align: center;\n      flex-direction: column;\n    }\n\n    &:hover {\n      transform: translateX(10px);\n    }\n\n    & + a {\n      margin-top: 16px;\n    }\n\n    img {\n      width: 64px;\n      height: 64px;\n      border-radius: 50%;\n\n      @media (max-width: 480px) {\n        width: 48px;\n        height: 48px;\n        align-self: center;\n        margin: 8px 0;\n      }\n    }\n\n    div {\n      flex: 1;\n      margin: 0 16px;\n\n      strong {\n        font-size: 20px;\n        color: ",";\n      }\n\n      p {\n        color: ",";\n        margin-top: 4px;\n        font-size: 18px;\n\n        @media (max-width: 480px) {\n          font-size: 82%;\n        }\n      }\n    }\n\n    svg {\n      margin-left: auto;\n      color: ",";\n\n      @media (max-width: 480px) {\n        width: 20px;\n      }\n    }\n  }\n"]);return G=function(){return n},n}function N(){var n=Object(m.a)(["\n  display: block;\n  color: #c53030;\n  margin-top: 8px;\n"]);return N=function(){return n},n}function A(){var n=Object(m.a)(["\n          border-color: #c53030;\n          animation: "," 0.4s linear;\n        "]);return A=function(){return n},n}function L(){var n=Object(m.a)(["\n  margin-top: 40px;\n  max-width: 700px;\n\n  display: flex;\n  align-items: flex-end;\n\n  @media (max-width: 480px) {\n    flex-direction: column;\n  }\n\n  label {\n    display: flex;\n    flex: 2;\n    flex-direction: column;\n\n    width: 100%;\n\n    strong {\n      opacity: 0.6;\n      font-size: 2px;\n      margin-bottom: 8px;\n      font-size: min(max(1rem, 3vw), 20px);\n      color: ",";\n    }\n\n    input {\n      border: 0;\n      width: 100%;\n      height: 70px;\n      color: #3a3a3a;\n      padding: 0 24px;\n      border: 2px solid #fff;\n\n      border-radius: 5px 0px 0px 5px;\n\n      ","\n\n      &::placeholder {\n        color: ",";\n        @media (max-width: 480px) {\n          font-size: 80%;\n        }\n      }\n\n      @media (max-width: 480px) {\n        flex: none;\n        margin-bottom: 4px;\n        border-top-right-radius: 5px;\n        border-bottom-right-radius: 5px;\n      }\n    }\n  }\n\n  button {\n    flex: 1;\n    border: 0;\n    color: #fff;\n    width: 100%;\n    height: 70px;\n    font-weight: bold;\n    background-color: #04d361;\n    border-radius: 0px 5px 5px 0px;\n    transition: background-color 0.2s;\n\n    @media (max-width: 480px) {\n      flex: none;\n      padding: 5px;\n      font-size: 90%;\n      border-top-left-radius: 5px;\n      border-bottom-left-radius: 5px;\n    }\n\n    &:hover {\n      background: ",";\n    }\n  }\n"]);return L=function(){return n},n}function R(){var n=Object(m.a)(["\n10%, 90% {\n  transform: translate3d(-1px, 0, 0);\n}\n\n20%, 80% {\n  transform: translate3d(2px, 0, 0);\n}\n\n30%, 50%, 70% {\n  transform: translate3d(-4px, 0, 0);\n}\n\n40%, 60% {\n  transform: translate3d(4px, 0, 0);\n}\n"]);return R=function(){return n},n}function X(){var n=Object(m.a)(["\n  max-width: 450px;\n  margin-top: 80px;\n  line-height: 120%;\n  font-size: min(max(1rem, 10.3vw), 48px);\n  color: ",";\n"]);return X=function(){return n},n}var q=Object(s.e)(w.b.h1)(X(),(function(n){return n.theme.colors.title})),H=Object(s.f)(R()),M=Object(s.e)(w.b.form)(L(),(function(n){return n.theme.colors.subtitle}),(function(n){return n.hasError&&Object(s.d)(A(),H)}),(function(n){return n.theme.colors.description}),Object(p.a)(.2,"#04d361")),P=s.e.span(N()),U=Object(s.e)(w.b.div)(G(),(function(n){return n.theme.colors.cardBackground}),(function(n){return n.theme.colors.cardTitle}),(function(n){return n.theme.colors.description}),(function(n){return n.theme.colors.icon})),V=function(){var n=Object(a.useState)(""),e=Object(c.a)(n,2),t=e[0],i=e[1],o=Object(a.useState)(""),s=Object(c.a)(o,2),u=s[0],d=s[1],p=Object(a.useState)((function(){var n=localStorage.getItem("@GithubExplorer:repositories");return n?JSON.parse(n):[]})),m=Object(c.a)(p,2),f=m[0],x=m[1];Object(a.useEffect)((function(){localStorage.setItem("@GithubExplorer:repositories",JSON.stringify(f))}),[f]);var h=Object(a.useCallback)(function(){var n=Object(z.a)(j.a.mark((function n(e){var a,r;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),t){n.next=4;break}return d("Digite o autor/nome do reposit\xf3rio"),n.abrupt("return");case 4:if(!f.find((function(n){return n.full_name===t.toLowerCase()}))){n.next=8;break}return i(""),d("Ops, voc\xea j\xe1 adicionou este reposit\xf3rio"),n.abrupt("return");case 8:return n.prev=8,n.next=11,C.get("repos/".concat(t));case 11:a=n.sent,r=a.data,x([].concat(Object(k.a)(f),[r]).reverse()),i(""),d(""),n.next=22;break;case 18:n.prev=18,n.t0=n.catch(8),i(""),d("Desculpe, n\xe3o encontramos este reposit\xf3rio");case 22:case"end":return n.stop()}}),n,null,[[8,18]])})));return function(e){return n.apply(this,arguments)}}(),[t,f]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(q,{variants:_,initial:"hidden",animate:"show",exit:"out"},"Explore reposit\xf3rios no GitHub"),r.a.createElement(M,{hasError:!!u,onSubmit:h,variants:T,initial:"hidden",animate:"show",exit:"out"},r.a.createElement("label",{htmlFor:"repository"},r.a.createElement("strong",null,"Digite o autor/nome do reposit\xf3rio"),r.a.createElement("input",{name:"repository",value:t,autoCorrect:"false",autoCapitalize:"none",onChange:function(n){return i(n.target.value)},placeholder:"ex: facebook/react"})),r.a.createElement("button",{type:"submit"},"Pesquisar")),u&&r.a.createElement(P,null,u),r.a.createElement(U,{variants:D,initial:"hidden",animate:"show",exit:"out"},f.map((function(n){return r.a.createElement(w.b.div,{variants:F},r.a.createElement(l.b,{key:n.full_name,to:"/repository/".concat(n.full_name)},r.a.createElement("img",{src:n.owner.avatar_url,alt:n.owner.login}),r.a.createElement("div",null,r.a.createElement("strong",null,n.owner.login),r.a.createElement("p",null,n.description)),r.a.createElement(S.c,{size:40})))}))))};function K(){var n=Object(m.a)(["\n  margin-top: 80px;\n\n  > div {\n    margin-bottom: 8px;\n  }\n\n  a {\n    width: 100%;\n    padding: 24px;\n    display: block;\n    background: ",";\n    border-radius: 5px;\n    text-decoration: none;\n    transition: transform 0.2s;\n\n    display: flex;\n    align-items: center;\n\n    &:hover {\n      transform: translateX(10px);\n    }\n\n    & + a {\n      margin-top: 16px;\n    }\n\n    img {\n      width: 64px;\n      height: 64px;\n      min-width: 64px;\n      min-height: 64px;\n      border-radius: 50%;\n    }\n\n    div {\n      flex: 1;\n      margin: 0 16px;\n\n      strong {\n        font-size: 20px;\n        color: ",";\n\n        @media (max-width: 480px) {\n          font-size: 100%;\n          text-align: justify;\n        }\n      }\n\n      p {\n        color: ",";\n        margin-top: 4px;\n        font-size: 18px;\n\n        @media (max-width: 480px) {\n          font-size: 100%;\n          text-align: justify;\n        }\n      }\n    }\n\n    svg {\n      margin-left: auto;\n      color: ",";\n\n      @media (max-width: 480px) {\n        width: 20px;\n      }\n    }\n  }\n"]);return K=function(){return n},n}function Q(){var n=Object(m.a)(["\n  header {\n    display: flex;\n    align-items: center;\n\n    margin-top: 80px;\n\n    @media (max-width: 480px) {\n      margin-top: 52px;\n      align-items: flex-start;\n    }\n\n    img {\n      width: 120px;\n      height: 120px;\n      border-radius: 50%;\n\n      @media (max-width: 480px) {\n        width: 20%;\n        height: 50%;\n      }\n    }\n\n    div {\n      margin-left: 24px;\n\n      strong {\n        color: ",";\n        font-size: 36px;\n\n        @media (max-width: 480px) {\n          font-size: 140%;\n        }\n      }\n\n      p {\n        color: ",";\n        font-size: 18px;\n        margin-top: 4px;\n\n        @media (max-width: 480px) {\n          font-size: 100%;\n        }\n      }\n    }\n  }\n\n  ul {\n    display: flex;\n    margin-top: 40px;\n    list-style: none;\n\n    li {\n      display: flex;\n      flex-direction: column;\n      align-items: flex-start;\n\n      @media (max-width: 480px) {\n        margin: 0 auto;\n      }\n\n      & + li {\n        margin-left: 80px;\n\n        @media (max-width: 480px) {\n          margin-left: 40px;\n        }\n      }\n\n      strong {\n        color: ",";\n        display: block;\n        font-size: 36px;\n\n        > svg {\n          margin-right: 8px;\n        }\n\n        @media (max-width: 480px) {\n          font-size: 90%;\n\n          display: flex;\n          align-items: flex-start;\n          justify-content: center;\n          flex-direction: column;\n        }\n      }\n\n      span {\n        color: ",";\n        display: block;\n        margin-top: 4px;\n\n        @media (max-width: 480px) {\n          font-size: 80%;\n        }\n      }\n    }\n  }\n"]);return Q=function(){return n},n}function W(){var n=Object(m.a)(["\n  margin-top: 16px;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  a {\n    display: flex;\n    color: ",";\n    align-items: center;\n    text-decoration: none;\n    transition: color 0.2s;\n\n    &:hover {\n      color: ",";\n    }\n\n    svg {\n      margin-right: 4px;\n    }\n  }\n"]);return W=function(){return n},n}var Y=s.e.header(W(),(function(n){return n.theme.colors.description}),(function(n){return n.theme.colors.title})),Z=s.e.section(Q(),(function(n){return n.theme.colors.cardTitle}),(function(n){return n.theme.colors.description}),(function(n){return n.theme.colors.cardTitle}),(function(n){return n.theme.colors.subtitle})),$=Object(s.e)(w.b.div)(K(),(function(n){return n.theme.colors.cardBackground}),(function(n){return n.theme.colors.cardTitle}),(function(n){return n.theme.colors.description}),(function(n){return n.theme.colors.icon})),nn=function(){var n=Object(a.useState)(null),e=Object(c.a)(n,2),t=e[0],i=e[1],o=Object(a.useState)([]),s=Object(c.a)(o,2),u=s[0],d=s[1],p=Object(E.g)().params;return Object(a.useEffect)((function(){C.get("repos/".concat(p.repository)).then((function(n){i(n.data)})),C.get("repos/".concat(p.repository,"/issues")).then((function(n){d(n.data)}))}),[p.repository]),r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,null,r.a.createElement(l.b,{to:"/"},r.a.createElement(S.b,{size:16}),"Voltar")),t&&r.a.createElement(Z,null,r.a.createElement("header",null,r.a.createElement(w.b.img,{src:t.owner.avatar_url,alt:t.owner.login,variants:B,initial:"hidden",animate:"show",exit:"out"}),r.a.createElement(w.b.div,{variants:J,initial:"hidden",animate:"show",exit:"out"},r.a.createElement("strong",null,t.full_name),r.a.createElement("p",null,t.description))),r.a.createElement(w.b.ul,{variants:D,initial:"hidden",animate:"show",exit:"out"},r.a.createElement(w.b.li,{variants:F},r.a.createElement("strong",null,r.a.createElement(S.e,{size:28}),t.stargazers_count),r.a.createElement("span",null,"Stars")),r.a.createElement(w.b.li,{variants:F},r.a.createElement("strong",null,r.a.createElement(S.d,{size:28}),t.forks_count),r.a.createElement("span",null,"Forks")),r.a.createElement(w.b.li,{variants:F},r.a.createElement("strong",null,r.a.createElement(S.a,{size:28}),t.open_issues_count),r.a.createElement("span",null,"Issues abertas")))),r.a.createElement($,{variants:D,initial:"hidden",animate:"show",exit:"out"},u.map((function(n){return r.a.createElement("a",{key:n.id,href:n.html_url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",null,r.a.createElement("strong",null,n.title),r.a.createElement("p",null,n.user.login)),r.a.createElement(S.c,{size:40}))}))))},en=function(){var n=Object(E.f)();return r.a.createElement(w.a,{exitBeforeEnter:!0,initial:!1},r.a.createElement(E.c,{location:n,key:n.pathname},r.a.createElement(E.a,{path:"/",exact:!0,component:V}),r.a.createElement(E.a,{path:"/repository/:repository+",component:nn})))},tn=t(43),an=t.n(tn);function rn(){var n=Object(m.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    background: ","  url(",") no-repeat 70% top;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body, input, button {\n    font-size: 16px;\n    font-family: Roboto, sans-serif;\n  }\n\n  #root {\n    margin: 0 auto;\n    max-width: 960px;\n    padding: 40px 20px;\n  }\n\n  button, a {\n    cursor: pointer;\n  }\n"]);return rn=function(){return n},n}var on=Object(s.c)(rn(),(function(n){return n.theme.colors.background}),an.a);var cn=function(n,e){var t=Object(a.useState)((function(){var t=localStorage.getItem(n);return t?JSON.parse(t):e})),r=Object(c.a)(t,2),i=r[0],o=r[1];return Object(a.useEffect)((function(){localStorage.setItem(n,JSON.stringify(i))}),[n,i]),[i,o]},ln=function(){var n=cn("theme",v),e=Object(c.a)(n,2),t=e[0],a=e[1];return r.a.createElement(s.b,{theme:t},r.a.createElement(l.a,null,r.a.createElement(b,{toggleTheme:function(){a("light"===t.title?y:v)}}),r.a.createElement(en,null),r.a.createElement(on,null)))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ln,null)),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.bb0aca19.chunk.js.map