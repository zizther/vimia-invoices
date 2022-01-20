var ge=Object.defineProperty,he=Object.defineProperties;var Ce=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var be=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable;var W=(r,s,c)=>s in r?ge(r,s,{enumerable:!0,configurable:!0,writable:!0,value:c}):r[s]=c,O=(r,s)=>{for(var c in s||(s={}))be.call(s,c)&&W(r,c,s[c]);if(G)for(var c of G(s))xe.call(s,c)&&W(r,c,s[c]);return r},q=(r,s)=>he(r,Ce(s));import{o as m,e as ve,h as u,m as y,J,G as Be,aN as Ee,ah as ke,r as o,l as _,w as t,u as a,f as l,i as b,t as g,j as I,B as M,a0 as we,k as F,aR as Se,aS as De,D as Ie,q as j,ag as X,V as K,x as U}from"./vendor.01d0adc5.js";import{u as Q}from"./expense.f35fce23.js";import{u as $e}from"./category.2f95eba8.js";import{j as Y,u as Fe,e as ee,g as v,b as Ve}from"./main.c43fbacd.js";const Pe={width:"110",height:"110",viewBox:"0 0 110 110",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Le={props:{primaryFillColor:{type:String,default:"fill-primary-500"},secondaryFillColor:{type:String,default:"fill-gray-600"}},setup(r){return(s,c)=>(m(),ve("svg",Pe,[u("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M55 13.75C24.6245 13.75 0 22.9848 0 34.375C0 45.7652 24.6245 55 55 55C85.3755 55 110 45.7652 110 34.375C110 22.9848 85.3755 13.75 55 13.75ZM55 15.4688C86.8708 15.4688 108.281 25.245 108.281 34.375C108.281 43.505 86.8708 53.2812 55 53.2812C23.1292 53.2812 1.71875 43.505 1.71875 34.375C1.71875 25.245 23.1292 15.4688 55 15.4688Z",class:y(r.secondaryFillColor)},null,2),u("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M54.9999 1.71875C66.0842 1.71875 75.7452 7.92172 80.697 17.038L82.732 17.2081C77.6737 7.01078 67.1549 0 54.9999 0C42.7985 0 32.2454 7.06406 27.2095 17.3267L29.2479 17.1411C34.1824 7.96812 43.8745 1.71875 54.9999 1.71875Z",class:y(r.primaryFillColor)},null,2),u("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M55 96.25C40.7619 96.25 25.7812 99.3283 25.7812 103.125C25.7812 106.922 40.7619 110 55 110C69.2381 110 84.2188 106.922 84.2188 103.125C84.2188 99.3283 69.2381 96.25 55 96.25ZM55 97.9688C70.4602 97.9688 81.5959 101.317 82.4811 103.125C81.5959 104.933 70.4602 108.281 55 108.281C39.5398 108.281 28.4041 104.933 27.5189 103.125C28.4041 101.317 39.5398 97.9688 55 97.9688Z",class:y(r.primaryFillColor)},null,2),u("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M27.4756 103.328L25.8049 102.922L41.2737 39.3286L42.9443 39.7342L27.4756 103.328Z",class:y(r.primaryFillColor)},null,2),u("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M82.5247 103.328L67.0559 39.7342L68.7265 39.3286L84.1953 102.922L82.5247 103.328Z",class:y(r.primaryFillColor)},null,2),u("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M68.75 39.5312C68.75 42.3792 62.5934 44.6875 55 44.6875C47.4066 44.6875 41.25 42.3792 41.25 39.5312C41.25 36.6833 47.4066 34.375 55 34.375C62.5934 34.375 68.75 36.6833 68.75 39.5312Z",class:y(r.secondaryFillColor)},null,2)]))}},Ne={props:{row:{type:Object,default:null},table:{type:Object,default:null},loadData:{type:Function,default:null}},setup(r){const s=r,c=Y();Fe();const{t:B}=J(),E=Q(),w=Be();Ee();const x=ee();ke("utils");function d(h){c.openDialog({title:B("general.are_you_sure"),message:B("expenses.confirm_delete",1),yesLabel:B("general.ok"),noLabel:B("general.cancel"),variant:"danger",size:"lg",hideNoButton:!1}).then(p=>{p&&E.deleteExpense({ids:[h]}).then(C=>{C&&s.loadData&&s.loadData()})})}return(h,p)=>{const C=o("BaseIcon"),S=o("BaseButton"),k=o("BaseDropdownItem"),V=o("router-link"),P=o("BaseDropdown");return m(),_(P,null,{activator:t(()=>[a(w).name==="expenses.view"?(m(),_(S,{key:0,variant:"primary"},{default:t(()=>[l(C,{name:"DotsHorizontalIcon",class:"h-5 text-white"})]),_:1})):(m(),_(C,{key:1,name:"DotsHorizontalIcon",class:"h-5 text-gray-500"}))]),default:t(()=>[a(x).hasAbilities(a(v).EDIT_EXPENSE)?(m(),_(V,{key:0,to:`/admin/expenses/${r.row.id}/edit`},{default:t(()=>[l(k,null,{default:t(()=>[l(C,{name:"PencilIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),b(" "+g(h.$t("general.edit")),1)]),_:1})]),_:1},8,["to"])):I("",!0),a(x).hasAbilities(a(v).DELETE_EXPENSE)?(m(),_(k,{key:1,onClick:p[0]||(p[0]=Z=>d(r.row.id))},{default:t(()=>[l(C,{name:"TrashIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),b(" "+g(h.$t("general.delete")),1)]),_:1})):I("",!0)]),_:1})}}},Ae=u("div",{class:"hidden w-8 h-0 mx-4 border border-gray-400 border-solid xl:block",style:{"margin-top":"1.5rem"}},null,-1),Te={class:"relative table-container"},Me={class:"relative flex items-center justify-end h-5"},je={class:"flex text-sm font-medium cursor-pointer select-none text-primary-400"},Xe={class:"absolute items-center left-6 top-2.5 select-none"},Ue={class:"relative block"},Ze={class:"notes"},Re={class:"truncate note w-60"},qe={setup(r){Ve();const s=Q(),c=Y(),B=$e(),E=ee();let w=M(!0),x=M(null);const d=we({expense_category_id:"",from_date:"",to_date:"",customer_id:""}),{t:h}=J();let p=M(null);const C=F(()=>!s.totalExpenses&&!w.value),S=F({get:()=>s.selectedExpenses,set:n=>s.selectExpense(n)}),k=F({get:()=>s.selectAllField,set:n=>s.setSelectAllState(n)}),V=F(()=>[{key:"status",thClass:"extra w-10",tdClass:"font-medium text-gray-900",placeholderClass:"w-10",sortable:!1},{key:"expense_date",label:"Date",thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"name",label:"Category",thClass:"extra",tdClass:"cursor-pointer font-medium text-primary-500"},{key:"user_name",label:"Customer"},{key:"notes",label:"Note"},{key:"amount",label:"Amount"},{key:"actions",sortable:!1,tdClass:"text-right text-sm font-medium"}]);Se(d,()=>{te()},{debounce:500}),De(()=>{s.selectAllField&&s.selectAllExpenses()}),Ie(()=>{B.fetchCategories({limit:"all"})});async function P(n){return(await B.fetchCategories({search:n})).data.data}async function Z({page:n,filter:i,sort:D}){let N=q(O({},d),{orderByField:D.fieldName||"created_at",orderBy:D.order||"desc",page:n});w.value=!0;let f=await s.fetchExpenses(N);return w.value=!1,{data:f.data.data,pagination:{data:f.data.data,totalPages:f.data.meta.last_page,currentPage:n,totalCount:f.data.meta.total,limit:10}}}function L(){p.value&&p.value.refresh()}function te(){L()}function R(){d.expense_category_id="",d.from_date="",d.to_date="",d.customer_id=""}function ae(){x.value&&R(),x.value=!x.value}function le(){return E.hasAbilities([v.DELETE_EXPENSE,v.EDIT_EXPENSE])}function se(){c.openDialog({title:h("general.are_you_sure"),message:h("expenses.confirm_delete",2),yesLabel:h("general.ok"),noLabel:h("general.cancel"),variant:"danger",size:"lg",hideNoButton:!1}).then(n=>{n&&s.deleteMultipleExpenses().then(i=>{i.data&&L()})})}return(n,i)=>{const D=o("BaseBreadcrumbItem"),N=o("BaseBreadcrumb"),f=o("BaseIcon"),A=o("BaseButton"),ne=o("BasePageHeader"),oe=o("BaseCustomerSelectInput"),$=o("BaseInputGroup"),re=o("BaseMultiselect"),z=o("BaseDatePicker"),ie=o("BaseFilterWrapper"),de=o("BaseEmptyPlaceholder"),ce=o("BaseDropdownItem"),ue=o("BaseDropdown"),H=o("BaseCheckbox"),me=o("router-link"),pe=o("BaseFormatMoney"),fe=o("BaseText"),_e=o("BaseTable"),ye=o("BasePage");return m(),_(ye,null,{default:t(()=>[l(ne,{title:n.$t("expenses.title")},{actions:t(()=>[j(l(A,{variant:"primary-outline",onClick:ae},{right:t(e=>[a(x)?(m(),_(f,{key:1,name:"XIcon",class:y(e.class)},null,8,["class"])):(m(),_(f,{key:0,name:"FilterIcon",class:y(e.class)},null,8,["class"]))]),default:t(()=>[b(g(n.$t("general.filter"))+" ",1)]),_:1},512),[[X,a(s).totalExpenses]]),a(E).hasAbilities(a(v).CREATE_EXPENSE)?(m(),_(A,{key:0,class:"ml-4",variant:"primary",onClick:i[0]||(i[0]=e=>n.$router.push("expenses/create"))},{left:t(e=>[l(f,{name:"PlusIcon",class:y(e.class)},null,8,["class"])]),default:t(()=>[b(" "+g(n.$t("expenses.add_expense")),1)]),_:1})):I("",!0)]),default:t(()=>[l(N,null,{default:t(()=>[l(D,{title:n.$t("general.home"),to:"dashboard"},null,8,["title"]),l(D,{title:n.$tc("expenses.expense",2),to:"#",active:""},null,8,["title"])]),_:1})]),_:1},8,["title"]),l(ie,{show:a(x),class:"mt-5",onClear:R},{default:t(()=>[l($,{label:n.$t("expenses.customer")},{default:t(()=>[l(oe,{modelValue:a(d).customer_id,"onUpdate:modelValue":i[1]||(i[1]=e=>a(d).customer_id=e),placeholder:n.$t("customers.type_or_click"),"value-prop":"id",label:"name"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l($,{label:n.$t("expenses.category")},{default:t(()=>[l(re,{modelValue:a(d).expense_category_id,"onUpdate:modelValue":i[2]||(i[2]=e=>a(d).expense_category_id=e),"value-prop":"id",label:"name","track-by":"name","filter-results":!1,"resolve-on-load":"",delay:500,options:P,searchable:"",placeholder:n.$t("expenses.categories.select_a_category")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l($,{label:n.$t("expenses.from_date")},{default:t(()=>[l(z,{modelValue:a(d).from_date,"onUpdate:modelValue":i[3]||(i[3]=e=>a(d).from_date=e),"calendar-button":!0,"calendar-button-icon":"calendar"},null,8,["modelValue"])]),_:1},8,["label"]),Ae,l($,{label:n.$t("expenses.to_date")},{default:t(()=>[l(z,{modelValue:a(d).to_date,"onUpdate:modelValue":i[4]||(i[4]=e=>a(d).to_date=e),"calendar-button":!0,"calendar-button-icon":"calendar"},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["show"]),j(l(de,{title:n.$t("expenses.no_expenses"),description:n.$t("expenses.list_of_expenses")},K({default:t(()=>[l(Le,{class:"mt-5 mb-4"})]),_:2},[a(E).hasAbilities(a(v).CREATE_EXPENSE)?{name:"actions",fn:t(()=>[l(A,{variant:"primary-outline",onClick:i[5]||(i[5]=e=>n.$router.push("/admin/expenses/create"))},{left:t(e=>[l(f,{name:"PlusIcon",class:y(e.class)},null,8,["class"])]),default:t(()=>[b(" "+g(n.$t("expenses.add_new_expense")),1)]),_:1})])}:void 0]),1032,["title","description"]),[[X,a(C)]]),j(u("div",Te,[u("div",Me,[a(s).selectedExpenses.length&&a(E).hasAbilities(a(v).DELETE_EXPENSE)?(m(),_(ue,{key:0},{activator:t(()=>[u("span",je,[b(g(n.$t("general.actions"))+" ",1),l(f,{name:"ChevronDownIcon"})])]),default:t(()=>[a(E).hasAbilities(a(v).DELETE_EXPENSE)?(m(),_(ce,{key:0,onClick:se},{default:t(()=>[l(f,{name:"TrashIcon",class:"h-5 mr-3 text-gray-600"}),b(" "+g(n.$t("general.delete")),1)]),_:1})):I("",!0)]),_:1})):I("",!0)]),l(_e,{ref:(e,T)=>{T.tableComponent=e,U(p)?p.value=e:p=e},data:Z,columns:a(V),class:"mt-3"},K({header:t(()=>[u("div",Xe,[l(H,{modelValue:a(k),"onUpdate:modelValue":i[6]||(i[6]=e=>U(k)?k.value=e:null),variant:"primary",onChange:a(s).selectAllExpenses},null,8,["modelValue","onChange"])])]),"cell-status":t(({row:e})=>[u("div",Ue,[l(H,{id:e.id,modelValue:a(S),"onUpdate:modelValue":i[7]||(i[7]=T=>U(S)?S.value=T:null),value:e.data.id,variant:"primary"},null,8,["id","modelValue","value"])])]),"cell-name":t(({row:e})=>[l(me,{to:{path:`expenses/${e.data.id}/edit`},class:"font-medium text-primary-500"},{default:t(()=>[b(g(e.data.expense_category.name),1)]),_:2},1032,["to"])]),"cell-amount":t(({row:e})=>[l(pe,{amount:e.data.amount,currency:e.data.currency},null,8,["amount","currency"])]),"cell-expense_date":t(({row:e})=>[b(g(e.data.formatted_expense_date),1)]),"cell-user_name":t(({row:e})=>[l(fe,{text:e.data.customer?e.data.customer.name:"-",length:30},null,8,["text"])]),"cell-notes":t(({row:e})=>[u("div",Ze,[u("div",Re,g(e.data.notes?e.data.notes:"-"),1)])]),_:2},[le()?{name:"cell-actions",fn:t(({row:e})=>[l(Ne,{row:e.data,table:a(p),"load-data":L},null,8,["row","table"])])}:void 0]),1032,["columns"])],512),[[X,!a(C)]])]),_:1})}}};export{qe as default};
