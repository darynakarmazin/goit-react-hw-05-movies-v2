"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[297],{311:function(n,e,t){function r(n){return fetch(n,{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDhlY2Y3NDVmNWJiZTUwZmM2NDhjMDg1OWZhMTcwMSIsInN1YiI6IjY0ODhjMTU2ZDJiMjA5MDBjYTIxNzA5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4vxGV4kBszJbv90PYcnQ1DUyBmnKxmAR_P1khjcXgUk"}}).then((function(n){return n.json()}))}t.d(e,{v:function(){return r}})},367:function(n,e,t){t.d(e,{AO:function(){return d},ON:function(){return p},c2:function(){return x},fM:function(){return h},fg:function(){return f}});var r,i,o,a,c,l=t(168),s=t(444),u=t(87),f=(0,s.ZP)(u.OL)(r||(r=(0,l.Z)(["\n  color: #e6e6e6;\n  margin: 0;\n  text-decoration: none;\n"]))),p=s.ZP.ul(i||(i=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  column-gap: 16px;\n  row-gap: 32px;\n  list-style: none;\n  flex-bacis: 24%;\n"]))),d=s.ZP.li(o||(o=(0,l.Z)(["\n  max-width: 264px;\n"]))),h=s.ZP.img(a||(a=(0,l.Z)(["\n  border-radius: 5px;\n  background: var(\n    --linear,\n    linear-gradient(180deg, rgba(0, 0, 0, 0) 63.48%, rgba(0, 0, 0, 0.9) 92.16%)\n  );\n"]))),x=s.ZP.p(c||(c=(0,l.Z)(["\n  color: #e6e6e6;\n  font-size: 16px;\n  font-weight: 600;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"])))},297:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var r,i,o=t(439),a=t(791),c=t(87),l=t(689),s=t(311),u=t(168),f=t(444),p=f.ZP.div(r||(r=(0,u.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding: 12 24px;\n  z-index: 10;\n  margin: 0 auto;\n  background-color: #0a0909;\n  border-bottom: 1px solid #ffffff;\n"]))),d=f.ZP.form(i||(i=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  overflow: hidden;\n  border-radius: 8px;\n  border: 1px solid #fff;\n\n  button {\n    display: inline-block;\n    width: 48px;\n    height: 48px;\n    border: 0;\n    background-size: 40%;\n    background: var(\n      --linear,\n      linear-gradient(145deg, #ffc226 0%, #f84119 100%)\n    );\n    background-repeat: no-repeat;\n    background-position: center;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n    outline: none;\n  }\n\n  button:hover {\n    opacity: 1;\n  }\n\n  span {\n    font-size: 30px;\n  }\n\n  button-label {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    clip-path: inset(50%);\n    border: 0;\n  }\n\n  input {\n    display: inline-block;\n    width: 100%;\n    font: inherit;\n    font-size: 20px;\n    border: none;\n    outline: none;\n    padding-left: 20px;\n    padding-right: 4px;\n    background: transparent;\n    color: #ffffff;\n  }\n\n  input::placeholder {\n    font: inherit;\n    font-size: 18px;\n    color: #ffffff;\n  }\n"]))),h=t(184);function x(n){var e=n.setSearchParams,t=(0,a.useState)(""),r=(0,o.Z)(t,2),i=r[0],c=r[1];return(0,h.jsx)(p,{children:(0,h.jsxs)(d,{onSubmit:function(n){n.preventDefault(),e({query:i})},className:"form",children:[(0,h.jsx)("button",{type:"submit",className:"button",children:(0,h.jsx)("span",{className:"button-label",children:"\ud83d\udd0d"})}),(0,h.jsx)("input",{onChange:function(n){var e=n.target.value;c(e)},value:i,className:"input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search Movies"})]})})}var g=t(367);var b=function(){var n=(0,a.useState)(""),e=(0,o.Z)(n,2),t=e[0],r=e[1],i=(0,c.lr)(),u=(0,o.Z)(i,2),f=u[0],p=u[1],d=(0,l.TH)();return(0,a.useEffect)((function(){var n,e=null!==(n=f.get("query"))&&void 0!==n?n:"",t="https://api.themoviedb.org/3/search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=1");(0,s.v)(t).then((function(n){r(n)})).catch((function(n){return console.error("error:"+n)}))}),[f]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(x,{setSearchParams:p}),t&&(0,h.jsx)(g.ON,{children:t.results.map((function(n){return(0,h.jsx)(g.AO,{children:(0,h.jsxs)(g.fg,{to:"".concat(n.id),state:{from:d},children:[(0,h.jsx)(g.fM,{width:"264px",height:"384px",src:"https://image.tmdb.org/t/p/original/".concat(n.poster_path),alt:n.title}),(0,h.jsx)(g.c2,{children:n.original_title}),(0,h.jsxs)("p",{children:["User Scrore: ",Math.round(10*n.vote_average),"%"]})]})},n.id)}))})]})}}}]);
//# sourceMappingURL=297.72776807.chunk.js.map