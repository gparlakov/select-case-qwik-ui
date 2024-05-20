import { componentQrl, inlinedQrl, useContext, useSignal, useTaskQrl, useLexicalScope, _jsxS, _jsxC, Slot, _IMMUTABLE, _fnSignal } from "@builder.io/qwik";
import { collapsibleContextId } from "./collapsible-context-id.qwik.mjs";
import { isServer } from "@builder.io/qwik/build";
const CollapsibleContent = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const context = useContext(collapsibleContextId);
  const isHiddenSig = useSignal(!context.isOpenSig.value);
  const isAnimatedSig = useSignal(true);
  const initialRenderSig = useSignal(true);
  const contentId = `${context.itemId}-content`;
  const hideContent$ = /* @__PURE__ */ inlinedQrl(() => {
    const [context2, isHiddenSig2] = useLexicalScope();
    if (!context2.isOpenSig.value)
      isHiddenSig2.value = true;
  }, "CollapsibleContent_component_hideContent_AIgr20N9fCY", [
    context,
    isHiddenSig
  ]);
  useTaskQrl(/* @__PURE__ */ inlinedQrl(async function automaticAnimations({ track }) {
    const [context2, initialRenderSig2, isAnimatedSig2, isHiddenSig2] = useLexicalScope();
    track(() => context2.isOpenSig.value);
    if (isServer)
      return;
    if (context2.isOpenSig.value)
      await context2.getContentDimensions$();
    setTimeout(() => {
      const { animationDuration, transitionDuration } = getComputedStyle(context2.contentRef.value);
      if (animationDuration === "0s" && transitionDuration === "0s" && !initialRenderSig2.value)
        isAnimatedSig2.value = false;
      else
        isAnimatedSig2.value = true;
    }, 15);
    if (context2.isOpenSig.value)
      isHiddenSig2.value = false;
    initialRenderSig2.value = false;
  }, "CollapsibleContent_component_useTask_28qIb1I8X0Y", [
    context,
    initialRenderSig,
    isAnimatedSig,
    isHiddenSig
  ]));
  return /* @__PURE__ */ _jsxS("div", {
    ...props,
    ref: context.contentRef,
    id: contentId,
    "data-collapsible-content": true,
    get "data-disabled"() {
      return context.disabled ? "" : void 0;
    },
    get "data-open"() {
      return !initialRenderSig.value && context.isOpenSig.value ? "" : void 0;
    },
    get "data-closed"() {
      return !context.isOpenSig.value ? "" : void 0;
    },
    get hidden() {
      return isAnimatedSig.value ? isHiddenSig.value : !context.isOpenSig.value;
    },
    children: /* @__PURE__ */ _jsxC(Slot, null, 3, "qX_0"),
    onAnimationEnd$: [
      hideContent$,
      props.onAnimationEnd$
    ],
    onTransitionEnd$: [
      hideContent$,
      props.onTransitionEnd$
    ]
  }, {
    "data-collapsible-content": _IMMUTABLE,
    "data-disabled": _fnSignal((p0) => p0.disabled ? "" : void 0, [
      context
    ], 'p0.disabled?"":undefined'),
    "data-open": _fnSignal((p0, p1) => !p1.value && p0.isOpenSig.value ? "" : void 0, [
      context,
      initialRenderSig
    ], '!p1.value&&p0.isOpenSig.value?"":undefined'),
    "data-closed": _fnSignal((p0) => !p0.isOpenSig.value ? "" : void 0, [
      context
    ], '!p0.isOpenSig.value?"":undefined'),
    hidden: _fnSignal((p0, p1, p2) => p1.value ? p2.value : !p0.isOpenSig.value, [
      context,
      isAnimatedSig,
      isHiddenSig
    ], "p1.value?p2.value:!p0.isOpenSig.value")
  }, 0, "qX_1");
}, "CollapsibleContent_component_4l0meushem0"));
export {
  CollapsibleContent
};
