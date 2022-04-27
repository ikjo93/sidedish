import styled, { css } from "styled-components";

const CARD_SIZE = {
  width: css`
    ${({ theme: { cardSize } }) => cardSize.small.width}
  `,
  height: css`
    ${({ theme: { cardSize } }) => cardSize.small.height}
  `,
  margin: css`
    ${({ theme: { cardSize } }) => cardSize.small.margin}
  `,
};

const Wrapper = styled.div`
  max-width: calc((${CARD_SIZE.width} * 4) + (${CARD_SIZE.margin} * 3));
`;

const ImgSliderUl = styled.div`
  display: flex;
  overflow: hidden;
  margin-top: 40px;

  .temp {
    width: ${CARD_SIZE.width};
    height: ${CARD_SIZE.height};
    flex-shrink: 0;
    background-color: beige;
  }

  .temp:not(:last-child) {
    margin-right: ${CARD_SIZE.margin};
  }
`;

export { ImgSliderUl, Wrapper };
