import{s,j as e}from"./index-c5aef301.js";import{u as i}from"./index-59808b0f.js";import"./index-ebbf7406.js";const o=s("div",{display:"flex",align:"flex-end",justify:"flex-end",h:"175px",w:"100%",minW:"375px",maxW:"375px",gap:"8px",padding:"5px 1px 1px 1px",position:"relative",">img":{zIndex:"1",position:"absolute",top:"0",left:"0",w:"100%",h:"100%"}}),a=s("h2",{display:"flex",zIndex:"2",position:"absolute",top:"10px",right:"10px",fw:"bold",ff:"$heading",fs:"18px",color:"white","-webkit-text-stroke":"1px rgba(0, 0, 0, 0.2)"}),p=s("div",{display:"flex",direction:"column",w:"100%",zIndex:"2"}),l=s("div",{display:"flex",direction:"column",zIndex:"2",w:"100%",padding:"5px 0 ",br:"3px",bg:"rgba(66, 66, 66, 0.6)",p:{display:"flex",align:"center",justify:"center",fw:"bold",ff:"$heading",fs:"14px",color:"white",img:{w:"32px",h:"32px",objectFit:"contain"}},span:{display:"flex",align:"center",justify:"center",ff:"$heading",fs:"12px",color:"white"}}),x=s("button",{display:"flex",align:"center",justify:"center",gap:"5px",zIndex:"2",w:"100%",h:"48px",bg:"#303030",fw:"bold",ff:"$heading",fs:"14px",color:"white"}),f=({item:n})=>{const{setSelectedPack:t}=i();return e.jsxs(o,{children:[e.jsx(a,{children:n.name}),e.jsxs(p,{children:[e.jsxs(l,{children:[e.jsxs("p",{children:[e.jsx("img",{loading:"lazy",src:"/assets/icons/gem.png",alt:""}),"500"]}),e.jsx("span",{children:"Ingame Currency"})]}),e.jsxs(x,{onClick:()=>t({item:n}),children:["Purchase for ",n.waxCost,e.jsx("img",{loading:"lazy",src:"/assets/icons/wax-coin.png",alt:""})]})]}),e.jsx("img",{src:"/assets/background/bg-gem-shop.png",alt:""})]})};export{f as default};
