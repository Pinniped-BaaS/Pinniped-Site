import styled from "styled-components";
import svg from "../../assets/animations/Portable.svg";

export default function PortableAnimation() {
  return (
    <PortableAnimationWrapper
      type="image/svg+xml"
      data={svg}
    ></PortableAnimationWrapper>
  );
}

const PortableAnimationWrapper = styled.object`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-bottom: 10px;
  }
`;
