import{J as ve,ah as pe,B,aN as fe,a0 as be,k as F,aR as ge,aS as Be,r as i,o as I,l as h,w as l,f as t,q as D,ag as V,u as o,m as y,i as m,t as _,j as L,V as M,h as p,x as Ie}from"./vendor.01d0adc5.js";import{i as he,j as ye,u as ke,e as Ee,g as f}from"./main.c43fbacd.js";import{_ as Ce}from"./MoonwalkerIcon.ab503573.js";import{_ as De}from"./InvoiceIndexDropdown.59958dc4.js";import{_ as Ve}from"./SendInvoiceModal.5a733015.js";import"./mail-driver.299d5771.js";const Te=p("div",{class:"hidden w-8 h-0 mx-4 border border-gray-400 border-solid xl:block",style:{"margin-top":"1.5rem"}},null,-1),Ae={class:"relative table-container"},$e={class:"relative flex items-center justify-between h-10 mt-5 list-none border-b-2 border-gray-200 border-solid"},Se={class:"flex text-sm font-medium cursor-pointer select-none text-primary-400"},Pe={class:"absolute items-center left-6 top-2.5 select-none"},we={class:"relative block"},Fe={class:"flex justify-between"},Me={setup(Ne){const c=he(),W=ye();ke();const{t:n}=ve();pe("$utils");const k=B(null),b=B(!1),G=B([{label:"Status",options:["DRAFT","DUE","SENT","VIEWED","OVERDUE","COMPLETED"]},{label:"Paid Status",options:["UNPAID","PAID","PARTIALLY_PAID"]},,]),T=B(!0),u=B("general.draft");fe();const E=Ee();let s=be({customer_id:"",status:"DRAFT",from_date:"",to_date:"",invoice_number:""});const N=F(()=>!c.invoiceTotalCount&&!T.value),A=F({get:()=>c.selectedInvoices,set:a=>c.selectInvoice(a)}),H=F(()=>[{key:"checkbox",thClass:"extra w-10",tdClass:"font-medium text-gray-900",placeholderClass:"w-10",sortable:!1},{key:"invoice_date",label:n("invoices.date"),thClass:"extra",tdClass:"font-medium"},{key:"invoice_number",label:n("invoices.number")},{key:"name",label:n("invoices.customer")},{key:"status",label:n("invoices.status")},{key:"due_amount",label:n("dashboard.recent_invoices_card.amount_due")},{key:"total",label:n("invoices.total"),tdClass:"font-medium text-gray-900"},{key:"actions",label:n("invoices.action"),tdClass:"text-right text-sm font-medium",thClass:"text-right",sortable:!1}]);ge(s,()=>{X()},{debounce:500}),Be(()=>{c.selectAllField&&c.selectAllInvoices()});function q(){return E.hasAbilities([f.DELETE_INVOICE,f.EDIT_INVOICE,f.VIEW_INVOICE,f.SEND_INVOICE])}async function z(a,r){s.status="",$()}function $(){k.value&&k.value.refresh()}async function Y({page:a,filter:r,sort:v}){let S={customer_id:s.customer_id,status:s.status,from_date:s.from_date,to_date:s.to_date,invoice_number:s.invoice_number,orderByField:v.fieldName||"created_at",orderBy:v.order||"desc",page:a};T.value=!0;let d=await c.fetchInvoices(S);return T.value=!1,{data:d.data.data,pagination:{totalPages:d.data.meta.last_page,currentPage:a,totalCount:d.data.meta.total,limit:10}}}function J(a){if(u.value==a.title)return!0;switch(u.value=a.title,a.title){case n("general.draft"):s.status="DRAFT";break;case n("general.sent"):s.status="SENT";break;case n("general.due"):s.status="DUE";break;default:s.status="";break}}function X(){c.$patch(a=>{a.selectedInvoices=[],a.selectAllField=!1}),$()}function U(){s.customer_id="",s.status="",s.from_date="",s.to_date="",s.invoice_number="",u.value=n("general.all")}async function K(){W.openDialog({title:n("general.are_you_sure"),message:n("invoices.confirm_delete"),yesLabel:n("general.ok"),noLabel:n("general.cancel"),variant:"danger",hideNoButton:!1,size:"lg"}).then(async a=>{a&&await c.deleteMultipleInvoices().then(r=>{r.data.success&&($(),c.$patch(v=>{v.selectedInvoices=[],v.selectAllField=!1}))})})}function Q(){b.value&&U(),b.value=!b.value}function Z(a){switch(a){case"DRAFT":u.value=n("general.draft");break;case"SENT":u.value=n("general.sent");break;case"DUE":u.value=n("general.due");break;case"COMPLETED":u.value=n("invoices.completed");break;case"PAID":u.value=n("invoices.paid");break;case"UNPAID":u.value=n("invoices.unpaid");break;case"PARTIALLY_PAID":u.value=n("invoices.partially_paid");break;case"VIEWED":u.value=n("invoices.viewed");break;case"OVERDUE":u.value=n("invoices.overdue");break;default:u.value=n("general.all");break}}return(a,r)=>{const v=i("BaseBreadcrumbItem"),S=i("BaseBreadcrumb"),d=i("BaseIcon"),P=i("BaseButton"),R=i("router-link"),ee=i("BasePageHeader"),te=i("BaseCustomerSelectInput"),g=i("BaseInputGroup"),ae=i("BaseMultiselect"),O=i("BaseDatePicker"),le=i("BaseInput"),se=i("BaseFilterWrapper"),oe=i("BaseEmptyPlaceholder"),C=i("BaseTab"),ne=i("BaseTabGroup"),ie=i("BaseDropdownItem"),re=i("BaseDropdown"),j=i("BaseCheckbox"),ce=i("BaseText"),x=i("BaseFormatMoney"),ue=i("BaseInvoiceStatusBadge"),de=i("BasePaidStatusBadge"),me=i("BaseTable"),_e=i("BasePage");return I(),h(_e,null,{default:l(()=>[t(Ve),t(ee,{title:a.$t("invoices.title")},{actions:l(()=>[D(t(P,{variant:"primary-outline",onClick:Q},{right:l(e=>[b.value?(I(),h(d,{key:1,name:"XIcon",class:y(e.class)},null,8,["class"])):(I(),h(d,{key:0,name:"FilterIcon",class:y(e.class)},null,8,["class"]))]),default:l(()=>[m(_(a.$t("general.filter"))+" ",1)]),_:1},512),[[V,o(c).invoiceTotalCount]]),o(E).hasAbilities(o(f).CREATE_INVOICE)?(I(),h(R,{key:0,to:"invoices/create"},{default:l(()=>[t(P,{variant:"primary",class:"ml-4"},{left:l(e=>[t(d,{name:"PlusIcon",class:y(e.class)},null,8,["class"])]),default:l(()=>[m(" "+_(a.$t("invoices.new_invoice")),1)]),_:1})]),_:1})):L("",!0)]),default:l(()=>[t(S,null,{default:l(()=>[t(v,{title:a.$t("general.home"),to:"dashboard"},null,8,["title"]),t(v,{title:a.$tc("invoices.invoice",2),to:"#",active:""},null,8,["title"])]),_:1})]),_:1},8,["title"]),D(t(se,{"row-on-xl":!0,onClear:U},{default:l(()=>[t(g,{label:a.$tc("customers.customer",1)},{default:l(()=>[t(te,{modelValue:o(s).customer_id,"onUpdate:modelValue":r[0]||(r[0]=e=>o(s).customer_id=e),placeholder:a.$t("customers.type_or_click"),"value-prop":"id",label:"name"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(g,{label:a.$t("invoices.status")},{default:l(()=>[t(ae,{modelValue:o(s).status,"onUpdate:modelValue":[r[1]||(r[1]=e=>o(s).status=e),Z],groups:!0,options:G.value,searchable:"",placeholder:a.$t("general.select_a_status"),onRemove:r[2]||(r[2]=e=>z())},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"]),t(g,{label:a.$t("general.from")},{default:l(()=>[t(O,{modelValue:o(s).from_date,"onUpdate:modelValue":r[3]||(r[3]=e=>o(s).from_date=e),"calendar-button":!0,"calendar-button-icon":"calendar"},null,8,["modelValue"])]),_:1},8,["label"]),Te,t(g,{label:a.$t("general.to"),class:"mt-2"},{default:l(()=>[t(O,{modelValue:o(s).to_date,"onUpdate:modelValue":r[4]||(r[4]=e=>o(s).to_date=e),"calendar-button":!0,"calendar-button-icon":"calendar"},null,8,["modelValue"])]),_:1},8,["label"]),t(g,{label:a.$t("invoices.invoice_number")},{default:l(()=>[t(le,{modelValue:o(s).invoice_number,"onUpdate:modelValue":r[5]||(r[5]=e=>o(s).invoice_number=e)},{left:l(e=>[t(d,{name:"HashtagIcon",class:y(e.class)},null,8,["class"])]),_:1},8,["modelValue"])]),_:1},8,["label"])]),_:1},512),[[V,b.value]]),D(t(oe,{title:a.$t("invoices.no_invoices"),description:a.$t("invoices.list_of_invoices")},M({default:l(()=>[t(Ce,{class:"mt-5 mb-4"})]),_:2},[o(E).hasAbilities(o(f).CREATE_INVOICE)?{name:"actions",fn:l(()=>[t(P,{variant:"primary-outline",onClick:r[6]||(r[6]=e=>a.$router.push("/admin/invoices/create"))},{left:l(e=>[t(d,{name:"PlusIcon",class:y(e.class)},null,8,["class"])]),default:l(()=>[m(" "+_(a.$t("invoices.add_new_invoice")),1)]),_:1})])}:void 0]),1032,["title","description"]),[[V,o(N)]]),D(p("div",Ae,[p("div",$e,[t(ne,{class:"-mb-5",onChange:J},{default:l(()=>[t(C,{title:a.$t("general.draft"),filter:"DRAFT"},null,8,["title"]),t(C,{title:a.$t("general.due"),filter:"DUE"},null,8,["title"]),t(C,{title:a.$t("general.sent"),filter:"SENT"},null,8,["title"]),t(C,{title:a.$t("general.all"),filter:""},null,8,["title"])]),_:1}),o(c).selectedInvoices.length&&o(E).hasAbilities(o(f).DELETE_INVOICE)?(I(),h(re,{key:0,class:"absolute float-right"},{activator:l(()=>[p("span",Se,[m(_(a.$t("general.actions"))+" ",1),t(d,{name:"ChevronDownIcon"})])]),default:l(()=>[t(ie,{onClick:K},{default:l(()=>[t(d,{name:"TrashIcon",class:"mr-3 text-gray-600"}),m(" "+_(a.$t("general.delete")),1)]),_:1})]),_:1})):L("",!0)]),t(me,{ref:(e,w)=>{w.table=e,k.value=e},data:Y,columns:o(H),"placeholder-count":o(c).invoiceTotalCount>=20?10:5,class:"mt-10"},M({header:l(()=>[p("div",Pe,[t(j,{modelValue:o(c).selectAllField,"onUpdate:modelValue":r[7]||(r[7]=e=>o(c).selectAllField=e),variant:"primary",onChange:o(c).selectAllInvoices},null,8,["modelValue","onChange"])])]),"cell-checkbox":l(({row:e})=>[p("div",we,[t(j,{id:e.id,modelValue:o(A),"onUpdate:modelValue":r[8]||(r[8]=w=>Ie(A)?A.value=w:null),value:e.data.id},null,8,["id","modelValue","value"])])]),"cell-name":l(({row:e})=>[t(ce,{text:e.data.customer.name,length:30},null,8,["text"])]),"cell-invoice_number":l(({row:e})=>[t(R,{to:{path:`invoices/${e.data.id}/view`},class:"font-medium text-primary-500"},{default:l(()=>[m(_(e.data.invoice_number),1)]),_:2},1032,["to"])]),"cell-invoice_date":l(({row:e})=>[m(_(e.data.formatted_invoice_date),1)]),"cell-total":l(({row:e})=>[t(x,{amount:e.data.total,currency:e.data.customer.currency},null,8,["amount","currency"])]),"cell-status":l(({row:e})=>[t(ue,{status:e.data.status,class:"px-3 py-1"},{default:l(()=>[m(_(e.data.status),1)]),_:2},1032,["status"])]),"cell-due_amount":l(({row:e})=>[p("div",Fe,[t(x,{amount:e.data.due_amount,currency:e.data.currency},null,8,["amount","currency"]),t(de,{status:e.data.paid_status,class:"px-1 py-0.5 ml-2"},{default:l(()=>[m(_(e.data.paid_status),1)]),_:2},1032,["status"])])]),_:2},[q()?{name:"cell-actions",fn:l(({row:e})=>[t(De,{row:e.data,table:k.value},null,8,["row","table"])])}:void 0]),1032,["columns","placeholder-count"])],512),[[V,!o(N)]])]),_:1})}}};export{Me as default};
