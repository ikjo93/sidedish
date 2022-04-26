import PropTypes from "prop-types";
import ImgSliderWrapper from "./ImgSlider.styled";

const ImgSlider = ({ sideDishes }) => {
  return (
    <ImgSliderWrapper>
      <ul>
        {sideDishes.map((sideDish) => (
          <li key={sideDish.id}>{sideDish.name}</li>
        ))}
      </ul>
    </ImgSliderWrapper>
  );
};

ImgSlider.propTypes = {
  sideDishes: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool])
    )
  ).isRequired,
};

export default ImgSlider;
