import PropTypes from "prop-types";
import { OrderResultWrapper, MessageArea, Button } from "./OrderResult.styled";

const OrderResult = ({ message = "테스트용 메시지" }) => {
  return (
    <OrderResultWrapper>
      <MessageArea>
        <p>{message}</p>
      </MessageArea>
      <Button>확인</Button>
    </OrderResultWrapper>
  );
};

OrderResult.propTypes = {
  message: PropTypes.string.isRequired,
};

export default OrderResult;
