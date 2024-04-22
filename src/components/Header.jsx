import styled from "styled-components";

import HeaderLogo from "../assets/images/header-logo.png";

import NavDropdown from "./NavDropdown.jsx";
import Links from "./Links.jsx";

import { Link } from "wouter";

export default function Header() {
  return (
    <>
      <FixHeader>
        <HeaderWrapper>
          <LogoEl>
            <Link to="/">
              <LogoIcon src={HeaderLogo} alt="Pinniped Logo" />
            </Link>
          </LogoEl>
          <Nav>
            <Links />
          </Nav>
          <NavDropdown />
        </HeaderWrapper>
      </FixHeader>
    </>
  );
}

const FixHeader = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
  background-color: var(--background);
  border-bottom: 1px solid var(--accent2);
  padding: 20px 0;
  // margin-bottom: 30px;
  opacity: 0.97;
`;

const HeaderWrapper = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;

  nav {
    margin-left: auto;
  }
`;

const LogoEl = styled.div`
  & a {
    display: flex;
    align-items: center;
  }

  & * {
    color: inherit;
    text-decoration: inherit;
  }
`;

const LogoIcon = styled.img`
  width: 250px;

  @media (max-width: 800px) {
    width: 150px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;

  @media (max-width: 800px) {
    display: none;
  }
`;
