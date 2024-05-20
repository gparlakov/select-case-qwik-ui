import { _jsxC, _wrapSignal } from "@builder.io/qwik";
import { SelectImpl } from "./select-root.qwik.mjs";
import { SelectItem } from "./select-item.qwik.mjs";
import { SelectLabel } from "./select-label.qwik.mjs";
import { SelectItemLabel } from "./select-item-label.qwik.mjs";
const SelectRoot = (props) => {
  const { children: myChildren, selectLabelComponent: UserLabel, selectItemComponent: UserItem, selectItemLabelComponent: UserItemLabel, ...rest } = props;
  const SelectLabel$1 = UserLabel ?? SelectLabel;
  const SelectItem$1 = UserItem ?? SelectItem;
  const SelectItemLabel$1 = UserItemLabel ?? SelectItemLabel;
  const itemsMap = /* @__PURE__ */ new Map();
  let currItemIndex = 0;
  let isItemDisabled = false;
  let givenItemValue = null;
  let valuePropIndex = null;
  let isLabelNeeded = false;
  const childrenToProcess = Array.isArray(myChildren) ? [
    ...myChildren
  ] : [
    myChildren
  ];
  while (childrenToProcess.length) {
    const child = childrenToProcess.shift();
    if (!child)
      continue;
    if (Array.isArray(child)) {
      childrenToProcess.unshift(...child);
      continue;
    }
    switch (child.type) {
      case SelectLabel$1:
        isLabelNeeded = true;
        break;
      case SelectItem$1:
        child.props._index = currItemIndex;
        isItemDisabled = child.props.disabled === true;
        if (child.props.value)
          givenItemValue = child.props.value;
        if (child.props.children) {
          const childChildren = Array.isArray(child.props.children) ? [
            ...child.props.children
          ] : [
            child.props.children
          ];
          childrenToProcess.unshift(...childChildren);
        }
        break;
      case SelectItemLabel$1: {
        const displayValue = child.props.children;
        const value = givenItemValue !== null ? givenItemValue : displayValue;
        itemsMap.set(currItemIndex, {
          value,
          displayValue,
          disabled: isItemDisabled
        });
        if (props.value && props.multiple)
          throw new Error(`Qwik UI: When in multiple selection mode, the value prop is disabled. Use the bind:value prop's initial signal value instead.`);
        if (value === props.value)
          valuePropIndex = currItemIndex;
        const isString = typeof child.props.children === "string";
        if (!isString)
          throw new Error(`Qwik UI: select item label passed was not a string. It was a ${typeof child.props.children}.`);
        currItemIndex++;
        break;
      }
      default:
        if (child) {
          const anyChildren = Array.isArray(child.children) ? [
            ...child.children
          ] : [
            child.children
          ];
          childrenToProcess.unshift(...anyChildren);
        }
        break;
    }
  }
  return /* @__PURE__ */ _jsxC(SelectImpl, {
    ...rest,
    _label: isLabelNeeded,
    _valuePropIndex: valuePropIndex,
    _itemsMap: itemsMap,
    children: _wrapSignal(props, "children")
  }, 0, "vt_0");
};
export {
  SelectRoot
};
