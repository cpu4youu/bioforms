import{s as e,L as g,R as r,_ as c,j as o}from"./index-e5a5124d.js";import{G as b}from"./iconBase-72805d36.js";import{u as v}from"./use-ual-f18c02c6.js";e("div",{d:"flex",align:"center",justify:"flex-start",direction:"column",w:"100%",maxW:"280px",minH:"100vh",br:"0 20px 20px 0",padding:"20px",boxShadow:"0px 0px 10px 0px $black500",bg:"#141423","@md":{d:"none"}});const j=e("div",{d:"flex",direction:"column",gap:"20px",w:"100%",mt:"30px"}),p=e(g,{d:"flex",align:"center",justify:"center",variants:{isDisabled:{true:{filter:"grayscale(1)",opacity:"0.5",pointerEvents:"none",cursor:"not-allowed"}}}}),x=e("button",{d:"flex",width:"100%",svg:{w:"50px",h:"35px"},span:{mt:"10px",fs:"16px",fw:"bold",ff:"$heading",color:"$white500"}}),_=e("hr",{h:"4px",width:"100%",mt:"auto",border:"none",br:"3px",bg:"#00BAFF"}),y=e("button",{d:"flex",align:"center",gap:"10px",w:"100%",mt:"calc(100vh - 490px)",color:"rgba(235, 9, 77, 0.67)",ff:"$heading",fs:"16px",fw:900,svg:{ml:"10px",width:"25px",height:"35px"}});let l;const f=new Uint8Array(16);function w(){if(!l&&(l=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!l))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return l(f)}const s=[];for(let t=0;t<256;++t)s.push((t+256).toString(16).slice(1));function D(t,n=0){return s[t[n+0]]+s[t[n+1]]+s[t[n+2]]+s[t[n+3]]+"-"+s[t[n+4]]+s[t[n+5]]+"-"+s[t[n+6]]+s[t[n+7]]+"-"+s[t[n+8]]+s[t[n+9]]+"-"+s[t[n+10]]+s[t[n+11]]+s[t[n+12]]+s[t[n+13]]+s[t[n+14]]+s[t[n+15]]}const E=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),u={randomUUID:E};function h(t,n,d){if(u.randomUUID&&!n&&!t)return u.randomUUID();t=t||{};const a=t.random||(t.rng||w)();if(a[6]=a[6]&15|64,a[8]=a[8]&63|128,n){d=d||0;for(let i=0;i<16;++i)n[d+i]=a[i];return n}return D(a)}const L=r.lazy(()=>c(()=>import("./home-497da310.js"),["assets/home-497da310.js","assets/index-e5a5124d.js","assets/index-55fec1ff.css"])),S=r.lazy(()=>c(()=>import("./profile-58ebe3af.js"),["assets/profile-58ebe3af.js","assets/index-e5a5124d.js","assets/index-55fec1ff.css"])),k=r.lazy(()=>c(()=>import("./step-c14ffa9e.js"),["assets/step-c14ffa9e.js","assets/index-e5a5124d.js","assets/index-55fec1ff.css"])),R=r.lazy(()=>c(()=>import("./sword-fb627e80.js"),["assets/sword-fb627e80.js","assets/index-e5a5124d.js","assets/index-55fec1ff.css"])),I=r.lazy(()=>c(()=>import("./card-c2ff4cc2.js"),["assets/card-c2ff4cc2.js","assets/index-e5a5124d.js","assets/index-55fec1ff.css"])),U=[{title:"Menu",path:"/",isDisabled:!1,icon:o.jsx(L,{})},{title:"My Profile",path:"/profile",isDisabled:!1,icon:o.jsx(S,{})}],P=[{title:"Travel",path:"/travel",isDisabled:!1,icon:o.jsx(k,{})},{title:"Battle",path:"/battle",isDisabled:!1,icon:o.jsx(R,{})},{title:"Stake",path:"/stake",isDisabled:!1,icon:o.jsx(I,{})}],V=e("div",{d:"flex",align:"center",justify:"center",w:"100%"}),A=e("h1",{d:"flex",justify:"center",align:"center",direction:"column",maxWidth:"100%",ff:"$heading2","-webkit-text-stroke":"1px #525252","span:nth-child(1)":{fs:"70px",background:"-webkit-linear-gradient(#FFB800, #FFE100)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent"},"span:nth-child(2)":{mt:"-25px",fs:"32px",color:"white"},"@sm":{fs:"70px"},"@xsm":{fs:"60px"},"@xxsm":{fs:"40px"}}),T=()=>o.jsx(V,{children:o.jsxs(A,{children:[o.jsx("span",{children:"ALIEN"}),o.jsx("span",{children:"- LEGENDS -"})]})});function z(t){return b({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z"}}]})(t)}const B=()=>{const{unAuthorize:t}=v();return o.jsxs(o.Fragment,{children:[o.jsx(T,{}),o.jsxs(j,{children:[U.map(n=>o.jsx(p,{isDisabled:n==null?void 0:n.isDisabled,to:n==null?void 0:n.path,children:o.jsxs(x,{children:[n==null?void 0:n.icon,o.jsx("span",{children:n==null?void 0:n.title})]})},h())),o.jsx(_,{}),P.map(n=>o.jsx(p,{isDisabled:n==null?void 0:n.isDisabled,to:n==null?void 0:n.path,children:o.jsxs(x,{children:[n==null?void 0:n.icon,o.jsx("span",{children:n==null?void 0:n.title})]})},h())),o.jsxs(y,{onClick:t,children:[o.jsx(z,{color:"rgba(235, 9, 77, 0.67)"}),"Logout"]})]})]})};export{B as default};
