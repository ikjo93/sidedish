import styled, { css } from "styled-components";

const BUTTON_POSITION = css`
  ${({ theme: { padding } }) => `${parseInt(padding.large, 10) / 2}`}
`;

const Wrapper = styled.div`
  position: relative;
`;

const SliderButton = styled.button`
  position: absolute;

  &.left {
    top: 50%;
    left: ${BUTTON_POSITION}px;
  }

  &.right {
    top: 50%;
    right: ${BUTTON_POSITION}px;
  }
`;

export { Wrapper, SliderButton };
