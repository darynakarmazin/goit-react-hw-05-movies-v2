"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[701],{311:function(n,e,t){function i(n){return fetch(n,{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDhlY2Y3NDVmNWJiZTUwZmM2NDhjMDg1OWZhMTcwMSIsInN1YiI6IjY0ODhjMTU2ZDJiMjA5MDBjYTIxNzA5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4vxGV4kBszJbv90PYcnQ1DUyBmnKxmAR_P1khjcXgUk"}}).then((function(n){return n.json()}))}t.d(e,{v:function(){return i}})},701:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var i,o,r,a,c=t(439),s=t(791),l=t(87),u=t(689),p=t(168),d=t(444),h=d.ZP.li(i||(i=(0,p.Z)(["\n  color: #e6e6e6;\n  padding: 0;\n  margin: 0;\n"]))),f=(0,d.ZP)(l.OL)(o||(o=(0,p.Z)(["\n  color: #e6e6e6;\n  margin: 0;\n"]))),m=t(311),x=d.ZP.div(r||(r=(0,p.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding: 12 24px;\n  z-index: 10;\n  margin: 0 auto;\n  background-color: #0a0909;\n  border-bottom: 1px solid #ffffff;\n"]))),b=d.ZP.form(a||(a=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n\n  button {\n    display: inline-block;\n    width: 48px;\n    height: 48px;\n    border: 0;\n    background-size: 40%;\n    background-repeat: no-repeat;\n    background-position: center;\n    opacity: 0.6;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n    outline: none;\n  }\n\n  button:hover {\n    opacity: 1;\n  }\n\n  span {\n    font-size: 30px;\n  }\n\n  button-label {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    clip-path: inset(50%);\n    border: 0;\n  }\n\n  input {\n    display: inline-block;\n    width: 100%;\n    font: inherit;\n    font-size: 20px;\n    border: none;\n    outline: none;\n    padding-left: 20px;\n    padding-right: 4px;\n  }\n\n  input::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),g=t(184);function j(n){var e=n.setSearchParams,t=(0,s.useState)(""),i=(0,c.Z)(t,2),o=i[0],r=i[1];return(0,g.jsx)(x,{children:(0,g.jsxs)(b,{onSubmit:function(n){n.preventDefault(),e({query:o})},className:"form",children:[(0,g.jsx)("button",{type:"submit",className:"button",children:(0,g.jsx)("span",{className:"button-label",children:"\ud83d\udd0d"})}),(0,g.jsx)("input",{onChange:function(n){var e=n.target.value;r(e)},value:o,className:"input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search Movies"})]})})}var v=function(){var n=(0,s.useState)(""),e=(0,c.Z)(n,2),t=e[0],i=e[1],o=(0,l.lr)(),r=(0,c.Z)(o,2),a=r[0],p=r[1],d=(0,u.TH)();return(0,s.useEffect)((function(){var n,e=null!==(n=a.get("query"))&&void 0!==n?n:"",t="https://api.themoviedb.org/3/search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=1");(0,m.v)(t).then((function(n){i(n)})).catch((function(n){return console.error("error:"+n)}))}),[a]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(j,{setSearchParams:p}),t&&(0,g.jsx)("ul",{children:t.results.map((function(n){return(0,g.jsx)(h,{children:(0,g.jsx)(f,{to:"".concat(n.id),state:{from:d},children:(0,g.jsx)("p",{children:n.original_title})})},n.id)}))})]})}}}]);
//# sourceMappingURL=701.50c7fa71.chunk.js.map