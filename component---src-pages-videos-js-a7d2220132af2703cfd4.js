(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/e88":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"5AIy":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return f}));a("KKXr");var n=a("q1tI"),l=a.n(n),r=a("7oih"),c=(a("pIFo"),a("Tze0"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("hHhE"),a("f3/d"),a("91GP"),a("MgzW")),i=a.n(c),o=function(){return(o=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},s=function(e){for(var t=e.url,a=e.allowFullScreen,n=e.position,r=e.display,c=e.height,s=e.width,u=e.overflow,m=e.styles,f=e.onLoad,d=e.onMouseOver,v=e.onMouseOut,p=e.scrolling,E=e.id,g=e.frameBorder,h=e.ariaHidden,b=e.sandbox,y=e.allow,N=e.className,w=e.title,k=e.ariaLabel,O=e.ariaLabelledby,I=e.name,x=e.target,C=e.loading,q=e.importance,F=e.referrerpolicy,S=e.allowpaymentrequest,j=e.src,z=i()({src:j||t,target:x||null,style:{position:n||null,display:r||"block",overflow:u||null},scrolling:p||null,allowpaymentrequest:S||null,importance:q||null,sandbox:b||null,loading:C||null,styles:m||null,name:I||null,className:N||null,referrerpolicy:F||null,title:w||null,allow:y||null,id:E||null,"aria-labelledby":O||null,"aria-hidden":h||null,"aria-label":k||null,width:s||null,height:c||null,onLoad:f||null,onMouseOver:d||null,onMouseOut:v||null}),P=Object.create(null),A=0,M=Object.keys(z);A<M.length;A++){var L=M[A];null!=z[L]&&(P[L]=z[L])}for(var V=0,_=Object.keys(P.style);V<_.length;V++){var T=_[V];null==P.style[T]&&delete P.style[T]}if(a)if("allow"in P){var G=P.allow.replace("fullscreen","");P.allow=("fullscreen "+G.trim()).trim()}else P.allow="fullscreen";return g>=0&&(P.style.hasOwnProperty("border")||(P.style.border=g)),l.a.createElement("iframe",o({},P))},u=function(e){var t=e.video,a=t.title,n=t.description,r=t.date,c=t.creator,i=t.video;return l.a.createElement("div",{className:"blog"},l.a.createElement("article",null,l.a.createElement(s,{url:i.replace("watch?v=","embed/"),className:"video",allowFullScreen:!0,loading:"true"}),l.a.createElement("div",{className:"blog-card"},l.a.createElement("a",{href:i},l.a.createElement("h4",null,a)),l.a.createElement("p",null,n),l.a.createElement("div",{className:"blog-footer"},l.a.createElement("p",null,c),l.a.createElement("p",null,r)))))},m=a("ap0H"),f="195466806";t.default=function(e){var t=e.data.allStrapiVideos.nodes;return l.a.createElement(r.a,null,l.a.createElement("section",{className:"section blog-page"},l.a.createElement(m.a,{title:"videos"}),l.a.createElement("div",{className:"section-center video-center"},t.map((function(e){var t=e.id.split("_")[1];if("2"!==t&&"3"!==t&&"5"!==t)return l.a.createElement(u,{key:t,video:e})})))))}},"7oih":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("ma3e"),c=a("Wbzz"),i=[{id:1,text:"home",url:"/"},{id:2,text:"about",url:"/about/"},{id:3,text:"org",url:"/orgs/"},{id:4,text:"article",url:"/articles/"},{id:5,text:"video",url:"/videos/"},{id:6,text:"contact",url:"/contact/"}].map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement(c.a,{to:e.url},e.text))})),o=function(e){var t=e.styleClass;return l.a.createElement("ul",{className:"page-links "+(t||"")},i)},s=function(e){var t=e.toggle;return l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"nav-center"},l.a.createElement("div",{className:"nav-header"},l.a.createElement("button",{type:"button",className:"toggle-btn",onClick:t},l.a.createElement(r.a,null))),l.a.createElement(o,{styleClass:"nav-links"})))},u=[{id:1,icon:l.a.createElement(r.d,{className:"social-icon"}),url:"https://www.facebook.com/BlackLivesMatter/"},{id:2,icon:l.a.createElement(r.m,{className:"social-icon"}),url:"https://twitter.com/blklivesmatter?lang=en"},{id:3,icon:l.a.createElement(r.g,{className:"social-icon"}),url:"https://www.instagram.com/blklivesmatter/?hl=en"},{id:4,icon:l.a.createElement(r.j,{className:"social-icon"}),url:"https://blacklivesmatter.com/"},{id:5,icon:l.a.createElement(r.n,{className:"social-icon"}),url:"https://www.youtube.com/results?search_query=%23blacklivesmatter"},{id:6,icon:l.a.createElement(r.e,{className:"social-icon"}),url:"#"}].map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:e.url,className:"social-link"},e.icon))})),m=function(e){var t=e.styleClass;return l.a.createElement("ul",{className:"social-links "+(t||"")},u)},f=function(e){var t=e.isOpen,a=e.toggle;return l.a.createElement("aside",{className:"sidebar "+(t?"show-sidebar":"")},l.a.createElement("button",{className:"close-btn",onClick:a},l.a.createElement(r.l,null)),l.a.createElement("div",{className:"side-container"},l.a.createElement(o,{styleClass:t?"sidebar-links":""}),l.a.createElement(m,{styleClass:t?"sidebar-icons":""})))},d=function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("div",null,l.a.createElement(m,{styleClass:"footer-links"}),l.a.createElement("h4",null,"copyright©",(new Date).getFullYear())))};t.a=function(e){var t=e.children,a=l.a.useState(!0),n=a[0],r=a[1],c=function(){r(!n)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{toggle:c}),l.a.createElement(f,{isOpen:n,toggle:c}),t,l.a.createElement(d,null))}},Lnxd:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a("bWfx"),a("ioFf"),a("V+eJ"),a("91GP");var n=a("q1tI"),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},r=n.createContext&&n.createContext(l),c=function(){return(c=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},i=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&(a[n[l]]=e[n[l]])}return a};function o(e){return function(t){return n.createElement(s,c({attr:c({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return n.createElement(t.tag,c({key:a},t.attr),e(t.child))}))}(e.child))}}function s(e){var t=function(t){var a,l=e.size||t.size||"1em";t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className);var r=e.attr,o=e.title,s=i(e,["attr","title"]);return n.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,s,{className:a,style:c({color:e.color||t.color},t.style,e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&n.createElement("title",null,o),e.children)};return void 0!==r?n.createElement(r.Consumer,null,(function(e){return t(e)})):t(l)}},Tze0:function(e,t,a){"use strict";a("qncB")("trim",(function(e){return function(){return e(this,3)}}))},Wbzz:function(e,t,a){"use strict";a("xfY5");var n=a("q1tI"),l=a.n(n),r=a("+ZDr"),c=a.n(r);a.d(t,"a",(function(){return c.a}));a("lw3w"),a("emEt").default.enqueue,l.a.createContext({})},ap0H:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n);t.a=function(e){var t=e.title;return l.a.createElement("div",{className:"section-title"},l.a.createElement("h2",null," ",t||"Hey there!"),l.a.createElement("div",{className:"underline"}))}},lw3w:function(e,t,a){var n;e.exports=(n=a("rzlk"))&&n.default||n},qncB:function(e,t,a){var n=a("XKFU"),l=a("vhPU"),r=a("eeVq"),c=a("/e88"),i="["+c+"]",o=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),u=function(e,t,a){var l={},i=r((function(){return!!c[e]()||"​"!="​"[e]()})),o=l[e]=i?t(m):c[e];a&&(l[a]=o),n(n.P+n.F*i,"String",l)},m=u.trim=function(e,t){return e=String(l(e)),1&t&&(e=e.replace(o,"")),2&t&&(e=e.replace(s,"")),e};e.exports=u},rzlk:function(e,t,a){"use strict";a.r(t);a("91GP");var n=a("q1tI"),l=a.n(n),r=a("IOVJ");t.default=function(e){var t=e.location,a=e.pageResources;return a?l.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json)):null}},xfY5:function(e,t,a){"use strict";var n=a("dyZX"),l=a("aagx"),r=a("LZWt"),c=a("Xbzi"),i=a("apmT"),o=a("eeVq"),s=a("kJMx").f,u=a("EemH").f,m=a("hswa").f,f=a("qncB").trim,d=n.Number,v=d,p=d.prototype,E="Number"==r(a("Kuth")(p)),g="trim"in String.prototype,h=function(e){var t=i(e,!1);if("string"==typeof t&&t.length>2){var a,n,l,r=(t=g?t.trim():f(t,3)).charCodeAt(0);if(43===r||45===r){if(88===(a=t.charCodeAt(2))||120===a)return NaN}else if(48===r){switch(t.charCodeAt(1)){case 66:case 98:n=2,l=49;break;case 79:case 111:n=8,l=55;break;default:return+t}for(var c,o=t.slice(2),s=0,u=o.length;s<u;s++)if((c=o.charCodeAt(s))<48||c>l)return NaN;return parseInt(o,n)}}return+t};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof d&&(E?o((function(){p.valueOf.call(a)})):"Number"!=r(a))?c(new v(h(t)),a,d):h(t)};for(var b,y=a("nh4g")?s(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;y.length>N;N++)l(v,b=y[N])&&!l(d,b)&&m(d,b,u(v,b));d.prototype=p,p.constructor=d,a("KroJ")(n,"Number",d)}}}]);
//# sourceMappingURL=component---src-pages-videos-js-a7d2220132af2703cfd4.js.map