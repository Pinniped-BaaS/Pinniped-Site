import styled from "styled-components";

// import { Link } from "wouter";
import { Link } from "react-router-dom";

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
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  color: black;
  font-weight: 300;
  // font-weight: bold;
  outline: none;
  border: 1px solid var(--faint-gray);
  width: 150px;

  padding: 0.5rem 0.75rem;
  margin: 0 auto;

  text-align: center;

  cursor: pointer;
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
  animation: display 0.3s ease;
  animation-fill-mode: both;

  @keyframes display {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  &:hover {
    transform: translateY(-5px);
    color: var(--accent2);
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
    color: var(--accent2);
    font-weight: bold;
  }
`;

const BaasOverview = styled.p`
  width: 70%;
  margin: 0 auto;
  font-size: 1rem;
  text-align: center;
  // color: var(--foreground);
  animation: bring-in 1s ease;
  animation-delay: 1s;
  animation-fill-mode: both;

  h3 {
    color: black;
    font-weight: 300;
  }
`;
