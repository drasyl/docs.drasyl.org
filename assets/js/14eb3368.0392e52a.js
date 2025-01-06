"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[6969],{1243:(e,t,n)=>{n.d(t,{A:()=>E});var a=n(8168),r=n(6540),i=n(53),l=n(7559),s=n(1754),c=n(9169),o=n(5489),m=n(1312),d=n(6025);function u(e){return r.createElement("svg",(0,a.A)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const h="breadcrumbHomeIcon_YNFT";function b(){const e=(0,d.A)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(o.A,{"aria-label":(0,m.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},r.createElement(u,{className:h})))}const v="breadcrumbsContainer_Z_bl";function g(e){let{children:t,href:n,isLast:a}=e;const i="breadcrumbs__link";return a?r.createElement("span",{className:i,itemProp:"name"},t):n?r.createElement(o.A,{className:i,href:n,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:i},t)}function p(e){let{children:t,active:n,index:l,addMicrodata:s}=e;return r.createElement("li",(0,a.A)({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,i.A)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,r.createElement("meta",{itemProp:"position",content:String(l+1)}))}function E(){const e=(0,s.OF)(),t=(0,c.Dt)();return e?r.createElement("nav",{className:(0,i.A)(l.G.docs.docBreadcrumbs,v),"aria-label":(0,m.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(b,null),e.map(((t,n)=>{const a=n===e.length-1;return r.createElement(p,{key:n,active:a,index:n,addMicrodata:!!t.href},r.createElement(g,{href:t.href,isLast:a},t.label))})))):null}},4136:(e,t,n)=>{n.r(t),n.d(t,{default:()=>V});var a=n(6540),r=n(1003),i=n(1754),l=n(6025),s=n(53),c=n(5489),o=n(6654),m=n(1312);const d="cardContainer_fWXF",u="cardTitle_rnsV",h="cardDescription_PWke";function b(e){let{href:t,children:n}=e;return a.createElement(c.A,{href:t,className:(0,s.A)("card padding--lg",d)},n)}function v(e){let{href:t,icon:n,title:r,description:i}=e;return a.createElement(b,{href:t},a.createElement("h2",{className:(0,s.A)("text--truncate",u),title:r},n," ",r),i&&a.createElement("p",{className:(0,s.A)("text--truncate",h),title:i},i))}function g(e){let{item:t}=e;const n=(0,i._o)(t);return n?a.createElement(v,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,m.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){var t;let{item:n}=e;const r=(0,o.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,i.cC)(null!=(t=n.docId)?t:void 0);return a.createElement(v,{href:n.href,icon:r,title:n.label,description:null==l?void 0:l.description})}function E(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(p,{item:t});case"category":return a.createElement(g,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function f(e){let{className:t}=e;const n=(0,i.$S)();return a.createElement(A,{items:n.items,className:t})}function A(e){const{items:t,className:n}=e;if(!t)return a.createElement(f,e);const r=(0,i.d1)(t);return a.createElement("section",{className:(0,s.A)("row",n)},r.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(E,{item:e})))))}var N=n(6929),_=n(1878),T=n(4267),k=n(1243),L=n(1107);const y="generatedIndexPage_vN6x",x="list_eTzJ",w="title_kItE";function I(e){let{categoryGeneratedIndex:t}=e;return a.createElement(r.be,{title:t.title,description:t.description,keywords:t.keywords,image:(0,l.A)(t.image)})}function S(e){let{categoryGeneratedIndex:t}=e;const n=(0,i.$S)();return a.createElement("div",{className:y},a.createElement(_.A,null),a.createElement(k.A,null),a.createElement(T.A,null),a.createElement("header",null,a.createElement(L.A,{as:"h1",className:w},t.title),t.description&&a.createElement("p",null,t.description)),a.createElement("article",{className:"margin-top--lg"},a.createElement(A,{items:n.items,className:x})),a.createElement("footer",{className:"margin-top--lg"},a.createElement(N.A,{previous:t.navigation.previous,next:t.navigation.next})))}function V(e){return a.createElement(a.Fragment,null,a.createElement(I,e),a.createElement(S,e))}},6929:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(8168),r=n(6540),i=n(1312),l=n(53),s=n(5489);function c(e){const{permalink:t,title:n,subLabel:a,isNext:i}=e;return r.createElement(s.A,{className:(0,l.A)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},a&&r.createElement("div",{className:"pagination-nav__sublabel"},a),r.createElement("div",{className:"pagination-nav__label"},n))}function o(e){const{previous:t,next:n}=e;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&r.createElement(c,(0,a.A)({},t,{subLabel:r.createElement(i.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&r.createElement(c,(0,a.A)({},n,{subLabel:r.createElement(i.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},4267:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(6540),r=n(53),i=n(1312),l=n(7559),s=n(2252);function c(e){let{className:t}=e;const n=(0,s.r)();return n.badge?a.createElement("span",{className:(0,r.A)(t,l.G.docs.docVersionBadge,"badge badge--secondary")},a.createElement(i.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}},1878:(e,t,n)=>{n.d(t,{A:()=>g});var a=n(6540),r=n(53),i=n(4586),l=n(5489),s=n(1312),c=n(4070),o=n(7559),m=n(5597),d=n(2252);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(s.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(s.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function h(e){const t=u[e.versionMetadata.banner];return a.createElement(t,e)}function b(e){let{versionLabel:t,to:n,onClick:r}=e;return a.createElement(s.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(l.A,{to:n,onClick:r},a.createElement(s.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:l}}=(0,i.A)(),{pluginId:s}=(0,c.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,m.g1)(s),{latestDocSuggestion:u,latestVersionSuggestion:v}=(0,c.HW)(s),g=null!=u?u:(p=v).docs.find((e=>e.id===p.mainDocId));var p;return a.createElement("div",{className:(0,r.A)(t,o.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(h,{siteTitle:l,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(b,{versionLabel:v.label,to:g.path,onClick:()=>d(v.name)})))}function g(e){let{className:t}=e;const n=(0,d.r)();return n.banner?a.createElement(v,{className:t,versionMetadata:n}):null}},1107:(e,t,n)=>{n.d(t,{A:()=>d});var a=n(8168),r=n(6540),i=n(53),l=n(1312),s=n(6342),c=n(5489);const o="anchorWithStickyNavbar_LWe7",m="anchorWithHideOnScrollNavbar_WYt5";function d(e){let{as:t,id:n,...d}=e;const{navbar:{hideOnScroll:u}}=(0,s.p)();if("h1"===t||!n)return r.createElement(t,(0,a.A)({},d,{id:void 0}));const h=(0,l.T)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof d.children?d.children:n});return r.createElement(t,(0,a.A)({},d,{className:(0,i.A)("anchor",u?m:o,d.className),id:n}),d.children,r.createElement(c.A,{className:"hash-link",to:"#"+n,"aria-label":h,title:h},"\u200b"))}}}]);