import styled from "styled-components";
import DetailPageDesc from "./DetailPageDesc/DetailPageDesc";

const DetailPageWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(248, 247, 247, 0.8);
  /* overflow: hidden; */
`;

const DetailPage = () => {
  return (
    <DetailPageWrapper>
      <DetailPageDesc />
      {/* <DetailPageRelated /> */}
    </DetailPageWrapper>
  );
};

export default DetailPage;
