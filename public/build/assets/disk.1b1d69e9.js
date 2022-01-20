import{a,d as l}from"./vendor.01d0adc5.js";import{h as o,u as r}from"./main.c43fbacd.js";const v=(k=!1)=>{const f=k?window.pinia.defineStore:l,{global:n}=window.i18n;return f({id:"disk",state:()=>({disks:[],diskDrivers:[],diskConfigData:null,selected_driver:"local",doSpaceDiskConfig:{name:"",selected_driver:"doSpaces",key:"",secret:"",region:"",bucket:"",endpoint:"",root:""},dropBoxDiskConfig:{name:"",selected_driver:"dropbox",token:"",key:"",secret:"",app:""},localDiskConfig:{name:"",selected_driver:"local",root:""},s3DiskConfigData:{name:"",selected_driver:"s3",key:"",secret:"",region:"",bucket:"",root:""}}),getters:{getDiskDrivers:t=>t.diskDrivers},actions:{fetchDiskEnv(t){return new Promise((s,e)=>{a.get(`/api/v1/disks/${t.disk}`).then(i=>{s(i)}).catch(i=>{o(i),e(i)})})},fetchDisks(t){return new Promise((s,e)=>{a.get("/api/v1/disks",{params:t}).then(i=>{this.disks=i.data.data,s(i)}).catch(i=>{o(i),e(i)})})},fetchDiskDrivers(){return new Promise((t,s)=>{a.get("/api/v1/disk/drivers").then(e=>{this.diskConfigData=e.data,this.diskDrivers=e.data.drivers,t(e)}).catch(e=>{o(e),s(e)})})},deleteFileDisk(t){return new Promise((s,e)=>{a.delete(`/api/v1/disks/${t}`).then(i=>{if(i.data.success){let d=this.disks.findIndex(c=>c.id===t);this.disks.splice(d,1),r().showNotification({type:"success",message:n.t("settings.disk.deleted_message")})}s(i)}).catch(i=>{o(i),e(i)})})},updateDisk(t){return new Promise((s,e)=>{a.put(`/api/v1/disks/${t.id}`,t).then(i=>{if(i.data){let d=this.disks.findIndex(c=>c.id===i.data.data);this.disks[d]=t.disks,r().showNotification({type:"success",message:n.t("settings.disk.success_set_default_disk")})}s(i)}).catch(i=>{o(i),e(i)})})},createDisk(t){return new Promise((s,e)=>{a.post("/api/v1/disks",t).then(i=>{i.data&&r().showNotification({type:"success",message:n.t("settings.disk.success_create")}),this.disks.push(i.data),s(i)}).catch(i=>{o(i),e(i)})})}}})()};export{v as u};
