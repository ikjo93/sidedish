import { useState } from "react";
import styled from "styled-components";
import DeliveryInfo from "./DeliveryInfo/DeliveryInfo";
import Counter from "./Counter/Counter";

const OrderInfoDiv = styled.div`
  margin-top: 24px;
  height: 260px;
`;

const OrderInfo = () => {
  const [count, setCount] = useState(1);

  return (
    <OrderInfoDiv>
      <DeliveryInfo count={count} />
      <Counter state={{ count, setCount }} />
    </OrderInfoDiv>
  );
};

export default OrderInfo;
