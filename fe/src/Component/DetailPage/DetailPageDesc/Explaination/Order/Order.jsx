import { useContext } from "react";
import styled, { css } from "styled-components";
import DetailInfoContext from "Component/DetailPage/DetailInfoContext";
import OrderPrice from "./OrderPrice/OrderPrice";
import OrderInfo from "./OrderInfo/OrderInfo";
import OrderBtn from "./OrderBtn/OrderBtn";

const OrderDiv = styled.div`
  width: 440px;

  .name {
    ${({ theme: { boldFonts } }) => css`
      ${boldFonts.large}
    `}
  }
`;

const Order = () => {
  const { name } = useContext(DetailInfoContext);

  return (
    <OrderDiv>
      <div className="name">{name}</div>
      <OrderPrice />
      <OrderInfo />
      <OrderBtn />
    </OrderDiv>
  );
};

export default Order;