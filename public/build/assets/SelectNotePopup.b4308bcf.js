var P=Object.defineProperty;var b=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var g=(s,t,e)=>t in s?P(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,x=(s,t)=>{for(var e in t||(t={}))A.call(t,e)&&g(s,e,t[e]);if(b)for(var e of b(t))T.call(t,e)&&g(s,e,t[e]);return s};import{B as k,J as F,k as L,r as w,o as l,e as i,f as r,h as n,w as p,u as o,l as O,i as D,t as m,m as U,W,j as N,Y as G,X as J,F as B,y as X,Z as Y}from"./vendor.01d0adc5.js";import{u as Z,_ as q}from"./NoteModal.0fc94926.js";import{c as H,e as K,g as C}from"./main.c43fbacd.js";const Q={class:"w-full"},R={class:"overflow-hidden rounded-md shadow-lg ring-1 ring-black ring-opacity-5"},ee={class:"relative grid bg-white"},te={class:"relative p-4"},se={key:0,class:"relative flex flex-col overflow-auto list max-h-36"},oe=["onClick"],ae={class:"flex justify-between px-2"},ne={class:"m-0 text-base font-semibold leading-tight text-gray-700 cursor-pointer"},le={key:1,class:"flex justify-center p-5 text-gray-400"},re={class:"text-base text-gray-500"},ie={class:"m-0 ml-3 text-sm leading-none cursor-pointer font-base text-primary-400"},fe={props:{type:{type:String,default:null}},emits:["select"],setup(s,{emit:t}){const e=s;k(null);const{t:I}=F(),c=k(null),S=H(),d=Z(),y=K(),_=L(()=>c.value?d.notes.filter(function(a){return a.name.toLowerCase().indexOf(c.value.toLowerCase())!==-1}):d.notes);async function V(){await d.fetchNotes({filter:{},orderByField:"",orderBy:"",type:e.type?e.type:""})}function j(a,u){t("select",x({},d.notes[a])),c.value=null,u()}function z(){S.openModal({title:I("settings.customization.notes.add_note"),componentName:"NoteModal",size:"lg",data:e.type})}return(a,u)=>{const h=w("BaseIcon"),M=w("BaseInput");return l(),i(B,null,[r(q),n("div",Q,[r(o(Y),null,{default:p(({isOpen:$})=>[o(y).hasAbilities(o(C).VIEW_NOTE)?(l(),O(o(W),{key:0,class:U([$?"":"text-opacity-90","flex items-center z-10 font-medium text-primary-400 focus:outline-none focus:border-none"]),onClick:V},{default:p(()=>[r(h,{name:"PlusIcon",class:"w-4 h-4 font-medium text-primary-400"}),D(" "+m(a.$t("general.insert_note")),1)]),_:2},1032,["class"])):N("",!0),r(G,{"enter-active-class":"transition duration-200 ease-out","enter-from-class":"translate-y-1 opacity-0","enter-to-class":"translate-y-0 opacity-100","leave-active-class":"transition duration-150 ease-in","leave-from-class":"translate-y-0 opacity-100","leave-to-class":"translate-y-1 opacity-0"},{default:p(()=>[r(o(J),{class:"absolute z-20 px-4 mt-3 sm:px-0 w-screen max-w-full left-0 top-3"},{default:p(({close:E})=>[n("div",R,[n("div",ee,[n("div",te,[r(M,{modelValue:c.value,"onUpdate:modelValue":u[0]||(u[0]=f=>c.value=f),placeholder:a.$t("general.search"),type:"text",class:"text-black"},null,8,["modelValue","placeholder"])]),o(_).length>0?(l(),i("div",se,[(l(!0),i(B,null,X(o(_),(f,v)=>(l(),i("div",{key:v,tabindex:"2",class:"px-6 py-4 border-b border-gray-200 border-solid cursor-pointer hover:bg-gray-100 hover:cursor-pointer last:border-b-0",onClick:ce=>j(v,E)},[n("div",ae,[n("label",ne,m(f.name),1)])],8,oe))),128))])):(l(),i("div",le,[n("label",re,m(a.$t("general.no_note_found")),1)]))]),o(y).hasAbilities(o(C).MANAGE_NOTE)?(l(),i("button",{key:0,type:"button",class:"h-10 flex items-center justify-center w-full px-2 py-3 bg-gray-200 border-none outline-none",onClick:z},[r(h,{name:"CheckCircleIcon",class:"text-primary-400"}),n("label",ie,m(a.$t("settings.customization.notes.add_new_note")),1)])):N("",!0)])]),_:1})]),_:1})]),_:1})])],64)}}};export{fe as _};
