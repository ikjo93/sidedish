import styled, { css } from "styled-components";

const EventTabUl = styled.ul`
  ${({ theme: { center, boldFonts } }) => css`
    ${center}
    ${boldFonts.large};
  `}

  ${({ id }) =>
    id &&
    css`
      > :nth-child(${id}) {
        border-bottom: 2px solid #1b1b1b;
      }
    `}

  font-family: "Noto Sans KR";
  display: flex;
  margin-top: 24px;

  > li {
    padding-bottom: 16px;

    &:not(:last-child) {
      margin-right: 32px;
    }

    :hover {
      border-bottom: 2px solid #bcbcbc;
    }
  }
`;

export default EventTabUl;
