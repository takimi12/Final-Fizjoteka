(()=>{var e={};e.id=2842,e.ids=[2842],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},14300:e=>{"use strict";e.exports=require("buffer")},32081:e=>{"use strict";e.exports=require("child_process")},6113:e=>{"use strict";e.exports=require("crypto")},57147:e=>{"use strict";e.exports=require("fs")},73292:e=>{"use strict";e.exports=require("fs/promises")},13685:e=>{"use strict";e.exports=require("http")},85158:e=>{"use strict";e.exports=require("http2")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},77282:e=>{"use strict";e.exports=require("process")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},17905:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>_,tree:()=>n}),s(23073),s(39226),s(32029),s(12523);var r=s(23191),a=s(88716),i=s(37922),o=s.n(i),l=s(95231),c={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>l[e]);s.d(t,c);let n=["",{children:["[locale]",{children:["filmy-i-ebooki",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,23073)),"/Users/thonasjefferson/Desktop/Final Fizjoteka/src/app/[locale]/filmy-i-ebooki/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,39226)),"/Users/thonasjefferson/Desktop/Final Fizjoteka/src/app/[locale]/layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,32029)),"/Users/thonasjefferson/Desktop/Final Fizjoteka/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.bind(s,12523)),"/Users/thonasjefferson/Desktop/Final Fizjoteka/src/app/not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/thonasjefferson/Desktop/Final Fizjoteka/src/app/[locale]/filmy-i-ebooki/page.tsx"],u="/[locale]/filmy-i-ebooki/page",p={require:s,loadChunk:()=>Promise.resolve()},_=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/[locale]/filmy-i-ebooki/page",pathname:"/[locale]/filmy-i-ebooki",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:n}})},3860:(e,t,s)=>{Promise.resolve().then(s.bind(s,21139)),Promise.resolve().then(s.bind(s,88961))},21139:(e,t,s)=>{"use strict";s.d(t,{default:()=>k});var r=s(10326),a=s(17577),i=s(9745),o=s.n(i),l=s(98213),c=s.n(l),n=s(90434),d=s(46226),u=s(85561);function p({filteredTopics:e}){return r.jsx(r.Fragment,{children:e.map(e=>(0,r.jsxs)("div",{className:`${c().singleProduct}`,children:[r.jsx("span",{className:`${c().availableTop}`,children:"Produkty dostępny"}),r.jsx("div",{className:`${c().productPhoto}`,children:r.jsx(d.default,{src:e.imageFileUrl,alt:"product",width:300,height:300})}),(0,r.jsxs)("div",{className:`${c().textWraper} w-full`,children:[(0,r.jsxs)("div",{className:`${c().cardTitle}`,children:[r.jsx(n.default,{href:"",children:r.jsx("h4",{className:c().anchor,children:e.title})}),r.jsx("span",{className:`${c().underLink}`,children:e.subtitle})]}),r.jsx("p",{className:`${c().mainText}`,children:e.description}),r.jsx("div",{className:`${c().circle}`,children:r.jsx("p",{children:"Produkt dostępny"})}),r.jsx("div",{className:`${c().circle}`}),(0,r.jsxs)("div",{className:`${c().priceParent} flex items-center justify-end`,children:[(0,r.jsxs)("p",{className:`${c().amount} font-bold`,children:[e.price," zł"]}),r.jsx(u.default,{product:e})]})]})]},e._id))})}var _=s(13558),x=s.n(_);let h=e=>{let t={ą:"a",ć:"c",ę:"e",ł:"l",ń:"n",ó:"o",ś:"s",ź:"z",ż:"z",Ą:"A",Ć:"C",Ę:"E",Ł:"L",Ń:"N",Ó:"O",Ś:"S",Ź:"Z",Ż:"Z"};return e.replace(/[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/g,e=>t[e]||e)},m=({filteredCategories:e})=>r.jsx(r.Fragment,{children:e.map(e=>(0,r.jsxs)("div",{className:x().singleProduct,children:[r.jsx("span",{className:x().availableTop,children:"FIZJOTERAPEUTA POLECA"}),r.jsx("div",{className:x().productPhoto,children:r.jsx(d.default,{src:e.imageFileUrl,alt:"product",width:300,height:300})}),(0,r.jsxs)("div",{className:`${x().textWraper} w-full`,children:[(0,r.jsxs)("div",{className:x().cardTitle,children:[r.jsx(n.default,{className:x().anchor,href:"",children:r.jsx("h4",{children:e.title})}),(0,r.jsxs)("span",{className:x().underLink,children:[e.subtitle1," • ",e.subtitle2," • ",e.subtitle3]})]}),r.jsx("p",{className:x().mainText,children:e.description}),r.jsx("div",{className:x().circle,children:r.jsx("p",{children:"Produkt dostępny"})}),(0,r.jsxs)("div",{className:`${x().priceParent} flex items-center justify-end`,children:[(0,r.jsxs)("p",{className:`${x().amount} font-bold`,children:[e.price," zł"]}),r.jsx(n.default,{href:`/pl/filmy-i-ebooki/${h(e.category.replace(/\s+/g,"-"))}`,children:r.jsx("button",{children:"Zobacz szczeg\xf3ły"})})]})]})]},e._id))});var j=s(21363),f=s.n(j);let g=({uniqueCategories:e,selectedCategories:t,handleCategoryChange:s})=>(0,r.jsxs)(r.Fragment,{children:[r.jsx("div",{className:f().category,children:r.jsx("h6",{className:f().title,children:"Kategoria"})}),e.map(e=>r.jsx("div",{className:f().category,children:r.jsx("fieldset",{children:(0,r.jsxs)("label",{className:"Input_checkbox__ZAWb5",children:[r.jsx("input",{type:"checkbox",className:f().input,name:e,id:e,value:e,checked:t.includes(e),onChange:s}),r.jsx("span",{children:e})]})})},e))]}),y=({handleSearchClick:e,handleClearFilters:t})=>(0,r.jsxs)("div",{className:"flex flex-col mt-10",children:[r.jsx("div",{className:"flex",children:r.jsx("button",{className:f().button,onClick:e,children:"Wyszukaj"})}),r.jsx("div",{className:"flex justify-center mt-5",children:r.jsx("button",{className:f().noClass,onClick:t,children:"Wyczyść filtry"})})]}),b=({isPopupOpen:e,handlePopupClose:t,uniqueCategories:s,selectedCategories:a,handleCategoryChange:i,handleSearchClick:o,handleClearFilters:l})=>(0,r.jsxs)(r.Fragment,{children:[r.jsx("button",{className:f().button,onClick:t,children:"Sprecyzuj czego szukasz"}),e&&r.jsx("div",{className:f().overlay,onClick:t,children:(0,r.jsxs)("div",{className:f().popup,children:[(0,r.jsxs)("div",{className:f().topText,children:[r.jsx("h6",{children:"Sprecyzuj czego szukasz"}),r.jsx("button",{className:f().closeButton,onClick:t,children:"x"})]}),r.jsx(g,{uniqueCategories:s,selectedCategories:a,handleCategoryChange:i}),r.jsx(y,{handleSearchClick:o,handleClearFilters:l})]})})]});function P({categories:e,topics:t,setFilteredCategories:s,setFilteredTopics:i}){let[o,l]=(0,a.useState)([]),[c,n]=(0,a.useState)(!1),[d,u]=(0,a.useState)(!1),p=e=>{let{value:t,checked:s}=e.target;s?l([...o,t]):l(o.filter(e=>e!==t))},_=()=>{let r=o.length?e.filter(e=>o.includes(e.category)):e,a=o.length?t.filter(e=>e.categories.some(e=>o.includes(e))):t;s(r),i(a),u(!1)},x=()=>{_()},h=()=>{l([]),s(e),i(t)},m=Array.from(new Set([...e.map(e=>e.category),...t.flatMap(e=>e.categories)]));return r.jsx("div",{className:f().filters,children:c?r.jsx(b,{isPopupOpen:d,handlePopupClose:()=>{u(!1)},uniqueCategories:m,selectedCategories:o,handleCategoryChange:p,handleSearchClick:x,handleClearFilters:h}):(0,r.jsxs)(r.Fragment,{children:[r.jsx(g,{uniqueCategories:m,selectedCategories:o,handleCategoryChange:p}),r.jsx(y,{handleSearchClick:x,handleClearFilters:h})]})})}function k({categories:e,topics:t}){let[s,i]=(0,a.useState)(e),[l,c]=(0,a.useState)(t);return(0,r.jsxs)("div",{className:`${o().mainWrapper} ${o().localContainer}`,children:[r.jsx("div",{className:o().fitlersGroup,children:r.jsx(P,{categories:e,topics:t,setFilteredCategories:i,setFilteredTopics:c})}),(0,r.jsxs)("div",{children:[r.jsx(m,{filteredCategories:s}),r.jsx(p,{filteredTopics:l})]})]})}},85561:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var r=s(10326),a=s(25842),i=s(72517);let o=({product:e})=>{let t;let s=(0,a.v9)(e=>e.cart),o=(0,a.I0)(),l=e=>{let t={_id:e._id,title:e.title,price:parseFloat(e.price),imageFileUrl:e.imageFileUrl};o((0,i.Xq)(t))};return r.jsx(r.Fragment,{children:(t=e._id,s.some(e=>e._id===t))?r.jsx("button",{className:"cursor-not-allowed",disabled:!0,children:"Już dodano"}):r.jsx("button",{onClick:()=>l(e),children:"Dodaj do koszyka"})})}},88961:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var r=s(10326),a=s(90434),i=s(72269),o=s.n(i),l=s(35047);let c=function(){let e=(0,l.usePathname)(),t=e?.startsWith("/")?e.slice(1).replace(/-/g," ").replace(/\b\w/g,e=>e.toUpperCase()):e?.replace(/-/g," ").replace(/\b\w/g,e=>e.toUpperCase());return r.jsx("section",{className:"flex flex-col items-center",children:(0,r.jsxs)("div",{className:`${o().locations} Container`,children:[r.jsx("p",{className:`${o().color}`,children:r.jsx(a.default,{className:`body-small ${o().color}`,href:"/",children:"Start \xa0"})}),r.jsx("span",{className:o().breadcrumb,children:"/"}),(0,r.jsxs)("p",{className:" ",children:["\xa0",t]})]})})}},13558:e=>{e.exports={adminBar:"Category_adminBar__xpUaE",ctaGroup:"Category_ctaGroup__Poc1k",singleProduct:"Category_singleProduct__wiXJH",availableTop:"Category_availableTop__3n3Tp",productPhoto:"Category_productPhoto__5gBne",textWraper:"Category_textWraper__Q_Wu_",mainText:"Category_mainText__64fq0",circle:"Category_circle__NmQme",amount:"Category_amount__pWTTk",cardTitle:"Category_cardTitle__qRGe_",anchor:"Category_anchor__n0Ho6",underLink:"Category_underLink__hvJv7",actionGroup:"Category_actionGroup__2JwX_",date:"Category_date__Kk1QP",checkbox:"Category_checkbox__gXCIb",mainSection:"Category_mainSection__8Hj81"}},9745:e=>{e.exports={mainWrapper:"Mainpage_mainWrapper__tXheU",fitlersGroup:"Mainpage_fitlersGroup__RFRlw",localContainer:"Mainpage_localContainer__RI7Mo"}},98213:e=>{e.exports={"local\xa7Container":"Products_local_Container__YPMWI",localContainer:"Products_localContainer__dIXK7",adminBar:"Products_adminBar__1_p6F",ctaGroup:"Products_ctaGroup__YBIgl",singleProduct:"Products_singleProduct__nF7d1",availableTop:"Products_availableTop__Zk2KY",productPhoto:"Products_productPhoto__fIVEe",textWraper:"Products_textWraper__vP4fX",mainText:"Products_mainText__HIh0C",circle:"Products_circle__Od3SQ",amount:"Products_amount__jBfwb",cardTitle:"Products_cardTitle__0AZ_1",anchor:"Products_anchor__RA4Bp",underLink:"Products_underLink__weItf",actionGroup:"Products_actionGroup__1RXvL",date:"Products_date__o_r17",checkbox:"Products_checkbox__vwRqz",mainSection:"Products_mainSection__jVuRo"}},21363:e=>{e.exports={filters:"Filters_filters__6_T9j",title:"Filters_title__7o98X",category:"Filters_category__1K_4X",input:"Filters_input__O5TgI",button:"Filters_button__Ga7KM",noClass:"Filters_noClass__FFRfL",overlay:"Filters_overlay__aaWYC",popup:"Filters_popup__VueYV",topText:"Filters_topText__hHxSE",closeButton:"Filters_closeButton__TWnx2"}},72269:e=>{e.exports={locations:"breadcrumbs_locations__BbOGq"}},33486:(e,t,s)=>{"use strict";s.d(t,{n:()=>r});let r=async()=>{try{let e=await fetch("http://localhost:3000/api/category",{cache:"no-store"});if(!e.ok)throw Error("Failed to fetch topics");return e.json()}catch(e){}}},85293:(e,t,s)=>{"use strict";s.d(t,{B:()=>r});let r=async()=>{try{let e=await fetch("http://localhost:3000/api/topics",{cache:"no-store"});if(!e.ok)throw Error("Failed to fetch topics");return e.json()}catch(e){}}},23073:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>p});var r=s(19510),a=s(69170),i=s(85293),o=s(33486),l=s(68570);let c=(0,l.createProxy)(String.raw`/Users/thonasjefferson/Desktop/Final Fizjoteka/src/app/[locale]/filmy-i-ebooki/components/Mainpage.tsx`),{__esModule:n,$$typeof:d}=c;c.default;let u=(0,l.createProxy)(String.raw`/Users/thonasjefferson/Desktop/Final Fizjoteka/src/app/[locale]/filmy-i-ebooki/components/Mainpage.tsx#default`);async function p(){let{topics:e}=await (0,i.B)(),{categories:t}=await (0,o.n)();return(0,r.jsxs)(r.Fragment,{children:[r.jsx(a.ZP,{}),r.jsx(u,{topics:e,categories:t})]})}},69170:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>l});var r=s(68570);let a=(0,r.createProxy)(String.raw`/Users/thonasjefferson/Desktop/Final Fizjoteka/src/components/breadcrumbs/breadcrumbs.tsx`),{__esModule:i,$$typeof:o}=a;a.default;let l=(0,r.createProxy)(String.raw`/Users/thonasjefferson/Desktop/Final Fizjoteka/src/components/breadcrumbs/breadcrumbs.tsx#default`)}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[8948,6938,4496,4552,3628,610],()=>s(17905));module.exports=r})();