import{r as f,C as x,o as r,c as l,a as e,t as u,_ as v,b as s,w as p,p as w,e as g,D as b}from"./entry.yim8dtbH.js";import{_ as y}from"./nuxt-link.teYlnmS5.js";const $=window.setInterval,C={class:"flex justify-between items-center p-4 text-gray-500 bg-gray-100"},H={class:"text-3xl"},V={key:0},j={key:1},z={__name:"AppHeader",props:{hub:String},setup(o){const i=o,t=f(!0),c=f(_());function _(){const d=new Date;let n=d.getHours();const h=d.getMinutes(),m=n>=12?"pm":"am";return n=n%12||12,t.value=!t.value,`${n}:${h<10?"0":""}${h} ${m}`}return x(()=>{$(()=>{c.value=_()},1e3)}),(d,n)=>(r(),l("div",C,[e("div",null,u(i.hub),1),e("div",H,[t.value?(r(),l("span",V,u(c.value),1)):(r(),l("span",j,u(c.value.replace(":"," ")),1))])]))}},B={},a=o=>(w("data-v-1d8e702a"),o=o(),g(),o),I={class:"fixed inset-x-0 bottom-0 flex justify-around border-t border-gray-200 bg-white shadow-lg"},M=a(()=>e("svg",{class:"w-6 h-6 mb-1 group-hover:text-blue-600",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},[e("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})],-1)),k=a(()=>e("span",{class:"text-sm group-hover:text-blue-600"},"Home",-1)),L=a(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor","fill-rule":"evenodd",d:"m20.215 2.387-8.258 10.547-2.704-3.092a1 1 0 1 0-1.506 1.316l3.103 3.548a1.5 1.5 0 0 0 2.31-.063L21.79 3.62a1 1 0 1 0-1.575-1.233zM20 11a1 1 0 0 0-1 1v6.077c0 .459-.021.57-.082.684a.364.364 0 0 1-.157.157c-.113.06-.225.082-.684.082H5.923c-.459 0-.57-.022-.684-.082a.363.363 0 0 1-.157-.157c-.06-.113-.082-.225-.082-.684V5.5a.5.5 0 0 1 .5-.5l8.5.004a1 1 0 1 0 0-2L5.5 3A2.5 2.5 0 0 0 3 5.5v12.577c0 .76.082 1.185.319 1.627.224.419.558.753.977.977.442.237.866.319 1.627.319h12.154c.76 0 1.185-.082 1.627-.319.42-.224.754-.558.978-.977.236-.442.318-.866.318-1.627V12a1 1 0 0 0-1-1z","clip-rule":"evenodd"})],-1)),S=a(()=>e("div",{class:"text-sm"},"To-dos",-1)),A=a(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M7 2a1 1 0 0 0-1 1v1.001c-.961.014-1.34.129-1.721.333a2.272 2.272 0 0 0-.945.945C3.116 5.686 3 6.09 3 7.205v10.59c0 1.114.116 1.519.334 1.926.218.407.538.727.945.945.407.218.811.334 1.926.334h11.59c1.114 0 1.519-.116 1.926-.334.407-.218.727-.538.945-.945.218-.407.334-.811.334-1.926V7.205c0-1.115-.116-1.519-.334-1.926a2.272 2.272 0 0 0-.945-.945C19.34 4.13 18.961 4.015 18 4V3a1 1 0 1 0-2 0v1H8V3a1 1 0 0 0-1-1zM5 9v8.795c0 .427.019.694.049.849.012.06.017.074.049.134a.275.275 0 0 0 .124.125c.06.031.073.036.134.048.155.03.422.049.849.049h11.59c.427 0 .694-.019.849-.049a.353.353 0 0 0 .134-.049.275.275 0 0 0 .125-.124.353.353 0 0 0 .048-.134c.03-.155.049-.422.049-.849L19.004 9H5zm8.75 4a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-.75-.75h-2.5z","clip-rule":"evenodd"})],-1)),D=a(()=>e("div",{class:"text-sm"},"Calendar",-1));function N(o,i){const t=y;return r(),l("footer",I,[s(t,{to:"/",class:"w-[50%] flex flex-col items-center justify-center text-gray-300 p-4"},{default:p(()=>[M,k]),_:1}),s(t,{to:"/to-dos",class:"w-[50%] flex flex-col items-center justify-center text-gray-300 p-4"},{default:p(()=>[L,S]),_:1}),s(t,{to:"/calendar",class:"w-[50%] flex flex-col items-center justify-center text-gray-300 p-4"},{default:p(()=>[A,D]),_:1})])}const T=v(B,[["render",N],["__scopeId","data-v-1d8e702a"]]),F={},E={class:"flex flex-col h-screen justify-between"};function P(o,i){const t=z,c=b,_=T;return r(),l("div",E,[s(t,{hub:"The Happiness Hotel"}),s(c,{class:"mb-auto"}),s(_)])}const J=v(F,[["render",P]]);export{J as default};