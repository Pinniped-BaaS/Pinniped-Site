import { useState, useEffect } from "react";

const getClassName = (level) => {
  switch (level) {
    case 2:
      return "head2";
    case 3:
      return "head3";
    case 4:
      return "head4";
    case 5:
      return "head5";
    case 6:
      return "head6";
    default:
      return "head2";
  }
};

const makeTree = (arr) => {
  const tree = [];
  let currentLevel = 2;
  let currentParent = tree;
  arr.forEach((item) => {
    if (item.level > currentLevel) {
      const parent = currentParent[currentParent.length - 1];
      if (parent.children) {
        currentParent = parent.children;
      } else {
        parent.children = [];
        currentParent = parent.children;
      }
      currentLevel = item.level;
    } else if (item.level < currentLevel) {
      currentParent = tree;
      currentLevel = 2;
    }
    currentParent.push(item);
  });
  return tree;
};

export default function useGatherHeads() {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll("h2, h3, h4, h5, h6")).map(
      (el, idx) => {
        el.setAttribute(
          "id",
          `${el.innerText.replace(/\s+/g, "-").toLowerCase()}${idx}`
        );
        const level = Number(el.nodeName.charAt(1));
        return {
          id: el.id,
          text: el.innerText,
          level,
          className: getClassName(level),
          el,
        };
      }
    );

    setHeadings(els);
  }, []);

  return { headings, tree: makeTree(headings) };
}
