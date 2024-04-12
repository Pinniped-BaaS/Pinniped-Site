import { useState, useEffect } from "react";

export default function useCheckImagesLoaded() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  useEffect(() => {
    const imgSection = document.querySelector("#contents-wrapper  ");
    const images = imgSection.querySelectorAll("img");
    let loadedImages = 0;

    const handler = () => {
      loadedImages++;
      if (loadedImages === images.length) {
        setImagesLoaded(true);
      }
    };

    images.forEach((img) => {
      img.addEventListener("load", handler);
    });

    return () => {
      images.forEach((image) => {
        image.removeEventListener("load", handler);
      });
    };
  }, []);

  return { imagesLoaded };
}
