import styled from "styled-components";
import DetailInfoContext from "Component/DetailPage/DetailInfoContext";
import { useContext } from "react";

const ExplainationDiv = styled.div`
  display: flex;
  padding: 0 48px;
  height: 472px;
  justify-content: space-between;
`;

const PictureDiv = styled.div`
  border: red solid 1px;
  width: 392px;
`;

const OrderDiv = styled.div`
  border: 1px solid blue;
  width: 440px;
`;

const MainImage = styled.img`
  width: 392px;
`;

const SubImages = styled.div`
  margin-top: 8px;
  img {
    width: 72px;
    border-right: 8px;
  }
`;

const Images = () => {
  const { imageFiles, name } = useContext(DetailInfoContext);
  const subImageFiles = imageFiles.map((imageFile, idx) => {
    return { src: imageFile, idx };
  });
  const subImages = subImageFiles.map(({ src, idx }) => {
    return <img src={src} key={idx} alt={name} />;
  });
  return (
    <PictureDiv>
      <MainImage src={`${imageFiles[0]}`} alt="test" />
      <SubImages>{subImages}</SubImages>
    </PictureDiv>
  );
};
const Order = () => {
  return <OrderDiv />;
};

const Explaination = () => {
  return (
    <ExplainationDiv>
      <Images />
      <Order />
    </ExplainationDiv>
  );
};

export default Explaination;
