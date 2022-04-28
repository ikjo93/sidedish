import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const CloseBtnDiv = styled.div`
  height: 76px;
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

const CloseBtnArea = ({ onClose }) => {
  return (
    <CloseBtnDiv onClick={onClose}>
      <CloseBtn type="button">닫기</CloseBtn>
    </CloseBtnDiv>
  );
};

CloseBtnArea.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default CloseBtnArea;
