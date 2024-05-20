import { componentQrl, inlinedQrl, _restProps, useSignal, useTaskQrl, useLexicalScope, useVisibleTaskQrl, useContextProvider, _jsxS, _jsxC, Slot } from "@builder.io/qwik";
import { accordionRootContextId } from "./accordion-context-id.qwik.mjs";
const AccordionRoot = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const props1 = _restProps(props, [
    "collapsible",
    "behavior",
    "animated",
    "onSelectedIndexChange$",
    "onFocusIndexChange$"
  ]);
  const rootRef = useSignal();
  const currFocusedTriggerIndexSig = useSignal(-1);
  const currSelectedTriggerIndexSig = useSignal(-1);
  const selectedTriggerIdSig = useSignal("");
  const triggerElementsSig = useSignal([]);
  useTaskQrl(/* @__PURE__ */ inlinedQrl(({ track }) => {
    const [currSelectedTriggerIndexSig2, props2] = useLexicalScope();
    track(() => currSelectedTriggerIndexSig2.value);
    if (props2.onSelectedIndexChange$)
      props2.onSelectedIndexChange$(currSelectedTriggerIndexSig2.value);
  }, "AccordionRoot_component_useTask_OIz9GqzfhWo", [
    currSelectedTriggerIndexSig,
    props
  ]));
  useTaskQrl(/* @__PURE__ */ inlinedQrl(({ track }) => {
    const [currFocusedTriggerIndexSig2, props2] = useLexicalScope();
    track(() => currFocusedTriggerIndexSig2.value);
    if (props2.onFocusIndexChange$)
      props2.onFocusIndexChange$(currFocusedTriggerIndexSig2.value);
  }, "AccordionRoot_component_useTask_1_ESui5aVQnw4", [
    currFocusedTriggerIndexSig,
    props
  ]));
  const updateTriggers$ = /* @__PURE__ */ inlinedQrl(() => {
    const [rootRef2, triggerElementsSig2] = useLexicalScope();
    if (!rootRef2.value)
      return;
    const getLatestTriggers = Array.from(rootRef2.value.querySelectorAll("[data-trigger-id]"));
    triggerElementsSig2.value = getLatestTriggers.filter((element) => {
      if (element.getAttribute("aria-disabled") === "true")
        return false;
      return true;
    });
  }, "AccordionRoot_component_updateTriggers_r2MnDBZKS0A", [
    rootRef,
    triggerElementsSig
  ]);
  const focusPreviousTrigger$ = /* @__PURE__ */ inlinedQrl(() => {
    const [currFocusedTriggerIndexSig2, triggerElementsSig2] = useLexicalScope();
    if (currFocusedTriggerIndexSig2.value === 0) {
      currFocusedTriggerIndexSig2.value = triggerElementsSig2.value.length - 1;
      return triggerElementsSig2.value[triggerElementsSig2.value.length - 1].focus();
    }
    currFocusedTriggerIndexSig2.value--;
    return triggerElementsSig2.value[currFocusedTriggerIndexSig2.value].focus();
  }, "AccordionRoot_component_focusPreviousTrigger_60ophqMJZzo", [
    currFocusedTriggerIndexSig,
    triggerElementsSig
  ]);
  const focusNextTrigger$ = /* @__PURE__ */ inlinedQrl(() => {
    const [currFocusedTriggerIndexSig2, triggerElementsSig2] = useLexicalScope();
    if (currFocusedTriggerIndexSig2.value === triggerElementsSig2.value.length - 1) {
      currFocusedTriggerIndexSig2.value = 0;
      return triggerElementsSig2.value[0].focus();
    }
    currFocusedTriggerIndexSig2.value++;
    return triggerElementsSig2.value[currFocusedTriggerIndexSig2.value].focus();
  }, "AccordionRoot_component_focusNextTrigger_hL24w2BwnWE", [
    currFocusedTriggerIndexSig,
    triggerElementsSig
  ]);
  const focusFirstTrigger$ = /* @__PURE__ */ inlinedQrl(() => {
    const [triggerElementsSig2] = useLexicalScope();
    return triggerElementsSig2.value[0].focus();
  }, "AccordionRoot_component_focusFirstTrigger_M23m6OWY0Yk", [
    triggerElementsSig
  ]);
  const focusLastTrigger$ = /* @__PURE__ */ inlinedQrl(() => {
    const [triggerElementsSig2] = useLexicalScope();
    return triggerElementsSig2.value[triggerElementsSig2.value.length - 1].focus();
  }, "AccordionRoot_component_focusLastTrigger_S402i7G3WnI", [
    triggerElementsSig
  ]);
  useVisibleTaskQrl(/* @__PURE__ */ inlinedQrl(function reIndexTriggers() {
    const [updateTriggers$2] = useLexicalScope();
    updateTriggers$2();
  }, "AccordionRoot_component_useVisibleTask_tHjHtEoWpY0", [
    updateTriggers$
  ]));
  const contextService = {
    updateTriggers$,
    focusFirstTrigger$,
    focusPreviousTrigger$,
    focusNextTrigger$,
    focusLastTrigger$,
    currFocusedTriggerIndexSig,
    currSelectedTriggerIndexSig,
    selectedTriggerIdSig,
    triggerElementsSig,
    collapsible: props.collapsible ?? true,
    behavior: props.behavior ?? "single",
    animated: props.animated ?? false
  };
  useContextProvider(accordionRootContextId, contextService);
  return /* @__PURE__ */ _jsxS("div", {
    ...props1,
    ref: rootRef,
    children: /* @__PURE__ */ _jsxC(Slot, null, 3, "Y2_0")
  }, null, 0, "Y2_1");
}, "AccordionRoot_component_uRFFVAvmnUI"));
export {
  AccordionRoot
};
