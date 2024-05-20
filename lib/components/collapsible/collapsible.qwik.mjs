import { componentQrl, inlinedQrl, useSignal, useId, useTaskQrl, useLexicalScope, useContextProvider, _jsxS, _jsxC, Slot, _IMMUTABLE } from "@builder.io/qwik";
import { collapsibleContextId } from "./collapsible-context-id.qwik.mjs";
import { getHiddenHeight } from "../../utils/get-hidden-height.qwik.mjs";
import { isBrowser } from "@builder.io/qwik/build";
const Collapsible = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const { disabled, onOpenChange$, "bind:open": givenIsOpenSig, id, open, ...rest } = props;
  const defaultOpenSig = useSignal(open ?? false);
  const isOpenSig = givenIsOpenSig ?? defaultOpenSig;
  const triggerRef = useSignal();
  const contentRef = useSignal();
  const contentHeightSig = useSignal(null);
  const localId = useId();
  const itemId = id || localId;
  useTaskQrl(/* @__PURE__ */ inlinedQrl(function onOpenChangeTask({ track }) {
    const [isOpenSig2, onOpenChange$2] = useLexicalScope();
    track(() => isOpenSig2.value);
    if (isBrowser)
      onOpenChange$2?.(isOpenSig2.value);
  }, "Collapsible_component_useTask_CvFXvw0wiDg", [
    isOpenSig,
    onOpenChange$
  ]));
  const getContentDimensions$ = /* @__PURE__ */ inlinedQrl(() => {
    const [contentHeightSig2, contentRef2] = useLexicalScope();
    if (!contentRef2.value)
      throw new Error("Qwik UI: There is no reference to the collapsible content element. Make sure to wrap the content in a <CollapsibleContent> component.");
    if (contentHeightSig2.value === null)
      contentHeightSig2.value = getHiddenHeight(contentRef2.value);
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
  useContextProvider(collapsibleContextId, context);
  return /* @__PURE__ */ _jsxS("div", {
    id: itemId,
    "data-collapsible": true,
    "data-disabled": context.disabled ? "" : void 0,
    "data-open": context.isOpenSig.value ? "" : void 0,
    "data-closed": !context.isOpenSig.value ? "" : void 0,
    ...rest,
    children: /* @__PURE__ */ _jsxC(Slot, null, 3, "pl_0")
  }, {
    "data-collapsible": _IMMUTABLE
  }, 0, "pl_1");
}, "Collapsible_component_QRfPSV96p2k"));
export {
  Collapsible
};
