import { useState, useEffect } from "react";

import styled, { keyframes } from "styled-components";

import demoStatic from "../assets/images/demo.png";

import demo from "../assets/videos/pinniped_demo.mp4";

export default function PinnipedDemo() {
  // const [viewDemo, setViewDemo] = useState(false);

  // useEffect(() => {
  //   const video = document.querySelector("#demo");
  //   if (viewDemo) {
  //     video.play();
  //   } else {
  //     video.pause();
  //     video.currentTime = 0;
  //   }
  // }, [viewDemo]);

  return (
    <VideoWrapper>
      <VideoStatic
        src={demoStatic}
        // className={`${viewDemo ? "closed" : "open"}`}
        alt="Admin Dashboard"
      />
      {/* <DemoButton onClick={() => setViewDemo(true)}>View Demo</DemoButton>

      <DemoWrapper className={`${viewDemo ? "open" : "closed"}`}>
        <Demo
          id="demo"
          src={demo}
          type="video/mp4"
          alt="Demo"
          autoPlay
          controls
        />
        <CloseDemo onClick={() => setViewDemo(false)}></CloseDemo>
      </DemoWrapper> */}
    </VideoWrapper>
  );
}

const VideoWrapper = styled.div`
  position: relative;

  width: 85%;
  max-width: 1100px;
  height: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border-radius: 0.5rem;

  margin: 0 auto;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  animation: bring-in 0.7s ease-out;
  animation-delay: 0.2s;
  animation-fill-mode: both;
`;

const VideoStatic = styled.img`
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 0.5rem;
`;

const DemoButton = styled.button`
  background: var(--foreground);
  color: white;
  outline: none;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 2rem;
  cursor: pointer;
  transition: background 0.4s;
  position: absolute;

  animation: show-button 0.7s ease-out;
  animation-delay: 1.5s;
  animation-fill-mode: both;

  &:hover {
    background: var(--accent3);
  }

  @keyframes show-button {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const showVideo = keyframes`
  from {
    display: none;
    opacity: 0;
  }
  to {
    display: block;
    opacity: 1;
  }
`;

const hideVideo = keyframes`
  from {
    display: block;
    opacity: 1;
  }
  to {
    display: none;
    opacity: 0;
  }
`;

const DemoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 101%;
  height: 100%;
  border-radius: 0.5rem;
  display: none;

  &.closed {
    display: none;
    animation: ${hideVideo} 0.2s ease-out;
  }

  &.open {
    display: block;
    animation: ${showVideo} 0.3s ease-out;
  }
`;

const Demo = styled.video`
  width: inherit;
  height: inherit;
  border-radius: 0.5rem;
  object-fit: fill;
`;

const CloseDemo = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: var(--foreground);
  color: white;
  border: none;
  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;
  transition: background 0.4s;

  animation: show-button 0.7s ease-out;
  animation-delay: 1s;
  animation-fill-mode: both;

  &:hover {
    background: var(--accent3);
  }
`;
