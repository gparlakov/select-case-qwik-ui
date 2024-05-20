const popoverStyles = "/* This only applies when popover isn't supported */\n@supports not selector(:popover-open) {\n  /* The polyfill adds this class when popped out */\n  [popover]:not(.\\:popover-open) {\n    display: none;\n  }\n}\n\n.popover-closing {\n  display: block !important;\n}\n\n/* Strips the user agent styles from the popover when in floating mode */\n@layer qwik-ui {\n  [data-floating] {\n    margin: unset;\n    padding: unset;\n    border: unset;\n    overflow: unset;\n    position: absolute;\n  }\n}\n\n/** override the polyfill's layer, which gets dynamically imported later on. */\n@layer popover-polyfill {\n  [data-floating] {\n    margin: unset;\n    padding: unset;\n    border: unset;\n    overflow: unset;\n    position: absolute;\n  }\n}\n";
export {
  popoverStyles as default
};
