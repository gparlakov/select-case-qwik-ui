"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const accordionContextId = require("./accordion-context-id.qwik.cjs");
const AccordionContent = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl(({ ...props }) => {
  const contextService = qwik.useContext(accordionContextId.accordionRootContextId);
  const itemContext = qwik.useContext(accordionContextId.accordionItemContextId);
  const ref = qwik.useSignal();
  const contentId = `${itemContext.itemId}-content`;
  const totalHeightSig = qwik.useSignal(0);
  const isContentHiddenSig = qwik.useSignal(!itemContext.defaultValue);
  const hideContent$ = /* @__PURE__ */ qwik.inlinedQrl(() => {
    const [isContentHiddenSig2, itemContext2] = qwik.useLexicalScope();
    if (!itemContext2.isTriggerExpandedSig.value)
      isContentHiddenSig2.value = true;
  }, "AccordionContent_component_hideContent_aVzyuiT0d2g", [
    isContentHiddenSig,
    itemContext
  ]);
  qwik.useStylesScopedQrl(/* @__PURE__ */ qwik.inlinedQrl(`
    /* check global.css utilites layer for animation */
    @keyframes accordion-open {
      0% {
        height: 0;
      }
      100% {
        height: var(--qwikui-accordion-content-height);
      }
    }
  
    @keyframes accordion-close {
        0% {
          height: var(--qwikui-accordion-content-height);
        }
        100% {
          height: 0;
        }
      }
  `, "AccordionContent_component_useStylesScoped_GJiZREKb9bc"));
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(function animateContentTask({ track }) {
    const [contextService2, isContentHiddenSig2, itemContext2] = qwik.useLexicalScope();
    if (!contextService2.animated)
      return;
    track(() => itemContext2.isTriggerExpandedSig.value);
    if (itemContext2.isTriggerExpandedSig.value)
      isContentHiddenSig2.value = false;
  }, "AccordionContent_component_useTask_KrYKRzCLxns", [
    contextService,
    isContentHiddenSig,
    itemContext
  ]));
  qwik.useVisibleTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(function calculateHeightVisibleTask({ track }) {
    const [contextService2, isContentHiddenSig2, ref2, totalHeightSig2] = qwik.useLexicalScope();
    if (contextService2.animated === false)
      return;
    track(() => isContentHiddenSig2.value);
    if (totalHeightSig2.value === 0)
      getCalculatedHeight();
    function getCalculatedHeight() {
      if (!ref2.value)
        return;
      const contentChildren = Array.from(ref2.value.children);
      contentChildren.forEach((element, index) => {
        totalHeightSig2.value += element.offsetHeight;
        if (index === contentChildren.length - 1)
          ref2.value.style.setProperty("--qwikui-accordion-content-height", `${totalHeightSig2.value}px`);
      });
    }
  }, "AccordionContent_component_useVisibleTask_iV4vKMBL4Gw", [
    contextService,
    isContentHiddenSig,
    ref,
    totalHeightSig
  ]));
  return /* @__PURE__ */ qwik._jsxS("div", {
    ref,
    role: "region",
    id: contentId,
    "data-content-id": contentId,
    get "data-state"() {
      return itemContext.isTriggerExpandedSig.value ? "open" : "closed";
    },
    get hidden() {
      return contextService.animated ? isContentHiddenSig.value : !itemContext.isTriggerExpandedSig.value;
    },
    style: {
      ["--qwikui-collapsible-content-height"]: "var(--qwikui-accordion-content-height)",
      ["--qwikui-collapsible-content-width"]: "var(--qwikui-accordion-content-width)"
    },
    ...props,
    children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "3E_0"),
    onAnimationEnd$: [
      hideContent$,
      props.onAnimationEnd$
    ],
    onTransitionEnd$: [
      hideContent$,
      props.onTransitionEnd$
    ]
  }, {
    role: qwik._IMMUTABLE,
    "data-state": qwik._fnSignal((p0) => p0.isTriggerExpandedSig.value ? "open" : "closed", [
      itemContext
    ], 'p0.isTriggerExpandedSig.value?"open":"closed"'),
    hidden: qwik._fnSignal((p0, p1, p2) => p0.animated ? p1.value : !p2.isTriggerExpandedSig.value, [
      contextService,
      isContentHiddenSig,
      itemContext
    ], "p0.animated?p1.value:!p2.isTriggerExpandedSig.value"),
    style: qwik._IMMUTABLE
  }, 0, "3E_1");
}, "AccordionContent_component_MI5OoqNyeMU"));
exports.AccordionContent = AccordionContent;
