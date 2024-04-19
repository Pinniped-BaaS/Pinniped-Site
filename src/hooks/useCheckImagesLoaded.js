import { useState, useEffect } from "react";

export default function useCheckImagesLoaded() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imgSection = document.querySelector("#contents-wrapper");
    const images = imgSection.querySelectorAll("img, object");

    let count = 0;

    const handler = () => {
      count++;
      if (count === images.length) {
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
