var D=Object.defineProperty;var v=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var k=(a,t,e)=>t in a?D(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,w=(a,t)=>{for(var e in t||(t={}))G.call(t,e)&&k(a,e,t[e]);if(v)for(var e of v(t))J.call(t,e)&&k(a,e,t[e]);return a};import{B as y,a as $}from"./BaseListItem.683b8aaa.js";import{J as O,k as S,B as x,a0 as U,bb as q,bc as z,a7 as I,r as u,o as n,l as d,w as c,f as l,u as _,h as i,e as j,y as R,aj as V,F as L}from"./vendor.01d0adc5.js";import{u as K}from"./global.baecaf92.js";import"./main.c43fbacd.js";import"./auth.0422ff47.js";const M={class:"w-full mb-6 select-wrapper xl:hidden"},Q={class:"pb-3 lg:col-span-3"},T={class:"space-y-1"},W={class:"flex"},X={class:"hidden mt-1 xl:block min-w-[240px]"},Y={class:"w-full overflow-hidden"},nt={setup(a){const{t}=O(),{useRoute:e,useRouter:P}=window.VueRouter,f=e(),C=P(),m=K(),g=S(()=>m.companySlug);let E=x({});x();const p=U([{link:`/${m.companySlug}/customer/settings/customer-profile`,title:t("settings.account_settings.account_settings"),icon:q},{link:`/${m.companySlug}/customer/settings/address-info`,title:t("settings.menu_title.address_information"),icon:z}]);I(()=>{f.path===`/${m.companySlug}/customer/settings`&&C.push({name:"customer.profile"});const o=p.find(B=>B.link===f.path);E.value=w({},o)}),S(()=>p);function h(o){return f.path.indexOf(o)>-1}return(o,B)=>{const b=u("BaseBreadcrumbItem"),F=u("BaseBreadcrumb"),H=u("BasePageHeader"),N=u("RouterView"),A=u("BasePage");return n(),d(A,null,{default:c(()=>[l(H,{title:o.$tc("settings.setting",2),class:"pb-6"},{default:c(()=>[l(F,null,{default:c(()=>[l(b,{title:o.$t("general.home"),to:`/${_(g)}/customer/dashboard`},null,8,["title","to"]),l(b,{title:o.$tc("settings.setting",2),to:`/${_(g)}/customer/settings/customer-profile`,active:""},null,8,["title","to"])]),_:1})]),_:1},8,["title"]),i("div",M,[i("aside",Q,[i("nav",T,[l($,null,{default:c(()=>[(n(!0),j(L,null,R(_(p),(s,r)=>(n(),d(y,{key:r,title:s.title,to:s.link,active:h(s.link),index:r,class:"py-3"},{icon:c(()=>[(n(),d(V(s.icon),{class:"h-5 w-6"}))]),_:2},1032,["title","to","active","index"]))),128))]),_:1})])])]),i("div",W,[i("div",X,[l($,null,{default:c(()=>[(n(!0),j(L,null,R(_(p),(s,r)=>(n(),d(y,{key:r,title:s.title,to:s.link,active:h(s.link),index:r,class:"py-3"},{icon:c(()=>[(n(),d(V(s.icon),{class:"h-5 w-6"}))]),_:2},1032,["title","to","active","index"]))),128))]),_:1})]),i("div",Y,[l(N)])])]),_:1})}}};export{nt as default};
