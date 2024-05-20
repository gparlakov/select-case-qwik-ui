"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const selectContext = require("./select-context.qwik.cjs");
function useSelect() {
  const context = qwik.useContext(selectContext.default);
  const selectionManager$ = /* @__PURE__ */ qwik.inlinedQrl(async (index, action) => {
    const [context2] = qwik.useLexicalScope();
    if (index === null)
      return;
    const currItem = context2.itemsMapSig.value.get(index);
    const enabledIndex = currItem && currItem.disabled ? await getNextEnabledItemIndex$(index) : index;
    if (action === "add") {
      if (context2.multiple)
        context2.selectedIndexSetSig.value = /* @__PURE__ */ new Set([
          ...context2.selectedIndexSetSig.value,
          index
        ]);
      else
        context2.selectedIndexSetSig.value = /* @__PURE__ */ new Set([
          index
        ]);
    }
    if (action === "toggle") {
      if (context2.selectedIndexSetSig.value.has(enabledIndex))
        context2.selectedIndexSetSig.value = new Set([
          ...context2.selectedIndexSetSig.value
        ].filter((selectedIndex) => selectedIndex !== enabledIndex));
      else
        context2.selectedIndexSetSig.value = /* @__PURE__ */ new Set([
          ...context2.selectedIndexSetSig.value,
          enabledIndex
        ]);
    }
    if (action === "remove")
      context2.selectedIndexSetSig.value = new Set([
        ...context2.selectedIndexSetSig.value
      ].filter((selectedIndex) => selectedIndex !== index));
  }, "useSelect_selectionManager_0u2HXQQIrPU", [
    context
  ]);
  const getNextEnabledItemIndex$ = /* @__PURE__ */ qwik.inlinedQrl((index) => {
    const [context2] = qwik.useLexicalScope();
    let offset = 1;
    const len = context2.itemsMapSig.value.size;
    if (!context2.loop && index + 1 >= len)
      return index;
    while (offset < len) {
      const nextIndex = (index + offset) % len;
      if (!context2.itemsMapSig.value.get(nextIndex)?.disabled)
        return nextIndex;
      offset++;
      if (!context2.loop && index + offset >= len)
        break;
    }
    return index;
  }, "useSelect_getNextEnabledItemIndex_Ek8TwNJOgxo", [
    context
  ]);
  const getPrevEnabledItemIndex$ = /* @__PURE__ */ qwik.inlinedQrl((index) => {
    const [context2] = qwik.useLexicalScope();
    let offset = 1;
    const len = context2.itemsMapSig.value.size;
    if (!context2.loop && index - 1 < 0)
      return index;
    while (offset <= len) {
      const prevIndex = (index - offset + len) % len;
      if (!context2.itemsMapSig.value.get(prevIndex)?.disabled)
        return prevIndex;
      offset++;
      if (!context2.loop && index - offset < 0)
        break;
    }
    return index;
  }, "useSelect_getPrevEnabledItemIndex_eHEtgx0eWUI", [
    context
  ]);
  const getActiveDescendant$ = /* @__PURE__ */ qwik.inlinedQrl((index) => {
    const [context2] = qwik.useLexicalScope();
    if (index === -1 || context2.itemsMapSig.value.get(index)?.disabled)
      return "";
    return `${context2.localId}-${index}`;
  }, "useSelect_getActiveDescendant_OuzXKVlmiTg", [
    context
  ]);
  return {
    getNextEnabledItemIndex$,
    getPrevEnabledItemIndex$,
    getActiveDescendant$,
    selectionManager$
  };
}
function useTypeahead() {
  const context = qwik.useContext(selectContext.default);
  const inputStrSig = qwik.useSignal("");
  const indexDiffSig = qwik.useSignal(void 0);
  const prevTimeoutSig = qwik.useSignal(void 0);
  const { selectionManager$ } = useSelect();
  const firstCharItemSig = qwik.useComputedQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
    const [context2] = qwik.useLexicalScope();
    return Array.from(context2.itemsMapSig.value.values()).map((item) => item.displayValue?.slice(0, 1).toLowerCase());
  }, "useTypeahead_firstCharItemSig_useComputed_BR04I8XJcpQ", [
    context
  ]));
  const typeahead$ = /* @__PURE__ */ qwik.inlinedQrl(async (key) => {
    const [context2, firstCharItemSig2, indexDiffSig2, inputStrSig2, prevTimeoutSig2, selectionManager$2] = qwik.useLexicalScope();
    inputStrSig2.value += key;
    if (key.length > 1)
      return;
    const firstCharOnly$ = /* @__PURE__ */ qwik.inlinedQrl(async () => {
      const [context3, firstCharItemSig3, indexDiffSig3, key2, selectionManager$3] = qwik.useLexicalScope();
      const singleInputChar = key2.toLowerCase();
      const firstCharIndex = firstCharItemSig3.value.indexOf(singleInputChar);
      if (firstCharIndex === -1 || firstCharIndex === void 0)
        return null;
      if (indexDiffSig3.value === void 0) {
        indexDiffSig3.value = firstCharIndex + 1;
        context3.highlightedIndexSig.value = firstCharIndex;
        if (!context3.isListboxOpenSig.value)
          await selectionManager$3(firstCharIndex, "add");
        return;
      }
      const prevIndex = indexDiffSig3.value - 1;
      const isRepeatedChar = firstCharItemSig3.value[prevIndex] === key2;
      if (isRepeatedChar) {
        const nextCharSearch = firstCharItemSig3.value.slice(indexDiffSig3.value);
        const repeatIndex = nextCharSearch.indexOf(key2);
        if (repeatIndex !== -1) {
          const nextIndex = repeatIndex + indexDiffSig3.value;
          context3.highlightedIndexSig.value = nextIndex;
          if (!context3.isListboxOpenSig.value)
            await selectionManager$3(nextIndex, "add");
          indexDiffSig3.value = nextIndex + 1;
          return;
        }
        indexDiffSig3.value = void 0;
        context3.highlightedIndexSig.value = firstCharIndex;
        if (!context3.isListboxOpenSig.value)
          await selectionManager$3(firstCharIndex, "add");
        return;
      }
      indexDiffSig3.value = firstCharIndex + 1;
      context3.highlightedIndexSig.value = firstCharIndex;
      if (!context3.isListboxOpenSig.value)
        await selectionManager$3(firstCharIndex, "add");
      return;
    }, "useTypeahead_typeahead_firstCharOnly_gCtflJhpYU0", [
      context2,
      firstCharItemSig2,
      indexDiffSig2,
      key,
      selectionManager$2
    ]);
    const multipleChars$ = /* @__PURE__ */ qwik.inlinedQrl(async () => {
      const [context3, firstCharOnly$2, inputStrSig3, key2, prevTimeoutSig3, selectionManager$3] = qwik.useLexicalScope();
      clearTimeout(prevTimeoutSig3.value);
      prevTimeoutSig3.value = setTimeout(() => {
        inputStrSig3.value = "";
      }, 1e3);
      let firstPossibleOpt = -1;
      const inputSize = inputStrSig3.value.length;
      const inputStrLower = inputStrSig3.value.toLowerCase();
      for (const [index, item] of context3.itemsMapSig.value) {
        const optStr = item.displayValue?.toLowerCase().substring(0, inputSize);
        if (optStr === inputStrLower) {
          firstPossibleOpt = index;
          break;
        }
      }
      if (firstPossibleOpt !== -1) {
        context3.highlightedIndexSig.value = firstPossibleOpt;
        if (!context3.isListboxOpenSig.value)
          await selectionManager$3(firstPossibleOpt, "add");
        return;
      }
      inputStrSig3.value = key2;
      firstCharOnly$2();
    }, "useTypeahead_typeahead_multipleChars_wPKjkzUmPp8", [
      context2,
      firstCharOnly$,
      inputStrSig2,
      key,
      prevTimeoutSig2,
      selectionManager$2
    ]);
    if (inputStrSig2.value.length === 1) {
      firstCharOnly$();
      return;
    }
    multipleChars$();
  }, "useTypeahead_typeahead_tYIZd7OwyWQ", [
    context,
    firstCharItemSig,
    indexDiffSig,
    inputStrSig,
    prevTimeoutSig,
    selectionManager$
  ]);
  return {
    typeahead$
  };
}
exports.useSelect = useSelect;
exports.useTypeahead = useTypeahead;
