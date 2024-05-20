"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const selectContext = require("./select-context.qwik.cjs");
const select = require("./select.css.qwik.cjs");
const build = require("@builder.io/qwik/build");
const SelectListbox = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  qwik.useStylesQrl(/* @__PURE__ */ qwik.inlinedQrl(select, "SelectListbox_component_useStyles_doewkiMCdvY"));
  const context = qwik.useContext(selectContext.default);
  const listboxId = `${context.localId}-listbox`;
  const isOutside = /* @__PURE__ */ qwik.inlinedQrl((rect, x, y) => {
    return x < rect.left || x > rect.right || y < rect.top || y > rect.bottom;
  }, "SelectListbox_component_isOutside_OtjHln0iT0M");
  const handleDismiss$ = /* @__PURE__ */ qwik.inlinedQrl(async (e) => {
    const [context2, isOutside2] = qwik.useLexicalScope();
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
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(({ track, cleanup }) => {
    const [context2, handleDismiss$2] = qwik.useLexicalScope();
    track(() => context2.isListboxOpenSig.value);
    if (build.isServer)
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
  return /* @__PURE__ */ qwik._jsxS("ul", {
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
    children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "Ig_0")
  }, {
    role: qwik._IMMUTABLE,
    "data-open": qwik._fnSignal((p0) => p0.isListboxOpenSig.value ? "" : void 0, [
      context
    ], 'p0.isListboxOpenSig.value?"":undefined'),
    "data-closed": qwik._fnSignal((p0) => !p0.isListboxOpenSig.value ? "" : void 0, [
      context
    ], '!p0.isListboxOpenSig.value?"":undefined')
  }, 0, "Ig_1");
}, "SelectListbox_component_rIDCajyQ0FQ"));
exports.SelectListbox = SelectListbox;
