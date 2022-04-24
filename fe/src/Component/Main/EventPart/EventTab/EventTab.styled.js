import styled from "styled-components";

const StyledEventTab = styled.ul`
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  display: flex;
  margin-top: 24px;
  margin-bottom: 16px;
  li:not(:last-child) {
    margin-right: 32px;
  }
`;

export default StyledEventTab;
