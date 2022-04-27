import PropTypes from "prop-types";
import { ImgSliderButtons } from "MockData/MockData";
// import { useState } from "react";
import {
  Wrapper,
  CategoryWrapper,
  Title,
  SliderButton,
} from "./Category.styled";
import ImgSlider from "./ImgSlider/ImgSlider";

const CategoryTitle = ({ name }) => {
  return <Title>{name}</Title>;
};

const Category = ({ name, sideDishes }) => {
  // 초기에는 false, 페이지가 넘어가면 true로 변경
  // const [isLeftButtonClickable, setIsLeftButtonClickable] = useState(false);
  // // 4개가 초과하면 true로 변경
  // const [isRightButtonClickable, setIsRightButtonClickable] = useState(false);

  return (
    <Wrapper>
      <SliderButton type="button" className="left" isClickable={false}>
        {ImgSliderButtons.left}
      </SliderButton>
      <CategoryWrapper>
        <CategoryTitle name={name} />
        <ImgSlider sideDishes={sideDishes} />
      </CategoryWrapper>
      <SliderButton type="button" className="right" isClickable={true}>
        {ImgSliderButtons.right}
      </SliderButton>
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
