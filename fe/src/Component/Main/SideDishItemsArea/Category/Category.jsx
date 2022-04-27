import PropTypes from "prop-types";
import { ImgSliderButtons } from "MockData/MockData";
import { useState } from "react";
import { Wrapper, CategoryWrapper, Title } from "./Category.styled";
import SliderButton from "./ImgSlider/SliderButton";
import ImgSlider from "./ImgSlider/ImgSlider";

const sliderButtonInfo = {
  left: {
    inner: ImgSliderButtons.left,
    type: "left",
  },
  right: {
    inner: ImgSliderButtons.right,
    type: "right",
  },
};

const CategoryTitle = ({ name }) => {
  return <Title>{name}</Title>;
};

const Category = ({ name, sideDishes }) => {
  // 초기에는 false, 페이지가 넘어가면 true로 변경
  const [isLeftButtonClickable, setIsLeftButtonClickable] = useState(false);
  // 4개가 초과하면 true로 변경
  const [isRightButtonClickable, setIsRightButtonClickable] = useState(false);

  const buttonHandlers = {
    setLeftButton: setIsLeftButtonClickable,
    setRightButton: setIsRightButtonClickable,
  };

  return (
    <Wrapper>
      <SliderButton
        info={sliderButtonInfo.left}
        isClickable={isLeftButtonClickable}
      />
      <CategoryWrapper>
        <CategoryTitle name={name} />
        <ImgSlider sideDishes={sideDishes} handlers={buttonHandlers} />
      </CategoryWrapper>
      <SliderButton
        info={sliderButtonInfo.right}
        isClickable={isRightButtonClickable}
      />
    </Wrapper>
  );
};

CategoryTitle.propTypes = {
  name: PropTypes.string.isRequired,
};

Category.propTypes = {
  name: PropTypes.string.isRequired,
  sideDishes: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool])
    )
  ).isRequired,
};

export default Category;
