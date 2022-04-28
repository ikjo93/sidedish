import PropTypes from "prop-types";
import { Wrapper, AlertDiv, MessageArea, Button } from "./Alert.styled";

const Alert = ({ message = "테스트용 메시지", handler }) => {
  return (
    <Wrapper>
      <AlertDiv>
        <MessageArea>
          <p>{message}</p>
        </MessageArea>
        <Button onClick={handler}>확인</Button>
      </AlertDiv>
    </Wrapper>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};

export default Alert;
