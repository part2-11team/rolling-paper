export const setScrollBarHeightPosition = (pageRef, scrollRef) => {
  const scrollTop = pageRef.current.scrollTop;
  const viewPortHeight = window.innerHeight;
  const pageHeight = pageRef.current.scrollHeight;
  const scrollbarHeight = ((viewPortHeight - 62) / pageHeight) * viewPortHeight;
  const ScrollbarTop = (scrollTop / pageHeight) * (viewPortHeight - 62);
  scrollRef.current.style.top = `${ScrollbarTop}px`;
  scrollRef.current.style.height = `${scrollbarHeight}px`;
};
