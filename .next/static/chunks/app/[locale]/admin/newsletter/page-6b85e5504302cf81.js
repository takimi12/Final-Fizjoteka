(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1664],{10322:function(e,t,a){Promise.resolve().then(a.bind(a,73466))},73466:function(e,t,a){"use strict";a.d(t,{default:function(){return c}});var n=a(57437),l=a(2265),i=a(15484),s=a.n(i);function c(e){let{contacts:t}=e,[a,i]=(0,l.useState)(1),c=10*a,r=t.slice(c-10,c),o=e=>{i(e)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"".concat(s().container," Container "),children:(0,n.jsx)("h1",{className:s().title,children:"Lista kontakt\xf3w zapisanych do newslettera"})}),(0,n.jsxs)("div",{className:"".concat(s().listContainer," Container"),children:[(0,n.jsxs)("table",{className:s().table,children:[(0,n.jsx)("thead",{className:s().tableHead,children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{className:s().tableHeader,children:"Imię"}),(0,n.jsx)("th",{className:s().tableHeader,children:"Email"}),(0,n.jsx)("th",{className:s().tableHeader,children:"Data utworzenia"})]})}),(0,n.jsx)("tbody",{className:s().tableBody,children:r.map(e=>(0,n.jsxs)("tr",{className:s().tableRow,children:[(0,n.jsx)("td",{className:s().tableCell,children:e.name}),(0,n.jsx)("td",{className:s().tableCell,children:e.email}),(0,n.jsx)("td",{className:s().tableCell,children:new Date(e.createdAt).toLocaleString()})]},e._id))})]}),(0,n.jsxs)("div",{className:s().paginationContainer,children:[(0,n.jsx)("button",{onClick:()=>{i(1)},disabled:1===a,className:"".concat(s().paginationButton," ").concat(1===a?s().disabledButton:""),children:"Pierwsza"}),(0,n.jsx)("button",{onClick:()=>{a>1&&i(a-1)},disabled:1===a,className:"".concat(s().paginationButton," ").concat(1===a?s().disabledButton:""),children:"Poprzednia"}),(0,n.jsx)("div",{className:s().paginationNumbers,children:Array.from({length:Math.ceil(t.length/10)},(e,t)=>(0,n.jsx)("button",{onClick:()=>o(t+1),className:"".concat(s().paginationNumber," ").concat(a===t+1?s().activePage:""),children:t+1},t))}),(0,n.jsx)("button",{onClick:()=>{a<Math.ceil(t.length/10)&&i(a+1)},disabled:a===Math.ceil(t.length/10),className:"".concat(s().paginationButton," ").concat(a===Math.ceil(t.length/10)?s().disabledButton:""),children:"Następna"}),(0,n.jsx)("button",{onClick:()=>{i(Math.ceil(t.length/10))},disabled:a===Math.ceil(t.length/10),className:"".concat(s().paginationButton," ").concat(a===Math.ceil(t.length/10)?s().disabledButton:""),children:"Ostatnia"})]})]})]})}},15484:function(e){e.exports={adminBar:"Newsletter_adminBar__ycTmi",list:"Newsletter_list__IOBEp",container:"Newsletter_container__0mQGU",title:"Newsletter_title__TKsp6",listContainer:"Newsletter_listContainer__sQh83",table:"Newsletter_table__zAstW",tableHead:"Newsletter_tableHead__NYZod",tableHeader:"Newsletter_tableHeader__U4EjP",tableBody:"Newsletter_tableBody__qbCsR",tableRow:"Newsletter_tableRow__5Yp73",tableCell:"Newsletter_tableCell__YAjmn",paginationContainer:"Newsletter_paginationContainer__WQna5",paginationButton:"Newsletter_paginationButton__Q3ZxJ",disabledButton:"Newsletter_disabledButton___Pvrf",paginationNumbers:"Newsletter_paginationNumbers__QfN1j",paginationNumber:"Newsletter_paginationNumber__doPKD",activePage:"Newsletter_activePage__kHNBJ"}}},function(e){e.O(0,[8503,2971,7023,1744],function(){return e(e.s=10322)}),_N_E=e.O()}]);