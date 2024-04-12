import styled from "styled-components";

import Hero from "../Hero.jsx";
import Features from "../Features.jsx";

export default function Home() {
  return (
    <HomeWrapper>
      <Hero />
      <Features />
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
