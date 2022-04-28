import PropTypes from "prop-types";
import { Wrapper, AlertDiv, MessageArea, Button } from "./Alert.styled";

const screenSize = {
  width: window.screen.width,
  height: window.screen.height,
};

const scrollYPosition = () => window.pageYOffset;

const Alert = ({ message = "테스트용 메시지", handler }) => {
  return (
    <Wrapper onClick={handler} className="alertWrap">
      <AlertDiv screenSize={screenSize} scrollYPosition={scrollYPosition()}>
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
