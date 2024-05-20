"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const build = require("@builder.io/qwik/build");
const popoverContext = require("./popover-context.qwik.cjs");
function usePopover(customId) {
  const hasPolyfillLoadedSig = qwik.useSignal(false);
  const isSupportedSig = qwik.useSignal(false);
  const didInteractSig = qwik.useSignal(false);
  const programmaticRef = qwik.useSignal(null);
  const isCSRSig = qwik.useSignal(false);
  const loadPolyfill$ = /* @__PURE__ */ qwik.inlinedQrl(async () => {
    document.dispatchEvent(new CustomEvent("poppolyload"));
  }, "usePopover_loadPolyfill_CR1n2pVDJW4");
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
    const [isCSRSig2] = qwik.useLexicalScope();
    if (build.isBrowser)
      isCSRSig2.value = true;
  }, "usePopover_useTask_CBp1MUaWDeE", [
    isCSRSig
  ]));
  const initPopover$ = /* @__PURE__ */ qwik.inlinedQrl(async () => {
    const [customId2, didInteractSig2, hasPolyfillLoadedSig2, isSupportedSig2, loadPolyfill$2, programmaticRef2] = qwik.useLexicalScope();
    const isSupported = typeof HTMLElement !== "undefined" && typeof HTMLElement.prototype === "object" && "popover" in HTMLElement.prototype;
    isSupportedSig2.value = isSupported;
    if (!hasPolyfillLoadedSig2.value && !isSupported)
      await loadPolyfill$2();
    if (!didInteractSig2.value) {
      if (programmaticRef2.value === null)
        programmaticRef2.value = document.getElementById(`${customId2}-panel`);
      didInteractSig2.value = true;
    }
    return programmaticRef2.value;
  }, "usePopover_initPopover_40BD0krDc0Y", [
    customId,
    didInteractSig,
    hasPolyfillLoadedSig,
    isSupportedSig,
    loadPolyfill$,
    programmaticRef
  ]);
  qwik.useOnDocument("showpopoverpoly", /* @__PURE__ */ qwik.inlinedQrl(async () => {
    const [didInteractSig2, hasPolyfillLoadedSig2] = qwik.useLexicalScope();
    if (!didInteractSig2.value)
      return;
    await Promise.resolve().then(() => require("../../node_modules/.pnpm/@oddbird_popover-polyfill@0.4.3/node_modules/@oddbird/popover-polyfill/dist/popover.qwik.cjs"));
    hasPolyfillLoadedSig2.value = true;
  }, "usePopover_useOnDocument_fumB3mKP8qY", [
    didInteractSig,
    hasPolyfillLoadedSig
  ]));
  const showPopover = /* @__PURE__ */ qwik.inlinedQrl(async () => {
    const [hasPolyfillLoadedSig2, initPopover$2, isSupportedSig2, programmaticRef2] = qwik.useLexicalScope();
    await initPopover$2();
    if (!isSupportedSig2.value)
      while (!hasPolyfillLoadedSig2.value)
        await new Promise((resolve) => setTimeout(resolve, 10));
    programmaticRef2.value?.showPopover();
  }, "usePopover_showPopover_cpZnQEOjNwM", [
    hasPolyfillLoadedSig,
    initPopover$,
    isSupportedSig,
    programmaticRef
  ]);
  const togglePopover = /* @__PURE__ */ qwik.inlinedQrl(async () => {
    const [hasPolyfillLoadedSig2, initPopover$2, isSupportedSig2, programmaticRef2] = qwik.useLexicalScope();
    await initPopover$2();
    if (!isSupportedSig2.value)
      while (!hasPolyfillLoadedSig2.value)
        await new Promise((resolve) => setTimeout(resolve, 10));
    programmaticRef2.value?.togglePopover();
  }, "usePopover_togglePopover_cIwbbWB7Tv0", [
    hasPolyfillLoadedSig,
    initPopover$,
    isSupportedSig,
    programmaticRef
  ]);
  const hidePopover = /* @__PURE__ */ qwik.inlinedQrl(async () => {
    const [hasPolyfillLoadedSig2, initPopover$2, isSupportedSig2, programmaticRef2] = qwik.useLexicalScope();
    await initPopover$2();
    if (!isSupportedSig2.value)
      while (!hasPolyfillLoadedSig2.value)
        await new Promise((resolve) => setTimeout(resolve, 10));
    programmaticRef2.value?.hidePopover();
  }, "usePopover_hidePopover_QstI2cQhvnA", [
    hasPolyfillLoadedSig,
    initPopover$,
    isSupportedSig,
    programmaticRef
  ]);
  return {
    showPopover,
    togglePopover,
    hidePopover,
    initPopover$,
    hasPolyfillLoadedSig,
    isSupportedSig
  };
}
const PopoverTrigger = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const context = qwik.useContext(popoverContext.popoverContextId);
  const triggerId = `${context.compId}-trigger`;
  const panelId = `${context.compId}-panel`;
  const popover = usePopover(context.compId);
  const handleClick$ = /* @__PURE__ */ qwik.inlinedQrl(async () => {
    const [context2, popover2] = qwik.useLexicalScope();
    if (context2.hover)
      return;
    if (popover2.isSupportedSig.value)
      return;
    await popover2.initPopover$();
    while (!popover2.hasPolyfillLoadedSig.value)
      await new Promise((resolve) => setTimeout(resolve, 10));
    context2.panelRef?.value?.togglePopover();
  }, "PopoverTrigger_component_handleClick_4XBF9102A14", [
    context,
    popover
  ]);
  const handlePointerOver$ = /* @__PURE__ */ qwik.inlinedQrl(async () => {
    const [context2, popover2] = qwik.useLexicalScope();
    if (!context2.hover)
      return;
    await popover2.showPopover();
  }, "PopoverTrigger_component_handlePointerOver_ek2c2dlOqTY", [
    context,
    popover
  ]);
  const handlePointerOut$ = /* @__PURE__ */ qwik.inlinedQrl(async () => {
    const [context2, popover2] = qwik.useLexicalScope();
    if (!context2.hover)
      return;
    await popover2.hidePopover();
  }, "PopoverTrigger_component_handlePointerOut_ZdFu7120whk", [
    context,
    popover
  ]);
  return /* @__PURE__ */ qwik._jsxS("button", {
    ...props,
    ref: context.triggerRef,
    id: triggerId,
    popovertarget: panelId,
    get popoverTargetAction() {
      return context.hover ? "show" : void 0;
    },
    children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "lR_0"),
    onClick$: [
      handleClick$,
      props.onClick$
    ],
    onPointerOver$: [
      handlePointerOver$,
      props.onPointerOver$
    ],
    onPointerOut$: [
      handlePointerOut$,
      props.onPointerOut$
    ]
  }, {
    popoverTargetAction: qwik._fnSignal((p0) => p0.hover ? "show" : void 0, [
      context
    ], 'p0.hover?"show":undefined')
  }, 0, "lR_1");
}, "PopoverTrigger_component_2AI6AvvM4z8"));
exports.PopoverTrigger = PopoverTrigger;
exports.usePopover = usePopover;
