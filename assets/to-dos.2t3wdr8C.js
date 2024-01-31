import{o as c,c as m,a as l,t as b,r as v,q as w,s as U,v as I,u as D,x as $,y as B,F as k,z as h,A as T}from"./entry.yim8dtbH.js";const K={class:"flex-shrink-0 w-64 flex flex-col text-center mr-4"},V=["src"],z={class:"mb-2"},R={__name:"User",props:{user:Object},emits:["addTodo"],setup(e,{emit:t}){const o=e,d=t,s=()=>{d("addTodo",o.user.id)};return(i,p)=>(c(),m("div",K,[l("img",{class:"w-24 h-24 rounded-full mx-auto",src:`./img/${o.user.image}`,alt:"",width:"384",height:"512"},null,8,V),l("h2",z,b(o.user.name),1),l("button",{class:"w-full pointer-events-auto rounded-md px-3 py-2 text-sm font-semibold leading-5 ring-1 ring-slate-900/10 text-gray-500 hover:text-white hover:bg-green-400 transition-all",onClick:s}," + New ")]))}},j={key:1,class:"p-4"},C={__name:"TodoItem",props:["task","color","userId"],emits:["updateTaskTitle","removeTask"],setup(e,{emit:t}){const o=e,d=t,s=v(!1),i=v(o.task.title),p=()=>{s.value=!0},a=async()=>{s.value=!1,await B(),d("updateTaskTitle",{userId:o.userId,taskId:o.task.id,newTitle:i.value})},r=()=>{d("removeTask",{userId:o.userId,taskId:o.task.id})};return(u,_)=>(c(),m("div",{class:$(`flex-shrink-0 w-64 mr-4 rounded-lg bg-white text-lg text-left leading-5 text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10 mb-4 border-l-4 border-s-${o.color}-500`)},[s.value?w("",!0):(c(),m("div",{key:0,class:"p-4",onClick:p},b(o.task.title),1)),s.value?(c(),m("div",j,[U(l("input",{"onUpdate:modelValue":_[0]||(_[0]=f=>i.value=f),onBlur:a,onKeyup:D(a,["enter"]),class:"w-full border rounded p-2"},null,544),[[I,i.value]])])):w("",!0),l("div",{class:"flex gap-3 p-4"},[l("button",{class:"w-full pointer-events-auto rounded-md px-3 py-2 text-sm font-semibold leading-5 outline outline-1 hover:text-white hover:bg-green-400 transition-all",onClick:r}," Done ")])],2))}};let x;const E=new Uint8Array(16);function N(){if(!x&&(x=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!x))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return x(E)}const n=[];for(let e=0;e<256;++e)n.push((e+256).toString(16).slice(1));function S(e,t=0){return n[e[t+0]]+n[e[t+1]]+n[e[t+2]]+n[e[t+3]]+"-"+n[e[t+4]]+n[e[t+5]]+"-"+n[e[t+6]]+n[e[t+7]]+"-"+n[e[t+8]]+n[e[t+9]]+"-"+n[e[t+10]]+n[e[t+11]]+n[e[t+12]]+n[e[t+13]]+n[e[t+14]]+n[e[t+15]]}const A=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),y={randomUUID:A};function g(e,t,o){if(y.randomUUID&&!t&&!e)return y.randomUUID();e=e||{};const d=e.random||(e.rng||N)();if(d[6]=d[6]&15|64,d[8]=d[8]&63|128,t){o=o||0;for(let s=0;s<16;++s)t[o+s]=d[s];return t}return S(d)}const G=l("section",{class:"p-4 mb-4 border border-b-1"},[l("h1",{class:"text-xl"},"To-dos")],-1),F={class:"mx-auto overflow-x-auto pb-20"},O={class:"flex flex-wrap mx-4"},q={class:"flex w-full"},H={class:"flex w-full pt-6"},L={class:"flex-shrink-0 w-64 mr-4"},J={__name:"to-dos",setup(e){const t=i=>{const p=s.value[0].people.find(a=>a.id===i);p?p["to-dos"].push({id:g(),title:"New Todo",due_date:"2023-02-02",status:"pending"}):console.warn("User not found with id",i)},o=({userId:i,taskId:p,newTitle:a})=>{const r=s.value[0].people.find(u=>u.id===i);if(r){const u=r["to-dos"].findIndex(_=>_.id===p);u!==-1&&(r["to-dos"][u].title=a)}},d=({userId:i,taskId:p})=>{const a=s.value[0].people.find(r=>r.id===i);a&&(a["to-dos"]=a["to-dos"].filter(r=>r.id!==p))},s=v([{household_name:"Example",picture_url:"image.png",people:[{id:0,name:"Kermit",color:"green",image:"kermit.jpeg","to-dos":[{id:g(),title:"Kermit task 1",due_date:"2023-02-02",status:"pending"},{id:g(),title:"Kermit task 2",due_date:"2023-02-02",status:"pending"},{id:g(),title:"Kermit task 3",due_date:"2023-02-02",status:"pending"},{id:g(),title:"Kermit task 4",due_date:"2023-02-02",status:"pending"}]},{id:1,name:"Gonzo",color:"blue",image:"gonzo.jpeg","to-dos":[{id:g(),title:"Gonzo task 1",due_date:"2023-02-02",status:"pending"},{id:g(),title:"Gonzo task 2",due_date:"2023-02-02",status:"pending"}]},{id:2,name:"Beaker",color:"orange",image:"beaker.jpeg","to-dos":[{id:g(),title:"Beaker task 1",due_date:"2023-02-02",status:"pending"}]}]}]);return(i,p)=>{const a=R,r=C;return c(),m("div",null,[G,l("div",F,[l("div",O,[l("header",q,[(c(!0),m(k,null,h(s.value[0].people,u=>(c(),T(a,{user:u,onAddTodo:t},null,8,["user"]))),256))]),l("section",H,[(c(!0),m(k,null,h(s.value[0].people,u=>(c(),m("div",L,[(c(!0),m(k,null,h(u["to-dos"],_=>(c(),T(r,{key:_.id,task:_,"user-id":u.id,color:u.color,onUpdateTaskTitle:o,onRemoveTask:d},null,8,["task","user-id","color"]))),128))]))),256))])])])])}}};export{J as default};
