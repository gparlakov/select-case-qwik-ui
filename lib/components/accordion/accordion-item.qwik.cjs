"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const accordionContextId = require("./accordion-context-id.qwik.cjs");
const AccordionItem = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const props1 = qwik._restProps(props, [
    "defaultValue",
    "id"
  ]);
  const localId = qwik.useId();
  const itemId = props.id || localId;
  const isTriggerExpandedSig = qwik.useSignal(props.defaultValue ?? false);
  const itemContext = {
    itemId,
    isTriggerExpandedSig,
    defaultValue: props.defaultValue ?? false
  };
  qwik.useContextProvider(accordionContextId.accordionItemContextId, itemContext);
  return /* @__PURE__ */ qwik._jsxS("div", {
    id: itemId,
    "data-type": "item",
    "data-item-id": itemId,
    ...props1,
    children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "bf_0")
  }, {
    "data-type": qwik._IMMUTABLE
  }, 0, "bf_1");
}, "AccordionItem_component_6kACQi4zr1o"));
exports.AccordionItem = AccordionItem;
