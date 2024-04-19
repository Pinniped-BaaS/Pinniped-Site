import { useEffect } from "react";

import scrollIntoView from "../utils/scrollIntoView.js";

export default function useScrollToHeader(imagesLoaded) {
  useEffect(() => {
    if (imagesLoaded) {
      requestAnimationFrame(() => {
        const targetId = window.location.hash;
        if (targetId) {
          const target = document.getElementById(targetId.slice(1));

          if (target) scrollIntoView(targetId.slice(1))();
        }
      });
    }
  }, [imagesLoaded]);
}
