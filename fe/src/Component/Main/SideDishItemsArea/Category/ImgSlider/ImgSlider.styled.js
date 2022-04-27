import styled from "styled-components";

const ImgSliderUl = styled.div`
  display: flex;
  overflow: hidden;
  margin-top: 40px;

  .temp {
    width: 302px;
    height: 456px;
    flex-shrink: 0;
    background-color: beige;
  }

  .temp:not(:last-child) {
    margin-right: 30px;
  }
`;

export default ImgSliderUl;
