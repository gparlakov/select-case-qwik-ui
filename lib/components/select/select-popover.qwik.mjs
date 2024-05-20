import { componentQrl, inlinedQrl, useContext, _restProps, useSignal, useTaskQrl, useLexicalScope, _jsxC, Slot, _IMMUTABLE, _fnSignal } from "@builder.io/qwik";
import { usePopover } from "../popover/popover-trigger.qwik.mjs";
import { PopoverPanel } from "../popover/popover-panel.qwik.mjs";
import SelectContextId from "./select-context.qwik.mjs";
import { PopoverRoot } from "../popover/popover-root.qwik.mjs";
import { isServer } from "@builder.io/qwik/build";
const SelectPopover = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const context = useContext(SelectContextId);
  const popover = usePopover(context.localId);
  const rest = _restProps(props, [
    "floating",
    "flip",
    "hover",
    "gutter"
  ]);
  const initialLoadSig = useSignal(true);
  useTaskQrl(/* @__PURE__ */ inlinedQrl(async ({ track }) => {
    const [context2, initialLoadSig2, popover2] = useLexicalScope();
    track(() => context2.isListboxOpenSig.value);
    if (isServer)
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
  useTaskQrl(/* @__PURE__ */ inlinedQrl(() => {
    const [initialLoadSig2] = useLexicalScope();
    initialLoadSig2.value = false;
  }, "SelectPopover_component_useTask_1_Goo1bGeONQ8", [
    initialLoadSig
  ]));
  return /* @__PURE__ */ _jsxC(PopoverRoot, {
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
    children: /* @__PURE__ */ _jsxC(PopoverPanel, {
      get "data-open"() {
        return context.isListboxOpenSig.value ? "" : void 0;
      },
      get "data-closed"() {
        return !context.isListboxOpenSig.value ? "" : void 0;
      },
      ...rest,
      children: /* @__PURE__ */ _jsxC(Slot, null, 3, "VQ_0"),
      [_IMMUTABLE]: {
        "data-open": _fnSignal((p0) => p0.isListboxOpenSig.value ? "" : void 0, [
          context
        ], 'p0.isListboxOpenSig.value?"":undefined'),
        "data-closed": _fnSignal((p0) => !p0.isListboxOpenSig.value ? "" : void 0, [
          context
        ], '!p0.isListboxOpenSig.value?"":undefined')
      }
    }, 0, "VQ_1"),
    [_IMMUTABLE]: {
      floating: _fnSignal((p0) => p0.floating, [
        props
      ], "p0.floating"),
      flip: _fnSignal((p0) => p0.flip, [
        props
      ], "p0.flip"),
      hover: _fnSignal((p0) => p0.hover, [
        props
      ], "p0.hover"),
      gutter: _fnSignal((p0) => p0.gutter, [
        props
      ], "p0.gutter"),
      "bind:anchor": _fnSignal((p0) => p0.triggerRef, [
        context
      ], "p0.triggerRef"),
      manual: _IMMUTABLE,
      id: _fnSignal((p0) => p0.localId, [
        context
      ], "p0.localId")
    }
  }, 1, "VQ_2");
}, "SelectPopover_component_ml96C6F03qE"));
export {
  SelectPopover
};
