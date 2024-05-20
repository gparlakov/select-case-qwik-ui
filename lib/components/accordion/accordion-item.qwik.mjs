import { componentQrl, inlinedQrl, _restProps, useId, useSignal, useContextProvider, _jsxS, _jsxC, Slot, _IMMUTABLE } from "@builder.io/qwik";
import { accordionItemContextId } from "./accordion-context-id.qwik.mjs";
const AccordionItem = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const props1 = _restProps(props, [
    "defaultValue",
    "id"
  ]);
  const localId = useId();
  const itemId = props.id || localId;
  const isTriggerExpandedSig = useSignal(props.defaultValue ?? false);
  const itemContext = {
    itemId,
    isTriggerExpandedSig,
    defaultValue: props.defaultValue ?? false
  };
  useContextProvider(accordionItemContextId, itemContext);
  return /* @__PURE__ */ _jsxS("div", {
    id: itemId,
    "data-type": "item",
    "data-item-id": itemId,
    ...props1,
    children: /* @__PURE__ */ _jsxC(Slot, null, 3, "bf_0")
  }, {
    "data-type": _IMMUTABLE
  }, 0, "bf_1");
}, "AccordionItem_component_6kACQi4zr1o"));
export {
  AccordionItem
};
