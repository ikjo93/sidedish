import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import CardPrice from "./CardPrice";
import CardDiscountType from "./CardDiscountType";

const CardLi = styled.li`
  ${({ type }) => {
    const imgWidth = {
      event: 400,
      category: 300,
    };

    return css`
      img {
        width: ${imgWidth[type]}px;
      }
    `;
  }}

  ${({ theme: { colors, boldFonts, regularFonts } }) => {
    return css`
      .name {
        ${boldFonts.medium}
        margin-top: 16px;
        color: ${colors.black};
      }

      .desc {
        ${regularFonts.small}
        margin-top: 8px;
        color: ${colors.grey2};
      }
    `;
  }}
`;

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
      <img src={saveFileName} alt={name} />
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
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      discountType: PropTypes.string.isRequired,
      discountRate: PropTypes.number.isRequired,
      saveFileName: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Card;
