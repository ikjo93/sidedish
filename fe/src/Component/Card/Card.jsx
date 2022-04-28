import PropTypes from "prop-types";
import { useState } from "react";
import ModalPortal from "Component/DetailPage/Portal/Portal";
import DetailPage from "Component/DetailPage/DetailPage";
import CardDiscountType from "./CardDiscountType";
import CardPrice from "./CardPrice";
import CardImageAndFlag from "./CardImageAndFlag";
import { CardLi } from "./Card.styled";

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
    dawnDeliveryFlag,
    wholeNationDeliveryFlag,
  },
}) => {
  const [isModalOn, setIsModalOn] = useState(false);
  const handleModal = () => {
    setIsModalOn(!isModalOn);
  };

  return (
    <>
      <CardLi key={id} type={type} onClick={handleModal}>
        <CardImageAndFlag
          props={{
            saveFileName,
            name,
            dawnDeliveryFlag,
            wholeNationDeliveryFlag,
          }}
        />
        <div className="name">{name}</div>
        <div className="desc">{description}</div>
        <CardPrice price={price} discountRate={discountRate} />
        <CardDiscountType discountType={discountType} />
      </CardLi>
      <ModalPortal>
        {isModalOn && <DetailPage onClose={handleModal} id={id} />}
      </ModalPortal>
    </>
  );
};

Card.propTypes = {
  type: PropTypes.string.isRequired,
  props: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
  ).isRequired,
};

export default Card;
