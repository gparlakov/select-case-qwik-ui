"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const selectRoot = require("./select-root.qwik.cjs");
const selectItem = require("./select-item.qwik.cjs");
const selectLabel = require("./select-label.qwik.cjs");
const selectItemLabel = require("./select-item-label.qwik.cjs");
const SelectRoot = (props) => {
  const { children: myChildren, selectLabelComponent: UserLabel, selectItemComponent: UserItem, selectItemLabelComponent: UserItemLabel, ...rest } = props;
  const SelectLabel = UserLabel ?? selectLabel.SelectLabel;
  const SelectItem = UserItem ?? selectItem.SelectItem;
  const SelectItemLabel = UserItemLabel ?? selectItemLabel.SelectItemLabel;
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
      case SelectLabel:
        isLabelNeeded = true;
        break;
      case SelectItem:
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
      case SelectItemLabel: {
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
  return /* @__PURE__ */ qwik._jsxC(selectRoot.SelectImpl, {
    ...rest,
    _label: isLabelNeeded,
    _valuePropIndex: valuePropIndex,
    _itemsMap: itemsMap,
    children: qwik._wrapSignal(props, "children")
  }, 0, "vt_0");
};
exports.SelectRoot = SelectRoot;
