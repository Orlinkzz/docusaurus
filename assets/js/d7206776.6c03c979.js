"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[96939],{24239:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(24246),o=(n(27378),n(40624)),c=n(97298),s=n(41428),i=n(7812),a=n(64149),l=n(36712),u=n(52615);const d={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function h({href:e,children:t}){return(0,r.jsx)(s.Z,{href:e,className:(0,o.Z)("card padding--lg",d.cardContainer),children:t})}function m({href:e,icon:t,title:n,description:c}){return(0,r.jsxs)(h,{href:e,children:[(0,r.jsxs)(u.Z,{as:"h2",className:(0,o.Z)("text--truncate",d.cardTitle),title:n,children:[t," ",n]}),c&&(0,r.jsx)("p",{className:(0,o.Z)("text--truncate",d.cardDescription),title:c,children:c})]})}function p({item:e}){const t=(0,c.LM)(e),n=function(){const{selectMessage:e}=(0,i.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return t?(0,r.jsx)(m,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!==(o=e.description)&&void 0!==o?o:n(e.items.length)}):null;var o}function f({item:e}){const t=(0,a.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var n;const o=(0,c.xz)(null!==(n=e.docId)&&void 0!==n?n:void 0);var s;return(0,r.jsx)(m,{href:e.href,icon:t,title:e.label,description:null!==(s=e.description)&&void 0!==s?s:null==o?void 0:o.description})}function g({item:e}){switch(e.type){case"link":return(0,r.jsx)(f,{item:e});case"category":return(0,r.jsx)(p,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v({className:e}){const t=(0,c.jA)();return(0,r.jsx)(w,{items:t.items,className:e})}function w(e){const{items:t,className:n}=e;if(!t)return(0,r.jsx)(v,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){x(e,t,n[t])}))}return e}({},e));const s=(0,c.MN)(t);return(0,r.jsx)("section",{className:(0,o.Z)("row",n),children:s.map(((e,t)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(g,{item:e})},t)))})}},7812:(e,t,n)=>{n.d(t,{c:()=>l});var r=n(27378),o=n(4423);const c=["zero","one","two","few","many","other"];function s(e){return c.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,o.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function l(){const e=a();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),c=n.pluralForms.indexOf(o);return r[Math.min(c,r.length-1)]}(n,t,e)}}},68583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var r=n(24246),o=n(71670),c=n(24239);const s={},i="Advanced Tutorials",a={id:"advanced/index",title:"Advanced Tutorials",description:"This section is not going to be very structured, but we will cover the following topics:",source:"@site/docs/advanced/index.mdx",sourceDirName:"advanced",slug:"/advanced/",permalink:"/docs/advanced/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/advanced/index.mdx",tags:[],version:"current",lastUpdatedBy:"Rohan Thakur",lastUpdatedAt:1722617448e3,frontMatter:{},sidebar:"docs",previous:{title:"What's next?",permalink:"/docs/guides/whats-next"},next:{title:"Architecture",permalink:"/docs/advanced/architecture"}},l={},u=[];function d(e){const t={a:"a",h1:"h1",header:"header",p:"p",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"advanced-tutorials",children:"Advanced Tutorials"})}),"\n",(0,r.jsx)(t.p,{children:"This section is not going to be very structured, but we will cover the following topics:"}),"\n","\n",(0,r.jsx)(c.Z,{}),"\n",(0,r.jsxs)(t.p,{children:["We will assume that you have finished the guides, and know the basics like how to configure plugins, how to write React components, etc. These sections will have plugin authors and code contributors in mind, so we may occasionally refer to ",(0,r.jsx)(t.a,{href:"/docs/api/plugin-methods/",children:"plugin APIs"})," or other architecture details. Don't panic if you don't understand everything\ud83d\ude09"]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},71670:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var r=n(27378);const o={},c=r.createContext(o);function s(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);