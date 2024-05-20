import { componentQrl, inlinedQrl, useContext, useSignal, useStylesScopedQrl, useTaskQrl, useLexicalScope, useVisibleTaskQrl, _jsxS, _jsxC, Slot, _IMMUTABLE, _fnSignal } from "@builder.io/qwik";
import { accordionRootContextId, accordionItemContextId } from "./accordion-context-id.qwik.mjs";
const AccordionContent = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl(({ ...props }) => {
  const contextService = useContext(accordionRootContextId);
  const itemContext = useContext(accordionItemContextId);
  const ref = useSignal();
  const contentId = `${itemContext.itemId}-content`;
  const totalHeightSig = useSignal(0);
  const isContentHiddenSig = useSignal(!itemContext.defaultValue);
  const hideContent$ = /* @__PURE__ */ inlinedQrl(() => {
    const [isContentHiddenSig2, itemContext2] = useLexicalScope();
    if (!itemContext2.isTriggerExpandedSig.value)
      isContentHiddenSig2.value = true;
  }, "AccordionContent_component_hideContent_aVzyuiT0d2g", [
    isContentHiddenSig,
    itemContext
  ]);
  useStylesScopedQrl(/* @__PURE__ */ inlinedQrl(`
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
  useTaskQrl(/* @__PURE__ */ inlinedQrl(function animateContentTask({ track }) {
    const [contextService2, isContentHiddenSig2, itemContext2] = useLexicalScope();
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
  useVisibleTaskQrl(/* @__PURE__ */ inlinedQrl(function calculateHeightVisibleTask({ track }) {
    const [contextService2, isContentHiddenSig2, ref2, totalHeightSig2] = useLexicalScope();
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
  return /* @__PURE__ */ _jsxS("div", {
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
    children: /* @__PURE__ */ _jsxC(Slot, null, 3, "3E_0"),
    onAnimationEnd$: [
      hideContent$,
      props.onAnimationEnd$
    ],
    onTransitionEnd$: [
      hideContent$,
      props.onTransitionEnd$
    ]
  }, {
    role: _IMMUTABLE,
    "data-state": _fnSignal((p0) => p0.isTriggerExpandedSig.value ? "open" : "closed", [
      itemContext
    ], 'p0.isTriggerExpandedSig.value?"open":"closed"'),
    hidden: _fnSignal((p0, p1, p2) => p0.animated ? p1.value : !p2.isTriggerExpandedSig.value, [
      contextService,
      isContentHiddenSig,
      itemContext
    ], "p0.animated?p1.value:!p2.isTriggerExpandedSig.value"),
    style: _IMMUTABLE
  }, 0, "3E_1");
}, "AccordionContent_component_MI5OoqNyeMU"));
export {
  AccordionContent
};
