"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const build = require("@builder.io/qwik/build");
const popover = require("./popover.css.qwik.cjs");
const utils = require("./utils.qwik.cjs");
const popoverContext = require("./popover-context.qwik.cjs");
const ensureContextId = qwik.createContextId("qui-popover-null-context");
const EnsuredContext = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
  qwik.useContext(ensureContextId, null);
  return null;
}, "EnsuredContext_component_FHICzYRb28c"));
const PopoverPanelImpl = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  qwik._jsxBranch();
  const context = qwik.useContext(popoverContext.popoverContextId);
  const panelId = `${context.compId}-panel`;
  qwik.useStylesQrl(/* @__PURE__ */ qwik.inlinedQrl(popover, "PopoverPanelImpl_component_useStyles_DPwc6VNs08w"));
  const isPolyfillSig = qwik.useSignal(false);
  const hasRenderedOnClientSig = qwik.useSignal(build.isServer ? 0 : 2);
  const teleportSig = qwik.useSignal(false);
  const hasTopLayerAncestorSig = qwik.useSignal(false);
  if (hasRenderedOnClientSig.value === 1)
    setTimeout(() => {
      teleportSig.value = true;
    }, 0);
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(async ({ track, cleanup }) => {
    const [context2, hasTopLayerAncestorSig2, isPolyfillSig2, teleportSig2] = qwik.useLexicalScope();
    track(() => teleportSig2.value);
    if (build.isServer)
      return;
    isPolyfillSig2.value = true;
    const findTopLayerAncestor$ = /* @__PURE__ */ qwik.inlinedQrl((element) => {
      while (element?.parentElement) {
        if (element.parentElement?.tagName === "DIALOG" || element.parentElement?.hasAttribute("popover"))
          return element.parentElement;
        element = element.parentElement;
      }
      return null;
    }, "PopoverPanelImpl_component_useTask_findTopLayerAncestor_gUaragBtJOQ");
    let polyfillContainer = document.querySelector("div[data-qwik-ui-popover-polyfill]");
    if (!polyfillContainer) {
      polyfillContainer = document.createElement("div");
      polyfillContainer.setAttribute("data-qwik-ui-popover-polyfill", "");
      document.body.appendChild(polyfillContainer);
    }
    if (context2.panelRef?.value) {
      const topLayerAncestor = await findTopLayerAncestor$(context2.panelRef.value);
      if (topLayerAncestor === null)
        polyfillContainer.appendChild(context2.panelRef.value);
      else
        hasTopLayerAncestorSig2.value = true;
      document.dispatchEvent(new CustomEvent("showpopoverpoly"));
      cleanup(() => context2.panelRef?.value);
    }
  }, "PopoverPanelImpl_component_useTask_VRR3x91gev4", [
    context,
    hasTopLayerAncestorSig,
    isPolyfillSig,
    teleportSig
  ]));
  return /* @__PURE__ */ qwik._jsxS("div", {
    ...props,
    id: panelId,
    ref: props.ref,
    get "data-open"() {
      return context.isOpenSig.value ? "" : void 0;
    },
    get "data-closed"() {
      return !context.isOpenSig.value ? "" : void 0;
    },
    get popover() {
      return context.manual && "manual" || props.popover === "manual" ? "manual" : "auto";
    },
    children: [
      hasRenderedOnClientSig.value === 1 && /* @__PURE__ */ qwik._jsxC(EnsuredContext, null, 3, "4J_0"),
      /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "4J_1")
    ],
    onBeforeToggle$: [
      /* @__PURE__ */ qwik.inlinedQrl((e) => {
        const [context2, isPolyfillSig2] = qwik.useLexicalScope();
        if (!context2.panelRef?.value)
          return;
        if (e.newState === "open" && context2.panelRef.value)
          utils.supportShowAnimation(context2.panelRef.value, isPolyfillSig2.value);
        if (e.newState === "closed")
          utils.supportClosingAnimation(context2.panelRef.value);
      }, "PopoverPanelImpl_component_div_onBeforeToggle_9ODbbmhyRYo", [
        context,
        isPolyfillSig
      ]),
      props.onBeforeToggle$
    ],
    onToggle$: [
      /* @__PURE__ */ qwik.inlinedQrl((e) => {
        const [context2, hasTopLayerAncestorSig2] = qwik.useLexicalScope();
        context2.isOpenSig.value = e.newState === "open";
        if (!context2.panelRef?.value)
          return;
        if (context2.panelRef?.value.classList.contains(":popover-open") && context2.panelRef?.value.parentElement && // TODO: Get the top layer ancestor popovers to be above the other when the next one is opened.
        !hasTopLayerAncestorSig2.value)
          context2.panelRef.value.parentElement.appendChild(context2.panelRef.value);
      }, "PopoverPanelImpl_component_div_onToggle_HRcHKFvFp0Q", [
        context,
        hasTopLayerAncestorSig
      ]),
      props.onToggle$
    ],
    "document:onPopPolyLoad$": /* @__PURE__ */ qwik.inlinedQrl(() => {
      const [hasRenderedOnClientSig2] = qwik.useLexicalScope();
      if (hasRenderedOnClientSig2.value === 0) {
        hasRenderedOnClientSig2.value = 1;
        return;
      }
    }, "PopoverPanelImpl_component_div_document_onPopPolyLoad_ZrWffwhxM9w", [
      hasRenderedOnClientSig
    ])
  }, {
    "data-open": qwik._fnSignal((p0) => p0.isOpenSig.value ? "" : void 0, [
      context
    ], 'p0.isOpenSig.value?"":undefined'),
    "data-closed": qwik._fnSignal((p0) => !p0.isOpenSig.value ? "" : void 0, [
      context
    ], '!p0.isOpenSig.value?"":undefined'),
    popover: qwik._fnSignal((p0, p1) => p0.manual && "manual" || p1.popover === "manual" ? "manual" : "auto", [
      context,
      props
    ], 'p0.manual&&"manual"||p1.popover==="manual"?"manual":"auto"||"auto"')
  }, 0, "4J_2");
}, "PopoverPanelImpl_component_S8d6FqPib1Q"));
exports.EnsuredContext = EnsuredContext;
exports.PopoverPanelImpl = PopoverPanelImpl;
exports._auto_ensureContextId = ensureContextId;
