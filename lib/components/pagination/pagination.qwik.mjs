import { componentQrl, inlinedQrl, _jsxS, _jsxQ, useLexicalScope, _jsxC, Slot, _IMMUTABLE } from "@builder.io/qwik";
import { usePagination } from "./use-pagination.qwik.mjs";
const Pagination = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const { selectedPage, totalPages, onPageChange$, siblingCount, hidePrevButton = false, hideNextButton = false, disabled = false, customArrowTexts: { previous: previousButtonLabel = "PREV", next: nextButtonLabel = "NEXT" } = {}, defaultClass = "", selectedClass = "", dividerClass = "", nextButtonClass = "", prevButtonClass = "", ...rest } = props;
  const isPrevButtonEnabled = () => !hidePrevButton && selectedPage > 1;
  const isNextButtonEnabled = () => !hideNextButton && selectedPage !== totalPages;
  const visibleItems = usePagination(totalPages, selectedPage, siblingCount || 1);
  return /* @__PURE__ */ _jsxS("nav", {
    "aria-label": "pagination",
    "data-testid": "pagination",
    ...rest,
    children: [
      /* @__PURE__ */ _jsxQ("button", {
        class: nextButtonClass,
        disabled: disabled || !isPrevButtonEnabled(),
        onClick$: /* @__PURE__ */ inlinedQrl(() => {
          const [onPageChange$2, selectedPage2] = useLexicalScope();
          if (selectedPage2 > 1)
            onPageChange$2(selectedPage2 - 1);
        }, "Pagination_component_nav_button_onClick_hVacHIihrJQ", [
          onPageChange$,
          selectedPage
        ])
      }, {
        "aria-label": "prevAriaLabel"
      }, [
        /* @__PURE__ */ _jsxC(Slot, {
          name: "prefix",
          [_IMMUTABLE]: {
            name: _IMMUTABLE
          }
        }, 3, "0v_0"),
        /* @__PURE__ */ _jsxQ("span", null, null, previousButtonLabel, 3, null)
      ], 0, null),
      visibleItems.map((item, index) => {
        const isSelected = selectedPage === item;
        return /* @__PURE__ */ _jsxQ("span", null, null, typeof item === "string" ? /* @__PURE__ */ _jsxQ("button", {
          class: dividerClass
        }, {
          disabled: true
        }, "...", 3, "0v_1") : /* @__PURE__ */ _jsxQ("button", {
          class: [
            defaultClass,
            selectedPage === item && selectedClass
          ],
          "aria-label": `Page ${item} of ${totalPages}`,
          "aria-current": selectedPage === item,
          disabled: disabled || isSelected,
          onClick$: /* @__PURE__ */ inlinedQrl(() => {
            const [item2, onPageChange$2] = useLexicalScope();
            onPageChange$2(item2);
          }, "Pagination_component_nav_span_button_onClick_kSADhyEEtLo", [
            item,
            onPageChange$
          ])
        }, null, item, 0, null), 1, index);
      }),
      /* @__PURE__ */ _jsxQ("button", {
        class: prevButtonClass,
        disabled: disabled || !isNextButtonEnabled(),
        onClick$: /* @__PURE__ */ inlinedQrl(() => {
          const [onPageChange$2, selectedPage2, totalPages2] = useLexicalScope();
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
        /* @__PURE__ */ _jsxQ("span", null, null, nextButtonLabel, 3, null),
        /* @__PURE__ */ _jsxC(Slot, {
          name: "suffix",
          [_IMMUTABLE]: {
            name: _IMMUTABLE
          }
        }, 3, "0v_2")
      ], 0, null)
    ]
  }, {
    "aria-label": _IMMUTABLE,
    "data-testid": _IMMUTABLE
  }, 0, "0v_3");
}, "Pagination_component_VpNYdlfrBTw"));
export {
  Pagination
};
