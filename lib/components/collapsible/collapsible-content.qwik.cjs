"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const collapsibleContextId = require("./collapsible-context-id.qwik.cjs");
const build = require("@builder.io/qwik/build");
const CollapsibleContent = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const context = qwik.useContext(collapsibleContextId.collapsibleContextId);
  const isHiddenSig = qwik.useSignal(!context.isOpenSig.value);
  const isAnimatedSig = qwik.useSignal(true);
  const initialRenderSig = qwik.useSignal(true);
  const contentId = `${context.itemId}-content`;
  const hideContent$ = /* @__PURE__ */ qwik.inlinedQrl(() => {
    const [context2, isHiddenSig2] = qwik.useLexicalScope();
    if (!context2.isOpenSig.value)
      isHiddenSig2.value = true;
  }, "CollapsibleContent_component_hideContent_AIgr20N9fCY", [
    context,
    isHiddenSig
  ]);
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(async function automaticAnimations({ track }) {
    const [context2, initialRenderSig2, isAnimatedSig2, isHiddenSig2] = qwik.useLexicalScope();
    track(() => context2.isOpenSig.value);
    if (build.isServer)
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
  return /* @__PURE__ */ qwik._jsxS("div", {
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
    children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "qX_0"),
    onAnimationEnd$: [
      hideContent$,
      props.onAnimationEnd$
    ],
    onTransitionEnd$: [
      hideContent$,
      props.onTransitionEnd$
    ]
  }, {
    "data-collapsible-content": qwik._IMMUTABLE,
    "data-disabled": qwik._fnSignal((p0) => p0.disabled ? "" : void 0, [
      context
    ], 'p0.disabled?"":undefined'),
    "data-open": qwik._fnSignal((p0, p1) => !p1.value && p0.isOpenSig.value ? "" : void 0, [
      context,
      initialRenderSig
    ], '!p1.value&&p0.isOpenSig.value?"":undefined'),
    "data-closed": qwik._fnSignal((p0) => !p0.isOpenSig.value ? "" : void 0, [
      context
    ], '!p0.isOpenSig.value?"":undefined'),
    hidden: qwik._fnSignal((p0, p1, p2) => p1.value ? p2.value : !p0.isOpenSig.value, [
      context,
      isAnimatedSig,
      isHiddenSig
    ], "p1.value?p2.value:!p0.isOpenSig.value")
  }, 0, "qX_1");
}, "CollapsibleContent_component_4l0meushem0"));
exports.CollapsibleContent = CollapsibleContent;
