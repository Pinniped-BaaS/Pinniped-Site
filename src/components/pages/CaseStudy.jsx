import styled from "styled-components";

import Toc from "../Toc";
import Content from "../Content";

import useGatherHeadings from "../../hooks/useGatherHeadings.js";
import useCheckImagesLoaded from "../../hooks/useCheckImagesLoaded";
import useScrollToHeader from "../../hooks/useScrollToHeader";

export default function CaseStudy() {
  const { headings } = useGatherHeadings();
  const { imagesLoaded } = useCheckImagesLoaded();
  useScrollToHeader(imagesLoaded);

  return (
    <CaseStudyWrapper>
      {!!headings.length && <Toc headings={headings} />}
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

19;
11;
