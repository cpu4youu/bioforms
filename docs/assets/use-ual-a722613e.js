import{b as r,r as i,l as u,u as c,m as l}from"./index-b68297c9.js";import{s as g}from"./sleep-da79c358.js";const p=()=>{const t=r(),o=i.useContext(u.UALContext),a=c(n=>n.onSignOut);async function s(){return o.showModal()}async function e(){a(),o.logout(),localStorage.clear(),sessionStorage.clear(),l(void 0,"@bioform_authentication"),await g(300),t("/")}return{ual:o,unAuthorize:e,login:s}};export{p as u};
