import { createContextId, componentQrl, inlinedQrl, _jsxBranch, useContext, useStylesQrl, useSignal, useTaskQrl, useLexicalScope, _jsxS, _jsxC, Slot, _fnSignal } from "@builder.io/qwik";
import { isServer } from "@builder.io/qwik/build";
import popoverStyles from "./popover.css.qwik.mjs";
import { supportShowAnimation, supportClosingAnimation } from "./utils.qwik.mjs";
import { popoverContextId } from "./popover-context.qwik.mjs";
const ensureContextId = createContextId("qui-popover-null-context");
const EnsuredContext = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl(() => {
  useContext(ensureContextId, null);
  return null;
}, "EnsuredContext_component_FHICzYRb28c"));
const PopoverPanelImpl = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  _jsxBranch();
  const context = useContext(popoverContextId);
  const panelId = `${context.compId}-panel`;
  useStylesQrl(/* @__PURE__ */ inlinedQrl(popoverStyles, "PopoverPanelImpl_component_useStyles_DPwc6VNs08w"));
  const isPolyfillSig = useSignal(false);
  const hasRenderedOnClientSig = useSignal(isServer ? 0 : 2);
  const teleportSig = useSignal(false);
  const hasTopLayerAncestorSig = useSignal(false);
  if (hasRenderedOnClientSig.value === 1)
    setTimeout(() => {
      teleportSig.value = true;
    }, 0);
  useTaskQrl(/* @__PURE__ */ inlinedQrl(async ({ track, cleanup }) => {
    const [context2, hasTopLayerAncestorSig2, isPolyfillSig2, teleportSig2] = useLexicalScope();
    track(() => teleportSig2.value);
    if (isServer)
      return;
    isPolyfillSig2.value = true;
    const findTopLayerAncestor$ = /* @__PURE__ */ inlinedQrl((element) => {
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
  return /* @__PURE__ */ _jsxS("div", {
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
      hasRenderedOnClientSig.value === 1 && /* @__PURE__ */ _jsxC(EnsuredContext, null, 3, "4J_0"),
      /* @__PURE__ */ _jsxC(Slot, null, 3, "4J_1")
    ],
    onBeforeToggle$: [
      /* @__PURE__ */ inlinedQrl((e) => {
        const [context2, isPolyfillSig2] = useLexicalScope();
        if (!context2.panelRef?.value)
          return;
        if (e.newState === "open" && context2.panelRef.value)
          supportShowAnimation(context2.panelRef.value, isPolyfillSig2.value);
        if (e.newState === "closed")
          supportClosingAnimation(context2.panelRef.value);
      }, "PopoverPanelImpl_component_div_onBeforeToggle_9ODbbmhyRYo", [
        context,
        isPolyfillSig
      ]),
      props.onBeforeToggle$
    ],
    onToggle$: [
      /* @__PURE__ */ inlinedQrl((e) => {
        const [context2, hasTopLayerAncestorSig2] = useLexicalScope();
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
    "document:onPopPolyLoad$": /* @__PURE__ */ inlinedQrl(() => {
      const [hasRenderedOnClientSig2] = useLexicalScope();
      if (hasRenderedOnClientSig2.value === 0) {
        hasRenderedOnClientSig2.value = 1;
        return;
      }
    }, "PopoverPanelImpl_component_div_document_onPopPolyLoad_ZrWffwhxM9w", [
      hasRenderedOnClientSig
    ])
  }, {
    "data-open": _fnSignal((p0) => p0.isOpenSig.value ? "" : void 0, [
      context
    ], 'p0.isOpenSig.value?"":undefined'),
    "data-closed": _fnSignal((p0) => !p0.isOpenSig.value ? "" : void 0, [
      context
    ], '!p0.isOpenSig.value?"":undefined'),
    popover: _fnSignal((p0, p1) => p0.manual && "manual" || p1.popover === "manual" ? "manual" : "auto", [
      context,
      props
    ], 'p0.manual&&"manual"||p1.popover==="manual"?"manual":"auto"||"auto"')
  }, 0, "4J_2");
}, "PopoverPanelImpl_component_S8d6FqPib1Q"));
export {
  EnsuredContext,
  PopoverPanelImpl,
  ensureContextId as _auto_ensureContextId
};
