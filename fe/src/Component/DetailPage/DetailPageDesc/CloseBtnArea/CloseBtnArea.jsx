import styled, { css } from "styled-components";

const CloseBtnDiv = styled.div`
  height: 40px;
  display: flex;
  justify-content: flex-end;
`;

const CloseBtn = styled.button`
  ${({ theme: { colors, regularFonts } }) =>
    css`
      ${regularFonts.medium};
      color: ${colors.grey2};
    `}
  margin-right: 20px;
`;

const CloseBtnArea = () => {
  return (
    <CloseBtnDiv>
      <CloseBtn type="button">닫기</CloseBtn>
    </CloseBtnDiv>
  );
};

export default CloseBtnArea;
