import styled, { css } from "styled-components";

const CardLi = styled.li`
  ${({ theme: { colors, boldFonts, regularFonts }, type }) => {
    const imgWidth = {
      event: 411,
      category: 302,
    };
    return css`
      position: relative;

      img {
        width: ${imgWidth[type]}px;
      }

      .name {
        ${boldFonts.medium}
        margin-top: 16px;
        color: ${colors.black};
      }

      .desc {
        ${regularFonts.small}
        margin-top: 8px;
        color: ${colors.grey2};
      }
    `;
  }}
`;

const CardImage = styled.img`
  ${({ isHover }) => {
    return css`
      opacity: ${isHover && 50}%;
    `;
  }}
`;

const CardFlag = styled.div`
  ${({ theme: { colors }, isHover }) => {
    return css`
      background: rgba(248, 247, 247, 0.8);
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      width: 140px;
      height: 140px;
      border: 1px solid ${colors.black};
      border-radius: 140px;
      top: 20px;
      right: 20px;

      ${!isHover &&
      css`
        visibility: hidden;
      `}

      > div {
        height: 50%;
      }

      > :nth-child(1) {
        line-height: 100px;
        border-bottom: solid 1px black;
      }

      > :nth-child(2) {
        line-height: 40px;
      }
    `;
  }}
`;

const CardPriceDiv = styled.div`
  margin-top: 8px;
  ${({ theme: { colors, regularFonts, boldFonts } }) => css`
    > :nth-child(1) {
      ${boldFonts.medium};
      color: ${colors.black};
      margin-right: 10px;
    }
    > :nth-child(2) {
      ${regularFonts.small}
      color: ${colors.grey3};
      text-decoration: line-through;
    }
  `}
`;

export { CardLi, CardImage, CardFlag, CardPriceDiv };
