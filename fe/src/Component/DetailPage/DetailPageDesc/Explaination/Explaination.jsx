import styled from "styled-components";
import Images from "./Images/Images";
import Order from "./Order/Order";

const ExplainationDiv = styled.div`
  display: flex;
  padding: 0 48px;
  height: 472px;
  justify-content: space-between;
`;

const Explaination = () => {
  return (
    <ExplainationDiv>
      <Images />
      <Order />
    </ExplainationDiv>
  );
};

export default Explaination;
