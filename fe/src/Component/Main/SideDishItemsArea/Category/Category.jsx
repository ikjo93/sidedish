import PropTypes from "prop-types";
import { ImgSliderButtons } from "MockData/MockData";
import { useState, useRef, useEffect } from "react";
import { Wrapper, CategoryWrapper, Title } from "./Category.styled";
import SliderButton from "./ImgSlider/SliderButton";
import ImgSlider from "./ImgSlider/ImgSlider";

const MAX_CARDS_COUNT_PER_SLIDE = 4;
const CARD_SIZE = {
  width: 302,
  margin: 24,
};

const MOVE_PX_PER_COUNT = CARD_SIZE.width + CARD_SIZE.margin;

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
  const getInitialLastIdx = () => {
    if (sideDishes.length >= MAX_CARDS_COUNT_PER_SLIDE) {
      return MAX_CARDS_COUNT_PER_SLIDE - 1;
    }
    return sideDishes.length - 1;
  };

  const sideDishSlider = useRef();
  const curFirstIdx = useRef(0);
  const curLastIdx = useRef(getInitialLastIdx());
  const cardMoveCount = useRef(0);

  // 초기에는 false, 페이지가 넘어가면 true로 변경
  const [isLeftButtonClickable, setIsLeftButtonClickable] = useState(false);
  // 4개가 초과하면 true로 변경
  const [isRightButtonClickable, setIsRightButtonClickable] = useState(true);
  // const [isTransitionEnd, setIsTransitionEnd] = useState(false);

  const buttonClickableHandlers = {
    setLeftButton: setIsLeftButtonClickable,
    setRightButton: setIsRightButtonClickable,
  };

  const handleSlide = {
    // 중복처리
    // 클래스 추가해서 Click불가능한 버튼은 아예 클릭이벤트 발생안되게 하기
    left: () => {
      const countToMove = cardMoveCount.current;
      sideDishSlider.current.style.transition = `transform 2s`;
      sideDishSlider.current.style.transform = `translateX(${
        countToMove * MOVE_PX_PER_COUNT
      }px)`;

      curFirstIdx.current = curFirstIdx + countToMove;
      curLastIdx.current = curLastIdx + countToMove;
    },
    right: () => {
      const countToMove = cardMoveCount.current * -1;
      sideDishSlider.current.style.transition = `transform 2s`;
      sideDishSlider.current.style.transform = `translateX(${
        countToMove * MOVE_PX_PER_COUNT
      }px)`;

      curFirstIdx.current = curFirstIdx + countToMove;
      curLastIdx.current = curLastIdx + countToMove;
    },
  };

  useEffect(() => {
    const lastSideDishIdx = sideDishes.length - 1;
    cardMoveCount.current = lastSideDishIdx - curLastIdx.current;
  }, []);

  // useEffect(() => {
  //   // 일단 오른쪽만 작동
  //   curLastIdx.current += cardMoveCount.current;
  // }, [isTransitionEnd]);

  return (
    <Wrapper>
      <SliderButton
        info={sliderButtonInfo.left}
        isClickable={isLeftButtonClickable}
        onClick={handleSlide.left}
      />
      <CategoryWrapper>
        <CategoryTitle name={name} />
        <ImgSlider
          sideDishes={sideDishes}
          handlers={buttonClickableHandlers}
          sliderRef={sideDishSlider}
          onTransitionEnd={() => console.log("transition end")}
        />
      </CategoryWrapper>
      <SliderButton
        info={sliderButtonInfo.right}
        isClickable={isRightButtonClickable}
        onClick={handleSlide.right}
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
