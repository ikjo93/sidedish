import PropTypes from "prop-types";
import { CategoryWrapper, Title } from "./Category.styled";
import ImgSlider from "./ImgSlider/ImgSlider";

const CategoryTitle = ({ name }) => {
  return <Title>{name}</Title>;
};

const Category = ({ name, sideDishes }) => {
  return (
    <CategoryWrapper>
      <CategoryTitle name={name} />
      <ImgSlider sideDishes={sideDishes} />
    </CategoryWrapper>
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
