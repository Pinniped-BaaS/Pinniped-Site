import styled from "styled-components";

import { Link } from "wouter";

import PinnipedDemo from "./Demo";

export default function Hero() {
  return (
    <HeroWrapper>
      <HeroContent>
        A portable, open-source BaaS for fast-moving Node.js developers.
      </HeroContent>
      <Actions>
        <Button as={Link} to="/case-study/#introduction">
          Read Case Study
        </Button>
        <LinkWrapper>
          <a href="https://github.com/Pinniped-BaaS">Try Pinniped</a>
        </LinkWrapper>
      </Actions>
      <PinnipedDemo />
    </HeroWrapper>
  );
}

const HeroWrapper = styled.section`
  grid-area: hero;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 30px;

  // min-height: 780px;

  position: relative;
  margin-bottom: 50px;

  @keyframes bring-in {
    from {
      transform: translateY(20%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const HeroContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 70%;
  margin: 20px auto;
  font-size: 1.5rem;

  animation: slide-down 0.5s ease;

  @keyframes slide-down {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 0.3rem;

  animation: bring-in 1s ease;
  animation-delay: 0.7s;
  animation-fill-mode: both;

  & a {
    text-decoration: none;
  }
`;

const Button = styled.button`
  background: inherit;
  color: black;
  outline: none;
  border: none;
  border-bottom: 1px solid var(--foreground);
  width: 200px;

  padding: 0.5rem 0.75rem;
  margin: 0 auto;

  text-align: center;

  cursor: pointer;
  transition: background 0.4s;

  &:hover {
    background: var(--foreground);
    color: white;
    border-radius: 0.25rem;
  }

  & a {
    text-decoration: none;
  }
`;

const LinkWrapper = styled.div`
  color: var(--foreground);
  text-decoration: none;
  margin-top: 2rem;
  margin: 0.75rem auto 0;
  font-size: 0.75rem;
  cursor: pointer;

  * {
    color: inherit;
    text-decoration: inherit;
  }

  &:hover {
    color: var(--accent3);
    font-weight: bold;
  }
`;
// const Seal = styled.img`
//   --galumph-rate: 5px;
//   --galumph-distance: 40%;
//   --distance: 200px;
//   opacity: 0;
//   position: absolute;
//   top: -15px;
//   left: 3rem;
//   width: 75px;
//   height: auto;
//   transform: scaleX(-1);
//   background: inherit;
// `;
