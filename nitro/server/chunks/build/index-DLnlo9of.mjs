import * as e$1 from 'vue';
import { defineComponent, ref, unref, isRef, withCtx, createVNode, resolveComponent, mergeProps, renderSlot, createBlock, createCommentVNode, openBlock, toRef, computed, resolveDynamicComponent, h as h$1, onMounted, onUnmounted, watchEffect, watch, provide, normalizeClass, inject, getCurrentInstance, Teleport, reactive, Fragment, cloneVNode, shallowRef, nextTick, useId, useSSRContext } from 'vue';
import { _ as _export_sfc, h as useToast, k as useState, b as useUI, m as mergeConfig, g as useUserSession, j as __nuxt_component_1$1, t as twMerge, c as appConfig, e as __nuxt_component_0$4, f as useInjectButtonGroup, i as input, d as useDebounceFn, l as looseToNumber } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrRenderSlot, ssrRenderVNode } from 'vue/server-renderer';
import { twJoin } from 'tailwind-merge';
import { m as defu } from '../_/nitro.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'node:crypto';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'node:path';

const skeleton = {
  base: "animate-pulse",
  background: "bg-gray-100 dark:bg-gray-800",
  rounded: "rounded-md"
};
const modal = {
  wrapper: "relative z-50",
  inner: "fixed inset-0 overflow-y-auto",
  container: "flex min-h-full items-end sm:items-center justify-center text-center",
  padding: "p-4 sm:p-0",
  margin: "sm:my-8",
  base: "relative text-left rtl:text-right flex flex-col",
  overlay: {
    base: "fixed inset-0 transition-opacity",
    background: "bg-gray-200/75 dark:bg-gray-800/75",
    // Syntax for `<TransitionRoot>` component https://headlessui.com/v1/vue/transition#basic-example
    transition: {
      enter: "ease-out duration-300",
      enterFrom: "opacity-0",
      enterTo: "opacity-100",
      leave: "ease-in duration-200",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0"
    }
  },
  background: "bg-white dark:bg-gray-900",
  ring: "",
  rounded: "rounded-lg",
  shadow: "shadow-xl",
  width: "w-full sm:max-w-lg",
  height: "",
  fullscreen: "w-screen h-screen",
  // Syntax for `<TransitionRoot>` component https://headlessui.com/v1/vue/transition#basic-example
  transition: {
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
    enterTo: "opacity-100 translate-y-0 sm:scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
  }
};
function t$4(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o2) => setTimeout(() => {
    throw o2;
  }));
}
function o$3() {
  let a2 = [], s3 = { addEventListener(e2, t2, r2, i2) {
    return e2.addEventListener(t2, r2, i2), s3.add(() => e2.removeEventListener(t2, r2, i2));
  }, requestAnimationFrame(...e2) {
    let t2 = requestAnimationFrame(...e2);
    s3.add(() => cancelAnimationFrame(t2));
  }, nextFrame(...e2) {
    s3.requestAnimationFrame(() => {
      s3.requestAnimationFrame(...e2);
    });
  }, setTimeout(...e2) {
    let t2 = setTimeout(...e2);
    s3.add(() => clearTimeout(t2));
  }, microTask(...e2) {
    let t2 = { current: true };
    return t$4(() => {
      t2.current && e2[0]();
    }), s3.add(() => {
      t2.current = false;
    });
  }, style(e2, t2, r2) {
    let i2 = e2.style.getPropertyValue(t2);
    return Object.assign(e2.style, { [t2]: r2 }), this.add(() => {
      Object.assign(e2.style, { [t2]: i2 });
    });
  }, group(e2) {
    let t2 = o$3();
    return e2(t2), this.add(() => t2.dispose());
  }, add(e2) {
    return a2.push(e2), () => {
      let t2 = a2.indexOf(e2);
      if (t2 >= 0) for (let r2 of a2.splice(t2, 1)) r2();
    };
  }, dispose() {
    for (let e2 of a2.splice(0)) e2();
  } };
  return s3;
}
var r;
let n$4 = Symbol("headlessui.useid"), o$2 = 0;
const i$5 = (r = e$1.useId) != null ? r : function() {
  return e$1.inject(n$4, () => `${++o$2}`)();
};
function s$4(t2) {
  e$1.provide(n$4, t2);
}
function o$1(e2) {
  var l2;
  if (e2 == null || e2.value == null) return null;
  let n2 = (l2 = e2.value.$el) != null ? l2 : e2.value;
  return n2 instanceof Node ? n2 : null;
}
function u$5(r2, n2, ...a2) {
  if (r2 in n2) {
    let e2 = n2[r2];
    return typeof e2 == "function" ? e2(...a2) : e2;
  }
  let t2 = new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e2) => `"${e2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t2, u$5), t2;
}
var i$4 = Object.defineProperty;
var d$4 = (t2, e2, r2) => e2 in t2 ? i$4(t2, e2, { enumerable: true, configurable: true, writable: true, value: r2 }) : t2[e2] = r2;
var n$3 = (t2, e2, r2) => (d$4(t2, typeof e2 != "symbol" ? e2 + "" : e2, r2), r2);
let s$3 = class s {
  constructor() {
    n$3(this, "current", this.detect());
    n$3(this, "currentId", 0);
  }
  set(e2) {
    this.current !== e2 && (this.currentId = 0, this.current = e2);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return "server";
  }
};
let c$2 = new s$3();
function i$3(r2) {
  if (c$2.isServer) return null;
  if (r2 instanceof Node) return r2.ownerDocument;
  if (r2 != null && r2.hasOwnProperty("value")) {
    let n2 = o$1(r2);
    if (n2) return n2.ownerDocument;
  }
  return void 0;
}
let c$1 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e2) => `${e2}:not([tabindex='-1'])`).join(",");
var N$4 = ((n2) => (n2[n2.First = 1] = "First", n2[n2.Previous = 2] = "Previous", n2[n2.Next = 4] = "Next", n2[n2.Last = 8] = "Last", n2[n2.WrapAround = 16] = "WrapAround", n2[n2.NoScroll = 32] = "NoScroll", n2))(N$4 || {}), T$2 = ((o2) => (o2[o2.Error = 0] = "Error", o2[o2.Overflow = 1] = "Overflow", o2[o2.Success = 2] = "Success", o2[o2.Underflow = 3] = "Underflow", o2))(T$2 || {}), F$1 = ((t2) => (t2[t2.Previous = -1] = "Previous", t2[t2.Next = 1] = "Next", t2))(F$1 || {});
function E$2(e2 = (void 0).body) {
  return e2 == null ? [] : Array.from(e2.querySelectorAll(c$1)).sort((r2, t2) => Math.sign((r2.tabIndex || Number.MAX_SAFE_INTEGER) - (t2.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var h = ((t2) => (t2[t2.Strict = 0] = "Strict", t2[t2.Loose = 1] = "Loose", t2))(h || {});
function w$4(e2, r2 = 0) {
  var t2;
  return e2 === ((t2 = i$3(e2)) == null ? void 0 : t2.body) ? false : u$5(r2, { [0]() {
    return e2.matches(c$1);
  }, [1]() {
    let l2 = e2;
    for (; l2 !== null; ) {
      if (l2.matches(c$1)) return true;
      l2 = l2.parentElement;
    }
    return false;
  } });
}
var y$2 = ((t2) => (t2[t2.Keyboard = 0] = "Keyboard", t2[t2.Mouse = 1] = "Mouse", t2))(y$2 || {});
function S$1(e2) {
  e2 == null || e2.focus({ preventScroll: true });
}
let H$2 = ["textarea", "input"].join(",");
function I(e2) {
  var r2, t2;
  return (t2 = (r2 = e2 == null ? void 0 : e2.matches) == null ? void 0 : r2.call(e2, H$2)) != null ? t2 : false;
}
function O(e2, r2 = (t2) => t2) {
  return e2.slice().sort((t2, l2) => {
    let o2 = r2(t2), i2 = r2(l2);
    if (o2 === null || i2 === null) return 0;
    let n2 = o2.compareDocumentPosition(i2);
    return n2 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n2 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function P(e2, r2, { sorted: t2 = true, relativeTo: l2 = null, skipElements: o2 = [] } = {}) {
  var m2;
  let i2 = (m2 = Array.isArray(e2) ? e2.length > 0 ? e2[0].ownerDocument : void 0 : e2 == null ? void 0 : e2.ownerDocument) != null ? m2 : void 0, n2 = Array.isArray(e2) ? t2 ? O(e2) : e2 : E$2(e2);
  o2.length > 0 && n2.length > 1 && (n2 = n2.filter((s3) => !o2.includes(s3))), l2 = l2 != null ? l2 : i2.activeElement;
  let x2 = (() => {
    if (r2 & 5) return 1;
    if (r2 & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p = (() => {
    if (r2 & 1) return 0;
    if (r2 & 2) return Math.max(0, n2.indexOf(l2)) - 1;
    if (r2 & 4) return Math.max(0, n2.indexOf(l2)) + 1;
    if (r2 & 8) return n2.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), L2 = r2 & 32 ? { preventScroll: true } : {}, a2 = 0, d2 = n2.length, u2;
  do {
    if (a2 >= d2 || a2 + d2 <= 0) return 0;
    let s3 = p + a2;
    if (r2 & 16) s3 = (s3 + d2) % d2;
    else {
      if (s3 < 0) return 3;
      if (s3 >= d2) return 1;
    }
    u2 = n2[s3], u2 == null || u2.focus(L2), a2 += x2;
  } while (u2 !== i2.activeElement);
  return r2 & 6 && I(u2) && u2.select(), 2;
}
function t$3() {
  return /iPhone/gi.test((void 0).navigator.platform) || /Mac/gi.test((void 0).navigator.platform) && (void 0).navigator.maxTouchPoints > 0;
}
function i$2() {
  return /Android/gi.test((void 0).navigator.userAgent);
}
function n$2() {
  return t$3() || i$2();
}
function u$4(e2, t2, n2) {
  c$2.isServer || watchEffect((o2) => {
    (void 0).addEventListener(e2, t2, n2), o2(() => (void 0).removeEventListener(e2, t2, n2));
  });
}
function w$3(e2, n2, t2) {
  c$2.isServer || watchEffect((o2) => {
    (void 0).addEventListener(e2, n2, t2), o2(() => (void 0).removeEventListener(e2, n2, t2));
  });
}
function w$2(f2, m2, l2 = computed(() => true)) {
  function a2(e2, r2) {
    if (!l2.value || e2.defaultPrevented) return;
    let t2 = r2(e2);
    if (t2 === null || !t2.getRootNode().contains(t2)) return;
    let c2 = function o2(n2) {
      return typeof n2 == "function" ? o2(n2()) : Array.isArray(n2) || n2 instanceof Set ? n2 : [n2];
    }(f2);
    for (let o2 of c2) {
      if (o2 === null) continue;
      let n2 = o2 instanceof HTMLElement ? o2 : o$1(o2);
      if (n2 != null && n2.contains(t2) || e2.composed && e2.composedPath().includes(n2)) return;
    }
    return !w$4(t2, h.Loose) && t2.tabIndex !== -1 && e2.preventDefault(), m2(e2, t2);
  }
  let u2 = ref(null);
  u$4("pointerdown", (e2) => {
    var r2, t2;
    l2.value && (u2.value = ((t2 = (r2 = e2.composedPath) == null ? void 0 : r2.call(e2)) == null ? void 0 : t2[0]) || e2.target);
  }, true), u$4("mousedown", (e2) => {
    var r2, t2;
    l2.value && (u2.value = ((t2 = (r2 = e2.composedPath) == null ? void 0 : r2.call(e2)) == null ? void 0 : t2[0]) || e2.target);
  }, true), u$4("click", (e2) => {
    n$2() || u2.value && (a2(e2, () => u2.value), u2.value = null);
  }, true), u$4("touchend", (e2) => a2(e2, () => e2.target instanceof HTMLElement ? e2.target : null), true), w$3("blur", (e2) => a2(e2, () => (void 0).document.activeElement instanceof HTMLIFrameElement ? (void 0).document.activeElement : null), true);
}
var N$3 = ((o2) => (o2[o2.None = 0] = "None", o2[o2.RenderStrategy = 1] = "RenderStrategy", o2[o2.Static = 2] = "Static", o2))(N$3 || {}), S = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(S || {});
function A$2({ visible: r2 = true, features: t2 = 0, ourProps: e2, theirProps: o2, ...i2 }) {
  var a2;
  let n2 = j(o2, e2), l2 = Object.assign(i2, { props: n2 });
  if (r2 || t2 & 2 && n2.static) return y$1(l2);
  if (t2 & 1) {
    let d2 = (a2 = n2.unmount) == null || a2 ? 0 : 1;
    return u$5(d2, { [0]() {
      return null;
    }, [1]() {
      return y$1({ ...i2, props: { ...n2, hidden: true, style: { display: "none" } } });
    } });
  }
  return y$1(l2);
}
function y$1({ props: r2, attrs: t2, slots: e2, slot: o2, name: i2 }) {
  var m2, h2;
  let { as: n2, ...l2 } = T$1(r2, ["unmount", "static"]), a2 = (m2 = e2.default) == null ? void 0 : m2.call(e2, o2), d2 = {};
  if (o2) {
    let u2 = false, c2 = [];
    for (let [p, f2] of Object.entries(o2)) typeof f2 == "boolean" && (u2 = true), f2 === true && c2.push(p);
    u2 && (d2["data-headlessui-state"] = c2.join(" "));
  }
  if (n2 === "template") {
    if (a2 = b(a2 != null ? a2 : []), Object.keys(l2).length > 0 || Object.keys(t2).length > 0) {
      let [u2, ...c2] = a2 != null ? a2 : [];
      if (!v(u2) || c2.length > 0) throw new Error(['Passing props on "template"!', "", `The current component <${i2} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l2).concat(Object.keys(t2)).map((s3) => s3.trim()).filter((s3, g2, R2) => R2.indexOf(s3) === g2).sort((s3, g2) => s3.localeCompare(g2)).map((s3) => `  - ${s3}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((s3) => `  - ${s3}`).join(`
`)].join(`
`));
      let p = j((h2 = u2.props) != null ? h2 : {}, l2, d2), f2 = cloneVNode(u2, p, true);
      for (let s3 in p) s3.startsWith("on") && (f2.props || (f2.props = {}), f2.props[s3] = p[s3]);
      return f2;
    }
    return Array.isArray(a2) && a2.length === 1 ? a2[0] : a2;
  }
  return h$1(n2, Object.assign({}, l2, d2), { default: () => a2 });
}
function b(r2) {
  return r2.flatMap((t2) => t2.type === Fragment ? b(t2.children) : [t2]);
}
function j(...r2) {
  if (r2.length === 0) return {};
  if (r2.length === 1) return r2[0];
  let t2 = {}, e2 = {};
  for (let i2 of r2) for (let n2 in i2) n2.startsWith("on") && typeof i2[n2] == "function" ? (e2[n2] != null || (e2[n2] = []), e2[n2].push(i2[n2])) : t2[n2] = i2[n2];
  if (t2.disabled || t2["aria-disabled"]) return Object.assign(t2, Object.fromEntries(Object.keys(e2).map((i2) => [i2, void 0])));
  for (let i2 in e2) Object.assign(t2, { [i2](n2, ...l2) {
    let a2 = e2[i2];
    for (let d2 of a2) {
      if (n2 instanceof Event && n2.defaultPrevented) return;
      d2(n2, ...l2);
    }
  } });
  return t2;
}
function T$1(r2, t2 = []) {
  let e2 = Object.assign({}, r2);
  for (let o2 of t2) o2 in e2 && delete e2[o2];
  return e2;
}
function v(r2) {
  return r2 == null ? false : typeof r2.type == "string" || typeof r2.type == "object" || typeof r2.type == "function";
}
var u$3 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(u$3 || {});
let f$1 = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(t2, { slots: n2, attrs: i2 }) {
  return () => {
    var r2;
    let { features: e2, ...d2 } = t2, o2 = { "aria-hidden": (e2 & 2) === 2 ? true : (r2 = d2["aria-hidden"]) != null ? r2 : void 0, hidden: (e2 & 4) === 4 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e2 & 4) === 4 && (e2 & 2) !== 2 && { display: "none" } } };
    return A$2({ ourProps: o2, theirProps: d2, slot: {}, attrs: i2, slots: n2, name: "Hidden" });
  };
} });
let n$1 = Symbol("Context");
var i$1 = ((e2) => (e2[e2.Open = 1] = "Open", e2[e2.Closed = 2] = "Closed", e2[e2.Closing = 4] = "Closing", e2[e2.Opening = 8] = "Opening", e2))(i$1 || {});
function s$2() {
  return l$2() !== null;
}
function l$2() {
  return inject(n$1, null);
}
function t$2(o2) {
  provide(n$1, o2);
}
var o = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o || {});
let t$1 = [];
function E$1(n2, e2, o2, r2) {
  c$2.isServer || watchEffect((t2) => {
    n2 = n2 != null ? n2 : void 0, n2.addEventListener(e2, o2, r2), t2(() => n2.removeEventListener(e2, o2, r2));
  });
}
var d$3 = ((r2) => (r2[r2.Forwards = 0] = "Forwards", r2[r2.Backwards = 1] = "Backwards", r2))(d$3 || {});
function n() {
  let o2 = ref(0);
  return w$3("keydown", (e2) => {
    e2.key === "Tab" && (o2.value = e2.shiftKey ? 1 : 0);
  }), o2;
}
function B(t2) {
  if (!t2) return /* @__PURE__ */ new Set();
  if (typeof t2 == "function") return new Set(t2());
  let n2 = /* @__PURE__ */ new Set();
  for (let r2 of t2.value) {
    let l2 = o$1(r2);
    l2 instanceof HTMLElement && n2.add(l2);
  }
  return n2;
}
var A$1 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.InitialFocus = 2] = "InitialFocus", e2[e2.TabLock = 4] = "TabLock", e2[e2.FocusLock = 8] = "FocusLock", e2[e2.RestoreFocus = 16] = "RestoreFocus", e2[e2.All = 30] = "All", e2))(A$1 || {});
let ue = Object.assign(defineComponent({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: ref(/* @__PURE__ */ new Set()) } }, inheritAttrs: false, setup(t2, { attrs: n$12, slots: r2, expose: l2 }) {
  let o2 = ref(null);
  l2({ el: o2, $el: o2 });
  let i2 = computed(() => i$3(o2)), e2 = ref(false);
  onMounted(() => e2.value = true), onUnmounted(() => e2.value = false), $$1({ ownerDocument: i2 }, computed(() => e2.value && Boolean(t2.features & 16)));
  let m2 = z$1({ ownerDocument: i2, container: o2, initialFocus: computed(() => t2.initialFocus) }, computed(() => e2.value && Boolean(t2.features & 2)));
  J({ ownerDocument: i2, container: o2, containers: t2.containers, previousActiveElement: m2 }, computed(() => e2.value && Boolean(t2.features & 8)));
  let f2 = n();
  function a2(u2) {
    let T2 = o$1(o2);
    if (!T2) return;
    ((w2) => w2())(() => {
      u$5(f2.value, { [d$3.Forwards]: () => {
        P(T2, N$4.First, { skipElements: [u2.relatedTarget] });
      }, [d$3.Backwards]: () => {
        P(T2, N$4.Last, { skipElements: [u2.relatedTarget] });
      } });
    });
  }
  let s3 = ref(false);
  function F2(u2) {
    u2.key === "Tab" && (s3.value = true, requestAnimationFrame(() => {
      s3.value = false;
    }));
  }
  function H2(u2) {
    if (!e2.value) return;
    let T2 = B(t2.containers);
    o$1(o2) instanceof HTMLElement && T2.add(o$1(o2));
    let d2 = u2.relatedTarget;
    d2 instanceof HTMLElement && d2.dataset.headlessuiFocusGuard !== "true" && (N$2(T2, d2) || (s3.value ? P(o$1(o2), u$5(f2.value, { [d$3.Forwards]: () => N$4.Next, [d$3.Backwards]: () => N$4.Previous }) | N$4.WrapAround, { relativeTo: u2.target }) : u2.target instanceof HTMLElement && S$1(u2.target)));
  }
  return () => {
    let u2 = {}, T2 = { ref: o2, onKeydown: F2, onFocusout: H2 }, { features: d2, initialFocus: w2, containers: Q2, ...O2 } = t2;
    return h$1(Fragment, [Boolean(d2 & 4) && h$1(f$1, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: a2, features: u$3.Focusable }), A$2({ ourProps: T2, theirProps: { ...n$12, ...O2 }, slot: u2, attrs: n$12, slots: r2, name: "FocusTrap" }), Boolean(d2 & 4) && h$1(f$1, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: a2, features: u$3.Focusable })]);
  };
} }), { features: A$1 });
function W$1(t2) {
  let n2 = ref(t$1.slice());
  return watch([t2], ([r2], [l2]) => {
    l2 === true && r2 === false ? t$4(() => {
      n2.value.splice(0);
    }) : l2 === false && r2 === true && (n2.value = t$1.slice());
  }, { flush: "post" }), () => {
    var r2;
    return (r2 = n2.value.find((l2) => l2 != null && l2.isConnected)) != null ? r2 : null;
  };
}
function $$1({ ownerDocument: t2 }, n2) {
  let r2 = W$1(n2);
  onMounted(() => {
    watchEffect(() => {
      var l2, o2;
      n2.value || ((l2 = t2.value) == null ? void 0 : l2.activeElement) === ((o2 = t2.value) == null ? void 0 : o2.body) && S$1(r2());
    }, { flush: "post" });
  }), onUnmounted(() => {
    n2.value && S$1(r2());
  });
}
function z$1({ ownerDocument: t2, container: n2, initialFocus: r2 }, l2) {
  let o2 = ref(null), i2 = ref(false);
  return onMounted(() => i2.value = true), onUnmounted(() => i2.value = false), onMounted(() => {
    watch([n2, r2, l2], (e2, m2) => {
      if (e2.every((a2, s3) => (m2 == null ? void 0 : m2[s3]) === a2) || !l2.value) return;
      let f2 = o$1(n2);
      f2 && t$4(() => {
        var F2, H2;
        if (!i2.value) return;
        let a2 = o$1(r2), s3 = (F2 = t2.value) == null ? void 0 : F2.activeElement;
        if (a2) {
          if (a2 === s3) {
            o2.value = s3;
            return;
          }
        } else if (f2.contains(s3)) {
          o2.value = s3;
          return;
        }
        a2 ? S$1(a2) : P(f2, N$4.First | N$4.NoScroll) === T$2.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), o2.value = (H2 = t2.value) == null ? void 0 : H2.activeElement;
      });
    }, { immediate: true, flush: "post" });
  }), o2;
}
function J({ ownerDocument: t2, container: n2, containers: r2, previousActiveElement: l2 }, o2) {
  var i2;
  E$1((i2 = t2.value) == null ? void 0 : i2.defaultView, "focus", (e2) => {
    if (!o2.value) return;
    let m2 = B(r2);
    o$1(n2) instanceof HTMLElement && m2.add(o$1(n2));
    let f2 = l2.value;
    if (!f2) return;
    let a2 = e2.target;
    a2 && a2 instanceof HTMLElement ? N$2(m2, a2) ? (l2.value = a2, S$1(a2)) : (e2.preventDefault(), e2.stopPropagation(), S$1(f2)) : S$1(l2.value);
  }, true);
}
function N$2(t2, n2) {
  for (let r2 of t2) if (r2.contains(n2)) return true;
  return false;
}
function m$2(t2) {
  let e2 = shallowRef(t2.getSnapshot());
  return onUnmounted(t2.subscribe(() => {
    e2.value = t2.getSnapshot();
  })), e2;
}
function a$1(o2, r2) {
  let t2 = o2(), n2 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t2;
  }, subscribe(e2) {
    return n2.add(e2), () => n2.delete(e2);
  }, dispatch(e2, ...s3) {
    let i2 = r2[e2].call(t2, ...s3);
    i2 && (t2 = i2, n2.forEach((c2) => c2()));
  } };
}
function c() {
  let o2;
  return { before({ doc: e2 }) {
    var l2;
    let n2 = e2.documentElement;
    o2 = ((l2 = e2.defaultView) != null ? l2 : void 0).innerWidth - n2.clientWidth;
  }, after({ doc: e2, d: n2 }) {
    let t2 = e2.documentElement, l2 = t2.clientWidth - t2.offsetWidth, r2 = o2 - l2;
    n2.style(t2, "paddingRight", `${r2}px`);
  } };
}
function w$1() {
  return t$3() ? { before({ doc: r2, d: n2, meta: c2 }) {
    function a2(o2) {
      return c2.containers.flatMap((l2) => l2()).some((l2) => l2.contains(o2));
    }
    n2.microTask(() => {
      var s3;
      if ((void 0).getComputedStyle(r2.documentElement).scrollBehavior !== "auto") {
        let t2 = o$3();
        t2.style(r2.documentElement, "scrollBehavior", "auto"), n2.add(() => n2.microTask(() => t2.dispose()));
      }
      let o2 = (s3 = (void 0).scrollY) != null ? s3 : (void 0).pageYOffset, l2 = null;
      n2.addEventListener(r2, "click", (t2) => {
        if (t2.target instanceof HTMLElement) try {
          let e2 = t2.target.closest("a");
          if (!e2) return;
          let { hash: f2 } = new URL(e2.href), i2 = r2.querySelector(f2);
          i2 && !a2(i2) && (l2 = i2);
        } catch {
        }
      }, true), n2.addEventListener(r2, "touchstart", (t2) => {
        if (t2.target instanceof HTMLElement) if (a2(t2.target)) {
          let e2 = t2.target;
          for (; e2.parentElement && a2(e2.parentElement); ) e2 = e2.parentElement;
          n2.style(e2, "overscrollBehavior", "contain");
        } else n2.style(t2.target, "touchAction", "none");
      }), n2.addEventListener(r2, "touchmove", (t2) => {
        if (t2.target instanceof HTMLElement) {
          if (t2.target.tagName === "INPUT") return;
          if (a2(t2.target)) {
            let e2 = t2.target;
            for (; e2.parentElement && e2.dataset.headlessuiPortal !== "" && !(e2.scrollHeight > e2.clientHeight || e2.scrollWidth > e2.clientWidth); ) e2 = e2.parentElement;
            e2.dataset.headlessuiPortal === "" && t2.preventDefault();
          } else t2.preventDefault();
        }
      }, { passive: false }), n2.add(() => {
        var e2;
        let t2 = (e2 = (void 0).scrollY) != null ? e2 : (void 0).pageYOffset;
        o2 !== t2 && (void 0).scrollTo(0, o2), l2 && l2.isConnected && (l2.scrollIntoView({ block: "nearest" }), l2 = null);
      });
    });
  } } : {};
}
function l$1() {
  return { before({ doc: e2, d: o2 }) {
    o2.style(e2.documentElement, "overflow", "hidden");
  } };
}
function m$1(e2) {
  let n2 = {};
  for (let t2 of e2) Object.assign(n2, t2(n2));
  return n2;
}
let a = a$1(() => /* @__PURE__ */ new Map(), { PUSH(e2, n2) {
  var o2;
  let t2 = (o2 = this.get(e2)) != null ? o2 : { doc: e2, count: 0, d: o$3(), meta: /* @__PURE__ */ new Set() };
  return t2.count++, t2.meta.add(n2), this.set(e2, t2), this;
}, POP(e2, n2) {
  let t2 = this.get(e2);
  return t2 && (t2.count--, t2.meta.delete(n2)), this;
}, SCROLL_PREVENT({ doc: e2, d: n2, meta: t2 }) {
  let o2 = { doc: e2, d: n2, meta: m$1(t2) }, c$12 = [w$1(), c(), l$1()];
  c$12.forEach(({ before: r2 }) => r2 == null ? void 0 : r2(o2)), c$12.forEach(({ after: r2 }) => r2 == null ? void 0 : r2(o2));
}, SCROLL_ALLOW({ d: e2 }) {
  e2.dispose();
}, TEARDOWN({ doc: e2 }) {
  this.delete(e2);
} });
a.subscribe(() => {
  let e2 = a.getSnapshot(), n2 = /* @__PURE__ */ new Map();
  for (let [t2] of e2) n2.set(t2, t2.documentElement.style.overflow);
  for (let t2 of e2.values()) {
    let o2 = n2.get(t2.doc) === "hidden", c2 = t2.count !== 0;
    (c2 && !o2 || !c2 && o2) && a.dispatch(t2.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t2), t2.count === 0 && a.dispatch("TEARDOWN", t2);
  }
});
function d$2(t2, a$12, n2) {
  let i2 = m$2(a), l2 = computed(() => {
    let e2 = t2.value ? i2.value.get(t2.value) : void 0;
    return e2 ? e2.count > 0 : false;
  });
  return watch([t2, a$12], ([e2, m2], [r2], o2) => {
    if (!e2 || !m2) return;
    a.dispatch("PUSH", e2, n2);
    let f2 = false;
    o2(() => {
      f2 || (a.dispatch("POP", r2 != null ? r2 : e2, n2), f2 = true);
    });
  }, { immediate: true }), l2;
}
let i = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
function E(d2, f2 = ref(true)) {
  watchEffect((o2) => {
    var a2;
    if (!f2.value) return;
    let e2 = o$1(d2);
    if (!e2) return;
    o2(function() {
      var u2;
      if (!e2) return;
      let r2 = (u2 = t.get(e2)) != null ? u2 : 1;
      if (r2 === 1 ? t.delete(e2) : t.set(e2, r2 - 1), r2 !== 1) return;
      let n2 = i.get(e2);
      n2 && (n2["aria-hidden"] === null ? e2.removeAttribute("aria-hidden") : e2.setAttribute("aria-hidden", n2["aria-hidden"]), e2.inert = n2.inert, i.delete(e2));
    });
    let l2 = (a2 = t.get(e2)) != null ? a2 : 0;
    t.set(e2, l2 + 1), l2 === 0 && (i.set(e2, { "aria-hidden": e2.getAttribute("aria-hidden"), inert: e2.inert }), e2.setAttribute("aria-hidden", "true"), e2.inert = true);
  });
}
function N$1({ defaultContainers: o2 = [], portals: i2, mainTreeNodeRef: H2 } = {}) {
  let t2 = ref(null), r2 = i$3(t2);
  function u2() {
    var l2, f2, a2;
    let n2 = [];
    for (let e2 of o2) e2 !== null && (e2 instanceof HTMLElement ? n2.push(e2) : "value" in e2 && e2.value instanceof HTMLElement && n2.push(e2.value));
    if (i2 != null && i2.value) for (let e2 of i2.value) n2.push(e2);
    for (let e2 of (l2 = r2 == null ? void 0 : r2.querySelectorAll("html > *, body > *")) != null ? l2 : []) e2 !== (void 0).body && e2 !== (void 0).head && e2 instanceof HTMLElement && e2.id !== "headlessui-portal-root" && (e2.contains(o$1(t2)) || e2.contains((a2 = (f2 = o$1(t2)) == null ? void 0 : f2.getRootNode()) == null ? void 0 : a2.host) || n2.some((M2) => e2.contains(M2)) || n2.push(e2));
    return n2;
  }
  return { resolveContainers: u2, contains(n2) {
    return u2().some((l2) => l2.contains(n2));
  }, mainTreeNodeRef: t2, MainTreeNode() {
    return H2 != null ? null : h$1(f$1, { features: u$3.Hidden, ref: t2 });
  } };
}
let e = Symbol("ForcePortalRootContext");
function s$1() {
  return inject(e, false);
}
let u$2 = defineComponent({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: false } }, setup(o2, { slots: t2, attrs: r2 }) {
  return provide(e, o2.force), () => {
    let { force: f2, ...n2 } = o2;
    return A$2({ theirProps: n2, ourProps: {}, slot: {}, slots: t2, attrs: r2, name: "ForcePortalRoot" });
  };
} });
let u$1 = Symbol("StackContext");
var s2 = ((e2) => (e2[e2.Add = 0] = "Add", e2[e2.Remove = 1] = "Remove", e2))(s2 || {});
function y() {
  return inject(u$1, () => {
  });
}
function R$1({ type: o2, enabled: r2, element: e2, onUpdate: i2 }) {
  let a2 = y();
  function t2(...n2) {
    i2 == null || i2(...n2), a2(...n2);
  }
  onMounted(() => {
    watch(r2, (n2, d2) => {
      n2 ? t2(0, o2, e2) : d2 === true && t2(1, o2, e2);
    }, { immediate: true, flush: "sync" });
  }), onUnmounted(() => {
    r2.value && t2(1, o2, e2);
  }), provide(u$1, t2);
}
let u = Symbol("DescriptionContext");
function w() {
  let t2 = inject(u, null);
  if (t2 === null) throw new Error("Missing parent");
  return t2;
}
function k({ slot: t2 = ref({}), name: o2 = "Description", props: s3 = {} } = {}) {
  let e2 = ref([]);
  function r2(n2) {
    return e2.value.push(n2), () => {
      let i2 = e2.value.indexOf(n2);
      i2 !== -1 && e2.value.splice(i2, 1);
    };
  }
  return provide(u, { register: r2, slot: t2, name: o2, props: s3 }), computed(() => e2.value.length > 0 ? e2.value.join(" ") : void 0);
}
defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: null } }, setup(t2, { attrs: o2, slots: s3 }) {
  var n2;
  let e2 = (n2 = t2.id) != null ? n2 : `headlessui-description-${i$5()}`, r2 = w();
  return onMounted(() => onUnmounted(r2.register(e2))), () => {
    let { name: i2 = "Description", slot: l2 = ref({}), props: d2 = {} } = r2, { ...c2 } = t2, f2 = { ...Object.entries(d2).reduce((a2, [g2, m2]) => Object.assign(a2, { [g2]: unref(m2) }), {}), id: e2 };
    return A$2({ ourProps: f2, theirProps: c2, slot: l2.value, attrs: o2, slots: s3, name: i2 });
  };
} });
function x(e2) {
  let t2 = i$3(e2);
  if (!t2) {
    if (e2 === null) return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e2}`);
  }
  let l2 = t2.getElementById("headlessui-portal-root");
  if (l2) return l2;
  let r2 = t2.createElement("div");
  return r2.setAttribute("id", "headlessui-portal-root"), t2.body.appendChild(r2);
}
const f = /* @__PURE__ */ new WeakMap();
function U(e2) {
  var t2;
  return (t2 = f.get(e2)) != null ? t2 : 0;
}
function M(e2, t2) {
  let l2 = t2(U(e2));
  return l2 <= 0 ? f.delete(e2) : f.set(e2, l2), l2;
}
let $ = defineComponent({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e2, { slots: t2, attrs: l2 }) {
  let r2 = ref(null), i2 = computed(() => i$3(r2)), o2 = s$1(), u2 = inject(H$1, null), n2 = ref(o2 === true || u2 == null ? x(r2.value) : u2.resolveTarget());
  n2.value && M(n2.value, (a2) => a2 + 1);
  let c2 = ref(false);
  onMounted(() => {
    c2.value = true;
  }), watchEffect(() => {
    o2 || u2 != null && (n2.value = u2.resolveTarget());
  });
  let v2 = inject(d$1, null), g2 = false, b2 = getCurrentInstance();
  return watch(r2, () => {
    if (g2 || !v2) return;
    let a2 = o$1(r2);
    a2 && (onUnmounted(v2.register(a2), b2), g2 = true);
  }), onUnmounted(() => {
    var P2, T2;
    let a2 = (P2 = i2.value) == null ? void 0 : P2.getElementById("headlessui-portal-root");
    !a2 || n2.value !== a2 || M(n2.value, (L2) => L2 - 1) || n2.value.children.length > 0 || (T2 = n2.value.parentElement) == null || T2.removeChild(n2.value);
  }), () => {
    if (!c2.value || n2.value === null) return null;
    let a2 = { ref: r2, "data-headlessui-portal": "" };
    return h$1(Teleport, { to: n2.value }, A$2({ ourProps: a2, theirProps: e2, slot: {}, attrs: l2, slots: t2, name: "Portal" }));
  };
} }), d$1 = Symbol("PortalParentContext");
function q() {
  let e2 = inject(d$1, null), t2 = ref([]);
  function l2(o2) {
    return t2.value.push(o2), e2 && e2.register(o2), () => r2(o2);
  }
  function r2(o2) {
    let u2 = t2.value.indexOf(o2);
    u2 !== -1 && t2.value.splice(u2, 1), e2 && e2.unregister(o2);
  }
  let i2 = { register: l2, unregister: r2, portals: t2 };
  return [t2, defineComponent({ name: "PortalWrapper", setup(o2, { slots: u2 }) {
    return provide(d$1, i2), () => {
      var n2;
      return (n2 = u2.default) == null ? void 0 : n2.call(u2);
    };
  } })];
}
let H$1 = Symbol("PortalGroupContext"), z = defineComponent({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e2, { attrs: t2, slots: l2 }) {
  let r2 = reactive({ resolveTarget() {
    return e2.target;
  } });
  return provide(H$1, r2), () => {
    let { target: i2, ...o2 } = e2;
    return A$2({ theirProps: o2, ourProps: {}, slot: {}, attrs: t2, slots: l2, name: "PortalGroup" });
  };
} });
var Te$1 = ((l2) => (l2[l2.Open = 0] = "Open", l2[l2.Closed = 1] = "Closed", l2))(Te$1 || {});
let H = Symbol("DialogContext");
function T(t2) {
  let i2 = inject(H, null);
  if (i2 === null) {
    let l2 = new Error(`<${t2} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l2, T), l2;
  }
  return i2;
}
let A = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Ye = defineComponent({ name: "Dialog", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, open: { type: [Boolean, String], default: A }, initialFocus: { type: Object, default: null }, id: { type: String, default: null }, role: { type: String, default: "dialog" } }, emits: { close: (t2) => true }, setup(t2, { emit: i2, attrs: l2, slots: p, expose: s$12 }) {
  var q$1, W2;
  let n2 = (q$1 = t2.id) != null ? q$1 : `headlessui-dialog-${i$5()}`, u2 = ref(false);
  onMounted(() => {
    u2.value = true;
  });
  let r2 = false, g2 = computed(() => t2.role === "dialog" || t2.role === "alertdialog" ? t2.role : (r2 || (r2 = true, console.warn(`Invalid role [${g2}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")), D = ref(0), S2 = l$2(), R2 = computed(() => t2.open === A && S2 !== null ? (S2.value & i$1.Open) === i$1.Open : t2.open), m2 = ref(null), E$22 = computed(() => i$3(m2));
  if (s$12({ el: m2, $el: m2 }), !(t2.open !== A || S2 !== null)) throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof R2.value != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${R2.value === A ? void 0 : t2.open}`);
  let c2 = computed(() => u2.value && R2.value ? 0 : 1), k$1 = computed(() => c2.value === 0), w2 = computed(() => D.value > 1), N2 = inject(H, null) !== null, [Q2, X] = q(), { resolveContainers: B2, mainTreeNodeRef: K, MainTreeNode: Z } = N$1({ portals: Q2, defaultContainers: [computed(() => {
    var e2;
    return (e2 = h2.panelRef.value) != null ? e2 : m2.value;
  })] }), ee = computed(() => w2.value ? "parent" : "leaf"), U2 = computed(() => S2 !== null ? (S2.value & i$1.Closing) === i$1.Closing : false), te = computed(() => N2 || U2.value ? false : k$1.value), le = computed(() => {
    var e2, a2, d2;
    return (d2 = Array.from((a2 = (e2 = E$22.value) == null ? void 0 : e2.querySelectorAll("body > *")) != null ? a2 : []).find((f2) => f2.id === "headlessui-portal-root" ? false : f2.contains(o$1(K)) && f2 instanceof HTMLElement)) != null ? d2 : null;
  });
  E(le, te);
  let ae = computed(() => w2.value ? true : k$1.value), oe = computed(() => {
    var e2, a2, d2;
    return (d2 = Array.from((a2 = (e2 = E$22.value) == null ? void 0 : e2.querySelectorAll("[data-headlessui-portal]")) != null ? a2 : []).find((f2) => f2.contains(o$1(K)) && f2 instanceof HTMLElement)) != null ? d2 : null;
  });
  E(oe, ae), R$1({ type: "Dialog", enabled: computed(() => c2.value === 0), element: m2, onUpdate: (e2, a2) => {
    if (a2 === "Dialog") return u$5(e2, { [s2.Add]: () => D.value += 1, [s2.Remove]: () => D.value -= 1 });
  } });
  let re = k({ name: "DialogDescription", slot: computed(() => ({ open: R2.value })) }), M2 = ref(null), h2 = { titleId: M2, panelRef: ref(null), dialogState: c2, setTitleId(e2) {
    M2.value !== e2 && (M2.value = e2);
  }, close() {
    i2("close", false);
  } };
  provide(H, h2);
  let ne = computed(() => !(!k$1.value || w2.value));
  w$2(B2, (e2, a2) => {
    e2.preventDefault(), h2.close(), nextTick(() => a2 == null ? void 0 : a2.focus());
  }, ne);
  let ie = computed(() => !(w2.value || c2.value !== 0));
  E$1((W2 = E$22.value) == null ? void 0 : W2.defaultView, "keydown", (e2) => {
    ie.value && (e2.defaultPrevented || e2.key === o.Escape && (e2.preventDefault(), e2.stopPropagation(), h2.close()));
  });
  let ue$1 = computed(() => !(U2.value || c2.value !== 0 || N2));
  return d$2(E$22, ue$1, (e2) => {
    var a2;
    return { containers: [...(a2 = e2.containers) != null ? a2 : [], B2] };
  }), watchEffect((e2) => {
    if (c2.value !== 0) return;
    let a2 = o$1(m2);
    if (!a2) return;
    let d2 = new ResizeObserver((f2) => {
      for (let L2 of f2) {
        let x2 = L2.target.getBoundingClientRect();
        x2.x === 0 && x2.y === 0 && x2.width === 0 && x2.height === 0 && h2.close();
      }
    });
    d2.observe(a2), e2(() => d2.disconnect());
  }), () => {
    let { open: e2, initialFocus: a2, ...d2 } = t2, f2 = { ...l2, ref: m2, id: n2, role: g2.value, "aria-modal": c2.value === 0 ? true : void 0, "aria-labelledby": M2.value, "aria-describedby": re.value }, L2 = { open: c2.value === 0 };
    return h$1(u$2, { force: true }, () => [h$1($, () => h$1(z, { target: m2.value }, () => h$1(u$2, { force: false }, () => h$1(ue, { initialFocus: a2, containers: B2, features: k$1.value ? u$5(ee.value, { parent: ue.features.RestoreFocus, leaf: ue.features.All & ~ue.features.FocusLock }) : ue.features.None }, () => h$1(X, {}, () => A$2({ ourProps: f2, theirProps: { ...d2, ...l2 }, slot: L2, attrs: l2, slots: p, visible: c2.value === 0, features: N$3.RenderStrategy | N$3.Static, name: "Dialog" })))))), h$1(Z)]);
  };
} });
defineComponent({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(t2, { attrs: i2, slots: l2 }) {
  var u2;
  let p = (u2 = t2.id) != null ? u2 : `headlessui-dialog-overlay-${i$5()}`, s3 = T("DialogOverlay");
  function n2(r2) {
    r2.target === r2.currentTarget && (r2.preventDefault(), r2.stopPropagation(), s3.close());
  }
  return () => {
    let { ...r2 } = t2;
    return A$2({ ourProps: { id: p, "aria-hidden": true, onClick: n2 }, theirProps: r2, slot: { open: s3.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogOverlay" });
  };
} });
defineComponent({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, inheritAttrs: false, setup(t2, { attrs: i2, slots: l2, expose: p }) {
  var r2;
  let s3 = (r2 = t2.id) != null ? r2 : `headlessui-dialog-backdrop-${i$5()}`, n2 = T("DialogBackdrop"), u2 = ref(null);
  return p({ el: u2, $el: u2 }), onMounted(() => {
    if (n2.panelRef.value === null) throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { ...g2 } = t2, D = { id: s3, ref: u2, "aria-hidden": true };
    return h$1(u$2, { force: true }, () => h$1($, () => A$2({ ourProps: D, theirProps: { ...i2, ...g2 }, slot: { open: n2.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogBackdrop" })));
  };
} });
let Ge = defineComponent({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(t2, { attrs: i2, slots: l2, expose: p }) {
  var r2;
  let s3 = (r2 = t2.id) != null ? r2 : `headlessui-dialog-panel-${i$5()}`, n2 = T("DialogPanel");
  p({ el: n2.panelRef, $el: n2.panelRef });
  function u2(g2) {
    g2.stopPropagation();
  }
  return () => {
    let { ...g2 } = t2, D = { id: s3, ref: n2.panelRef, onClick: u2 };
    return A$2({ ourProps: D, theirProps: g2, slot: { open: n2.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogPanel" });
  };
} });
defineComponent({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: null } }, setup(t2, { attrs: i2, slots: l2 }) {
  var n2;
  let p = (n2 = t2.id) != null ? n2 : `headlessui-dialog-title-${i$5()}`, s3 = T("DialogTitle");
  return onMounted(() => {
    s3.setTitleId(p), onUnmounted(() => s3.setTitleId(null));
  }), () => {
    let { ...u2 } = t2;
    return A$2({ ourProps: { id: p }, theirProps: u2, slot: { open: s3.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogTitle" });
  };
} });
function l(r2) {
  let e2 = { called: false };
  return (...t2) => {
    if (!e2.called) return e2.called = true, r2(...t2);
  };
}
function m(e2, ...t2) {
  e2 && t2.length > 0 && e2.classList.add(...t2);
}
function d(e2, ...t2) {
  e2 && t2.length > 0 && e2.classList.remove(...t2);
}
var g$1 = ((i2) => (i2.Finished = "finished", i2.Cancelled = "cancelled", i2))(g$1 || {});
function F(e2, t2) {
  let i2 = o$3();
  if (!e2) return i2.dispose;
  let { transitionDuration: n2, transitionDelay: a2 } = getComputedStyle(e2), [l2, s3] = [n2, a2].map((o2) => {
    let [u2 = 0] = o2.split(",").filter(Boolean).map((r2) => r2.includes("ms") ? parseFloat(r2) : parseFloat(r2) * 1e3).sort((r2, c2) => c2 - r2);
    return u2;
  });
  return l2 !== 0 ? i2.setTimeout(() => t2("finished"), l2 + s3) : t2("finished"), i2.add(() => t2("cancelled")), i2.dispose;
}
function L$1(e2, t2, i2, n2, a2, l$12) {
  let s3 = o$3(), o2 = l$12 !== void 0 ? l(l$12) : () => {
  };
  return d(e2, ...a2), m(e2, ...t2, ...i2), s3.nextFrame(() => {
    d(e2, ...i2), m(e2, ...n2), s3.add(F(e2, (u2) => (d(e2, ...n2, ...t2), m(e2, ...a2), o2(u2))));
  }), s3.add(() => d(e2, ...t2, ...i2, ...n2, ...a2)), s3.add(() => o2("cancelled")), s3.dispose;
}
function g(e2 = "") {
  return e2.split(/\s+/).filter((t2) => t2.length > 1);
}
let R = Symbol("TransitionContext");
var pe = ((a2) => (a2.Visible = "visible", a2.Hidden = "hidden", a2))(pe || {});
function me() {
  return inject(R, null) !== null;
}
function Te() {
  let e2 = inject(R, null);
  if (e2 === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e2;
}
function ge() {
  let e2 = inject(N, null);
  if (e2 === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e2;
}
let N = Symbol("NestingContext");
function L(e2) {
  return "children" in e2 ? L(e2.children) : e2.value.filter(({ state: t2 }) => t2 === "visible").length > 0;
}
function Q(e2) {
  let t2 = ref([]), a2 = ref(false);
  onMounted(() => a2.value = true), onUnmounted(() => a2.value = false);
  function s3(n2, r2 = S.Hidden) {
    let l2 = t2.value.findIndex(({ id: f2 }) => f2 === n2);
    l2 !== -1 && (u$5(r2, { [S.Unmount]() {
      t2.value.splice(l2, 1);
    }, [S.Hidden]() {
      t2.value[l2].state = "hidden";
    } }), !L(t2) && a2.value && (e2 == null || e2()));
  }
  function h2(n2) {
    let r2 = t2.value.find(({ id: l2 }) => l2 === n2);
    return r2 ? r2.state !== "visible" && (r2.state = "visible") : t2.value.push({ id: n2, state: "visible" }), () => s3(n2, S.Unmount);
  }
  return { children: t2, register: h2, unregister: s3 };
}
let W = N$3.RenderStrategy, he = defineComponent({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e2, { emit: t2, attrs: a2, slots: s3, expose: h2 }) {
  let n2 = ref(0);
  function r2() {
    n2.value |= i$1.Opening, t2("beforeEnter");
  }
  function l2() {
    n2.value &= ~i$1.Opening, t2("afterEnter");
  }
  function f2() {
    n2.value |= i$1.Closing, t2("beforeLeave");
  }
  function S$12() {
    n2.value &= ~i$1.Closing, t2("afterLeave");
  }
  if (!me() && s$2()) return () => h$1(Se, { ...e2, onBeforeEnter: r2, onAfterEnter: l2, onBeforeLeave: f2, onAfterLeave: S$12 }, s3);
  let d2 = ref(null), y2 = computed(() => e2.unmount ? S.Unmount : S.Hidden);
  h2({ el: d2, $el: d2 });
  let { show: v2, appear: A2 } = Te(), { register: D, unregister: H2 } = ge(), i2 = ref(v2.value ? "visible" : "hidden"), I2 = { value: true }, c2 = i$5(), b2 = { value: false }, P2 = Q(() => {
    !b2.value && i2.value !== "hidden" && (i2.value = "hidden", H2(c2), S$12());
  });
  onMounted(() => {
    let o2 = D(c2);
    onUnmounted(o2);
  }), watchEffect(() => {
    if (y2.value === S.Hidden && c2) {
      if (v2.value && i2.value !== "visible") {
        i2.value = "visible";
        return;
      }
      u$5(i2.value, { ["hidden"]: () => H2(c2), ["visible"]: () => D(c2) });
    }
  });
  let j2 = g(e2.enter), M2 = g(e2.enterFrom), X = g(e2.enterTo), _ = g(e2.entered), Y = g(e2.leave), Z = g(e2.leaveFrom), ee = g(e2.leaveTo);
  onMounted(() => {
    watchEffect(() => {
      if (i2.value === "visible") {
        let o2 = o$1(d2);
        if (o2 instanceof Comment && o2.data === "") throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function te(o2) {
    let E2 = I2.value && !A2.value, p = o$1(d2);
    !p || !(p instanceof HTMLElement) || E2 || (b2.value = true, v2.value && r2(), v2.value || f2(), o2(v2.value ? L$1(p, j2, M2, X, _, (V) => {
      b2.value = false, V === g$1.Finished && l2();
    }) : L$1(p, Y, Z, ee, _, (V) => {
      b2.value = false, V === g$1.Finished && (L(P2) || (i2.value = "hidden", H2(c2), S$12()));
    })));
  }
  return onMounted(() => {
    watch([v2], (o2, E2, p) => {
      te(p), I2.value = false;
    }, { immediate: true });
  }), provide(N, P2), t$2(computed(() => u$5(i2.value, { ["visible"]: i$1.Open, ["hidden"]: i$1.Closed }) | n2.value)), () => {
    let { appear: o2, show: E2, enter: p, enterFrom: V, enterTo: Ce, entered: ye, leave: be, leaveFrom: Ee, leaveTo: Ve, ...U2 } = e2, ne = { ref: d2 }, re = { ...U2, ...A2.value && v2.value && c$2.isServer ? { class: normalizeClass([a2.class, U2.class, ...j2, ...M2]) } : {} };
    return A$2({ theirProps: re, ourProps: ne, slot: {}, slots: s3, attrs: a2, features: W, visible: i2.value === "visible", name: "TransitionChild" });
  };
} }), ce = he, Se = defineComponent({ inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e2, { emit: t2, attrs: a2, slots: s3 }) {
  let h2 = l$2(), n2 = computed(() => e2.show === null && h2 !== null ? (h2.value & i$1.Open) === i$1.Open : e2.show);
  watchEffect(() => {
    if (![true, false].includes(n2.value)) throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r2 = ref(n2.value ? "visible" : "hidden"), l2 = Q(() => {
    r2.value = "hidden";
  }), f2 = ref(true), S2 = { show: n2, appear: computed(() => e2.appear || !f2.value) };
  return onMounted(() => {
    watchEffect(() => {
      f2.value = false, n2.value ? r2.value = "visible" : L(l2) || (r2.value = "hidden");
    });
  }), provide(N, l2), provide(R, S2), () => {
    let d2 = T$1(e2, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), y2 = { unmount: e2.unmount };
    return A$2({ ourProps: { ...y2, as: "template" }, theirProps: {}, slot: {}, slots: { ...s3, default: () => [h$1(ce, { onBeforeEnter: () => t2("beforeEnter"), onAfterEnter: () => t2("afterEnter"), onBeforeLeave: () => t2("beforeLeave"), onAfterLeave: () => t2("afterLeave"), ...a2, ...y2, ...d2 }, s3.default)] }, attrs: {}, features: W, visible: r2.value === "visible", name: "Transition" });
  };
} });
const config$2 = mergeConfig(appConfig.ui.strategy, appConfig.ui.modal, modal);
const _sfc_main$5 = defineComponent({
  components: {
    HDialog: Ye,
    HDialogPanel: Ge,
    TransitionRoot: Se,
    TransitionChild: he
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    appear: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: true
    },
    transition: {
      type: Boolean,
      default: true
    },
    preventClose: {
      type: Boolean,
      default: false
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "close", "close-prevented", "after-leave"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("modal", toRef(props, "ui"), config$2, toRef(props, "class"));
    const isOpen = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const transitionClass = computed(() => {
      if (!props.transition) {
        return {};
      }
      return {
        ...ui.value.transition
      };
    });
    function close(value) {
      if (props.preventClose) {
        emit("close-prevented");
        return;
      }
      isOpen.value = value;
      emit("close");
    }
    const onAfterLeave = () => {
      emit("after-leave");
    };
    s$4(() => useId());
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      isOpen,
      transitionClass,
      onAfterLeave,
      close
    };
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_HDialog = resolveComponent("HDialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_HDialogPanel = resolveComponent("HDialogPanel");
  _push(ssrRenderComponent(_component_TransitionRoot, mergeProps({
    appear: _ctx.appear,
    show: _ctx.isOpen,
    as: "template",
    onAfterLeave: _ctx.onAfterLeave
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HDialog, mergeProps({
          class: _ctx.ui.wrapper
        }, _ctx.attrs, { onClose: _ctx.close }), {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              if (_ctx.overlay) {
                _push3(ssrRenderComponent(_component_TransitionChild, mergeProps({
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.ui.overlay.transition, {
                  class: _ctx.ui.overlay.transition.enterFrom
                }), {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div class="${ssrRenderClass([_ctx.ui.overlay.base, _ctx.ui.overlay.background])}"${_scopeId3}></div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                        }, null, 2)
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                _push3(`<!---->`);
              }
              _push3(`<div class="${ssrRenderClass(_ctx.ui.inner)}"${_scopeId2}><div class="${ssrRenderClass([_ctx.ui.container, !_ctx.fullscreen && _ctx.ui.padding])}"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_TransitionChild, mergeProps({
                as: "template",
                appear: _ctx.appear
              }, _ctx.transitionClass, {
                class: _ctx.transitionClass.enterFrom
              }), {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_HDialogPanel, {
                      class: [
                        _ctx.ui.base,
                        _ctx.ui.background,
                        _ctx.ui.ring,
                        _ctx.ui.shadow,
                        _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                      ]
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push5, _parent5, _scopeId4);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "default")
                          ];
                        }
                      }),
                      _: 3
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_HDialogPanel, {
                        class: [
                          _ctx.ui.base,
                          _ctx.ui.background,
                          _ctx.ui.ring,
                          _ctx.ui.shadow,
                          _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                        ]
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 3
                      }, 8, ["class"])
                    ];
                  }
                }),
                _: 3
              }, _parent3, _scopeId2));
              _push3(`</div></div>`);
            } else {
              return [
                _ctx.overlay ? (openBlock(), createBlock(_component_TransitionChild, mergeProps({
                  key: 0,
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.ui.overlay.transition, {
                  class: _ctx.ui.overlay.transition.enterFrom
                }), {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                    }, null, 2)
                  ]),
                  _: 1
                }, 16, ["appear", "class"])) : createCommentVNode("", true),
                createVNode("div", {
                  class: _ctx.ui.inner
                }, [
                  createVNode("div", {
                    class: [_ctx.ui.container, !_ctx.fullscreen && _ctx.ui.padding]
                  }, [
                    createVNode(_component_TransitionChild, mergeProps({
                      as: "template",
                      appear: _ctx.appear
                    }, _ctx.transitionClass, {
                      class: _ctx.transitionClass.enterFrom
                    }), {
                      default: withCtx(() => [
                        createVNode(_component_HDialogPanel, {
                          class: [
                            _ctx.ui.base,
                            _ctx.ui.background,
                            _ctx.ui.ring,
                            _ctx.ui.shadow,
                            _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                          ]
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "default")
                          ]),
                          _: 3
                        }, 8, ["class"])
                      ]),
                      _: 3
                    }, 16, ["appear", "class"])
                  ], 2)
                ], 2)
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_HDialog, mergeProps({
            class: _ctx.ui.wrapper
          }, _ctx.attrs, { onClose: _ctx.close }), {
            default: withCtx(() => [
              _ctx.overlay ? (openBlock(), createBlock(_component_TransitionChild, mergeProps({
                key: 0,
                as: "template",
                appear: _ctx.appear
              }, _ctx.ui.overlay.transition, {
                class: _ctx.ui.overlay.transition.enterFrom
              }), {
                default: withCtx(() => [
                  createVNode("div", {
                    class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                  }, null, 2)
                ]),
                _: 1
              }, 16, ["appear", "class"])) : createCommentVNode("", true),
              createVNode("div", {
                class: _ctx.ui.inner
              }, [
                createVNode("div", {
                  class: [_ctx.ui.container, !_ctx.fullscreen && _ctx.ui.padding]
                }, [
                  createVNode(_component_TransitionChild, mergeProps({
                    as: "template",
                    appear: _ctx.appear
                  }, _ctx.transitionClass, {
                    class: _ctx.transitionClass.enterFrom
                  }), {
                    default: withCtx(() => [
                      createVNode(_component_HDialogPanel, {
                        class: [
                          _ctx.ui.base,
                          _ctx.ui.background,
                          _ctx.ui.ring,
                          _ctx.ui.shadow,
                          _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                        ]
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 3
                      }, 8, ["class"])
                    ]),
                    _: 3
                  }, 16, ["appear", "class"])
                ], 2)
              ], 2)
            ]),
            _: 3
          }, 16, ["class", "onClose"])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/overlays/Modal.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]), { __name: "UModal" });
const useFormGroup = (inputProps, config2, bind = true) => {
  const formBus = inject("form-events", void 0);
  const formGroup = inject("form-group", void 0);
  const formInputs = inject("form-inputs", void 0);
  if (formGroup) {
    if (!bind || (inputProps == null ? void 0 : inputProps.legend)) {
      formGroup.inputId.value = void 0;
    } else if (inputProps == null ? void 0 : inputProps.id) {
      formGroup.inputId.value = inputProps == null ? void 0 : inputProps.id;
    }
    if (formInputs) {
      formInputs.value[formGroup.name.value] = formGroup.inputId.value;
    }
  }
  const blurred = ref(false);
  function emitFormEvent(type, path) {
    if (formBus) {
      formBus.emit({ type, path });
    }
  }
  function emitFormBlur() {
    emitFormEvent("blur", formGroup == null ? void 0 : formGroup.name.value);
    blurred.value = true;
  }
  function emitFormChange() {
    emitFormEvent("change", formGroup == null ? void 0 : formGroup.name.value);
  }
  const emitFormInput = useDebounceFn(() => {
    if (blurred.value || (formGroup == null ? void 0 : formGroup.eagerValidation.value)) {
      emitFormEvent("input", formGroup == null ? void 0 : formGroup.name.value);
    }
  }, 300);
  return {
    inputId: computed(() => (inputProps == null ? void 0 : inputProps.id) ?? (formGroup == null ? void 0 : formGroup.inputId.value)),
    name: computed(() => (inputProps == null ? void 0 : inputProps.name) ?? (formGroup == null ? void 0 : formGroup.name.value)),
    size: computed(() => {
      var _a;
      const formGroupSize = config2.size[formGroup == null ? void 0 : formGroup.size.value] ? formGroup == null ? void 0 : formGroup.size.value : null;
      return (inputProps == null ? void 0 : inputProps.size) ?? formGroupSize ?? ((_a = config2.default) == null ? void 0 : _a.size);
    }),
    color: computed(() => {
      var _a;
      return ((_a = formGroup == null ? void 0 : formGroup.error) == null ? void 0 : _a.value) ? "red" : inputProps == null ? void 0 : inputProps.color;
    }),
    emitFormBlur,
    emitFormInput,
    emitFormChange
  };
};
const config$1 = mergeConfig(appConfig.ui.strategy, appConfig.ui.input, input);
const _sfc_main$4 = defineComponent({
  components: {
    UIcon: __nuxt_component_0$4
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    autofocusDelay: {
      type: Number,
      default: 100
    },
    icon: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: () => config$1.default.loadingIcon
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: null
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(config$1.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config$1.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config$1.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config$1.default.variant,
      validator(value) {
        return [
          ...Object.keys(config$1.variant),
          ...Object.values(config$1.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    inputClass: {
      type: String,
      default: null
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    },
    modelModifiers: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "blur", "change"],
  setup(props, { emit, slots }) {
    const { ui, attrs } = useUI("input", toRef(props, "ui"), config$1, toRef(props, "class"));
    const { size: sizeButtonGroup, rounded } = useInjectButtonGroup({ ui, props });
    const { emitFormBlur, emitFormInput, size: sizeFormGroup, color, inputId, name } = useFormGroup(props, config$1);
    const size = computed(() => sizeButtonGroup.value ?? sizeFormGroup.value);
    const modelModifiers = ref(defu({}, props.modelModifiers, { trim: false, lazy: false, number: false, nullify: false }));
    const input2 = ref(null);
    const updateInput = (value) => {
      if (modelModifiers.value.trim) {
        value = value.trim();
      }
      if (modelModifiers.value.number || props.type === "number") {
        value = looseToNumber(value);
      }
      if (modelModifiers.value.nullify) {
        value || (value = null);
      }
      emit("update:modelValue", value);
      emitFormInput();
    };
    const onInput = (event) => {
      if (!modelModifiers.value.lazy) {
        updateInput(event.target.value);
      }
    };
    const onChange = (event) => {
      if (props.type === "file") {
        const value = event.target.files;
        emit("change", value);
      } else {
        const value = event.target.value;
        emit("change", value);
        if (modelModifiers.value.lazy) {
          updateInput(value);
        }
        if (modelModifiers.value.trim) {
          event.target.value = value.trim();
        }
      }
    };
    const onBlur = (event) => {
      emitFormBlur();
      emit("blur", event);
    };
    const inputClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[color.value]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.form,
        rounded.value,
        ui.value.placeholder,
        props.type === "file" && ui.value.file.base,
        ui.value.size[size.value],
        props.padded ? ui.value.padding[size.value] : "p-0",
        variant == null ? void 0 : variant.replaceAll("{color}", color.value),
        (isLeading.value || slots.leading) && ui.value.leading.padding[size.value],
        (isTrailing.value || slots.trailing) && ui.value.trailing.padding[size.value]
      ), props.inputClass);
    });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || props.loading && !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.loading && props.trailing || props.trailingIcon;
    });
    const leadingIconName = computed(() => {
      if (props.loading) {
        return props.loadingIcon;
      }
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon;
      }
      return props.trailingIcon || props.icon;
    });
    const leadingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.leading.wrapper,
        ui.value.icon.leading.pointer,
        ui.value.icon.leading.padding[size.value]
      );
    });
    const leadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && ui.value.icon.loading
      );
    });
    const trailingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.trailing.wrapper,
        ui.value.icon.trailing.pointer,
        ui.value.icon.trailing.padding[size.value]
      );
    });
    const trailingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && !isLeading.value && ui.value.icon.loading
      );
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      inputId,
      input: input2,
      isLeading,
      isTrailing,
      // eslint-disable-next-line vue/no-dupe-keys
      inputClass,
      leadingIconName,
      leadingIconClass,
      leadingWrapperIconClass,
      trailingIconName,
      trailingIconClass,
      trailingWrapperIconClass,
      onInput,
      onChange,
      onBlur
    };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_0$4;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.type === "hidden" ? "hidden" : _ctx.ui.wrapper
  }, _attrs))}><input${ssrRenderAttrs(mergeProps({
    id: _ctx.inputId,
    ref: "input",
    name: _ctx.name,
    type: _ctx.type,
    required: _ctx.required,
    placeholder: _ctx.placeholder,
    disabled: _ctx.disabled,
    class: _ctx.inputClass
  }, _ctx.type === "file" ? _ctx.attrs : { ..._ctx.attrs, value: _ctx.modelValue }))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  if (_ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading) {
    _push(`<span class="${ssrRenderClass(_ctx.leadingWrapperIconClass)}">`);
    ssrRenderSlot(_ctx.$slots, "leading", {
      disabled: _ctx.disabled,
      loading: _ctx.loading
    }, () => {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.leadingIconName,
        class: _ctx.leadingIconClass
      }, null, _parent));
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing) {
    _push(`<span class="${ssrRenderClass(_ctx.trailingWrapperIconClass)}">`);
    ssrRenderSlot(_ctx.$slots, "trailing", {
      disabled: _ctx.disabled,
      loading: _ctx.loading
    }, () => {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.trailingIconName,
        class: _ctx.trailingIconClass
      }, null, _parent));
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/forms/Input.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]), { __name: "UInput" });
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "LoginForm",
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    useUserSession();
    const password = ref("");
    const loading = ref(false);
    useToast();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UInput = __nuxt_component_0$1;
      const _component_UButton = __nuxt_component_1$1;
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-y-4 p-4 items-center" }, _attrs))}><h1 class="text-lg text-gray-300"> Login to upload images </h1>`);
      _push(ssrRenderComponent(_component_UInput, {
        modelValue: unref(password),
        "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
        type: "password",
        placeholder: "Enter password",
        icon: "i-heroicons-key",
        class: "!w-60"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        loading: unref(loading),
        type: "submit",
        label: "Login",
        color: "green",
        variant: "ghost",
        class: "px-4",
        size: "lg",
        disabled: !unref(password)
      }, null, _parent));
      _push(ssrRenderComponent(_component_UButton, {
        icon: "i-heroicons-x-mark",
        color: "gray",
        variant: "ghost",
        size: "xs",
        class: "absolute right-2 top-2",
        onClick: ($event) => _ctx.$emit("close")
      }, null, _parent));
      _push(`</form>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LoginForm.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$3, { __name: "LoginForm" });
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.skeleton, skeleton);
const _sfc_main$2 = defineComponent({
  inheritAttrs: false,
  props: {
    as: {
      type: String,
      default: "div"
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("skeleton", toRef(props, "ui"), config);
    const skeletonClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.background,
        ui.value.rounded
      ), props.class);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      skeletonClass
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.as), mergeProps({ class: _ctx.skeletonClass }, _ctx.attrs, _attrs), null), _parent);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/layout/Skeleton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]), { __name: "USkeleton" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ImageGallery",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpen = ref(false);
    ref();
    ref();
    ref([]);
    ref("");
    ref(false);
    ref(false);
    useToast();
    const images = [
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3347.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3348.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3349.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3350.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3351.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3352.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3353.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3354.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3355.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3356.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3357.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3358.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3359.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3360.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3361.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3320.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3321.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3322.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3323.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3324.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3325.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3326.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3331.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3332.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3333.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3334.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3335.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3336.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3337.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3338.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3339.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3340.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3341.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3342.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3343.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3344.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3345.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3293.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3294.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3295.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3296.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3297.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3298.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3299.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3300.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3301.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3302.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3303.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3304.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3305.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3306.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3313.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3314.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3315.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3316.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3317.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3318.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3319.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3275.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3276.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3277.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3278.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3279.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3280.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3281.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3282.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3283.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3284.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3285.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3286.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3287.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3288.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3289.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3290.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3291.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3292.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3257.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3258.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3259.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3260.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3261.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3262.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3263.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3264.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3265.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3266.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3267.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3268.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3269.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3270.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3271.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3272.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3273.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3274.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3238.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3239.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3240.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3241.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3242.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3243.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3244.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3245.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3246.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3247.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3248.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3249.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3250.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3251.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3252.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3253.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3254.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3255.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3256.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3221.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3222.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3223.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3224.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3225.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3226.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3227.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3228.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3229.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3230.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3231.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3232.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3233.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3234.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3235.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3236.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3237.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3197.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3198.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3199.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3200.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3201.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3202.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3203.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3204.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3205.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3206.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3207.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3208.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3209.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3210.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3211.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3212.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3213.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3214.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3215.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3216.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3217.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3218.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3219.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3220.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3172.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3173.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3174.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3175.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3176.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3177.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3178.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3179.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3180.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3181.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3182.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3183.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3184.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3185.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3186.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3187.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3188.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3189.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3190.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3191.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3192.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3193.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3194.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3195.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3196.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3147.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3148.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3149.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3150.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3151.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3154.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3155.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3156.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3157.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3158.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3159.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3160.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3161.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3162.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3163.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3164.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3165.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3166.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3167.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3168.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3169.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3170.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3171.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3123.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3124.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3125.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3126.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3127.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3128.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3129.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3130.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3131.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3132.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3133.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3134.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3135.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3136.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3137.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3138.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3139.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3140.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3141.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3142.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3143.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3144.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3145.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3146.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3098.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3099.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3100.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3101.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3102.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3103.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3104.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3105.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3106.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3107.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3108.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3109.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3110.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3111.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3112.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3113.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3114.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3115.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3116.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3117.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3118.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3119.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3120.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3121.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3122.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3075.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3076.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3077.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3078.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3079.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3080.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3081.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3082.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3083.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3084.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3085.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3086.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3087.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3088.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3089.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3090.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3091.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3092.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3093.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3094.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3095.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3096.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3097.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3051.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3052.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3053.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3054.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3055.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3056.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3057.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3058.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3059.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3060.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3061.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3064.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3065.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3066.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3067.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3068.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3069.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3070.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3071.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3072.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3073.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3074.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3025.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3026.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3027.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3028.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3031.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3032.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3033.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3034.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3035.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3036.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3037.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3038.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3039.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3040.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3041.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3042.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3043.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3044.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3045.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3046.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3047.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3048.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3049.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3050.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3002.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3003.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3004.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3005.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3006.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3007.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3008.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3009.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3010.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3011.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3012.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3013.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3014.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3015.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3016.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3017.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3018.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3019.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3020.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3021.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3022.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3023.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3024.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2979.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2980.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2981.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2982.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2983.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2984.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2985.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2986.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2987.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2988.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2989.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2990.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2991.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2992.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2993.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2994.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2995.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2996.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2997.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2998.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2999.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3000.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3001.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2960.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2961.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2962.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2963.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2964.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2965.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2966.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2967.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2968.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2969.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2970.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2971.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2972.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2973.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2974.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2975.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2976.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2977.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2978.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2940.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2941.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2942.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2943.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2944.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2945.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2946.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2947.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2948.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2949.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2950.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2951.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2952.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2953.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2954.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2955.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2956.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2957.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2958.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2959.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2918.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2919.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2920.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2921.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2922.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2923.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2924.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2925.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2926.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2927.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2928.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2929.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2930.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2931.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2933.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2934.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2935.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2936.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2937.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2938.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2939.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2897.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2898.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2899.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2900.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2901.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2902.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2903.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2904.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2905.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2906.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2907.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2908.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2909.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2910.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2911.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2912.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2913.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2914.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2915.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2916.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2917.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2874.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2875.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2876.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2877.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2878.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2879.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2880.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2881.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2882.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2883.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2884.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2885.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2886.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2887.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2888.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2889.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2890.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2892.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2893.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2894.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2895.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2854.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2855.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2856.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2857.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2858.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2859.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2860.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2861.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2862.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2863.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2864.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2865.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2866.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2867.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2868.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2869.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2870.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2871.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2872.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2873.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2834.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2835.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2836.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2837.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2838.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2839.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2840.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2841.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2842.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2843.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2844.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2845.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2846.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2847.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2848.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2849.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2850.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2851.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2852.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2853.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2813.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2814.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2815.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2816.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2817.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2818.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2819.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2820.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2821.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2822.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2823.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2824.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2825.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2826.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2827.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2828.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2829.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2830.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2831.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2832.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2833.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2786.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2787.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2788.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2790.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2791.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2792.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2793.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2794.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2795.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2796.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2797.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2798.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2799.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2800.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2801.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2802.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2803.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2804.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2805.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2806.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2811.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2812.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2766.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2767.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2768.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2769.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2770.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2771.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2772.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2773.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2774.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2775.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2776.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2777.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2778.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2779.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2780.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2781.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2782.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2783.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2784.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2785.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2744.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2745.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2746.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2747.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2748.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2749.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2750.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2751.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2752.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2753.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2754.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2755.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2756.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2757.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2758.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2759.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2760.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2761.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2762.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2763.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2764.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2765.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2722.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2723.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2724.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2725.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2726.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2727.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2728.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2729.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2730.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2731.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2732.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2733.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2735.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2736.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2737.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2738.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2739.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2740.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2741.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2742.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2743.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2701.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2702.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2703.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2704.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2705.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2706.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2707.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2708.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2709.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2710.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2711.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2712.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2713.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2714.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2715.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2716.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2717.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2718.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2719.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2720.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2721.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2681.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2682.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2683.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2684.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2685.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2686.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2687.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2688.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2689.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2690.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2691.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2692.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2693.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2694.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2695.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2696.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2697.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2698.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2699.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2700.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2659.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2660.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2661.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2662.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2663.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2664.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2665.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2666.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2667.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2668.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2669.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2670.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2671.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2672.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2673.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2674.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2675.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2676.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2677.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2678.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2679.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2680.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2638.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2639.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2640.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2641.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2642.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2643.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2644.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2645.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2646.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2647.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2648.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2649.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2650.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2651.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2652.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2653.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2654.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2655.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2656.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2657.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2658.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2617.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2618.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2619.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2620.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2621.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2622.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2623.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2624.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2625.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2626.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2627.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2628.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2629.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2630.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2631.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2632.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2633.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2634.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2635.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2636.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2637.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2592.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2594.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2597.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2598.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2599.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2600.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2602.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2604.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2605.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2606.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2608.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2609.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2610.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2611.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2612.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2613.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2614.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2615.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2616.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2582.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2584.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2585.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2586.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2587.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2588.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2589.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2590.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_2591.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3346.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3874.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3875.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3876.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3877.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3878.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3879.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3843.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3844.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3845.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3849.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3850.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3851.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3852.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3853.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3854.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3855.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3856.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3857.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3858.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3859.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3860.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3861.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3862.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3863.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3864.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3865.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3866.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3822.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3823.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3824.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3825.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3826.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3827.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3828.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3829.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3830.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3831.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3832.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3833.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3834.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3835.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3836.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3837.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3838.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3839.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3840.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3841.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3842.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3785.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3786.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3787.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3788.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3789.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3790.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3791.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3792.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3793.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3794.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3795.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3797.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3799.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3800.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3801.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3802.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3803.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3804.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3805.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3820.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3821.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3764.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3765.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3766.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3767.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3768.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3769.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3770.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3771.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3772.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3773.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3774.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3775.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3776.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3777.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3778.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3779.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3780.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3781.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3782.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3783.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3743.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3744.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3745.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3746.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3747.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3748.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3749.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3750.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3751.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3752.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3753.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3754.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3755.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3756.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3757.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3759.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3760.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3761.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3762.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3763.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3719.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3721.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3722.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3723.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3724.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3725.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3726.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3727.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3728.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3729.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3730.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3731.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3732.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3733.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3734.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3735.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3738.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3739.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3740.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3741.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3742.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3697.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3698.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3699.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3700.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3701.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3702.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3703.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3704.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3705.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3706.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3707.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3708.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3709.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3710.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3711.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3712.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3713.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3714.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3715.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3716.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3717.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3718.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3676.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3677.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3678.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3679.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3680.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3681.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3682.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3683.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3684.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3685.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3686.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3687.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3688.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3689.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3690.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3691.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3692.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3693.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3694.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3695.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3696.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3655.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3656.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3657.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3658.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3659.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3660.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3661.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3662.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3663.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3664.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3665.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3666.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3667.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3668.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3669.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3670.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3671.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3672.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3673.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3674.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3675.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3633.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3634.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3635.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3636.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3637.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3638.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3639.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3640.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3641.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3642.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3643.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3644.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3645.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3646.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3647.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3648.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3649.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3650.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3651.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3653.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3654.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3612.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3613.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3614.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3615.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3616.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3617.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3618.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3619.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3620.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3621.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3622.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3623.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3624.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3625.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3626.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3627.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3628.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3629.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3630.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3631.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3632.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3591.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3592.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3593.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3594.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3595.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3596.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3597.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3598.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3599.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3600.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3601.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3602.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3603.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3604.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3605.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3606.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3607.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3608.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3609.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3610.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3611.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3568.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3569.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3570.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3571.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3572.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3573.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3574.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3575.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3576.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3578.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3579.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3580.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3581.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3582.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3583.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3584.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3585.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3586.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3587.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3588.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3589.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3590.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3546.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3547.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3549.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3550.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3551.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3552.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3553.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3554.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3555.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3556.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3557.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3558.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3559.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3560.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3561.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3562.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3563.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3564.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3565.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3566.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3567.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3523.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3524.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3525.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3526.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3527.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3528.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3529.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3530.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3531.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3532.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3533.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3534.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3535.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3536.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3537.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3538.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3540.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3542.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3543.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3544.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3545.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3501.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3502.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3503.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3504.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3505.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3506.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3507.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3508.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3509.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3510.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3511.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3512.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3513.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3514.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3515.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3516.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3517.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3518.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3519.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3520.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3521.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3522.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3477.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3478.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3479.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3480.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3481.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3482.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3483.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3484.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3485.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3486.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3487.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3488.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3489.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3490.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3491.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3492.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3493.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3494.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3495.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3496.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3497.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3498.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3499.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3500.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3451.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3452.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3453.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3454.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3455.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3457.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3458.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3459.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3460.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3461.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3463.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3464.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3466.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3467.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3469.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3470.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3471.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3472.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3473.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3474.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3475.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3476.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3427.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3428.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3429.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3430.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3431.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3432.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3433.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3434.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3435.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3436.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3437.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3438.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3439.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3440.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3441.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3442.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3443.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3444.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3445.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3447.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3448.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3449.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3450.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3403.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3404.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3405.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3408.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3409.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3410.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3411.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3412.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3413.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3414.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3415.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3416.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3417.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3418.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3419.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3420.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3421.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3422.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3423.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3424.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3425.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3426.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3386.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3387.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3388.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3389.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3390.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3391.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3392.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3393.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3394.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3395.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3396.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3397.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3398.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3399.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3400.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3401.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3402.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3363.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3365.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3366.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3367.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3368.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3369.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3370.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3371.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3372.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3373.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3374.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3375.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3376.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3377.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3378.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3379.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3380.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3381.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3382.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3383.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3384.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3385.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3867.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3868.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3871.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3872.jpg" },
      { pathname: "https://files.ginistorage.com/GINSEvent2025/PJ1_3873.jpg" }
    ];
    const active = useState("$Nxggt4fPsR");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = __nuxt_component_0$2;
      const _component_LoginForm = __nuxt_component_1;
      const _component_USkeleton = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-400cd433>`);
      if (images) {
        _push(`<section class="relative h-screen gap-[22px] p-4" data-v-400cd433>`);
        _push(ssrRenderComponent(_component_UModal, {
          modelValue: unref(isOpen),
          "onUpdate:modelValue": ($event) => isRef(isOpen) ? isOpen.value = $event : null,
          class: "flex items-center justify-center relative",
          side: "left"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_LoginForm, {
                class: "z-50 bg-gray-800 rounded-md",
                onClose: ($event) => isOpen.value = false
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_LoginForm, {
                  class: "z-50 bg-gray-800 rounded-md",
                  onClose: ($event) => isOpen.value = false
                }, null, 8, ["onClose"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="${ssrRenderClass([{ "masonry-container": images && images.length }, "w-full"])}" data-v-400cd433><div style="${ssrRenderStyle({ "text-align": "center" })}" class="text-2xl text-white flex flex-col gap-y-4 items-center justify-center h-full w-full pb-8" data-v-400cd433><img src="https://cdn.prod.website-files.com/65accf2880bb60bad2f20e2b/678cd73f3966a860608350e7_810.256-01-p-1080.png" style="${ssrRenderStyle({ "width": "15em" })}" data-v-400cd433><h1 style="${ssrRenderStyle({ "color": "#454545" })}" class="font-regular text-5xl" data-v-400cd433><div data-v-400cd433>Photo Gallery</div></h1></div>`);
        if (images && images.length) {
          _push(`<ul class="grid grid-cols-1 gap-4 lg:block" data-v-400cd433><!--[-->`);
          ssrRenderList(images, (image) => {
            _push(`<li class="relative w-full group masonry-item" data-v-400cd433><div data-v-400cd433>`);
            if (image) {
              _push(`<img width="527" height="430"${ssrRenderAttr("src", `${image.pathname}`)} class="${ssrRenderClass([{ imageEl: image.pathname.split(".")[0] === unref(active) }, "h-auto w-full max-h-[430px] rounded-md transition-all duration-200 border-image brightness-[.8] hover:brightness-[1.1] will-change-[filter] object-cover cursor-pointer"])}" data-v-400cd433>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div></li>`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></section>`);
      } else {
        _push(`<div class="flex items-center space-x-4 z-10" data-v-400cd433>`);
        _push(ssrRenderComponent(_component_USkeleton, {
          class: "h-12 w-12 bg-primary-500",
          ui: { rounded: "rounded-full" }
        }, null, _parent));
        _push(`<div class="space-y-2" data-v-400cd433>`);
        _push(ssrRenderComponent(_component_USkeleton, { class: "h-4 w-[250px] bg-primary-500" }, null, _parent));
        _push(ssrRenderComponent(_component_USkeleton, { class: "h-4 w-[200px] bg-primary-500" }, null, _parent));
        _push(`</div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ImageGallery.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-400cd433"]]), { __name: "ImageGallery" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ImageGallery = __nuxt_component_0;
  _push(`<main${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_ImageGallery, null, null, _parent));
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-DLnlo9of.mjs.map
