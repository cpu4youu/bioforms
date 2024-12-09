import{s as p,k as ue,M as ge,S as y,T as ne,Q as se,u as k,i as he,R as ae,_ as me,r as v,j as e,a as X}from"./index-7b5cda61.js";import{u as ve}from"./index-60204cd4.js";import{u as ye}from"./inventory-query-b83ddeea.js";import{u as ie}from"./useQuery-f852a306.js";import{u as re}from"./use-transaction-32b50a72.js";import"./sleep-da79c358.js";import"./constants-06470205.js";import"./atomic-api-f835b28e.js";import"./toast-options-5d1fca6a.js";const je=p("div",{d:"flex",align:"center",justify:"center",direction:"column",position:"relative",w:"100%"}),be=p("div",{d:"flex",align:"flex-end",justify:"flex-end",gap:"10px",position:"relative",w:"100%",button:{d:"flex",align:"center",justify:"center",maxW:"188px",h:"70px",svg:{fill:"#00BAFF"},span:{d:"flex",align:"center",justify:"center",gap:"5px",color:"#828282"},img:{maxW:"35px",maxH:"30px"}},"@sm":{button:{justify:"center",gap:"2px",padding:"0",maxW:"33%",h:"45px",fs:"12px",span:{gap:"0px"},svg:{display:"none"}}}}),we=p("div",{d:"flex",align:"flex-start",justify:"center",gap:"10px",w:"100%",">img":{mt:"10px",h:"calc(100vh - 160px)",br:"15px"}}),_e=p("div",{d:"grid",gridTemplateAreas:`
    "title title title"
    "objectivesLeft content objectivesRight"
    "objectivesLeft inventory objectivesRight"
    "objectivesLeft inventory objectivesRight"
    "objectivesLeft inventory objectivesRight"
  `,gridTemplateColumns:"1fr 5fr 1fr",gap:"20px",mt:"10px",padding:"15px 10px",bg:"#141423",br:"15px",w:"100%",minH:"calc(100vh - 160px)","@sm":{gridTemplateAreas:`
    "title title title"
    "content content content"
    "objectivesLeft objectivesLeft objectivesLeft"
    "objectivesRight objectivesRight objectivesRight"
    "inventory inventory inventory"
  `}}),Ce=p("h2",{gridArea:"title",w:"100%",textAlign:"center",fs:"24px",color:"#fff"}),Z=p("div",{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"5px",mb:"auto",w:"100%","&.left":{gridArea:"objectivesLeft"},"&.right":{gridArea:"objectivesRight"},"@sm":{flexDirection:"row"}}),ee=p("div",{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",w:"100%",maxW:"82px",h:"85px",padding:"5px 0px 0px",bg:"#358CAC",br:"3px",span:{color:"#fff",ff:"$heading",fs:"12px","&:first-child":{color:"#07445A",mb:"12px"}},variants:{disabled:{true:{filter:"grayscale(100%)"}}}}),te=p("div",{display:"flex",alignItems:"center",gap:"5px",mt:"auto",padding:"5px 10px",color:"#fff",ff:"$heading",fs:"14px",br:"3px",bg:"#17566D",w:"100%"}),Le=p("div",{gridArea:"content",display:"flex",alignItems:"flex-start",justifyContent:"center",gap:"35px",w:"100%","@sm":{gap:"10px",img:{maxW:"85px"}},"@xsm":{gap:"5px",img:{maxW:"65px"}}}),Te=p("div",{gridArea:"content",img:{"&:hover":{transform:"scale(1.05)",zIndex:"4","-webkit-filter":"drop-shadow(0px 0px 8px #00BAFF)",filter:"drop-shadow(0px 0px 5px #00BAFF)"},"&:nth-of-type(1)":{transform:"translate(30px,20px) rotate(-20deg)",zIndex:"3","&:hover":{transform:"scale(1.05) translate(30px,20px) rotate(-20deg)",zIndex:"4"}},"&:nth-of-type(3)":{transform:"translate(-30px,20px) rotate(20deg)",zIndex:"1","&:hover":{transform:"scale(1.05) translate(-30px,20px) rotate(20deg)",zIndex:"4"}},"@sm":{"&:nth-of-type(1)":{transform:"translate(20px,9px) rotate(-20deg)",zIndex:"3","&:hover":{transform:"scale(1.05) translate(20px,9px) rotate(-20deg)",zIndex:"4"}},"&:nth-of-type(3)":{transform:"translate(-20px,9px) rotate(20deg)",zIndex:"1","&:hover":{transform:"scale(1.05) translate(-20px,9px) rotate(20deg)",zIndex:"4"}}}},variants:{cardSelected:{0:{img:{"&:nth-of-type(1)":{zIndex:"3"},"&:nth-of-type(2)":{opacity:"0.2"},"&:nth-of-type(3)":{opacity:"0.2"}}},1:{img:{"&:nth-of-type(1)":{opacity:"0.2"},"&:nth-of-type(2)":{},"&:nth-of-type(3)":{opacity:"0.2"}}},2:{img:{"&:nth-of-type(1)":{opacity:"0.2"},"&:nth-of-type(2)":{opacity:"0.2"},"&:nth-of-type(3)":{}}}}}}),w=p("img",{cursor:"pointer",transition:"all 0.2s ease-in-out",w:"120px",h:"170px",zIndex:"2","@lg":{w:"100px",h:"150px"},"@sm":{width:"80px",height:"initial"},"@xsm":{width:"70px",height:"initial"}}),Ae=p("div",{gridArea:"inventory",display:"flex",direction:"column",w:"100%",span:{ff:"$heading",fs:"16px",fw:"bold",color:"#fff",textAlign:"center"},"@sm":{mt:"0px"}}),Ie=p("div",{d:"flex",align:"center",justify:"center",gap:"20px",mb:"20px","@sm":{m:"0px 0 20px",gap:"10px"}}),_=p("button",{d:"flex",align:"center",justify:"center",fs:"20px",ff:"$heading",fw:"$bold",color:"$white500",variants:{isSelected:{true:{textUnderlineOffset:"0.5em",textDecoration:"underline"}}},"@sm":{fs:"14px"}}),ze=p("div",{d:"flex",flexWrap:"wrap",gap:"10px",overflow:"auto",w:"100%",maxH:"calc(100vh - 520px)"}),ke=ue({"0%":{backgroundPosition:"0% 0%"},"100%":{backgroundPosition:"-135% 0%"}}),Re=p("div",{w:"120px",h:"170px",background:"linear-gradient( -90deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.25) ,rgba(255, 255, 255, 0.15))",br:"10px",backgroundSize:"400% 400%",animation:`${ke} 1.2s ease-in-out infinite`,"@sm":{width:"70px",height:"100px"}}),Se=async()=>{var u,h;let a=!1,n;const r=[];for(;!a;){const g=await ge.get_table_rows({code:y.ADVENTURE_MC,index_position:1,limit:"10000",scope:y.ADVENTURE_MC,table:ne.ADV_TEMPLATES,show_payer:!1,json:!0,lower_bound:n});a=!g.more,r.push(...g.rows.slice(0,-1)),n=((h=(u=g.rows)==null?void 0:u[g.rows.length-1])==null?void 0:h.templateid)??""}return r},Fe=()=>ie({queryKey:[se.tavernDataState],queryFn:()=>Ee(),staleTime:1e3*60*60,enabled:!!k.getState().user});async function Ee(){try{const a=await Se();return a?$e(a):null}catch(a){return console.log(a),null}}function $e(a){return a.map(n=>({...n,"nft.mp":n.nft_mp,"tlm.mp":n.tlm_mp}))}const De=async()=>await he({options:{code:y.tavernAle,index_position:1,limit:"1000",scope:y.tavernAle,table:ne.CONFIG}}),He=()=>ie({queryKey:[se.tavernConfigState],queryFn:()=>We(),staleTime:1e3*60*60,enabled:!!k.getState().user});async function We(){try{const a=await De();return a||null}catch(a){return console.log(a),null}}async function Be(a,n){const{executeTransaction:r}=re(),u=Me(a,n);return!!await r(u)}function Me(a,n){return{actions:[{account:y.tavernAle,name:"reveal",authorization:[{actor:a.name,permission:a.authorization.permission}],data:{wallet:a.name,use_gems:n}}]}}async function Pe(a){const{executeTransaction:n}=re(),r=Ne(a);return!!await n(r)}function Ne(a){return{actions:[{account:y.tavernAle,name:"travel",authorization:[{actor:a.name,permission:a.authorization.permission}],data:{wallet:a.name}}]}}const z=ae.lazy(()=>me(()=>import("./index-f0a7062b.js"),["assets/index-f0a7062b.js","assets/index-7b5cda61.js","assets/index-55fec1ff.css"])),Oe=()=>{var B,M,P,N,O,Q,U,V,q,K,Y,G,J;const{setAreaSelected:a,areaSelected:n}=ve(),{user:r}=k(),[u,h]=v.useState("level.worlds"),[g,j]=v.useState(0),[m,oe]=v.useState({}),[x,R]=v.useState([void 0,void 0,void 0]),[S,F]=v.useState(!1),[E,$]=v.useState(!1),{data:C,isLoading:le}=ye(u),{data:L}=Fe(),{data:l}=He();function ce(){a(null)}function pe(t){return x.some(s=>(s==null?void 0:s.asset_id)!==t.asset_id)}function T(t){if(t===g){j(-1);return}j(t)}function D(t){if(!t){const o=x.map((i,d)=>{if(d!==g)return i});H(o),j(-1),R(o);return}if(x.some(o=>(o==null?void 0:o.asset_id)===(t==null?void 0:t.asset_id))){j(-1);return}const s=x.map((o,i)=>i===g?t:o);H(s),j(-1),R(s)}function H(t){let s={};t.forEach(o=>{const i=L==null?void 0:L.find(f=>(f==null?void 0:f.templateid)===Number(o==null?void 0:o.template.template_id));if(!i||!(n!=null&&n.objectives))return;const d=n.objectives.reduce((f,c,I)=>{if(c.objective_value!==99999&&c.objective_value===(i==null?void 0:i[c.objective_type])){const b=c==null?void 0:c.mod_value;return f[I]=b,f}if(c.objective_type==="element"&&(c.objective_string.toLocaleLowerCase()===(i==null?void 0:i.element.toLocaleLowerCase())||c.objective_string.toLocaleLowerCase()===(i==null?void 0:i.weaponclass.toLocaleLowerCase()))){const b=c==null?void 0:c.mod_value;return f[I]=b,f}if(c.objective_string!=="-"&&c.objective_string.toLocaleLowerCase()===String(i==null?void 0:i[c.objective_type]).toLocaleLowerCase()){const b=c==null?void 0:c.mod_value;return f[I]=b,f}return f},{});s={...s,...d}}),oe(s)}function W(){var t,s,o,i,d,f;return!l||!r?null:((t=r==null?void 0:r.activestats)==null?void 0:t.gems)>=((s=l==null?void 0:l[0])==null?void 0:s.cost_reveal_gem)?(o=l==null?void 0:l[0])==null?void 0:o.cost_reveal_gem:((i=r==null?void 0:r.activestats)==null?void 0:i.credits)>=((d=l==null?void 0:l[0])==null?void 0:d.cost_reveal_credits)?(f=l==null?void 0:l[0])==null?void 0:f.cost_reveal_credits:null}async function de(t){if(r){F(!0);try{await Be(r,t)&&X.success("Reveal success")}catch{}finally{F(!1)}}}async function xe(){if(r){$(!0);try{await Pe(r)&&X.success("Hire success")}catch{}finally{$(!1)}}}function fe(){var s;const t=new Array(10).fill(0).map((o,i)=>i).reduce((o,i,d)=>m[d]?o+=m[d]:o,0);return(((s=l==null?void 0:l[0])==null?void 0:s.cost_hire_ap)||0)-t}const A=(B=r==null?void 0:r.active_taverns)==null?void 0:B.some(t=>t.x===(n==null?void 0:n.x)&&t.y===(n==null?void 0:n.y));return console.log(A),e.jsxs(je,{children:[e.jsxs(be,{children:[!A&&e.jsxs(z,{disabled:E,isLoading:E,color:"black",onClick:xe,children:["Hire",e.jsxs("span",{children:[fe(),e.jsx("img",{loading:"lazy",src:"/assets/icons/potion.png",alt:""})]})]}),e.jsx(z,{color:"black",isLoading:S,onClick:()=>{var t,s;return de((((t=r==null?void 0:r.activestats)==null?void 0:t.gems)||0)>=(((s=l==null?void 0:l[0])==null?void 0:s.cost_reveal_gem)||0))},disabled:W()===null||S,children:A?"Details":e.jsxs(e.Fragment,{children:["Reveal",e.jsxs("span",{children:[W(),e.jsx("img",{loading:"lazy",src:"/assets/icons/dust.png",alt:""})]})]})}),e.jsx(z,{color:"black",onClick:ce,children:"Back"})]}),e.jsxs(we,{children:[e.jsxs(_e,{children:[e.jsx(Ce,{children:"Unknown Fighter"}),e.jsx(Z,{className:"left",children:(M=n==null?void 0:n.objectives)==null?void 0:M.slice(0,5).map(({objective_string:t,objective_type:s,objective_value:o,mod_value:i},d)=>e.jsxs(ee,{disabled:!(m!=null&&m[d]),children:[e.jsx("span",{children:s}),e.jsx("span",{children:t==="-"?o:t}),e.jsxs(te,{children:[i,e.jsx("img",{loading:"lazy",src:"/assets/icons/potion.png",alt:""})]})]},d))}),e.jsxs(Le,{children:[e.jsx("img",{loading:"lazy",src:"/assets/default-avatar.jpg",alt:""}),e.jsxs(Te,{cardSelected:g,children:[e.jsx(w,{onClick:()=>T(0),loading:"lazy",src:x[0]?`/assets/aw-nft-images/${(P=x[0])==null?void 0:P.template.template_id}.webp`:"/assets/default-card.png",alt:(O=(N=x[0])==null?void 0:N.data)==null?void 0:O.name}),e.jsx(w,{onClick:()=>T(1),loading:"lazy",src:x[1]?`/assets/aw-nft-images/${(Q=x[1])==null?void 0:Q.template.template_id}.webp`:"/assets/default-card.png",alt:(V=(U=x[1])==null?void 0:U.data)==null?void 0:V.name}),e.jsx(w,{onClick:()=>T(2),loading:"lazy",src:x[2]?`/assets/aw-nft-images/${(q=x[2])==null?void 0:q.template.template_id}.webp`:"/assets/default-card.png",alt:(Y=(K=x[2])==null?void 0:K.data)==null?void 0:Y.name})]})]}),e.jsx(Ae,{children:x.length!==0&&g===-1?e.jsx("span",{children:"Select a card"}):e.jsxs(e.Fragment,{children:[e.jsxs(Ie,{children:[e.jsx(_,{isSelected:u==="crew.worlds",onClick:()=>h("crew.worlds"),children:"Minions"}),e.jsx(_,{isSelected:u==="arms.worlds",onClick:()=>h("arms.worlds"),children:"Weapons"}),e.jsx(_,{isSelected:u==="tool.worlds",onClick:()=>h("tool.worlds"),children:"Tools"}),e.jsx(_,{isSelected:u==="level.worlds",onClick:()=>h("level.worlds"),children:"Levels"}),e.jsx(_,{isSelected:u==="faces.worlds",onClick:()=>h("faces.worlds"),children:"Avatars"})]}),e.jsx(ze,{children:le?new Array(10).fill(0).map((t,s)=>e.jsx(Re,{},s)):e.jsxs(e.Fragment,{children:[e.jsx(w,{onClick:()=>D(void 0),src:"/assets/default-card.png",alt:"default card"}),(G=C==null?void 0:C.filter(pe))==null?void 0:G.map(t=>{var s;return e.jsx(w,{onClick:()=>D(t),loading:"lazy",src:`/assets/aw-nft-images/${t==null?void 0:t.template.template_id}.webp`,alt:(s=t==null?void 0:t.data)==null?void 0:s.name},t==null?void 0:t.asset_id)})]})})]})}),e.jsx(Z,{className:"right",children:(J=n==null?void 0:n.objectives)==null?void 0:J.slice(5,10).map(({objective_string:t,objective_type:s,objective_value:o,mod_value:i},d)=>e.jsxs(ee,{disabled:!(m!=null&&m[d+5]),children:[e.jsx("span",{children:s}),e.jsx("span",{children:t==="-"?o:t}),e.jsxs(te,{children:[i,e.jsx("img",{loading:"lazy",src:"/assets/icons/potion.png",alt:""})]})]},d))})]}),e.jsx("img",{src:"/assets/unknown-fighter.jpeg",alt:"",loading:"lazy"})]})]})},Ze=ae.memo(Oe);export{Ze as default};
