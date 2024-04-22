import styled from "styled-components";
import { Link, useLocation } from "wouter";
import { GitHub } from "react-feather";

const links = [
  { to: "/case-study/#introduction", text: "Case Study" },
  { to: "/team", text: "Team" },
];

export default function Links({ setOpen }) {
  const [location] = useLocation();
  return (
    <>
      {links.map((link, index) => (
        <LinkWrapper key={index}>
          <Link
            to={link.to}
            onClick={(e) => {
              if (location.includes("case-study") && link.text === "Case Study")
                e.preventDefault();
              if (setOpen && typeof setOpen === "function") {
                setOpen(false);
              }
            }}
          >
            {link.text}
          </Link>
        </LinkWrapper>
      ))}
      <LinkWrapper>
        <a
          href="https://github.com/Pinniped-BaaS"
          onClick={() => {
            if (setOpen && typeof setOpen === "function") {
              setOpen(false);
            }
          }}
        >
          <GitHub size={20} />
        </a>
      </LinkWrapper>
    </>
  );
}

const LinkWrapper = styled.div`
  display: inline-block;
  color: var(--foreground);
  text-decoration: none;
  margin-right: 1rem;
  position: relative;

  & * {
    color: inherit;
    text-decoration: inherit;
  }

  &:hover {
    color: var(--accent3);
    font-weight: bold;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--accent2);
    transition: width 0.5s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;
