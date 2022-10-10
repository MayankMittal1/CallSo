import { useRef, useEffect } from "react";

export function useHorizontalScroll() {
  const elRef = useRef();
  useEffect(() => {
    const el: any = elRef.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: "smooth",
        });
      };
      el.addEventListener("wheel", onWheel, { passive: true });
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}