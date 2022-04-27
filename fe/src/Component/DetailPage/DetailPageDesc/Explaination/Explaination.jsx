import styled from "styled-components";
import Images from "./Images/Images";

const ExplainationDiv = styled.div`
  display: flex;
  padding: 0 48px;
  height: 472px;
  justify-content: space-between;
`;

const OrderDiv = styled.div`
  border: 1px solid blue;
  width: 440px;
`;

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
