(()=>{var e={};e.id=5520,e.ids=[5520],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},94265:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>h,tree:()=>d}),r(5637),r(32029),r(12523);var s=r(23191),a=r(88716),n=r(37922),o=r.n(n),i=r(95231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let d=["",{children:["api",{children:["auth",{children:["signin",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5637)),"/Users/thonasjefferson/Desktop/Final Fizjoteka/src/app/api/auth/signin/page.tsx"]}]},{}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,32029)),"/Users/thonasjefferson/Desktop/Final Fizjoteka/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,12523)),"/Users/thonasjefferson/Desktop/Final Fizjoteka/src/app/not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/thonasjefferson/Desktop/Final Fizjoteka/src/app/api/auth/signin/page.tsx"],u="/api/auth/signin/page",p={require:r,loadChunk:()=>Promise.resolve()},h=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/api/auth/signin/page",pathname:"/api/auth/signin",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},99589:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,12994,23)),Promise.resolve().then(r.t.bind(r,96114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,79671,23)),Promise.resolve().then(r.t.bind(r,41868,23)),Promise.resolve().then(r.t.bind(r,84759,23))},83799:(e,t,r)=>{Promise.resolve().then(r.bind(r,6279))},48597:(e,t,r)=>{Promise.resolve().then(r.bind(r,83846))},35303:()=>{},6279:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var s=r(10326),a=r(90434),n=r(17577),o=r(40381),i=r(77109),l=r(35047);let d=()=>{let[e,t]=(0,n.useState)(""),[r,d]=(0,n.useState)("");(0,l.useRouter)(),(0,l.useSearchParams)().get("callbackUrl");let c=async t=>{t.preventDefault();let s=await (0,i.signIn)("credentials",{email:e,password:r,redirect:!1});s?.error&&(console.log(s?.error),o.ZP.error("Login failed. Try again.")),s?.ok&&o.ZP.success("Login successful")};return(0,s.jsxs)("div",{style:{maxWidth:"480px"},className:"mt-10 mb-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg",children:[(0,s.jsxs)("form",{onSubmit:c,children:[s.jsx("h2",{className:"mb-5 text-2xl font-semibold",children:"Login"}),(0,s.jsxs)("div",{className:"mb-4",children:[s.jsx("label",{className:"block mb-1",children:" Email "}),s.jsx("input",{className:"appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full",type:"text",placeholder:"Type your email",value:e,onChange:e=>t(e.target.value),required:!0})]}),(0,s.jsxs)("div",{className:"mb-4",children:[s.jsx("label",{className:"block mb-1",children:" Password "}),s.jsx("input",{className:"appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full",type:"password",placeholder:"Type your password",minLength:6,value:r,onChange:e=>d(e.target.value),required:!0})]}),s.jsx("button",{type:"submit",className:"my-2 px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700",children:"Login"}),s.jsx("hr",{className:"mt-4"}),(0,s.jsxs)("p",{className:"text-center mt-5",children:["Don't have an account?"," ",s.jsx(a.default,{href:"/register",className:"text-blue-500",children:"Register"})]})]}),s.jsx("button",{className:"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",onClick:()=>{(0,i.signIn)("google")},children:"Login with Google"})]})};function c(){return s.jsx(n.Suspense,{fallback:s.jsx("div",{children:"Loading..."}),children:s.jsx(d,{})})}},83846:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(10326);function a(){return s.jsx("html",{children:s.jsx("body",{className:"text-center",children:s.jsx("div",{children:s.jsx("h1",{className:"mt-10 font-semibold",children:"404 - Page Not Found"})})})})}r(17577)},5637:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>n,default:()=>i});var s=r(68570);let a=(0,s.createProxy)(String.raw`/Users/thonasjefferson/Desktop/Final Fizjoteka/src/app/api/auth/signin/page.tsx`),{__esModule:n,$$typeof:o}=a;a.default;let i=(0,s.createProxy)(String.raw`/Users/thonasjefferson/Desktop/Final Fizjoteka/src/app/api/auth/signin/page.tsx#default`)},32029:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(19510);function a({children:e}){return s.jsx("html",{children:s.jsx("body",{children:e})})}r(71159)},12523:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>n,default:()=>i});var s=r(68570);let a=(0,s.createProxy)(String.raw`/Users/thonasjefferson/Desktop/Final Fizjoteka/src/app/not-found.tsx`),{__esModule:n,$$typeof:o}=a;a.default;let i=(0,s.createProxy)(String.raw`/Users/thonasjefferson/Desktop/Final Fizjoteka/src/app/not-found.tsx#default`)},73881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(66621);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[8948,6938,4496,4552],()=>r(94265));module.exports=s})();