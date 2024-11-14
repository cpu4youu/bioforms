import{s as r,r as s,j as e,S as f,R as x,_ as h,b as g,u as b,a as w}from"./index-ca24528c.js";import{G as m}from"./iconBase-0e551f88.js";import{s as y}from"./sleep-da79c358.js";import{u as j}from"./use-transaction-b0895aa2.js";import"./toast-options-7a65065f.js";const v=r("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",w:"100%"}),$=r("div",{d:"flex",align:"flex-start",justify:"center",gap:"20px",position:"relative",mt:"50px",w:"100%"}),C=r("div",{d:"flex",align:"flex-start",justify:"center",direction:"column",position:"relative",padding:"20px",bg:"#312C2E",borderRadius:"10px",border:"4px solid #FFC700",w:"100%",maxW:"560px",span:{mt:"10px",color:"#E76666",ff:"$heading",fs:"12px"},"&::after":{content:"",position:"absolute",left:"-20px",width:0,height:0,borderBottom:"20px solid transparent",borderTop:"20px solid transparent",borderRight:"20px solid #FFC700",clear:"both"}}),A=r("h3",{d:"flex",align:"flex-start",justify:"flex-start",w:"100%",fs:"24px",color:"#FAE62E"}),R=r("p",{d:"flex",align:"center",justify:"center",direction:"column",w:"100%",color:"#fff",ff:"$heading",fw:"$bold",fs:"18px"}),F=r("div",{d:"flex",align:"flex-end",justify:"center",gap:"10px",w:"100%",">div":{w:"100%",mt:"20px",label:{justify:"flex-start",mb:"5px",fw:"$normal",fs:"12px"}},button:{w:"70px",h:"40px"}});function T(n){return m({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"}}]})(n)}const S=r("div",{d:"flex",align:"center",justify:"center",direction:"column",w:"250px","&:has(input:disabled)":{label:{color:"$white800"}},"@md":{fs:"15px",maxW:"150px"}}),I=r("div",{d:"flex",align:"center",justify:"center",w:"100%",h:"100%",bg:"linear-gradient(0deg, rgba(255,255,255, 0.2), rgba(255,255,255, 0.2)), rgb(0, 0, 0, 0.3)",padding:"7px 15px",br:"10px",border:"1px solid",borderColor:"$white500","&:hover":{borderColor:"#FFA800",svg:{color:"#FFA800"}},"&:not(:has(input:placeholder-shown))":{borderColor:"#FFA800",svg:{color:"$blue100"}},"&:has(input[type=search])":{padding:"0px 10px"},"&:has(input:disabled)":{cursor:"not-allowed",borderColor:"$white800",svg:{color:"$white800"}},svg:{ml:"2px",color:"$white500"}}),_=r("label",{d:"flex",align:"center",justify:"center",w:"100%",fs:"22px",ff:"$heading",fw:"$bold",textShadow:" 0px 4px 4px rgba(0, 0, 0, 0.5)",outline:"none",color:"$white500",border:"none"}),E=r("input",{d:"flex",align:"center",justify:"center",h:"100%",w:"100%",bg:"transparent",border:"none",fs:"16px",ff:"$body",fw:"$normal",outline:"none",color:"$white500","&::placeholder":{color:"$white800"},"@sm":{"&[type=number]::-webkit-inner-spin-button":{width:"15px",h:"0px"}}}),z=s.forwardRef((n,o)=>{const{label:i,wrapperClassName:a,...t}=n;return e.jsxs(S,{className:a,children:[e.jsx(_,{htmlFor:"input",children:i}),e.jsxs(I,{children:[e.jsx(E,{...t,ref:o,id:(t==null?void 0:t.id)??"input",placeholder:(t==null?void 0:t.placeholder)??" "}),(t==null?void 0:t.type)==="search"&&e.jsx(T,{size:30})]})]})});async function W(n,o){const{executeTransaction:i}=j(),a=N(n,o);return!!await i(a)}function N(n,o){return{actions:[{account:f.playersAle,name:"signup",authorization:[{actor:n.name,permission:n.authorization.permission}],data:{wallet:n.name,playertag:o}}]}}const B=x.lazy(()=>h(()=>import("./index-693f2808.js"),["assets/index-693f2808.js","assets/index-ca24528c.js","assets/index-55fec1ff.css"])),P=()=>{const n=g(),{user:o,updatePlayerData:i}=b(),a=s.useRef(null),[t,l]=s.useState(!1);async function u(){var c,d;if(!(!o||!((c=a.current)!=null&&c.value)))try{l(!0),await W(o,(d=a.current)==null?void 0:d.value)&&(await y(2e3),await i(),w.success("Account created successfully"),n("/home"))}catch(p){console.log(p)}finally{l(!1)}}return e.jsx(v,{children:e.jsxs($,{children:[e.jsx("img",{src:"/assets/alien.png",loading:"lazy",alt:"alien"}),e.jsxs(C,{children:[e.jsx(A,{children:"Welcome traveler!"}),e.jsxs(R,{children:["Are you here to proof that you are the best trainer out there?",e.jsx("br",{}),e.jsx("br",{}),"Before you go out and hire fighters for your team we will need to know how we and other trainers can call you."]}),e.jsxs(F,{children:[e.jsx(z,{label:"Trainer Name",ref:a}),e.jsx(B,{disabled:t,isLoading:t,onClick:u,children:"Go"})]}),e.jsx("span",{children:"*Account creation requires ~ 5,000 bytes of RAM on your wallet"})]})]})})};export{P as default};
