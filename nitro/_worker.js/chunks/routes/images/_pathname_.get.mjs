import{e as a,d as s,z as t,h as e}from"../../_/nitro.mjs";import"node:async_hooks";const n=a((async a=>{const{pathname:n}=await s(a,t.object({pathname:t.string().min(1)}).parse);return e().serve(a,n)}));export{n as default};
//# sourceMappingURL=_pathname_.get.mjs.map
