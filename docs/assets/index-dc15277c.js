import{s as i,d as u,S as d,Q as j,u as f,c as v,R as h,_ as m,j as e}from"./index-a1400203.js";import{u as y}from"./useQuery-52cf01d2.js";import{s as b,r as w}from"./dataFields-a7655a66.js";const F=i("div",{d:"grid",gridTemplateAreas:`
    "empty empty header"
    "main main side"
  `,gridTemplateRows:"auto 1fr",gap:"10px",br:"15px",w:"100%",h:"100%",variants:{isFighterSelected:{true:{"@xmd":{gridTemplateAreas:`
            "header header header"
            "side side side"
          `}},false:{"@xmd":{gridTemplateAreas:`
              "header header header"
              "main main main"
            `}}}},"@lg":{gridTemplateColumns:"1fr 1fr 2fr"},"@xmd":{gap:"8px"},"@sm":{}}),_=i("div",{gridArea:"header",d:"flex",justifyContent:"flex-end",gap:"10px",minHeight:"65px",button:{padding:"20px",w:"100%",maxW:"100%",div:{d:"flex",alignItems:"center",gap:"5px",color:"#828282",img:{objectFit:"contain",w:"24px"}}},"@sm":{gap:"5px",button:{fs:"12px",padding:"10px",div:{img:{w:"20px"}}}},"@xsm":{button:{gap:"3px",justify:"space-between",padding:"9px 0px 9px 3px",fs:"10px"}}}),S=i("div",{gridArea:"main",d:"flex",gap:"10px",flexWrap:"wrap",maxH:"calc(100vh - 175px)",overflowY:"auto",padding:"10px",br:"15px",bg:"#141423",variants:{isFighterSelected:{true:{"@xmd":{display:"none"}}}}});i("div",{w:"100%",h:"45px",bg:"#201D2C",padding:"10px 20px",fontSize:"16px",fontWeight:"bold",ff:"$heading",color:"#C9C9C9","@sm":{h:"initial",fontSize:"14px"}});const A=i("div",{display:"flex",flexDirection:"column",gridArea:"side",padding:"0px 18px",br:"15px",bg:"#141423",overflowY:"auto",maxHeight:"calc(100vh - 160px)",minW:"500px",variants:{isFighterSelected:{false:{"@sm":{display:"none"}}}},"@lg":{minW:"initial"},"@sm":{mt:"5px"}});i("h4",{d:"flex",alignItems:"center",justifyContent:"center",w:"100%",h:"100%",color:"#FFFFFF",ff:"$heading",fs:"24px",fw:"normal"});const T=i("div",{d:"flex",align:"center",justify:"flex-start",direction:"column",position:"relative",padding:"40px 40px",gap:"10px",w:"100%",mt:"10px",bg:"#141423",br:"15px",minH:"calc(-160px + 100vh)",variants:{isHidden:{true:{"@sm":{display:"none"}}}}}),C=i("button",{display:"none",align:"flex-start",justify:"center",color:"#fff",fs:"30px",w:"50px",h:"50px",top:"0px",right:"0px",position:"absolute","@xmd":{d:"flex"}}),$=i("div",{d:"flex",align:"flex-start",justify:"center",gap:"30px",w:"100%"}),z=i("div",{d:"flex",align:"center",justify:"center",direction:"column",gap:"10px",position:"relative"}),W=i("div",{w:"150px",h:"150px",overflow:"hidden",br:"10px",img:{w:"150px",h:"150px",scale:"4",translate:"0 60px",objectFit:"contain"},"@lgxx":{w:"100px",h:"100px",img:{w:"100px",h:"100px",translate:"0 30px"}}}),H=i("div",{d:"flex",align:"center",justify:"center",gap:"10px",w:"40px",h:"40px",br:"50%",bg:"#252525",border:"1px solid #fff",color:"#fff",fontWeight:"bold",ff:"$heading",fs:"20px",zIndex:"1",position:"absolute",top:"-10px",right:"-10px"}),R=i("div",{d:"flex",align:"center",justify:"flex-start",gap:"10px",w:"100%",bg:"#222222",div:{bg:"#00ff00",h:"10px"}}),E=i("div",{d:"flex",align:"center",justify:"center",direction:"column",gap:"5px",w:"100%"}),P=i("h3",{color:"#fff",textTransform:"capitalize",w:"100%",mb:"5px"}),l=i("span",{color:"#fff",textTransform:"capitalize",ff:"$heading",w:"100%","@lgxx":{fs:"12px"}}),I=i("div",{d:"flex",align:"center",justify:"center",direction:"column",gap:"10px",w:"100%",mt:"30px",hr:{my:"30px",h:"3px",w:"100%",bg:"#00BAFF",border:"none"}}),c=i("div",{d:"flex",align:"center",justify:"space-between",w:"100%",span:{color:"#fff",ff:"$heading",fs:"20px",textAlign:"center",textTransform:"capitalize","&:first-child":{fw:"bold"}},"@lgxx":{span:{fs:"12px"}}}),O=async()=>await u({options:{code:d.battleAle,index_position:1,limit:"1000",scope:d.battleAle,table:"fighters"}}),D=()=>y({queryKey:[j.fightersState],queryFn:()=>L(),staleTime:1e3*60*60,enabled:!!f.getState().user});async function L(){try{return await O()}catch(n){return console.log(n),null}}const M=v((n,t)=>({selectedFighter:null,setSelectedFighter:x=>n({selectedFighter:x})})),g=h.lazy(()=>m(()=>import("./index-6dd503a4.js"),["assets/index-6dd503a4.js","assets/index-a1400203.js","assets/index-55fec1ff.css"])),Q=h.lazy(()=>m(()=>import("./index-c21bfe6a.js"),["assets/index-c21bfe6a.js","assets/index-a1400203.js","assets/index-55fec1ff.css","assets/useQuery-52cf01d2.js","assets/dataFields-a7655a66.js"])),Y=()=>{const{data:n}=D();f(s=>s.user);const{selectedFighter:t,setSelectedFighter:x}=M();return console.log(t),e.jsxs(F,{isFighterSelected:!!t,children:[e.jsxs(_,{children:[e.jsxs(g,{children:["Level All"," ",e.jsxs("div",{children:["-12",e.jsx("img",{src:"/assets/icons/potion.png",alt:"Potion"})," "]})]}),e.jsxs(g,{children:["Payday",e.jsxs("div",{children:["-32",e.jsx("img",{src:"/assets/icons/potion.png",alt:"Potion"})]})]})]}),e.jsx(S,{isFighterSelected:!!t,children:n==null?void 0:n.map(s=>e.jsx(Q,{fighter:s}))}),e.jsx(A,{isFighterSelected:!!t,children:t?e.jsxs(T,{children:[e.jsx(C,{onClick:()=>x(null),children:"x"}),e.jsxs($,{children:[e.jsxs(z,{children:[e.jsx(H,{children:"2"}),e.jsx(W,{children:e.jsx("img",{src:`/assets/tavern/${t.racename}_${t.classname}.jpeg`,alt:"",loading:"lazy"})}),e.jsx(R,{children:e.jsx("div",{style:{width:"50%"}})})]}),e.jsxs(E,{children:[e.jsxs(P,{children:[t.racename," ",t.classname]}),e.jsx(l,{children:"Element: Gem"}),e.jsx(l,{children:"Level: 7"}),e.jsx(l,{children:"Age Penalty: - 22%"}),e.jsx(l,{children:"Origin: Magor"})]})]}),e.jsxs(I,{children:[b.map(s=>{var a,r,p,o;return e.jsxs(c,{children:[e.jsxs("span",{children:[s,":"]}),e.jsxs("span",{children:[String((a=t==null?void 0:t.stats)==null?void 0:a[`${s}_min`])," -"," ",Array.isArray((r=t==null?void 0:t.stats)==null?void 0:r[`${s}_max`])?JSON.stringify((p=t==null?void 0:t.stats)==null?void 0:p[`${s}_max`]):String((o=t==null?void 0:t.stats)==null?void 0:o[`${s}_max`])]})]},s)}),e.jsx("hr",{}),w.map(s=>{var a,r;return e.jsxs(c,{children:[e.jsxs("span",{children:[s.displayname,":"]}),e.jsx("span",{children:(r=(a=t==null?void 0:t.fighter)==null?void 0:a.stats)==null?void 0:r[s.value]})]},s.value)})]})]}):e.jsx(e.Fragment,{})})]})},K=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"}));export{K as i,M as u};
