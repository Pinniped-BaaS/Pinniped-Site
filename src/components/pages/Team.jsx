import { useState } from "react";

import styled from "styled-components";

import { Linkedin, Mail } from "react-feather";

const teamData = [
  {
    name: "Alan",
    src: "",
  },
  {
    name: "Jonathan",
    src: "Jonathan-Headshot",
  },
  {
    name: "Josh",
  },
  {
    name: "Trevor",
    src: "Trevor-Headshot",
  },
];

const Member = ({ member }) => {
  return (
    <TeamCard>
      <Photo src={`src/assets/headshots/${member.src}.jpeg`} />
      <Name>{member.name}</Name>

      <Bar>
        <Icon>
          <Linkedin size={20} />
        </Icon>
        <Icon>
          <Mail size={20} />
        </Icon>
      </Bar>
    </TeamCard>
  );
};

export default function Team() {
  return (
    <TeamWrapper>
      <TeamCards>
        {teamData.map((member, index) => (
          <Member member={member} key={index} />
        ))}
      </TeamCards>
    </TeamWrapper>
  );
}

const TeamWrapper = styled.section`
  height: 100%;
`;

const TeamCards = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const TeamCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 10px;
  padding: 10px;
  // border: 1px solid var(--accent2);
  border-radius: 10px;
  margin: 10px;
`;

const Photo = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  object-position: 0 30%;
  border-radius: 50%;
`;

const Name = styled.h2`
  font-size: 1.1rem;
`;

const Bar = styled.div`
  position: absolute;
  bottom: -20px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;

  animation: showBar 0.5s ease;
  animation-fill-mode: both;

  @keyframes showBar {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const Icon = styled.a`
  cursor: pointer;

  :hover {
    color: var(--accent3);
  }
`;
