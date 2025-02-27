import{e as a,f as t,d as o,z as s,h as e,i as n}from"../../../../_/nitro.mjs";import{r}from"../../../../_/auth.mjs";import"node:async_hooks";const m=a((async a=>{await r(a),t("blob");const{pathname:m}=await o(a,s.object({pathname:s.string().min(1)}).parse);return await e().delete(decodeURIComponent(m)),n(a)}));export{m as default};
//# sourceMappingURL=_...pathname_.delete.mjs.map
