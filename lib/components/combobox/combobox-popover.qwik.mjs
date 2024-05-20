import { componentQrl, inlinedQrl, useContext, _restProps, useTaskQrl, useLexicalScope, _jsxC, Slot, _IMMUTABLE, _fnSignal } from "@builder.io/qwik";
import { PopoverPanel } from "../popover/popover-panel.qwik.mjs";
import { usePopover } from "../popover/popover-trigger.qwik.mjs";
import { PopoverRoot } from "../popover/popover-root.qwik.mjs";
import ComboboxContextId from "./combobox-context-id.qwik.mjs";
import { isServer } from "@builder.io/qwik/build";
const ComboboxPopover = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const context = useContext(ComboboxContextId);
  const popover = usePopover(context.localId);
  const rest = _restProps(props, [
    "floating",
    "flip",
    "hover",
    "gutter"
  ]);
  useTaskQrl(/* @__PURE__ */ inlinedQrl(async ({ track }) => {
    const [context2, popover2] = useLexicalScope();
    track(() => context2.isListboxOpenSig.value);
    if (isServer)
      return;
    if (context2.isListboxOpenSig.value)
      popover2.showPopover();
    else
      popover2.hidePopover();
  }, "ComboboxPopover_component_useTask_X0yqNuxSzfM", [
    context,
    popover
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
      return context.inputRef;
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
      children: /* @__PURE__ */ _jsxC(Slot, null, 3, "Cv_0"),
      [_IMMUTABLE]: {
        "data-open": _fnSignal((p0) => p0.isListboxOpenSig.value ? "" : void 0, [
          context
        ], 'p0.isListboxOpenSig.value?"":undefined'),
        "data-closed": _fnSignal((p0) => !p0.isListboxOpenSig.value ? "" : void 0, [
          context
        ], '!p0.isListboxOpenSig.value?"":undefined')
      }
    }, 0, "Cv_1"),
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
      "bind:anchor": _fnSignal((p0) => p0.inputRef, [
        context
      ], "p0.inputRef"),
      manual: _IMMUTABLE,
      id: _fnSignal((p0) => p0.localId, [
        context
      ], "p0.localId")
    }
  }, 1, "Cv_2");
}, "ComboboxPopover_component_NDumw4Z9PRk"));
export {
  ComboboxPopover
};
