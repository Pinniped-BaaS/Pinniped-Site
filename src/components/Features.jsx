import { useState } from "react";

import styled, { keyframes } from "styled-components";
import { useLocation } from "wouter";
import { Move, Sliders, Check, ArrowRight } from "react-feather";

import features from "../data/features.json";

import portabilityVideo from "../assets/videos/portability.mp4";
import extensibilityVideo from "../assets/videos/extensibility.mp4";
import easeOfUseVideo from "../assets/videos/ease.mp4";

const chooseIcon = (feature) => {
  switch (feature.header) {
    case "Portable":
      return <Move size={45} />;
    case "Extensible":
      return <Sliders size={45} />;
    case "Easy to Use":
      return <Check size={45} />;
    default:
      return <Move size={45} />;
  }
};

const Feature = ({ feature }) => {
  const [, setLocation] = useLocation();

  let animation;
  switch (feature.header) {
    case "Portable":
      animation = (
        <Video autoPlay loop muted>
          <source src={portabilityVideo} type="video/mp4" />
        </Video>
      );
      break;
    case "Extensible":
      animation = (
        <Video autoPlay loop muted>
          <source src={extensibilityVideo} type="video/mp4" />
        </Video>
      );
      break;
    case "Easy to Use":
      animation = (
        <Video autoPlay loop muted>
          <source src={easeOfUseVideo} type="video/mp4" />
        </Video>
      );
      break;
    default:
      break;
  }
  return (
    <FeatureWrapper key={feature.header}>
      <Description>
        <p>{feature.description}</p>
        <LearnMore
          onClick={(e) => {
            e.preventDefault();
            setLocation(`/case-study/#${feature.caseStudy.toLowerCase()}`);
          }}
        >
          <p>Learn More</p>
          <ArrowRight size={20} />
        </LearnMore>
      </Description>
      <AnimationWrapper>{animation}</AnimationWrapper>
    </FeatureWrapper>
  );
};

export default function Features() {
  const [currentFeature, setCurrentFeature] = useState("Portable");

  return (
    <Wrapper>
      <Header>
        <h2>Key Features</h2>
        <Line />
      </Header>
      <Cards>
        {features.map((feature, idx) => (
          <Card
            key={feature.header}
            onClick={() => {
              setCurrentFeature(feature.header);
            }}
            style={{
              animationDelay: `${idx * 0.1}s`,
              border:
                feature.header === currentFeature
                  ? "2px solid var(--foreground)"
                  : "1px solid var(--faint-gray)",
            }}
          >
            <div className="text">
              <h3>{feature.header}</h3>
              <p>{feature.snippet}</p>
            </div>
            {chooseIcon(feature)}
          </Card>
        ))}
      </Cards>

      {features.map(
        (feature) =>
          feature.header === currentFeature && (
            <Feature feature={feature} key={feature.header} />
          )
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  grid-area: features;

  min-height: 1000px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;

  h2 {
    font-size: 1.2rem;
    font-weight: 200;
    color: var(--text-color);
    white-space: nowrap;
  }
`;

const Line = styled.div`
  width: 100px;
  height: 1px;
  background-color: var(--accent2);
`;

const Cards = styled.div`
  display: flex;
  gap: 5px;
  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px 20px 20px 60px;
  border-radius: 0.5rem;
  width: 200px;
  min-width: 200px;
  max-width: 200px;
  min-height: 70px;
  cursor: pointer;
  border: 1px solid var(--faint-gray);
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
  position: relative;
  overflow: hidden;

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
    color: var(--accent3);
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  p {
    font-size: 0.8rem;
    font-weight: 200;
    color: var(--text-color);
  }

  svg {
    color: var(--accent3);
    position: absolute;
    top: -10px;
    left: -10px;
  }
`;

const showFeature = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const FeatureWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 120px;
  margin-top: 80px;

  animation: ${showFeature} 1s ease-in-out;
  animation-fill-mode: both;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    height: fit-content;
  }
`;

const Description = styled.div`
  flex: 1;
  font-size: 0.9rem;
  font-weight: 200;
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  text-align: justify;
`;

const AnimationWrapper = styled.div`
  flex: 2;

  display: flex;
  justify-content: center;
  align-items: start;

  border-radius: 5px;

  box-shadow: 0 0 1px var(--accent1), 0 0 2px var(--accent1),
    0 0 3px var(--accent1), 0 0 4px var(--accent1), 0 0 5px var(--accent1),
    0 0 7px var(--accent1), 0 0 9px var(--accent1), 0 0 10px var(--accent1);
`;

const Image = styled.img``;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: inherit;
`;

const LearnMore = styled.button`
  display: flex;
  justify-content: space-between;
  color: var(--accent3);
  background: inherit;
  outline: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  transition: background 0.4s;
  margin-top: 20px;
  border-radius: 5px;
  transition: all 0.3s ease;
  font-weight: 800;

  &:hover {
    background: var(--hover);
    color: white;
  }
`;
