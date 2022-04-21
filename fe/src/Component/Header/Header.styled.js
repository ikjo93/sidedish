import styled, { css } from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* TODO: 공통패딩 분리 */
  border-bottom: 1px solid #1b1b1b;
  padding: 30px 80px;

  ${({ isOpen }) =>
    isOpen &&
    css`
      padding: 30px 80px 300px;
    `}
`;

export default StyledHeader;
