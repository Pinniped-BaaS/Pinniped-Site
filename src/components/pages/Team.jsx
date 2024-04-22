import styled from "styled-components";

import { Linkedin, Mail } from "react-feather";

import Alan from "../../assets/headshots/Alan-Headshot.jpeg";
import Jonathan from "../../assets/headshots/Jonathan-Headshot.jpeg";
import Josh from "../../assets/headshots/Josh-Headshot.jpeg";
import Trevor from "../../assets/headshots/Trevor-Headshot.jpeg";

const teamData = [
  {
    name: "Alan",
    linkedIn: "https://www.linkedin.com/in/alan-b-cho/",
    email: "mailto:alancho397@gmail.com",
  },
  {
    name: "Jonathan",
    linkedIn: "https://www.linkedin.com/in/jonathan-hurd-006b4414/",
    email: "mailto:hurd.jonathan@gmail.com",
  },
  {
    name: "Josh",
    linkedIn: "https://www.linkedin.com/in/joshualakenan/",
    email: "mailto:joshlakenan@gmail.com",
  },
  {
    name: "Trevor",
    linkedIn: "",
    email: "",
  },
];

const determinePhoto = (name) => {
  switch (name) {
    case "Alan":
      return Alan;
    case "Jonathan":
      return Jonathan;
    case "Josh":
      return Josh;
    case "Trevor":
      return Trevor;
    default:
      return "";
  }
};

const Member = ({ member }) => {
  return (
    <TeamCard>
      <Photo src={determinePhoto(member.name)} />
      <Name>{member.name}</Name>
      <Bar>
        <a href={`${member.linkedIn}`}>
          <Icon>
            <Linkedin size={20} />
          </Icon>
        </a>
        <a href={`${member.email}`}>
          <Icon>
            <Mail size={20} />
          </Icon>
        </a>
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

  & div:nth-child(even) img {
    object-position: 0 35%;
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
