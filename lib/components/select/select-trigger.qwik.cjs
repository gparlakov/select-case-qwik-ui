"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const selectContext = require("./select-context.qwik.cjs");
const useSelect = require("./use-select.qwik.cjs");
const SelectTrigger = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const context = qwik.useContext(selectContext.default);
  const select = useSelect.useSelect();
  const labelId = `${context.localId}-label`;
  const descriptionId = `${context.localId}-description`;
  const typeahead = useSelect.useTypeahead();
  const handleClickSync$ = qwik._qrlSync((e) => {
    e.preventDefault();
  }, "e=>{e.preventDefault();}");
  const handleClick$ = /* @__PURE__ */ qwik.inlinedQrl(() => {
    const [context2] = qwik.useLexicalScope();
    context2.isListboxOpenSig.value = !context2.isListboxOpenSig.value;
  }, "SelectTrigger_component_handleClick_xg5lOwv7I1E", [
    context
  ]);
  const handleKeyDownSync$ = qwik._qrlSync((e) => {
    const keys = [
      "ArrowUp",
      "ArrowDown",
      "ArrowRight",
      "ArrowLeft",
      "Home",
      "End",
      "PageDown",
      "PageUp",
      "Enter",
      " "
    ];
    if (keys.includes(e.key))
      e.preventDefault();
  }, 'e=>{const keys=["ArrowUp","ArrowDown","ArrowRight","ArrowLeft","Home","End","PageDown","PageUp","Enter"," "];if(keys.includes(e.key)){e.preventDefault();}}');
  const handleKeyDown$ = /* @__PURE__ */ qwik.inlinedQrl(async (e) => {
    const [context2, select2, typeahead2] = qwik.useLexicalScope();
    if (!context2.itemsMapSig.value)
      return;
    typeahead2.typeahead$(e.key);
    switch (e.key) {
      case "Enter":
      case " ":
        if (context2.isListboxOpenSig.value) {
          const action = context2.multiple ? "toggle" : "add";
          await select2.selectionManager$(context2.highlightedIndexSig.value, action);
        }
        context2.isListboxOpenSig.value = context2.multiple ? true : !context2.isListboxOpenSig.value;
        break;
      case "ArrowDown":
        if (context2.isListboxOpenSig.value) {
          context2.highlightedIndexSig.value = await select2.getNextEnabledItemIndex$(context2.highlightedIndexSig.value);
          if (context2.multiple && e.shiftKey)
            await select2.selectionManager$(context2.highlightedIndexSig.value, "toggle");
        } else
          context2.isListboxOpenSig.value = true;
        break;
      case "ArrowUp":
        if (context2.isListboxOpenSig.value) {
          context2.highlightedIndexSig.value = await select2.getPrevEnabledItemIndex$(context2.highlightedIndexSig.value);
          if (context2.multiple && e.shiftKey)
            await select2.selectionManager$(context2.highlightedIndexSig.value, "toggle");
        } else
          context2.isListboxOpenSig.value = true;
        break;
      case "Home":
        if (context2.isListboxOpenSig.value)
          context2.highlightedIndexSig.value = await select2.getNextEnabledItemIndex$(-1);
        break;
      case "End":
        if (context2.isListboxOpenSig.value) {
          const lastEnabledOptionIndex = await select2.getPrevEnabledItemIndex$(context2.itemsMapSig.value.size);
          context2.highlightedIndexSig.value = lastEnabledOptionIndex;
        }
        break;
      case "Tab":
      case "Escape":
        context2.isListboxOpenSig.value = false;
        break;
      case "ArrowRight":
        if (!context2.multiple) {
          const currentIndex = context2.highlightedIndexSig.value ?? -1;
          const nextIndex = await select2.getNextEnabledItemIndex$(currentIndex);
          await select2.selectionManager$(nextIndex, "add");
          context2.highlightedIndexSig.value = nextIndex;
        }
        break;
      case "ArrowLeft":
        if (!context2.multiple) {
          const currentIndex = context2.highlightedIndexSig.value ?? context2.itemsMapSig.value.size;
          const prevIndex = await select2.getPrevEnabledItemIndex$(currentIndex);
          await select2.selectionManager$(prevIndex, "add");
          context2.highlightedIndexSig.value = prevIndex;
        }
        break;
      case "a":
        if (e.ctrlKey && context2.multiple) {
          for (const [index, item] of context2.itemsMapSig.value)
            if (!item.disabled)
              await select2.selectionManager$(index, "add");
        }
        break;
    }
    if (context2.highlightedIndexSig.value === null) {
      context2.highlightedIndexSig.value = await select2.getNextEnabledItemIndex$(-1);
      return;
    }
  }, "SelectTrigger_component_handleKeyDown_yVP50iSJj3g", [
    context,
    select,
    typeahead
  ]);
  return /* @__PURE__ */ qwik._jsxS("button", {
    ...props,
    get id() {
      return `${context.localId}-trigger`;
    },
    ref: context.triggerRef,
    get "data-open"() {
      return context.isListboxOpenSig.value ? "" : void 0;
    },
    get "data-closed"() {
      return !context.isListboxOpenSig.value ? "" : void 0;
    },
    get "data-disabled"() {
      return context.disabled ? "" : void 0;
    },
    get "aria-expanded"() {
      return context.isListboxOpenSig.value;
    },
    "aria-labelledby": labelId,
    "aria-describedby": descriptionId,
    get disabled() {
      return context.disabled;
    },
    "preventdefault:blur": true,
    children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "bI_0"),
    onClick$: [
      handleClickSync$,
      handleClick$,
      props.onClick$
    ],
    onKeyDown$: [
      handleKeyDownSync$,
      handleKeyDown$,
      props.onKeyDown$
    ]
  }, {
    id: qwik._fnSignal((p0) => `${p0.localId}-trigger`, [
      context
    ], "`${p0.localId}-trigger`"),
    "data-open": qwik._fnSignal((p0) => p0.isListboxOpenSig.value ? "" : void 0, [
      context
    ], 'p0.isListboxOpenSig.value?"":undefined'),
    "data-closed": qwik._fnSignal((p0) => !p0.isListboxOpenSig.value ? "" : void 0, [
      context
    ], '!p0.isListboxOpenSig.value?"":undefined'),
    "data-disabled": qwik._fnSignal((p0) => p0.disabled ? "" : void 0, [
      context
    ], 'p0.disabled?"":undefined'),
    "aria-expanded": qwik._fnSignal((p0) => p0.isListboxOpenSig.value, [
      context
    ], "p0.isListboxOpenSig.value"),
    disabled: qwik._fnSignal((p0) => p0.disabled, [
      context
    ], "p0.disabled"),
    "preventdefault:blur": qwik._IMMUTABLE
  }, 0, "bI_1");
}, "SelectTrigger_component_6DydXPvzDas"));
exports.SelectTrigger = SelectTrigger;
