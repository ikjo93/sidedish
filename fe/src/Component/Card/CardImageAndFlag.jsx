import PropTypes from "prop-types";
import { useState } from "react";
import { CardImage, CardFlag } from "./Card.styled";

const CardImageAndFlag = ({ props: { name, saveFileName } }) => {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEvent = () => {
    setIsHover(!isHover);
  };

  return (
    <div onMouseEnter={handleMouseEvent} onMouseLeave={handleMouseEvent}>
      <CardImage src={saveFileName} alt={name} isHover={isHover} />
      <CardFlag isHover={isHover}>
        <div>
          <p>새벽배송</p>
        </div>
        <div>
          <p>전국택배</p>
        </div>
      </CardFlag>
    </div>
  );
};

CardImageAndFlag.propTypes = {
  props: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  ).isRequired,
};

export default CardImageAndFlag;
