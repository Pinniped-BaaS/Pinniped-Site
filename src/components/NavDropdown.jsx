import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { Menu } from "react-feather";

import Links from "./Links.jsx";

export default function NavDropdown() {
  const dropdownRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleClick = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        !e.target.closest("#menu-wrapper")
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  return (
    <NavDropdownWrapper>
      <MenuWrapper
        id="menu-wrapper"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((prev) => !prev);
        }}
      >
        <Menu size={20} />
      </MenuWrapper>
      {open && (
        <Dropdown ref={dropdownRef}>
          <Links setOpen={setOpen} />
        </Dropdown>
      )}
    </NavDropdownWrapper>
  );
}

const NavDropdownWrapper = styled.div`
  position: relative;
  display: none;

  @media (max-width: 800px) {
    display: block;
    margin-left: auto;
  }
`;

const MenuWrapper = styled.div`
  border-radius: 0.5rem;
  cursor: pointer;

  > svg {
    padding: 0.5rem;
    border-radius: 0.5rem;
  }

  :hover {
    background-color: var(--modal-background);
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  border-radius: 0.5rem;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 1rem;
  margin-top: 0.5rem;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 10px;
  width: max-content;
`;
