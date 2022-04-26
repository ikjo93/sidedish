import PropTypes from "prop-types";
import { CardLi } from "./Card.styled";
import CardImageAndFlag from "./CardImageAndFlag";
import CardPrice from "./CardPrice";
import CardDiscountType from "./CardDiscountType";

const Card = ({
  type,
  props: {
    id,
    name,
    description,
    price,
    discountType,
    discountRate,
    saveFileName,
  },
}) => {
  return (
    <CardLi key={id} type={type}>
      <CardImageAndFlag props={{ saveFileName, name }} />
      <div className="name">{name}</div>
      <div className="desc">{description}</div>
      <CardPrice price={price} discountRate={discountRate} />
      <CardDiscountType discountType={discountType} />
    </CardLi>
  );
};

Card.propTypes = {
  type: PropTypes.string.isRequired,
  props: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
};

export default Card;
