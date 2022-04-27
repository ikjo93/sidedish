import PropTypes from "prop-types";
import Button from "./SliderButton.styled";

const SliderButton = ({ info: { inner, type }, isClickable }) => {
  return (
    <Button className={type} isClickable={isClickable}>
      {inner}
    </Button>
  );
};

SliderButton.propTypes = {
  info: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.bool, PropTypes.node])
  ).isRequired,
  isClickable: PropTypes.bool.isRequired,
};

export default SliderButton;
