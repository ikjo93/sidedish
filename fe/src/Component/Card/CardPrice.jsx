import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const getPriceType = (price) => {
  return [String(price).slice(0, -3), ",", String(price).slice(-3), "원"].join(
    ""
  );
};

const CardPriceDiv = styled.div`
  margin-top: 8px;
  ${({ theme: { colors, regularFonts, boldFonts } }) => css`
    > :nth-child(1) {
      ${boldFonts.medium};
      color: ${colors.black};
      margin-right: 10px;
    }
    > :nth-child(2) {
      ${regularFonts.small}
      color: ${colors.grey3};
      text-decoration: line-through;
    }
  `}
`;

const CardPrice = ({ price, discountRate }) => {
  const originPrice = getPriceType(price);
  const discountPrice = getPriceType(price * (1 - discountRate / 100));

  return (
    <CardPriceDiv discountRate={discountRate}>
      {!!discountRate && <span>{discountPrice}</span>}
      <span>{originPrice}</span>
    </CardPriceDiv>
  );
};

CardPrice.propTypes = {
  price: PropTypes.number.isRequired,
  discountRate: PropTypes.number.isRequired,
}.isRequired;

export default CardPrice;
