import{s as a,c as l,R as t,_ as n,j as i}from"./index-f6906664.js";import{f as o}from"./constants-2bbfa292.js";const p=a("div",{d:"grid",gridTemplateAreas:`
    "empty empty header"
    "main main side"
  `,gridTemplateRows:"auto 1fr",gap:"10px",br:"15px",w:"100%",h:"100%",maxH:"calc(100vh - 160px)",variants:{isLandSelected:{true:{"@xmd":{gridTemplateAreas:`
            "header header header"
            "side side side"
          `}},false:{"@xmd":{gridTemplateAreas:`
              "header header header"
              "main main main"
            `}}}},"@lg":{gridTemplateColumns:"1fr 1fr 2fr"},"@xmd":{gap:"8px"},"@sm":{}});a("div",{gridArea:"header",d:"flex",justifyContent:"flex-end",gap:"10px",minHeight:"65px",button:{padding:"20px",w:"100%",maxW:"100%",div:{d:"flex",alignItems:"center",gap:"5px",color:"#828282",img:{objectFit:"contain",w:"24px"}}},"@sm":{gap:"5px",button:{fs:"12px",padding:"10px",div:{img:{w:"20px"}}}},"@xsm":{button:{gap:"3px",justify:"space-between",padding:"9px 0px 9px 3px",fs:"10px"}}});const x=a("div",{gridArea:"main",padding:"0px 18px",br:"15px",bg:"#141423",variants:{isLandSelected:{false:{"@xmd":{display:"none"}}}}}),r=a("div",{w:"100%",h:"45px",bg:"#201D2C",padding:"10px 20px",fontSize:"16px",fontWeight:"bold",ff:"$heading",color:"#C9C9C9","@sm":{h:"initial",fontSize:"14px"}}),c=a("div",{display:"flex",flexDirection:"column",gridArea:"side",padding:"0px 18px",br:"15px",bg:"#141423",overflowY:"auto",maxHeight:"calc(100vh - 160px)",minW:"500px",variants:{isLandSelected:{false:{"@xmd":{display:"none"}}}},"@lg":{minW:"initial"},"@sm":{mt:"5px"}}),m=a("h4",{d:"flex",alignItems:"center",justifyContent:"center",w:"100%",h:"100%",color:"#FFFFFF",ff:"$heading",fs:"24px",fw:"normal"}),g=l((e,s)=>({selectedLand:null,setSelectedLand:d=>{e({selectedLand:d})},selectedBuild:{...o[0],index:0},setSelectedBuild:d=>{e({selectedBuild:d})},buildingBoost:[0],setBuildingBoost:d=>{e({buildingBoost:d})}})),f=t.lazy(()=>n(()=>import("./index-c1bf1b9a.js"),["assets/index-c1bf1b9a.js","assets/index-f6906664.js","assets/index-55fec1ff.css","assets/all-buildings-fb1ddbfd.js","assets/useQuery-ddc74530.js","assets/atomic-api-9c9b7193.js","assets/toast-options-057d1e9b.js","assets/land-config-a3a9bd5a.js","assets/use-transaction-a1c6f80f.js","assets/sleep-da79c358.js","assets/constants-2bbfa292.js"])),u=t.lazy(()=>n(()=>import("./index-26f658b9.js"),["assets/index-26f658b9.js","assets/index-f6906664.js","assets/index-55fec1ff.css","assets/all-buildings-fb1ddbfd.js","assets/useQuery-ddc74530.js","assets/atomic-api-9c9b7193.js","assets/toast-options-057d1e9b.js","assets/constants-2bbfa292.js"])),h=t.lazy(()=>n(()=>import("./index-50633401.js"),["assets/index-50633401.js","assets/index-f6906664.js","assets/index-55fec1ff.css","assets/constants-2bbfa292.js"])),_=t.lazy(()=>n(()=>import("./index-b56dbe44.js"),["assets/index-b56dbe44.js","assets/index-f6906664.js","assets/index-55fec1ff.css","assets/index.esm-6ae49818.js","assets/iconBase-5b9ba73e.js","assets/land-config-a3a9bd5a.js","assets/useQuery-ddc74530.js","assets/constants-2bbfa292.js"])),j=()=>{var s;const{selectedLand:e}=g();return i.jsxs(p,{isLandSelected:!!e,children:[i.jsx(f,{}),i.jsxs(x,{isLandSelected:!e,children:[i.jsx(r,{children:"My Lands"}),i.jsx(u,{})]}),i.jsx(c,{isLandSelected:!!e,children:e?i.jsxs(i.Fragment,{children:[i.jsxs(r,{children:[(s=e==null?void 0:e.data)==null?void 0:s.name," (",e==null?void 0:e.data.x,":",e==null?void 0:e.data.y,")"]}),i.jsx(h,{}),i.jsx(_,{})]}):i.jsxs(i.Fragment,{children:[i.jsx(r,{children:"Select a Land"}),i.jsx(m,{children:"Select a Land"})]})})]})},b=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"}));export{b as i,g as u};
