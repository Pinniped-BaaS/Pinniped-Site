import styled from "styled-components";

export default function Footer() {
  return (
    <FooterWrapper>
      <p>© 2024 Pinniped Contributors</p>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  background-color: inherit;
  padding: 20px 0;
  font-size: 0.8rem;
  margin-top: 50px;
  opacity: 0.97;
  border-top: 1px solid var(--accent2);
`;
