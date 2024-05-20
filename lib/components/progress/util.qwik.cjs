"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
function isNumber(value) {
  return typeof value === "number";
}
function isValidMaxNumber(max) {
  return isNumber(max) && !isNaN(max) && max > 0;
}
function isValidValueNumber(value, max) {
  return isNumber(value) && !isNaN(value) && value <= max && value >= 0;
}
function defaultGetValueLabel(value, max) {
  return `${Math.round(value / max * 100)}%`;
}
function getProgressState(value, maxValue) {
  return value == null ? "indeterminate" : value === maxValue ? "complete" : "loading";
}
exports.defaultGetValueLabel = defaultGetValueLabel;
exports.getProgressState = getProgressState;
exports.isNumber = isNumber;
exports.isValidMaxNumber = isValidMaxNumber;
exports.isValidValueNumber = isValidValueNumber;
