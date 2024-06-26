"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const accordionContextId = require("./accordion-context-id.qwik.cjs");
const AccordionRoot = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const props1 = qwik._restProps(props, [
    "collapsible",
    "behavior",
    "animated",
    "onSelectedIndexChange$",
    "onFocusIndexChange$"
  ]);
  const rootRef = qwik.useSignal();
  const currFocusedTriggerIndexSig = qwik.useSignal(-1);
  const currSelectedTriggerIndexSig = qwik.useSignal(-1);
  const selectedTriggerIdSig = qwik.useSignal("");
  const triggerElementsSig = qwik.useSignal([]);
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(({ track }) => {
    const [currSelectedTriggerIndexSig2, props2] = qwik.useLexicalScope();
    track(() => currSelectedTriggerIndexSig2.value);
    if (props2.onSelectedIndexChange$)
      props2.onSelectedIndexChange$(currSelectedTriggerIndexSig2.value);
  }, "AccordionRoot_component_useTask_OIz9GqzfhWo", [
    currSelectedTriggerIndexSig,
    props
  ]));
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(({ track }) => {
    const [currFocusedTriggerIndexSig2, props2] = qwik.useLexicalScope();
    track(() => currFocusedTriggerIndexSig2.value);
    if (props2.onFocusIndexChange$)
      props2.onFocusIndexChange$(currFocusedTriggerIndexSig2.value);
  }, "AccordionRoot_component_useTask_1_ESui5aVQnw4", [
    currFocusedTriggerIndexSig,
    props
  ]));
  const updateTriggers$ = /* @__PURE__ */ qwik.inlinedQrl(() => {
    const [rootRef2, triggerElementsSig2] = qwik.useLexicalScope();
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
  const focusPreviousTrigger$ = /* @__PURE__ */ qwik.inlinedQrl(() => {
    const [currFocusedTriggerIndexSig2, triggerElementsSig2] = qwik.useLexicalScope();
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
  const focusNextTrigger$ = /* @__PURE__ */ qwik.inlinedQrl(() => {
    const [currFocusedTriggerIndexSig2, triggerElementsSig2] = qwik.useLexicalScope();
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
  const focusFirstTrigger$ = /* @__PURE__ */ qwik.inlinedQrl(() => {
    const [triggerElementsSig2] = qwik.useLexicalScope();
    return triggerElementsSig2.value[0].focus();
  }, "AccordionRoot_component_focusFirstTrigger_M23m6OWY0Yk", [
    triggerElementsSig
  ]);
  const focusLastTrigger$ = /* @__PURE__ */ qwik.inlinedQrl(() => {
    const [triggerElementsSig2] = qwik.useLexicalScope();
    return triggerElementsSig2.value[triggerElementsSig2.value.length - 1].focus();
  }, "AccordionRoot_component_focusLastTrigger_S402i7G3WnI", [
    triggerElementsSig
  ]);
  qwik.useVisibleTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(function reIndexTriggers() {
    const [updateTriggers$2] = qwik.useLexicalScope();
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
  qwik.useContextProvider(accordionContextId.accordionRootContextId, contextService);
  return /* @__PURE__ */ qwik._jsxS("div", {
    ...props1,
    ref: rootRef,
    children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "Y2_0")
  }, null, 0, "Y2_1");
}, "AccordionRoot_component_uRFFVAvmnUI"));
exports.AccordionRoot = AccordionRoot;
