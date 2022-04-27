import PropTypes from "prop-types";
import { ImgSliderUl, Wrapper } from "./ImgSlider.styled";

/* Items는 Card로 대체되어야 하는 컴포넌트임 */
const Items = ({ datas }) => {
  return datas.map((item) => (
    <div key={item.id} className="temp">
      {item.name}
    </div>
  ));
};

const ImgSlider = ({
  sideDishes,
  handlers /* : { setLeftButton, setRightButton } */,
  sliderRef,
  onTransitionEnd,
}) => {
  console.log(handlers, sliderRef); // unused-var용

  return (
    <Wrapper>
      <ImgSliderUl ref={sliderRef} onTransitionEnd={onTransitionEnd}>
        {/* Items는 Card로 대체되어야 하는 컴포넌트임 */}
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
  handlers: PropTypes.objectOf(PropTypes.func).isRequired,
  sliderRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  onTransitionEnd: PropTypes.func.isRequired,
};

export default ImgSlider;
