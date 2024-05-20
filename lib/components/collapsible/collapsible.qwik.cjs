"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const collapsibleContextId = require("./collapsible-context-id.qwik.cjs");
const getHiddenHeight = require("../../utils/get-hidden-height.qwik.cjs");
const build = require("@builder.io/qwik/build");
const Collapsible = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const { disabled, onOpenChange$, "bind:open": givenIsOpenSig, id, open, ...rest } = props;
  const defaultOpenSig = qwik.useSignal(open ?? false);
  const isOpenSig = givenIsOpenSig ?? defaultOpenSig;
  const triggerRef = qwik.useSignal();
  const contentRef = qwik.useSignal();
  const contentHeightSig = qwik.useSignal(null);
  const localId = qwik.useId();
  const itemId = id || localId;
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(function onOpenChangeTask({ track }) {
    const [isOpenSig2, onOpenChange$2] = qwik.useLexicalScope();
    track(() => isOpenSig2.value);
    if (build.isBrowser)
      onOpenChange$2?.(isOpenSig2.value);
  }, "Collapsible_component_useTask_CvFXvw0wiDg", [
    isOpenSig,
    onOpenChange$
  ]));
  const getContentDimensions$ = /* @__PURE__ */ qwik.inlinedQrl(() => {
    const [contentHeightSig2, contentRef2] = qwik.useLexicalScope();
    if (!contentRef2.value)
      throw new Error("Qwik UI: There is no reference to the collapsible content element. Make sure to wrap the content in a <CollapsibleContent> component.");
    if (contentHeightSig2.value === null)
      contentHeightSig2.value = getHiddenHeight.getHiddenHeight(contentRef2.value);
    if (contentHeightSig2.value !== 0)
      contentRef2.value.style.setProperty("--qwikui-collapsible-content-height", `${contentHeightSig2.value}px`);
  }, "Collapsible_component_getContentDimensions_Wh0GJIWZrZU", [
    contentHeightSig,
    contentRef
  ]);
  const context = {
    isOpenSig,
    itemId,
    triggerRef,
    contentRef,
    contentHeightSig,
    getContentDimensions$,
    disabled
  };
  qwik.useContextProvider(collapsibleContextId.collapsibleContextId, context);
  return /* @__PURE__ */ qwik._jsxS("div", {
    id: itemId,
    "data-collapsible": true,
    "data-disabled": context.disabled ? "" : void 0,
    "data-open": context.isOpenSig.value ? "" : void 0,
    "data-closed": !context.isOpenSig.value ? "" : void 0,
    ...rest,
    children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "pl_0")
  }, {
    "data-collapsible": qwik._IMMUTABLE
  }, 0, "pl_1");
}, "Collapsible_component_QRfPSV96p2k"));
exports.Collapsible = Collapsible;
