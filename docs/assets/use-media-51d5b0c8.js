import{r as p,O as _}from"./index-2d26bd16.js";var b={},O={},h={},d={};Object.defineProperty(d,"__esModule",{value:!0});function g(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()}d.default=g;var f={};Object.defineProperty(f,"__esModule",{value:!0});var L=d,T=" and ";function P(e){return typeof e=="string"?e:Object.entries(e).map(function(t){var n=t[0],u=t[1],r=L.default(n),a=u;return typeof a=="boolean"?a?r:"not "+r:(typeof a=="number"&&/[height|width]$/.test(r)&&(a=a+"px"),"("+r+": "+a+")")}).join(T)}f.default=P;var l={};Object.defineProperty(l,"__esModule",{value:!0});function S(){}l.default=S;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.noop=e.queryObjectToString=e.camelToHyphen=void 0;var t=d;Object.defineProperty(e,"camelToHyphen",{enumerable:!0,get:function(){return t.default}});var n=f;Object.defineProperty(e,"queryObjectToString",{enumerable:!0,get:function(){return n.default}});var u=l;Object.defineProperty(e,"noop",{enumerable:!0,get:function(){return u.default}})})(h);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.useMediaLayout=e.useMedia=e.mockMediaQueryList=void 0;var t=p,n=h;e.mockMediaQueryList={media:"",matches:!1,onchange:n.noop,addListener:n.noop,removeListener:n.noop,addEventListener:n.noop,removeEventListener:n.noop,dispatchEvent:function(r){return!0}};var u=function(r){return function(a,c){c===void 0&&(c=!1);var s=t.useState(c),j=s[0],v=s[1],m=n.queryObjectToString(a);return r(function(){var y=!0,o=typeof window>"u"?e.mockMediaQueryList:window.matchMedia(m),M=function(){y&&v(!!o.matches)};return o.addListener(M),v(o.matches),function(){y=!1,o.removeListener(M)}},[m]),j}};e.useMedia=u(t.useEffect),e.useMediaLayout=u(t.useLayoutEffect),e.default=e.useMedia})(O);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.useMediaLayout=e.useMedia=e.default=void 0;var t=O;Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"useMedia",{enumerable:!0,get:function(){return t.useMedia}}),Object.defineProperty(e,"useMediaLayout",{enumerable:!0,get:function(){return t.useMediaLayout}})})(b);const i=_(b),w=()=>{const e=i({maxWidth:768}),t=i({maxWidth:1024}),n=i({maxWidth:1170}),u=i({maxWidth:1440}),r=i({maxWidth:1655});return{isSmall:e,isMedium:t,isSuperMedium:n,isLarge:u,isSuperLarge:r}};export{w as u};
