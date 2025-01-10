import{e as p,u as g,W as w,a as u,f as m,h as x,i as T}from"./index-4d93f134.js";import{t as l}from"./toast-options-62174ca5.js";function y(t){var c;return t?((c=t[0])==null?void 0:c.toUpperCase())+t.slice(1):""}function f(t,c){var a,i;if(console.log({err:t}),!!t)return t instanceof p.RpcError&&console.log(JSON.stringify(t.json,null,2)),t&&(t!=null&&t.message)?y((i=(a=t==null?void 0:t.message)==null?void 0:a.replace("assertion failure with message: ",""))==null?void 0:i.replace("- 3","")):c??t.message}function U(){async function t(r,o){try{const e=g.getState().user,n=g.getState().ual;if(!n)throw new Error("UAL is not initialized");if(!e)throw new Error("User is not logged in");const s=e.userType;return n.activeUser instanceof w?await i(n,r):s==="anchor"?await a(n,r):s==="wax"?await c(r,o):!1}catch(e){return console.log(e),u.error(f(e),l),!1}}async function c(r,o){const e=g.getState().ual;if(!e)throw new Error("UAL is not initialized");try{const n=await e.activeUser.signTransaction(r,{blocksBehind:3,expireSeconds:1200,...o});return console.log("returned",n),!0}catch(n){return console.log(n),u.error(f(n),l),!1}}async function a(r,o){try{const e={actions:o.actions.filter(s=>(s==null?void 0:s.account)!=="cpu.mc")},n=await r.activeUser.signTransaction(e,{blocksBehind:3,expireSeconds:1200});return console.log("returned",n),!0}catch(e){return console.log(e),u.error(f(e),l),!1}}async function i(r,o){console.log("ual-wombat",r);try{const e={actions:o.actions.filter(n=>(n==null?void 0:n.account)!=="cpu.mc")};return await r.activeUser.signTransaction(e,{expireSeconds:120,blocksBehind:3}),!0}catch(e){return console.log(e),u.error(f(e),l),!1}}async function d(r){const o=localStorage.getItem(`${m}_server`),n=`https:${x[Number(o)].value}`,s=new p.JsonRpc(n,{fetch}),h=new T.JsSignatureProvider(["5KfNZXk82jua4CEnir7KRC4eyG8VaGzgfu6myXRnLLL6mjjsESj"]);return new p.Api({rpc:s,signatureProvider:h,textDecoder:new TextDecoder,textEncoder:new TextEncoder}).serializeActions(r)}return{executeTransaction:t,serializeActions:d}}export{U as u};
