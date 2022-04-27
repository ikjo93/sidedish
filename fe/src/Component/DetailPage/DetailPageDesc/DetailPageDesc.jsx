import styled from "styled-components";
import CloseBtnArea from "./CloseBtnArea/CloseBtnArea";
import Explaination from "./Explaination/Explaination";

const DetailPageDescDiv = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  width: 960px;
  height: 596px;
  background-color: white;
  box-shadow: 0px 0px 10px black;
`;

const DetailPageDesc = () => {
  return (
    <DetailPageDescDiv>
      <CloseBtnArea />
      <Explaination />
    </DetailPageDescDiv>
  );
};

export default DetailPageDesc;
