import{e as a,f as o,d as t,z as s,h as e}from"../../../../_/nitro.mjs";import{r as n}from"../../../../_/auth.mjs";import"node:async_hooks";const r=a((async a=>{await n(a),o("blob");const{pathname:r}=await t(a,s.object({pathname:s.string().min(1)}).parse);return e().serve(a,decodeURIComponent(r))}));export{r as default};
//# sourceMappingURL=_...pathname_.get.mjs.map
