"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const modalContext = require("./modal-context.qwik.cjs");
const modal = require("./modal.css.qwik.cjs");
const useModal = require("./use-modal.qwik.cjs");
const Modal = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  qwik.useStylesQrl(/* @__PURE__ */ qwik.inlinedQrl(modal, "Modal_component_useStyles_aNqIn0QHPoQ"));
  const modal$1 = useModal.useModal();
  const modalRef = qwik.useSignal();
  const localId = qwik.useId();
  const { "bind:show": showSig } = props;
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(async function toggleModal({ track, cleanup }) {
    const [modal2, modalRef2, props2, showSig2] = qwik.useLexicalScope();
    const isOpen = track(() => showSig2.value);
    if (!modalRef2.value)
      return;
    const focusTrap = await modal2.trapFocus(modalRef2.value);
    if (isOpen) {
      const storedRequestAnimationFrame = window.requestAnimationFrame;
      window.requestAnimationFrame = () => 42;
      await modal2.showModal(modalRef2.value);
      window.requestAnimationFrame = storedRequestAnimationFrame;
      await props2.onShow$?.();
      modal2.activateFocusTrap(focusTrap);
    } else {
      await modal2.closeModal(modalRef2.value);
      await props2.onClose$?.();
    }
    cleanup(async () => {
      await modal2.deactivateFocusTrap(focusTrap);
    });
  }, "Modal_component_useTask_6pKVjzA98zM", [
    modal$1,
    modalRef,
    props,
    showSig
  ]));
  const closeOnBackdropClick$ = /* @__PURE__ */ qwik.inlinedQrl(async (e) => {
    const [modal2, modalRef2, props2, showSig2] = qwik.useLexicalScope();
    if (props2.alert === true || props2.closeOnBackdropClick === false)
      return;
    if (!(e.target instanceof HTMLDialogElement))
      return;
    if (await modal2.wasModalBackdropClicked(modalRef2.value, e))
      showSig2.value = false;
  }, "Modal_component_closeOnBackdropClick_TNu1Zd0J03s", [
    modal$1,
    modalRef,
    props,
    showSig
  ]);
  const handleKeyDownSync$ = qwik._qrlSync((e) => {
    const keys = [
      " ",
      "Enter"
    ];
    if (e.target instanceof HTMLDialogElement && keys.includes(e.key))
      e.preventDefault();
    if (e.key === "Escape")
      e.preventDefault();
  }, 'e=>{const keys=[" ","Enter"];if(e.target instanceof HTMLDialogElement&&keys.includes(e.key)){e.preventDefault();}if(e.key==="Escape"){e.preventDefault();}}');
  const handleKeyDown$ = /* @__PURE__ */ qwik.inlinedQrl((e) => {
    const [showSig2] = qwik.useLexicalScope();
    if (e.key === "Escape") {
      showSig2.value = false;
      e.stopPropagation();
    }
  }, "Modal_component_handleKeyDown_jp6Qai2wfVc", [
    showSig
  ]);
  const context = {
    localId
  };
  qwik.useContextProvider(modalContext.modalContextId, context);
  return /* @__PURE__ */ qwik._jsxS("dialog", {
    ...props,
    id: `${localId}-root`,
    "aria-labelledby": `${localId}-title`,
    "aria-describedby": `${localId}-description`,
    // TODO: deprecate data-state in favor of data-open, data-closing, and data-closed
    "data-state": showSig.value ? "open" : "closed",
    "data-open": showSig.value && "",
    "data-closed": !showSig.value && "",
    get role() {
      return props.alert === true ? "alertdialog" : "dialog";
    },
    ref: modalRef,
    children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "Ap_0"),
    onKeyDown$: [
      handleKeyDownSync$,
      handleKeyDown$,
      props.onKeyDown$
    ],
    onClick$: /* @__PURE__ */ qwik.inlinedQrl(async (e) => {
      const [closeOnBackdropClick$2] = qwik.useLexicalScope();
      e.stopPropagation();
      await closeOnBackdropClick$2(e);
    }, "Modal_component_dialog_onClick_YraFvNxkYfs", [
      closeOnBackdropClick$
    ])
  }, {
    id: qwik._IMMUTABLE,
    "aria-labelledby": qwik._IMMUTABLE,
    "aria-describedby": qwik._IMMUTABLE,
    role: qwik._fnSignal((p0) => p0.alert === true ? "alertdialog" : "dialog", [
      props
    ], 'p0.alert===true?"alertdialog":"dialog"')
  }, 0, "Ap_1");
}, "Modal_component_4KfA0F96AkQ"));
exports.Modal = Modal;
