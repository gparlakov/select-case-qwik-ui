"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const popoverTrigger = require("../popover/popover-trigger.qwik.cjs");
const popoverPanel = require("../popover/popover-panel.qwik.cjs");
const selectContext = require("./select-context.qwik.cjs");
const popoverRoot = require("../popover/popover-root.qwik.cjs");
const build = require("@builder.io/qwik/build");
const SelectPopover = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const context = qwik.useContext(selectContext.default);
  const popover = popoverTrigger.usePopover(context.localId);
  const rest = qwik._restProps(props, [
    "floating",
    "flip",
    "hover",
    "gutter"
  ]);
  const initialLoadSig = qwik.useSignal(true);
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(async ({ track }) => {
    const [context2, initialLoadSig2, popover2] = qwik.useLexicalScope();
    track(() => context2.isListboxOpenSig.value);
    if (build.isServer)
      return;
    if (!initialLoadSig2.value) {
      if (context2.isListboxOpenSig.value)
        await popover2.showPopover();
      else
        await popover2.hidePopover();
    }
  }, "SelectPopover_component_useTask_0JAJ3b8ZoEw", [
    context,
    initialLoadSig,
    popover
  ]));
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
    const [initialLoadSig2] = qwik.useLexicalScope();
    initialLoadSig2.value = false;
  }, "SelectPopover_component_useTask_1_Goo1bGeONQ8", [
    initialLoadSig
  ]));
  return /* @__PURE__ */ qwik._jsxC(popoverRoot.PopoverRoot, {
    get floating() {
      return props.floating;
    },
    get flip() {
      return props.flip;
    },
    get hover() {
      return props.hover;
    },
    get gutter() {
      return props.gutter;
    },
    get "bind:anchor"() {
      return context.triggerRef;
    },
    manual: true,
    get id() {
      return context.localId;
    },
    children: /* @__PURE__ */ qwik._jsxC(popoverPanel.PopoverPanel, {
      get "data-open"() {
        return context.isListboxOpenSig.value ? "" : void 0;
      },
      get "data-closed"() {
        return !context.isListboxOpenSig.value ? "" : void 0;
      },
      ...rest,
      children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "VQ_0"),
      [qwik._IMMUTABLE]: {
        "data-open": qwik._fnSignal((p0) => p0.isListboxOpenSig.value ? "" : void 0, [
          context
        ], 'p0.isListboxOpenSig.value?"":undefined'),
        "data-closed": qwik._fnSignal((p0) => !p0.isListboxOpenSig.value ? "" : void 0, [
          context
        ], '!p0.isListboxOpenSig.value?"":undefined')
      }
    }, 0, "VQ_1"),
    [qwik._IMMUTABLE]: {
      floating: qwik._fnSignal((p0) => p0.floating, [
        props
      ], "p0.floating"),
      flip: qwik._fnSignal((p0) => p0.flip, [
        props
      ], "p0.flip"),
      hover: qwik._fnSignal((p0) => p0.hover, [
        props
      ], "p0.hover"),
      gutter: qwik._fnSignal((p0) => p0.gutter, [
        props
      ], "p0.gutter"),
      "bind:anchor": qwik._fnSignal((p0) => p0.triggerRef, [
        context
      ], "p0.triggerRef"),
      manual: qwik._IMMUTABLE,
      id: qwik._fnSignal((p0) => p0.localId, [
        context
      ], "p0.localId")
    }
  }, 1, "VQ_2");
}, "SelectPopover_component_ml96C6F03qE"));
exports.SelectPopover = SelectPopover;
