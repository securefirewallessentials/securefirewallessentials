(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{101:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,b=p["".concat(a,".").concat(m)]||p[m]||f[m]||c;return r?o.a.createElement(b,i(i({ref:t},u),{},{components:r})):o.a.createElement(b,i({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var u=2;u<c;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},95:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),c=(r(0),r(101)),a={slug:"welcome",title:"Welcome",author:"Mike Mercier",author_title:"NetSec TME Manager @ Cisco",author_url:"https://github.com/mimerc",tags:["Cisco Security","Secure Firewall"]},i={permalink:"/securefirewallessentials/blog/welcome",editUrl:"https://securefirewallessentials.github.io/securefirewallessentials/blog/2021-05-22-welcome.md",source:"@site/blog/2021-05-22-welcome.md",description:"Welcome to the new Cisco Secure Firewall documentation website.",date:"2021-05-22T00:00:00.000Z",tags:[{label:"Cisco Security",permalink:"/securefirewallessentials/blog/tags/cisco-security"},{label:"Secure Firewall",permalink:"/securefirewallessentials/blog/tags/secure-firewall"}],title:"Welcome",readingTime:.19,truncated:!1},l=[],u={toc:l};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Welcome to the new Cisco Secure Firewall documentation website."),Object(c.b)("p",null,"The site provides best practice configuration guides and technical collateral.  We'll continually update and add to it, so return often or whenever you need Cisco Secure Firewall solutions guidance."))}s.isMDXComponent=!0}}]);