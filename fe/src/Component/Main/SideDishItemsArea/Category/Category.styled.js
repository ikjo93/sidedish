import styled, { css } from "styled-components";

const BUTTON_POSITION = css`
  ${({ theme: { padding } }) => `${parseInt(padding.large, 10) / 2}`}
`;

const CARD_WIDTH = css`
  ${({ theme: { cardSize } }) => cardSize.small.width}
`;

const CARD_MARGIN = css`
  ${({ theme: { cardSize } }) => cardSize.small.margin}
`;

const Wrapper = styled.div`
  position: relative;
  ${({ theme: { center, padding } }) =>
    css`
      max-width: calc(
        (${padding.large} * 2) + (${CARD_MARGIN} * 3) + (${CARD_WIDTH} * 4)
      );
      margin: ${center.margin};
    `};
`;

const CategoryWrapper = styled.div`
  padding: ${({ theme: { padding } }) => `${padding.middle} ${padding.large}`};
`;

const Title = styled.p`
  ${({ theme: { boldFonts } }) => boldFonts.xLarge}
`;

const SliderButton = styled.button`
  position: absolute;
  ${({ isClickable, theme: { colors } }) =>
    css`
      stroke: ${isClickable ? colors.black : colors.grey3};
      cursor: ${isClickable ? "pointer" : "default"};
    `};

  &.left {
    top: 50%;
    left: ${BUTTON_POSITION}px;
  }

  &.right {
    top: 50%;
    right: ${BUTTON_POSITION}px;
  }
`;

export { Wrapper, CategoryWrapper, Title, SliderButton };
