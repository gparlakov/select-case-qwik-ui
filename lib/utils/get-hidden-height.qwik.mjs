function getHiddenHeight(el) {
  const clone = el.cloneNode(true);
  Object.assign(clone.style, {
    overflow: "visible",
    height: "auto",
    maxHeight: "none",
    opacity: "0",
    visibility: "hidden",
    display: "block"
  });
  el.after(clone);
  const height = clone.offsetHeight;
  clone.remove();
  return height;
}
export {
  getHiddenHeight
};
