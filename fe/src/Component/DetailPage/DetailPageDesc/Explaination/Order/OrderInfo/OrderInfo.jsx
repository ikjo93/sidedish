import { useState } from "react";
import DeliveryInfo from "./DeliveryInfo/DeliveryInfo";
import Counter from "./Counter/Counter";
import OrderInfoDiv from "./OrderInfo.styled";

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
