import styled from "styled-components";
import CloseBtnArea from "./CloseBtnArea/CloseBtnArea";

const DetailPageDescDiv = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  width: 960px;
  height: 596px;
  background-color: white;
`;

const DetailPageDesc = () => {
  return (
    <DetailPageDescDiv>
      <CloseBtnArea />
      {/* <OrderArea /> */}
    </DetailPageDescDiv>
  );
};

export default DetailPageDesc;
