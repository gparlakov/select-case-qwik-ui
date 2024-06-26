"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const usePagination = require("./use-pagination.qwik.cjs");
const Pagination = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const { selectedPage, totalPages, onPageChange$, siblingCount, hidePrevButton = false, hideNextButton = false, disabled = false, customArrowTexts: { previous: previousButtonLabel = "PREV", next: nextButtonLabel = "NEXT" } = {}, defaultClass = "", selectedClass = "", dividerClass = "", nextButtonClass = "", prevButtonClass = "", ...rest } = props;
  const isPrevButtonEnabled = () => !hidePrevButton && selectedPage > 1;
  const isNextButtonEnabled = () => !hideNextButton && selectedPage !== totalPages;
  const visibleItems = usePagination.usePagination(totalPages, selectedPage, siblingCount || 1);
  return /* @__PURE__ */ qwik._jsxS("nav", {
    "aria-label": "pagination",
    "data-testid": "pagination",
    ...rest,
    children: [
      /* @__PURE__ */ qwik._jsxQ("button", {
        class: nextButtonClass,
        disabled: disabled || !isPrevButtonEnabled(),
        onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
          const [onPageChange$2, selectedPage2] = qwik.useLexicalScope();
          if (selectedPage2 > 1)
            onPageChange$2(selectedPage2 - 1);
        }, "Pagination_component_nav_button_onClick_hVacHIihrJQ", [
          onPageChange$,
          selectedPage
        ])
      }, {
        "aria-label": "prevAriaLabel"
      }, [
        /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
          name: "prefix",
          [qwik._IMMUTABLE]: {
            name: qwik._IMMUTABLE
          }
        }, 3, "0v_0"),
        /* @__PURE__ */ qwik._jsxQ("span", null, null, previousButtonLabel, 3, null)
      ], 0, null),
      visibleItems.map((item, index) => {
        const isSelected = selectedPage === item;
        return /* @__PURE__ */ qwik._jsxQ("span", null, null, typeof item === "string" ? /* @__PURE__ */ qwik._jsxQ("button", {
          class: dividerClass
        }, {
          disabled: true
        }, "...", 3, "0v_1") : /* @__PURE__ */ qwik._jsxQ("button", {
          class: [
            defaultClass,
            selectedPage === item && selectedClass
          ],
          "aria-label": `Page ${item} of ${totalPages}`,
          "aria-current": selectedPage === item,
          disabled: disabled || isSelected,
          onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
            const [item2, onPageChange$2] = qwik.useLexicalScope();
            onPageChange$2(item2);
          }, "Pagination_component_nav_span_button_onClick_kSADhyEEtLo", [
            item,
            onPageChange$
          ])
        }, null, item, 0, null), 1, index);
      }),
      /* @__PURE__ */ qwik._jsxQ("button", {
        class: prevButtonClass,
        disabled: disabled || !isNextButtonEnabled(),
        onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
          const [onPageChange$2, selectedPage2, totalPages2] = qwik.useLexicalScope();
          if (selectedPage2 < totalPages2)
            onPageChange$2(selectedPage2 + 1);
        }, "Pagination_component_nav_button_onClick_1_UdjEFGv6Gqk", [
          onPageChange$,
          selectedPage,
          totalPages
        ])
      }, {
        "aria-label": "nextAriaLabel"
      }, [
        /* @__PURE__ */ qwik._jsxQ("span", null, null, nextButtonLabel, 3, null),
        /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
          name: "suffix",
          [qwik._IMMUTABLE]: {
            name: qwik._IMMUTABLE
          }
        }, 3, "0v_2")
      ], 0, null)
    ]
  }, {
    "aria-label": qwik._IMMUTABLE,
    "data-testid": qwik._IMMUTABLE
  }, 0, "0v_3");
}, "Pagination_component_VpNYdlfrBTw"));
exports.Pagination = Pagination;
