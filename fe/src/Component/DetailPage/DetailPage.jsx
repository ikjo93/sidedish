import styled from "styled-components";
import DetailPageDesc from "./DetailPageDesc/DetailPageDesc";
import DetailInfoContext from "./DetailInfoContext";

const DetailPageWrapper = styled.div`
  position: absolute;
  display: block;
  top: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(248, 247, 247, 0.8);
  /* overflow: hidden; */
`;

const tester = {
  id: 1,
  name: "오리 주물럭_반조리",
  dawnDeliveryFlag: true,
  wholeNationDeliveryFlag: true,
  price: 15800,
  discountType: "이벤트 특가",
  discountRate: 20,
  imageFiles: [
    "http://3.36.89.161/img/1_ma_1.png",
    "http://3.36.89.161/img/1_et_2.png",
    "http://3.36.89.161/img/1_et_3.png",
  ],
  recommendedSideDishes: [
    {
      id: 5,
      name: "연근조림",
      description: "맛있어요!!",
      dawnDeliveryFlag: true,
      wholeNationDeliveryFlag: true,
      price: 2000,
      discountType: "이벤트 특가",
      discountRate: 20,
      saveFileName: "img/5_ma_1.png",
    },
  ],
};

const DetailPage = () => {
  return (
    <DetailInfoContext.Provider value={tester}>
      <DetailPageWrapper>
        <DetailPageDesc />
        {/* <DetailPageRelated /> */}
      </DetailPageWrapper>
    </DetailInfoContext.Provider>
  );
};

export default DetailPage;
