import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { ImgSliderUl, Wrapper } from "./ImgSlider.styled";

const MAX_CARDS_COUNT_PER_SLIDE = 4;

const Items = ({ datas }) => {
  return datas.map((item) => (
    <div key={item.id} className="temp">
      {item.name}
    </div>
  ));
};

const ImgSlider = ({
  sideDishes,
  handlers: { setLeftButton, setRightButton },
}) => {
  const [curFirstVisibleIdx, setCurFirstVisibleIdx] = useState(0);
  const [curLastVisibleIdx, setCurLastVisibleIdx] = useState(0);

  const getCurLastVisibleIdx = () => {
    for (let i = curFirstVisibleIdx; i < MAX_CARDS_COUNT_PER_SLIDE; i += 1) {
      if (!sideDishes[i]) {
        return i - 1;
      }
    }
    return curFirstVisibleIdx + MAX_CARDS_COUNT_PER_SLIDE - 1;
  };

  useEffect(() => {
    const targetIdx = getCurLastVisibleIdx();

    setCurLastVisibleIdx(targetIdx);
  }, [curFirstVisibleIdx]);

  return (
    <Wrapper>
      <ImgSliderUl>
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
};

export default ImgSlider;
