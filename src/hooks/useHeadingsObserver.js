import { useEffect, useRef, useState } from "react";

export default function useHeadsObserver(headings) {
  const observer = useRef();
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "0px 0px -85% 0px",
      threshold: 1,
    });

    headings.forEach(({ el }) => {
      observer.current.observe(el);
    });

    return () => observer.current?.disconnect();
  }, [headings]);

  return { activeId };
}
