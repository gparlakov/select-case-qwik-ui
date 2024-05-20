"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const getEnabledTab = (tabInfoList, index) => findNextEnabledTab(tabInfoList, index) || findPrevEnabledTab(tabInfoList, index);
function findNextEnabledTab(tabsInfo, index, config) {
  let info;
  for (let i = Math.max(0, index); i < tabsInfo.length; i++) {
    info = tabsInfo[i];
    if (!isDisabled(info))
      return info;
  }
  if (config?.wrap)
    for (let i = 0; i < index; i++) {
      info = tabsInfo[i];
      if (!isDisabled(info))
        return info;
    }
  return;
}
function findPrevEnabledTab(tabsInfo, index, config) {
  let info;
  for (let i = Math.min(tabsInfo.length, index) - 1; i >= 0; i--) {
    info = tabsInfo[i];
    if (!isDisabled(info))
      return info;
  }
  if (config?.wrap)
    for (let i = tabsInfo.length - 1; i > index; i--) {
      info = tabsInfo[i];
      if (!isDisabled(info))
        return info;
    }
  return;
}
const isDisabled = (tabInfo) => tabInfo.tabProps.disabled;
exports.findNextEnabledTab = findNextEnabledTab;
exports.findPrevEnabledTab = findPrevEnabledTab;
exports.getEnabledTab = getEnabledTab;
exports.isDisabled = isDisabled;
