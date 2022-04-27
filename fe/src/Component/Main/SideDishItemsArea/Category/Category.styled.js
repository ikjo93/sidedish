import styled, { css } from "styled-components";

const BUTTON_POSITION = css`
  ${({ theme: { padding } }) => `${parseInt(padding.large, 10) / 2}`}
`;

const CategoryWrapper = styled.div`
  padding: ${({ theme: { padding } }) => `${padding.middle} ${padding.large}`};
`;

const Title = styled.p`
  ${({ theme: { boldFonts } }) => boldFonts.xLarge}
`;

const SliderButton = styled.button`
  position: absolute;
  stroke: ${(props) => (props.isClickable ? "#1B1B1B" : "#BCBCBC")};

  &.left {
    top: 50%;
    left: ${BUTTON_POSITION}px;
  }

  &.right {
    top: 50%;
    right: ${BUTTON_POSITION}px;
  }
`;

export { CategoryWrapper, Title, SliderButton };
