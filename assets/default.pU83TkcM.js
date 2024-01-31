import{r as p,C as m,o as a,c,a as e,t as u,_ as f,b as o,w as d,D as v}from"./entry.E7ufn-Ff.js";import{_ as w}from"./nuxt-link.M-Fc5d1K.js";const g=window.setInterval,y={class:"flex justify-between items-center p-4 text-gray-500 bg-gray-100"},b={class:"text-3xl"},$={key:0},C={key:1},H={__name:"AppHeader",props:{hub:String},setup(l){const _=l,t=p(!0),s=p(r());function r(){const i=new Date;let n=i.getHours();const h=i.getMinutes(),x=n>=12?"pm":"am";return n=n%12||12,t.value=!t.value,`${n}:${h<10?"0":""}${h} ${x}`}return m(()=>{g(()=>{s.value=r()},1e3)}),(i,n)=>(a(),c("div",y,[e("div",null,u(_.hub),1),e("div",b,[t.value?(a(),c("span",$,u(s.value),1)):(a(),c("span",C,u(s.value.replace(":"," ")),1))])]))}},V={},j={class:"fixed inset-x-0 bottom-0 flex justify-around border-t border-gray-200 bg-white shadow-lg"},z=e("svg",{class:"w-6 h-6 mb-1 text-gray-500 group-hover:text-blue-600",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},[e("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})],-1),B=e("span",{class:"text-sm text-gray-500 group-hover:text-blue-600"},"Home",-1),M=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor","fill-rule":"evenodd",d:"m20.215 2.387-8.258 10.547-2.704-3.092a1 1 0 1 0-1.506 1.316l3.103 3.548a1.5 1.5 0 0 0 2.31-.063L21.79 3.62a1 1 0 1 0-1.575-1.233zM20 11a1 1 0 0 0-1 1v6.077c0 .459-.021.57-.082.684a.364.364 0 0 1-.157.157c-.113.06-.225.082-.684.082H5.923c-.459 0-.57-.022-.684-.082a.363.363 0 0 1-.157-.157c-.06-.113-.082-.225-.082-.684V5.5a.5.5 0 0 1 .5-.5l8.5.004a1 1 0 1 0 0-2L5.5 3A2.5 2.5 0 0 0 3 5.5v12.577c0 .76.082 1.185.319 1.627.224.419.558.753.977.977.442.237.866.319 1.627.319h12.154c.76 0 1.185-.082 1.627-.319.42-.224.754-.558.978-.977.236-.442.318-.866.318-1.627V12a1 1 0 0 0-1-1z","clip-rule":"evenodd"})],-1),k=e("div",{class:"text-sm"},"To-dos",-1),L=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M7 2a1 1 0 0 0-1 1v1.001c-.961.014-1.34.129-1.721.333a2.272 2.272 0 0 0-.945.945C3.116 5.686 3 6.09 3 7.205v10.59c0 1.114.116 1.519.334 1.926.218.407.538.727.945.945.407.218.811.334 1.926.334h11.59c1.114 0 1.519-.116 1.926-.334.407-.218.727-.538.945-.945.218-.407.334-.811.334-1.926V7.205c0-1.115-.116-1.519-.334-1.926a2.272 2.272 0 0 0-.945-.945C19.34 4.13 18.961 4.015 18 4V3a1 1 0 1 0-2 0v1H8V3a1 1 0 0 0-1-1zM5 9v8.795c0 .427.019.694.049.849.012.06.017.074.049.134a.275.275 0 0 0 .124.125c.06.031.073.036.134.048.155.03.422.049.849.049h11.59c.427 0 .694-.019.849-.049a.353.353 0 0 0 .134-.049.275.275 0 0 0 .125-.124.353.353 0 0 0 .048-.134c.03-.155.049-.422.049-.849L19.004 9H5zm8.75 4a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-.75-.75h-2.5z","clip-rule":"evenodd"})],-1),A=e("div",{class:"text-sm"},"Calendar",-1);function D(l,_){const t=w;return a(),c("footer",j,[o(t,{to:"/",class:"w-[50%] flex flex-col items-center justify-center text-gray-500 p-4"},{default:d(()=>[z,B]),_:1}),o(t,{to:"/to-dos",class:"w-[50%] flex flex-col items-center justify-center text-gray-500 p-4"},{default:d(()=>[M,k]),_:1}),o(t,{to:"/calendar",class:"w-[50%] flex flex-col items-center justify-center text-gray-500 p-4"},{default:d(()=>[L,A]),_:1})])}const N=f(V,[["render",D]]),T={},F={class:"flex flex-col h-screen justify-between"};function I(l,_){const t=H,s=v,r=N;return a(),c("div",F,[o(t,{hub:"The Happiness Hotel"}),o(s,{class:"mb-auto"}),o(r)])}const P=f(T,[["render",I]]);export{P as default};