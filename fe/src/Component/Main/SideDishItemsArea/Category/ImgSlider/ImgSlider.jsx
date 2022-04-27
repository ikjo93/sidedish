import PropTypes from "prop-types";
import { ImgSliderUl, Wrapper } from "./ImgSlider.styled";

const Items = ({ datas }) => {
  return datas.map((item) => (
    <div key={item.id} className="temp">
      {item.name}
    </div>
  ));
};

const ImgSlider = ({ sideDishes }) => {
  return (
    <Wrapper>
      <ImgSliderUl>
        <Items datas={sideDishes} />
      </ImgSliderUl>
    </Wrapper>
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
