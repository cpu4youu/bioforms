import{s as i,j as s}from"./index-f6906664.js";import{u,b}from"./all-buildings-fb1ddbfd.js";import{f as c}from"./constants-2bbfa292.js";import{u as C}from"./index-0ed18e94.js";import"./useQuery-ddc74530.js";import"./atomic-api-9c9b7193.js";import"./toast-options-057d1e9b.js";const w=i("div",{mt:"20px","@sm":{mt:"5px"}}),y=i("div",{d:"grid",gridTemplateColumns:"1fr 1fr 1fr",w:"100%",bg:"#242438",padding:"10px 20px",fontSize:"14px",fontWeight:"bold",ff:"$heading",color:"#C9C9C9","@md":{gap:"10px",fontSize:"12px",padding:"10px 10px",span:{textAlign:"center"}}}),v=i("div",{d:"flex",direction:"column",gap:"10px",overflowY:"auto",h:"calc(100vh - 280px)",pb:"20px"}),S=i("button",{d:"grid",gridTemplateColumns:"1fr 1fr 1fr",bg:"#201D2C",padding:"8px",variants:{isSelected:{true:{bg:"rgb(255 255 255 / 17%)"}}},"@sm":{gap:"3px"}}),z=i("div",{d:"flex",w:"100%",h:"100%",mt:"10px",img:{objectFit:"contain",w:"69px",h:"69px"},span:{ml:"10px",fontSize:"14px",ff:"$heading",color:"#C9C9C9"},"@md":{span:{fontSize:"12px"}},"@sm":{direction:"column-reverse",alignItems:"center",justify:"flex-end",gap:"10px",img:{w:"100%",h:"auto"}}}),B=i("div",{d:"flex",flexWrap:"wrap",gap:"2px 3px",w:"100%",h:"100%",mt:"10px","@sm":{}}),p=i("div",{d:"flex",w:"49%",h:"34px",gap:"2px",img:{objectFit:"contain",w:"34px",h:"34px",bg:"#242438"},span:{d:"flex",alignItems:"center",justifyContent:"center",w:"100%",fontSize:"14px",ff:"$heading",fw:"bold",color:"#C9C9C9",bg:"#242438"},"@md":{w:"100%",span:{fontSize:"10px"}}}),T=i("div",{d:"flex",w:"100%",gap:"3px",mt:"6px",variants:{isSide:{true:{mt:"0px","@sm":{mt:"8px"}},false:{h:"100%"}}},"@sm":{gap:"3px",flexWrap:"wrap"}}),$=i("button",{d:"flex",justifyContent:"center",alignItems:"center",direction:"column",position:"relative",bg:"#242438",w:"100%",span:{position:"absolute",top:"8px",left:"5px",ff:"$heading",fw:"bold",fs:"16px",color:"#D9CA9A"},img:{objectFit:"contain",w:"45px"},variants:{disabled:{true:{"img, span":{filter:"grayscale(100%)"}}}},"@md":{span:{fontSize:"12px"}},"@sm":{maxW:"48%",span:{fontSize:"12px"},img:{objectFit:"contain",w:"50px"}}}),_=i("div",{position:"absolute",w:"100%",h:"7px",top:0,left:0,bg:"red","@sm":{h:"3px"}}),N=()=>{const{data:r}=u(),{data:d}=b(),{selectedLand:l,setBuildingBoost:x,setSelectedBuild:m,setSelectedLand:g}=C();function f(e){var o,n;g(e);const t={...(o=c)==null?void 0:o[0],...(n=e.buildings)==null?void 0:n[0],index:0},a=((t==null?void 0:t.boost_score)||0)/1e4;m(t),x([a])}return s.jsxs(w,{children:[s.jsxs(y,{children:[s.jsx("span",{children:"Land"}),s.jsx("span",{children:"Income since last claim"}),s.jsx("span",{children:"Buildings"})]}),s.jsx(v,{children:r==null?void 0:r.map(e=>{const t=d==null?void 0:d[e.data.planetName].find(a=>a.x===e.data.x&&a.y===e.data.y);return s.jsxs(S,{isSelected:e.asset_id===Number(l==null?void 0:l.asset_id),onClick:()=>f({...e,...t}),children:[s.jsxs(z,{children:[s.jsx("img",{loading:"lazy",src:"/assets/lands/vulcano.png",alt:"Land"}),s.jsxs("span",{children:[e.data.name," (",e.data.x,":",e.data.y,")"]})]}),s.jsxs(B,{children:[s.jsxs(p,{children:[s.jsx("img",{loading:"lazy",src:"/assets/icons/dust.png",alt:""}),s.jsx("span",{children:"76.1253"})]}),s.jsxs(p,{children:[s.jsx("img",{loading:"lazy",src:"/assets/icons/credit.png",alt:""}),s.jsx("span",{children:"76.1253"})]}),s.jsxs(p,{children:[s.jsx("img",{loading:"lazy",src:"/assets/icons/gem.png",alt:""}),s.jsx("span",{children:"76.1253"})]}),s.jsxs(p,{children:[s.jsx("img",{loading:"lazy",src:"/assets/icons/tlm.png",alt:""}),s.jsx("span",{children:"76.1253"})]})]}),s.jsx(T,{isSide:!1,children:c.map((a,o)=>{const n=t==null?void 0:t.buildings.find(j=>j.building_name===a.name.toLowerCase()),h=((n==null?void 0:n.boost_score)||0)/1e4;return s.jsxs($,{disabled:!t||!n,children:[s.jsx(_,{style:{width:`${h}%`}}),s.jsx("span",{children:n==null?void 0:n.level}),s.jsx("img",{loading:"lazy",src:`/assets/buildings/${a.img}.png`,alt:a.name,title:a.name})]},o)})})]},e.asset_id)})})]})};export{N as default};
