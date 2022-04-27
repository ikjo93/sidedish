import styled, { css } from "styled-components";

const CARD_WIDTH = css`
  ${({ theme: { cardSize } }) => cardSize.small.width}
`;
const CARD_HEIGHT = css`
  ${({ theme: { cardSize } }) => cardSize.small.height}
`;
const CARD_MARGIN = css`
  ${({ theme: { cardSize } }) => cardSize.small.margin}
`;

const Wrapper = styled.div`
  max-width: calc((${CARD_WIDTH} * 4) + (${CARD_MARGIN} * 3));
`;

const ImgSliderUl = styled.div`
  display: flex;
  overflow: hidden;
  margin-top: 40px;

  .temp {
    width: ${CARD_WIDTH};
    height: ${CARD_HEIGHT};
    flex-shrink: 0;
    background-color: beige;
  }

  .temp:not(:last-child) {
    margin-right: ${CARD_MARGIN};
  }
`;

export { ImgSliderUl, Wrapper };
