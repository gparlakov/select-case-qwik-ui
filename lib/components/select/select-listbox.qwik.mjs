import { componentQrl, inlinedQrl, useStylesQrl, useContext, useTaskQrl, useLexicalScope, _jsxS, _jsxC, Slot, _IMMUTABLE, _fnSignal } from "@builder.io/qwik";
import SelectContextId from "./select-context.qwik.mjs";
import styles from "./select.css.qwik.mjs";
import { isServer } from "@builder.io/qwik/build";
const SelectListbox = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  useStylesQrl(/* @__PURE__ */ inlinedQrl(styles, "SelectListbox_component_useStyles_doewkiMCdvY"));
  const context = useContext(SelectContextId);
  const listboxId = `${context.localId}-listbox`;
  const isOutside = /* @__PURE__ */ inlinedQrl((rect, x, y) => {
    return x < rect.left || x > rect.right || y < rect.top || y > rect.bottom;
  }, "SelectListbox_component_isOutside_OtjHln0iT0M");
  const handleDismiss$ = /* @__PURE__ */ inlinedQrl(async (e) => {
    const [context2, isOutside2] = useLexicalScope();
    if (!context2.isListboxOpenSig.value)
      return;
    if (!context2.listboxRef.value || !context2.triggerRef.value)
      return;
    const listboxRect = context2.listboxRef.value.getBoundingClientRect();
    const triggerRect = context2.triggerRef.value.getBoundingClientRect();
    const { clientX, clientY } = e;
    const isOutsideListbox = await isOutside2(listboxRect, clientX, clientY);
    const isOutsideTrigger = await isOutside2(triggerRect, clientX, clientY);
    if (isOutsideListbox && isOutsideTrigger)
      context2.isListboxOpenSig.value = false;
  }, "SelectListbox_component_handleDismiss_BgYCUSDh5Os", [
    context,
    isOutside
  ]);
  useTaskQrl(/* @__PURE__ */ inlinedQrl(({ track, cleanup }) => {
    const [context2, handleDismiss$2] = useLexicalScope();
    track(() => context2.isListboxOpenSig.value);
    if (isServer)
      return;
    if (context2.isListboxOpenSig.value)
      window.addEventListener("pointerdown", handleDismiss$2);
    cleanup(() => {
      window.removeEventListener("pointerdown", handleDismiss$2);
    });
  }, "SelectListbox_component_useTask_yoqt4lBfbmA", [
    context,
    handleDismiss$
  ]));
  return /* @__PURE__ */ _jsxS("ul", {
    ...props,
    id: listboxId,
    role: "listbox",
    ref: context.listboxRef,
    get "data-open"() {
      return context.isListboxOpenSig.value ? "" : void 0;
    },
    get "data-closed"() {
      return !context.isListboxOpenSig.value ? "" : void 0;
    },
    children: /* @__PURE__ */ _jsxC(Slot, null, 3, "Ig_0")
  }, {
    role: _IMMUTABLE,
    "data-open": _fnSignal((p0) => p0.isListboxOpenSig.value ? "" : void 0, [
      context
    ], 'p0.isListboxOpenSig.value?"":undefined'),
    "data-closed": _fnSignal((p0) => !p0.isListboxOpenSig.value ? "" : void 0, [
      context
    ], '!p0.isListboxOpenSig.value?"":undefined')
  }, 0, "Ig_1");
}, "SelectListbox_component_rIDCajyQ0FQ"));
export {
  SelectListbox
};
