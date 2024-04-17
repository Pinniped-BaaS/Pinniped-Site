import styled from "styled-components";
import { useLocation } from "wouter";

import useHeadingsObserver from "../hooks/useHeadingsObserver.js";

import scrollIntoView from "../utils/scrollIntoView.js";

const isActive = (heading, activeId) => {
  return heading.id === activeId;
};

const hasActiveParent = (headings, heading, activeId) => {
  let elIdx = headings.findIndex((el) => el.id === heading.id);
  let tempIdx = elIdx;
  let temp = headings[tempIdx];
  console.log(elIdx, "active parent check");
  while (temp && temp.level >= heading.level) {
    tempIdx--;
    temp = headings[tempIdx];
  }
  if (temp && temp.id === activeId) {
    return true;
  } else return false;
};

const hasActiveSiblingOrDescendant = (headings, heading, activeId) => {
  let elIdx = headings.findIndex((el) => el.id === heading.id);
  let downIdx = elIdx;
  let temp = headings[downIdx];

  while (temp && temp.level >= heading.level) {
    if (temp.id === activeId) {
      return true;
    }
    downIdx++;
    temp = headings[downIdx];
  }

  let upIdx = elIdx;
  temp = headings[upIdx];
  while (temp && temp.level >= heading.level) {
    if (temp.id === activeId) {
      return true;
    }
    upIdx--;
    temp = headings[upIdx];
  }

  return false;
};

const shouldRender = (headings, heading, activeId) => {
  return (
    heading.level === 2 ||
    isActive(heading, activeId) ||
    hasActiveParent(headings, heading, activeId) ||
    hasActiveSiblingOrDescendant(headings, heading, activeId)
  );
};

const Item = ({ headings, heading, activeId, idx }) => {
  const [_, setLocation] = useLocation();

  return (
    shouldRender(headings, heading, activeId) && (
      <TocItem
        className={`${heading.className} ${
          activeId === heading.id ? "active" : ""
        }`}
        onClick={(e) => {
          setLocation(`/case-study/#${heading.id}`);
          scrollIntoView(heading.id)(e);
        }}
        style={{
          animationDelay: `0.1s`,
          paddingLeft: `${heading.level * 10}px`,
        }}
      >
        <CircleWrapper
          className={`${activeId === heading.id ? "active" : ""} `}
        >
          <Circle />
        </CircleWrapper>
        <a>{heading.text}</a>
      </TocItem>
    )
  );
};

export default function Toc({ headings }) {
  const { activeId } = useHeadingsObserver(headings);

  return (
    <TocWrapper>
      {headings.map((heading) => {
        return (
          <Item
            key={heading.id}
            headings={headings}
            heading={heading}
            activeId={activeId}
          />
        );
      })}
    </TocWrapper>
  );
}

const TocWrapper = styled.section`
  grid-area: toc;
  position: sticky;
  top: var(--header-height);
  align-self: start;

  @media (max-width: 800px) {
    display: none;
  }
`;

const TocItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 15px;

  padding-top: 5px;
  margin-right: 10px;
  animation: slide-in 0.5s ease;
  animation-fill-mode: both;
  color: var(--foreground);

  cursor: pointer;

  &:hover {
    color: var(--accent3);
  }

  @keyframes slide-in {
    from {
      transform: translateX(-10%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.2s;
  }

  &.head2 {
    font-size: 0.9rem;
    border-bottom: 1px solid var(--faint-gray);
  }

  &.head3 {
    // padding-left: 10px;
    font-size: 0.8rem;
  }

  &.head4 {
    // padding-left: 20px;
    font-size: 0.7rem;
  }
  &.head5 {
    // padding-left: 30px;
    font-size: 0.6rem;
  }
  &.active {
    color: var(--accent3);
    font-weight: bold;
    transition: color 0.2s;
  }
`;

const CircleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px;
  border-radius: 50%;

  &.active {
    outline: 2px solid var(--accent2);
  }
`;

const Circle = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--foreground);
`;
