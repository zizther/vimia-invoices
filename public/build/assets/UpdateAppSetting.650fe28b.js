import{J as R,B as d,a0 as I,a as S,k as J,r as h,o as n,l as D,w,h as t,t as a,u as s,f as v,i as $,j as y,q as O,ag as Y,e as i,F as V,y as q,m as G}from"./vendor.01d0adc5.js";import{u as Q,j as W,b as X,h as T}from"./main.c43fbacd.js";import{L as Z}from"./LoadingIcon.8e3c4639.js";import{u as ee}from"./exchange-rate.8215a0ae.js";const te={class:"pb-8 ml-0"},ae={class:"text-sm not-italic font-medium input-label"},se={class:"box-border flex w-16 p-3 my-2 text-sm text-gray-600 bg-gray-200 border border-gray-200 border-solid rounded-md version"},ne={key:1,class:"mt-4 content"},ie={class:"rounded-md bg-primary-50 p-4 mb-3"},re={class:"flex"},le={class:"shrink-0"},oe={class:"ml-3"},de={class:"text-sm font-medium text-primary-800"},pe={class:"mt-2 text-sm text-primary-700"},ue={class:"text-sm not-italic font-medium input-label"},ce=t("br",null,null,-1),me={class:"box-border flex w-16 p-3 my-2 text-sm text-gray-600 bg-gray-200 border border-gray-200 border-solid rounded-md version"},_e=["innerHTML"],ge={class:"text-sm not-italic font-medium input-label"},fe={class:"w-1/2 mt-2 border-2 border-gray-200 BaseTable-fixed"},he={width:"70%",class:"p-2 text-sm truncate"},ve={width:"30%",class:"p-2 text-sm text-right"},ye={key:0,class:"inline-block w-4 h-4 ml-3 mr-2 bg-green-500 rounded-full"},be={key:1,class:"inline-block w-4 h-4 ml-3 mr-2 bg-red-500 rounded-full"},xe={key:2,class:"relative flex justify-between mt-4 content"},we={class:"m-0 mb-3 font-medium sw-section-title"},ke={class:"mb-8 text-sm leading-snug text-gray-500",style:{"max-width":"480px"}},Be={key:3,class:"w-full p-0 list-none"},Ue={class:"m-0 text-sm leading-8"},Se={class:"flex flex-row items-center"},$e={key:0,class:"mr-3 text-xs text-gray-500"},De={setup(Ce){const k=Q(),z=W(),{t:p,tm:Ne}=R();X(),ee();let b=d(!1),c=d(!1),C=d(""),B=d(""),m=d(null),N=d(null),l=d(!1);const U=I([{translationKey:"settings.update_app.download_zip_file",stepUrl:"/api/v1/update/download",time:null,started:!1,completed:!1},{translationKey:"settings.update_app.unzipping_package",stepUrl:"/api/v1/update/unzip",time:null,started:!1,completed:!1},{translationKey:"settings.update_app.copying_files",stepUrl:"/api/v1/update/copy",time:null,started:!1,completed:!1},{translationKey:"settings.update_app.deleting_files",stepUrl:"/api/v1/update/delete",time:null,started:!1,completed:!1},{translationKey:"settings.update_app.running_migrations",stepUrl:"/api/v1/update/migrate",time:null,started:!1,completed:!1},{translationKey:"settings.update_app.finishing_update",stepUrl:"/api/v1/update/finish",time:null,started:!1,completed:!1}]),x=I({isMinor:Boolean,installed:"",version:""});let E=d(null);window.addEventListener("beforeunload",e=>{l.value&&(e.returnValue="Update is in progress!")}),S.get("/api/v1/app/version").then(e=>{B.value=e.data.version});const F=J(()=>m.value!==null?Object.keys(m.value).every(e=>m.value[e]):!0);function H(e){switch(K(e)){case"pending":return"text-primary-800 bg-gray-200";case"finished":return"text-teal-500 bg-teal-100";case"running":return"text-blue-400 bg-blue-100";case"error":return"text-danger bg-red-200";default:return""}}async function M(){try{c.value=!0;let e=await S.get("/api/v1/check/update");if(c.value=!1,!e.data.version){k.showNotification({title:"Info!",type:"info",message:p("settings.update_app.latest_message")});return}e.data&&(x.isMinor=e.data.is_minor,x.version=e.data.version.version,C.value=e.data.version.description,m.value=e.data.version.extensions,b.value=!0,E.value=e.data.version.minimum_php_version,N.value=e.data.version.deleted_files)}catch(e){b.value=!1,c.value=!1,T(e)}}function j(){z.openDialog({title:p("general.are_you_sure"),message:p("settings.update_app.update_warning"),yesLabel:p("general.ok"),noLabel:p("general.cancel"),variant:"danger",hideNoButton:!1,size:"lg"}).then(async e=>{if(e){let _=null;if(!F.value)return k.showNotification({type:"error",message:"Your current configuration does not match the update requirements. Please try again after all the requirements are fulfilled."}),!0;for(let u=0;u<U.length;u++){let r=U[u];try{l.value=!0,r.started=!0;let g={version:x.version,installed:B.value,deleted_files:N.value,path:_||null},f=await S.post(r.stepUrl,g);r.completed=!0,f.data&&f.data.path&&(_=f.data.path),r.translationKey=="settings.update_app.finishing_update"&&(l.value=!1,k.showNotification({type:"success",message:p("settings.update_app.update_success")}),setTimeout(()=>{location.reload()},3e3))}catch(g){return r.started=!1,r.completed=!0,T(g),A(r.translationKey),!1}}}})}function A(e){if(p(e).value){j();return}l.value=!1}function K(e){return e.started&&e.completed?"finished":e.started&&!e.completed?"running":!e.started&&!e.completed?"pending":"error"}return(e,_)=>{const u=h("BaseButton"),r=h("BaseDivider"),g=h("BaseHeading"),f=h("BaseIcon"),P=h("BaseSettingCard");return n(),D(P,{title:e.$t("settings.update_app.title"),description:e.$t("settings.update_app.description")},{default:w(()=>[t("div",te,[t("label",ae,a(e.$t("settings.update_app.current_version")),1),t("div",se,a(s(B)),1),v(u,{loading:s(c),disabled:s(c)||s(l),variant:"primary-outline",class:"mt-6",onClick:M},{default:w(()=>[$(a(e.$t("settings.update_app.check_update")),1)]),_:1},8,["loading","disabled"]),s(b)?(n(),D(r,{key:0,class:"mt-6 mb-4"})):y("",!0),s(b)?O((n(),i("div",ne,[v(g,{type:"heading-title",class:"mb-2"},{default:w(()=>[$(a(e.$t("settings.update_app.avail_update")),1)]),_:1}),t("div",ie,[t("div",re,[t("div",le,[v(f,{name:"InformationCircleIcon",class:"h-5 w-5 text-primary-400","aria-hidden":"true"})]),t("div",oe,[t("h3",de,a(e.$t("general.note")),1),t("div",pe,[t("p",null,a(e.$t("settings.update_app.update_warning")),1)])])])]),t("label",ue,a(e.$t("settings.update_app.next_version")),1),ce,t("div",me,a(s(x).version),1),t("div",{class:"pl-5 mt-4 mb-8 text-sm leading-snug text-gray-500 update-description",style:{"white-space":"pre-wrap","max-width":"480px"},innerHTML:s(C)},null,8,_e),t("label",ge,a(e.$t("settings.update_app.requirements")),1),t("table",fe,[(n(!0),i(V,null,q(s(m),(o,L)=>(n(),i("tr",{key:L,class:"p-2 border-2 border-gray-200"},[t("td",he,a(L),1),t("td",ve,[o?(n(),i("span",ye)):(n(),i("span",be))])]))),128))]),v(u,{class:"mt-10",variant:"primary",onClick:j},{default:w(()=>[$(a(e.$t("settings.update_app.update")),1)]),_:1})],512)),[[Y,!s(l)]]):y("",!0),s(l)?(n(),i("div",xe,[t("div",null,[t("h6",we,a(e.$t("settings.update_app.update_progress")),1),t("p",ke,a(e.$t("settings.update_app.progress_text")),1)]),v(Z,{class:"absolute right-0 h-6 m-1 animate-spin text-primary-400"})])):y("",!0),s(l)?(n(),i("ul",Be,[(n(!0),i(V,null,q(s(U),o=>(n(),i("li",{key:o.stepUrl,class:"flex justify-between w-full py-3 border-b border-gray-200 border-solid last:border-b-0"},[t("p",Ue,a(e.$t(o.translationKey)),1),t("div",Se,[o.time?(n(),i("span",$e,a(o.time),1)):y("",!0),t("span",{class:G([H(o),"block py-1 text-sm text-center uppercase rounded-full"]),style:{width:"88px"}},a(K(o)),3)])]))),128))])):y("",!0)])]),_:1},8,["title","description"])}}};export{De as default};
