import{e as s,f as a,m as e,h as o,x as t}from"../../../_/nitro.mjs";import{r}from"../../../_/auth.mjs";import"node:async_hooks";const m=s((async s=>{await r(s),a("blob");const m=e(s);return o().handleUpload(s,{formKey:m.formKey||"files",multiple:"false"!==m.multiple,put:t(m.put),ensure:t(m.ensure)})}));export{m as default};
//# sourceMappingURL=index.post.mjs.map
