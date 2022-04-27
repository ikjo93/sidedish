import PropTypes from "prop-types";
import { ImgSliderButtons } from "MockData/MockData";
import { CategoryWrapper, Title, SliderButton } from "./Category.styled";
import ImgSlider from "./ImgSlider/ImgSlider";

const CategoryTitle = ({ name }) => {
  return <Title>{name}</Title>;
};

const Category = ({ name, sideDishes }) => {
  // const [curFirstIndex, setCurFirstIndex] = setState(0);

  return (
    <>
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
    </>
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
