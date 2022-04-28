import PropTypes from "prop-types";
import { useContext } from "react";
import DetailInfoContext from "Component/DetailPage/DetailInfoContext";
import constants from "common/constants";
import orderApi from "Service/orderApi";
import OrderBtnStyle from "./OrderBtn.styled";

const { productDetail } = constants;

const OrderBtn = ({ count }) => {
  const { id, price, discountRate } = useContext(DetailInfoContext);

  const calcedTotalPrice = count * (discountRate / 100) * price;
  const calcedPoint = calcedTotalPrice * (productDetail.pointPercent / 100);

  const getDatas = () => {
    return {
      sidedishId: id,
      totalPrice: calcedTotalPrice,
      fee: productDetail.deliveryFee,
      quantity: count,
      point: calcedPoint,
    };
  };

  const postOrder = async () => {
    const response = await orderApi.orderSideDish(getDatas());
    console.log(response);
  };

  const handleOrderButton = () => {
    postOrder();
  };

  return <OrderBtnStyle onClick={handleOrderButton}>주문하기</OrderBtnStyle>;
};

OrderBtn.propTypes = {
  count: PropTypes.number.isRequired,
};

export default OrderBtn;
