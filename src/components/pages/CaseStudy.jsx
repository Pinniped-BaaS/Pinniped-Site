import styled from "styled-components";

import Toc from "../Toc";
import Content from "../Content";

import useGatherHeadings from "../../hooks/useGatherHeadings.js";

export default function CaseStudy() {
  const { headings } = useGatherHeadings();

  return (
    <CaseStudyWrapper>
      {headings.length && <Toc headings={headings} />}
      <Content />
    </CaseStudyWrapper>
  );
}

const CaseStudyWrapper = styled.section`
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto;
  grid-template-areas: "toc contents";

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-areas: "contents";
  }
`;
