"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const accordionContextId = require("./accordion-context-id.qwik.cjs");
const keyCode_type = require("../../utils/key-code.type.qwik.cjs");
const accordionPreventedKeys = [
  keyCode_type.KeyCode.Home,
  keyCode_type.KeyCode.End,
  keyCode_type.KeyCode.PageDown,
  keyCode_type.KeyCode.PageUp,
  keyCode_type.KeyCode.ArrowDown,
  keyCode_type.KeyCode.ArrowUp
];
const AccordionTrigger = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const props1 = qwik._restProps(props, [
    "disabled"
  ]);
  const contextService = qwik.useContext(accordionContextId.accordionRootContextId);
  const itemContext = qwik.useContext(accordionContextId.accordionItemContextId);
  const ref = qwik.useSignal();
  const triggerId = `${itemContext.itemId}-trigger`;
  const contentId = `${itemContext.itemId}-content`;
  const setSelectedTriggerIndexSig$ = /* @__PURE__ */ qwik.inlinedQrl(() => {
    const [contextService2, ref2] = qwik.useLexicalScope();
    if (contextService2.behavior === "single" && ref2.value)
      contextService2.currSelectedTriggerIndexSig.value = contextService2.triggerElementsSig.value.indexOf(ref2.value);
  }, "AccordionTrigger_component_setSelectedTriggerIndexSig_48tDY2fZpXw", [
    contextService,
    ref
  ]);
  const setCurrFocusedIndexSig$ = /* @__PURE__ */ qwik.inlinedQrl(() => {
    const [contextService2, ref2] = qwik.useLexicalScope();
    if (!ref2.value)
      return;
    contextService2.currFocusedTriggerIndexSig.value = contextService2.triggerElementsSig.value.indexOf(ref2.value);
  }, "AccordionTrigger_component_setCurrFocusedIndexSig_EClmysGBpXk", [
    contextService,
    ref
  ]);
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(function resetTriggersTask({ track }) {
    const [contextService2, itemContext2, triggerId2] = qwik.useLexicalScope();
    track(() => contextService2.selectedTriggerIdSig.value);
    if (contextService2.behavior === "single" && triggerId2 !== contextService2.selectedTriggerIdSig.value)
      itemContext2.isTriggerExpandedSig.value = false;
  }, "AccordionTrigger_component_useTask_ZrqsD2gn6Bw", [
    contextService,
    itemContext,
    triggerId
  ]));
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(function openDefaultValueTask() {
    const [itemContext2] = qwik.useLexicalScope();
    if (itemContext2.defaultValue)
      itemContext2.isTriggerExpandedSig.value = true;
  }, "AccordionTrigger_component_useTask_1_xo2BhsBAp1Q", [
    itemContext
  ]));
  qwik.useVisibleTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(function navigateTriggerVisibleTask({ cleanup }) {
    const [contextService2, props2, ref2] = qwik.useLexicalScope();
    if (!ref2.value)
      return;
    if (!props2.disabled)
      contextService2.updateTriggers$();
    function keyHandler(e) {
      if (accordionPreventedKeys.includes(e.key))
        e.preventDefault();
    }
    ref2.value.addEventListener("keydown", keyHandler);
    cleanup(() => {
      ref2.value?.removeEventListener("keydown", keyHandler);
    });
  }, "AccordionTrigger_component_useVisibleTask_8hQ8XIunpYU", [
    contextService,
    props,
    ref
  ]));
  qwik.useVisibleTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(function cleanupTriggersTask({ cleanup }) {
    const [contextService2] = qwik.useLexicalScope();
    cleanup(() => {
      contextService2.updateTriggers$();
    });
  }, "AccordionTrigger_component_useVisibleTask_1_2AWzNSMP7ho", [
    contextService
  ]), {
    strategy: "document-ready"
  });
  return /* @__PURE__ */ qwik._jsxS("button", {
    ref,
    id: triggerId,
    get disabled() {
      return props.disabled;
    },
    get "aria-disabled"() {
      return props.disabled;
    },
    "data-trigger-id": triggerId,
    get "data-state"() {
      return itemContext.isTriggerExpandedSig.value ? "open" : "closed";
    },
    get "aria-expanded"() {
      return itemContext.isTriggerExpandedSig.value;
    },
    "aria-controls": contentId,
    ...props1,
    children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "oG_0"),
    onClick$: props.disabled ? [] : [
      /* @__PURE__ */ qwik.inlinedQrl(() => {
        const [contextService2, itemContext2, setSelectedTriggerIndexSig$2, triggerId2] = qwik.useLexicalScope();
        contextService2.selectedTriggerIdSig.value = triggerId2;
        setSelectedTriggerIndexSig$2();
        contextService2.collapsible ? itemContext2.isTriggerExpandedSig.value = !itemContext2.isTriggerExpandedSig.value : itemContext2.isTriggerExpandedSig.value = true;
      }, "AccordionTrigger_component_button_onClick_XCGGDodtvIw", [
        contextService,
        itemContext,
        setSelectedTriggerIndexSig$,
        triggerId
      ]),
      props1.onClick$
    ],
    onKeyDown$: [
      /* @__PURE__ */ qwik.inlinedQrl(async (e) => {
        const [contextService2] = qwik.useLexicalScope();
        if (e.key === "ArrowUp")
          await contextService2.focusPreviousTrigger$();
        if (e.key === "ArrowDown")
          await contextService2.focusNextTrigger$();
        if (e.key === "Home")
          await contextService2.focusFirstTrigger$();
        if (e.key === "End")
          await contextService2.focusLastTrigger$();
      }, "AccordionTrigger_component_button_onKeyDown_0cJwY49cRbQ", [
        contextService
      ]),
      props1.onKeyDown$
    ],
    onFocus$: [
      setCurrFocusedIndexSig$,
      props1.onFocus$
    ]
  }, {
    disabled: qwik._fnSignal((p0) => p0.disabled, [
      props
    ], "p0.disabled"),
    "aria-disabled": qwik._fnSignal((p0) => p0.disabled, [
      props
    ], "p0.disabled"),
    "data-state": qwik._fnSignal((p0) => p0.isTriggerExpandedSig.value ? "open" : "closed", [
      itemContext
    ], 'p0.isTriggerExpandedSig.value?"open":"closed"'),
    "aria-expanded": qwik._fnSignal((p0) => p0.isTriggerExpandedSig.value, [
      itemContext
    ], "p0.isTriggerExpandedSig.value")
  }, 0, "oG_1");
}, "AccordionTrigger_component_67JZzb3LsTs"));
exports.AccordionTrigger = AccordionTrigger;
exports._auto_accordionPreventedKeys = accordionPreventedKeys;
