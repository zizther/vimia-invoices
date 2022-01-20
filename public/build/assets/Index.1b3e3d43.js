import{J as I,k as v,r as l,o as n,e as i,t as c,j as y,h as t,f as e,u as r,l as $,w as u,B as k,L as j,M as J,N as O,T as K,F as Q,y as W,U as X,m as Y,i as P}from"./vendor.01d0adc5.js";import{_ as Z,r as ee,d as te}from"./main.c43fbacd.js";const se={key:0,class:"absolute mt-5 px-6 w-full flex justify-end"},ae={key:0,class:"bg-white bg-opacity-75 text-xs px-3 py-1 font-semibold tracking-wide rounded"},ne={key:1,class:"ml-2 bg-white bg-opacity-75 text-xs px-3 py-1 font-semibold tracking-wide rounded"},oe={key:0},le={key:1},re=["src"],ie={class:"px-6 py-5 flex flex-col bg-gray-50 flex-1 justify-between"},de={class:"text-lg sm:text-2xl font-medium whitespace-nowrap truncate text-primary-500"},ce={key:0,class:"flex items-center mt-2"},ue=["src"],me=t("span",null,"by",-1),_e={class:"ml-2 text-base font-semibold truncate"},he={class:"flex justify-between mt-4 flex-col space-y-2 sm:space-y-0 sm:flex-row"},fe={class:"text-xl md:text-2xl font-semibold whitespace-nowrap text-primary-500"},pe={props:{data:{type:Object,default:null,required:!0}},setup(a){const o=a;I();let m=v(()=>parseInt(o.data.average_rating));return(d,_)=>{const h=l("base-text"),g=l("BaseRating");return n(),i("div",{class:"relative shadow-md border-2 border-gray-200 border-opacity-60 rounded-lg cursor-pointer overflow-hidden h-100",onClick:_[0]||(_[0]=w=>d.$router.push(`/admin/modules/${a.data.slug}`))},[a.data.purchased?(n(),i("div",se,[a.data.purchased?(n(),i("label",ae,c(d.$t("modules.purchased")),1)):y("",!0),a.data.installed?(n(),i("label",ne,[a.data.update_available?(n(),i("span",oe,c(d.$t("modules.update_available")),1)):(n(),i("span",le,c(d.$t("modules.installed")),1))])):y("",!0)])):y("",!0),t("img",{class:"lg:h-64 md:h-48 w-full object-cover object-center",src:a.data.cover,alt:"cover"},null,8,re),t("div",ie,[t("span",de,c(a.data.name),1),a.data.author_avatar?(n(),i("div",ce,[t("img",{class:"hidden h-10 w-10 rounded-full sm:inline-block mr-2",src:a.data.author_avatar?a.data.author_avatar:"http://localhost:3000/img/default-avatar.jpg",alt:""},null,8,ue),me,t("span",_e,c(a.data.author_name),1)])):y("",!0),e(h,{text:a.data.short_description,class:"pt-4 text-gray-500 h-16 line-clamp-2",length:110},null,8,["text"]),t("div",he,[t("div",null,[e(g,{rating:r(m)},null,8,["rating"])]),t("div",fe," $ "+c(a.data.monthly_price?a.data.monthly_price/100:a.data.yearly_price/100),1)])])])}}},ge={},ve={class:"shadow-md border-2 border-gray-200 border-opacity-60 rounded-lg cursor-pointer overflow-hidden h-100"},be={class:"px-6 py-5 flex flex-col bg-gray-50 flex-1 justify-between"},ye={class:"flex items-center mt-2"},xe={class:"flex justify-between mt-4 flex-col space-y-2 sm:space-y-0 sm:flex-row"};function $e(a,o){const m=l("BaseContentPlaceholdersBox"),d=l("BaseContentPlaceholdersText"),_=l("BaseContentPlaceholders");return n(),$(_,null,{default:u(()=>[t("div",ve,[e(m,{class:"h-48 lg:h-64 md:h-48 w-full",rounded:""}),t("div",be,[e(d,{class:"w-32 h-8",lines:1,rounded:""}),t("div",ye,[e(m,{class:"h-10 w-10 rounded-full sm:inline-block mr-2"}),t("div",null,[e(d,{class:"w-32 h-8 ml-2",lines:1,rounded:""})])]),e(d,{class:"pt-4 w-full h-16",lines:1,rounded:""}),t("div",xe,[e(d,{class:"w-32 h-8",lines:1,rounded:""}),e(d,{class:"w-32 h-8",lines:1,rounded:""})])])])]),_:1})}var B=Z(ge,[["render",$e]]);const ke={key:0},Be={key:0,class:"grid mt-6 w-full grid-cols-1 items-start gap-6 lg:grid-cols-2 xl:grid-cols-3"},we={key:1},Te={key:0,class:"grid mt-6 w-full grid-cols-1 items-start gap-6 lg:grid-cols-2 xl:grid-cols-3"},Ce={key:1,class:"mt-24"},Se={class:"flex items-center justify-center text-gray-500"},Ie={class:"text-gray-900 text-lg font-medium"},je={class:"mt-1 text-sm text-gray-500"},Pe={class:"grid lg:grid-cols-2 mt-6"},Me=["onSubmit"],Le={class:"flex space-x-2"},Ue=["href"],Ve=P(" Sign up & Get Token "),Ae={setup(a){const o=ee(),m=te(),d=k(""),{t:_}=I();let h=k(!1),g=k(!1);const w=v(()=>({api_token:{required:j.withMessage(_("validation.required"),J),minLength:j.withMessage(_("validation.name_min_length",{count:3}),O(3))}})),M=v(()=>o.apiToken?(L(),!0):!1),f=K(w,v(()=>o.currentUser)),x=v(()=>d.value==="INSTALLED"?o.modules.filter(s=>s.installed):o.modules);async function L(){g.value=!0,await o.fetchModules().then(()=>{g.value=!1})}async function U(){if(f.value.$touch(),f.value.$invalid)return!0;h.value=!0,o.checkApiToken(o.currentUser.api_token).then(s=>{if(s.data.success){V();return}h.value=!1})}async function V(){try{await m.updateGlobalSettings({data:{settings:{api_token:o.currentUser.api_token}},message:"settings.preferences.updated_message"}).then(s=>{if(s.data.success){o.apiToken=o.currentUser.api_token;return}}),h.value=!1}catch(s){h.value=!1,console.error(s);return}}function G(s){d.value=s.filter}return(s,b)=>{const T=l("BaseBreadcrumbItem"),N=l("BaseBreadcrumb"),A=l("BasePageHeader"),C=l("BaseTab"),q=l("BaseTabGroup"),D=l("BaseInput"),F=l("BaseInputGroup"),E=l("BaseIcon"),S=l("BaseButton"),R=l("BaseCard"),H=l("BasePage");return n(),$(H,null,{default:u(()=>[e(A,{title:s.$t("modules.title")},{default:u(()=>[e(N,null,{default:u(()=>[e(T,{title:s.$t("general.home"),to:"dashboard"},null,8,["title"]),e(T,{title:s.$tc("modules.module",2),to:"#",active:""},null,8,["title"])]),_:1})]),_:1},8,["title"]),r(M)&&r(o).modules?(n(),i("div",ke,[e(q,{class:"-mb-5",onChange:G},{default:u(()=>[e(C,{title:s.$t("general.all"),filter:""},null,8,["title"]),e(C,{title:s.$t("modules.installed"),filter:"INSTALLED"},null,8,["title"])]),_:1}),r(g)?(n(),i("div",Be,[e(B),e(B),e(B)])):(n(),i("div",we,[r(x)&&r(x).length?(n(),i("div",Te,[(n(!0),i(Q,null,W(r(x),(p,z)=>(n(),i("div",{key:z},[e(pe,{data:p},null,8,["data"])]))),128))])):(n(),i("div",Ce,[t("label",Se,c(s.$t("modules.no_modules_installed")),1)]))]))])):(n(),$(R,{key:1,class:"mt-6"},{default:u(()=>[t("h6",Ie,c(s.$t("modules.connect_installation")),1),t("p",je,c(s.$t("modules.api_token_description",{url:r(m).config.base_url.replace(/^http:\/\//,"")})),1),t("div",Pe,[t("form",{action:"",class:"mt-6",onSubmit:X(U,["prevent"])},[e(F,{label:s.$t("modules.api_token"),required:"",error:r(f).api_token.$error&&r(f).api_token.$errors[0].$message},{default:u(()=>[e(D,{modelValue:r(o).currentUser.api_token,"onUpdate:modelValue":b[0]||(b[0]=p=>r(o).currentUser.api_token=p),invalid:r(f).api_token.$error,onInput:b[1]||(b[1]=p=>r(f).api_token.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"]),t("div",Le,[e(S,{class:"mt-6",loading:r(h),type:"submit"},{left:u(p=>[e(E,{name:"SaveIcon",class:Y(p.class)},null,8,["class"])]),default:u(()=>[P(" "+c(s.$t("general.save")),1)]),_:1},8,["loading"]),t("a",{href:`${r(m).config.base_url}/auth/customer/register`,class:"mt-6 block",target:"_blank"},[e(S,{variant:"primary-outline",type:"button"},{default:u(()=>[Ve]),_:1})],8,Ue)])],40,Me)])]),_:1}))]),_:1})}}};export{Ae as default};
