import styled, { css } from "styled-components";

const paddingByOpened = css`
  ${({ zzzz }) => {
    return zzzz
      ? css`
          padding: 30px 80px 300px;
        `
      : css`
          padding: 30px 80px;
        `;
  }}
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* TODO: 공통패딩 분리 */
  border-bottom: 1px solid #1b1b1b;
  ${paddingByOpened}
`;

export default StyledHeader;
