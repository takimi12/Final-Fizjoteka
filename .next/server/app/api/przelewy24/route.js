"use strict";(()=>{var e={};e.id=7906,e.ids=[7906],e.modules={11185:e=>{e.exports=require("mongoose")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},6113:e=>{e.exports=require("crypto")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},22037:e=>{e.exports=require("os")},12781:e=>{e.exports=require("stream")},76224:e=>{e.exports=require("tty")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},97550:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>x,patchFetch:()=>q,requestAsyncStorage:()=>g,routeModule:()=>m,serverHooks:()=>h,staticGenerationAsyncStorage:()=>y});var n={};t.r(n),t.d(n,{POST:()=>d});var o=t(49303),i=t(88716),a=t(60670),s=t(87070),p=t(3241),u=t(1746),l=t(34532),c=t(39231);async function d(e){let r=await e.json();await (0,l.C)();let t=r.cartItems.map(e=>c.Z.findById(e.id)),n=await Promise.all(t),o=n.reduce((e,r)=>e+Number(r.price),0);try{let e=n.map(e=>({name:e.title,price:e.price,quantity:1,url:e.pdfFileUrl})),r=await p.Z.create({status:!1,products:e,customer:{email:"tomek12olech@gmail.com",nameAndSurname:"John Doe",companyName:"",nip:""}}),t=new u.P24(303306,303306,"ab5592ef8267599515dad8d635afae29","d6cfd7c99d6a21f6",{sandbox:!0}),i=await t.createTransaction({sessionId:r._id.toString(),amount:100*o,currency:u.Currency.PLN,description:"test order",email:"john.doe@example.com",country:u.Country.Poland,language:u.Language.PL,urlReturn:"http://localhost:3000/pl/continue",urlStatus:"http://localhost:3000/api/przelewy24/p24callback",timeLimit:15,encoding:u.Encoding.UTF8});return s.NextResponse.json({url:i.link})}catch(e){return s.NextResponse.json({error:"An error occurred"},{status:500})}}let m=new o.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/przelewy24/route",pathname:"/api/przelewy24",filename:"route",bundlePath:"app/api/przelewy24/route"},resolvedPagePath:"/Users/thonasjefferson/Desktop/Final Fizjoteka/src/app/api/przelewy24/route.ts",nextConfigOutput:"",userland:n}),{requestAsyncStorage:g,staticGenerationAsyncStorage:y,serverHooks:h}=m,x="/api/przelewy24/route";function q(){return(0,a.patchFetch)({serverHooks:h,staticGenerationAsyncStorage:y})}},34532:(e,r,t)=>{t.d(r,{C:()=>s});var n=t(11185),o=t.n(n);let i="mongodb+srv://chao:chao@cluster0.sbxy1gl.mongodb.net/fizjoteka1";if(!i)throw Error("Please define the MONGODB_URI environment variable inside .env.local");let a=global.mongoose;a||(a=global.mongoose={conn:null,promise:null});let s=async()=>{if(a.conn)return a.conn;a.promise||(a.promise=o().connect(i,{bufferCommands:!1}).then(e=>e));try{a.conn=await a.promise}catch(e){throw a.promise=null,e}return a.conn}},39231:(e,r,t)=>{t.d(r,{Z:()=>a});var n=t(11185),o=t.n(n);let i=new n.Schema({title:String,subtitle:String,description:String,categories:[String],price:String,imageFileUrl:String,pdfFileUrl:String},{timestamps:!0}),a=o().models.Topics||o().model("Topics",i)},3241:(e,r,t)=>{t.d(r,{Z:()=>p});let n=t(11185),{Schema:o}=n,i=new o({name:{type:String,required:!0},price:{type:Number,required:!0},quantity:{type:Number,required:!0},url:{type:String,required:!0}}),a=new o({email:{type:String,required:!0},nameAndSurname:{type:String,required:!0},companyName:{type:String},nip:{type:String}}),s=new o({status:{type:Boolean,required:!0},products:[i],customer:a}),p=n.models.Transaction||n.model("Transaction",s)}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),n=r.X(0,[8948,5972,1746],()=>t(97550));module.exports=n})();