import styled, { css } from "styled-components";

const BUTTON_HEIGHT = "44px";

const OrderResultWrapper = styled.div`
  width: 270px;
  height: 129px;
  background-color: #fff;
  border: 1px solid #000;
`;

const MessageArea = styled.div`
  ${({ theme: { boldFonts } }) => css`
    ${boldFonts.medium};
  `}
  height: calc(100% - ${BUTTON_HEIGHT});
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.black};
    color: ${colors.white};
  `}
  width: 100%;
  height: ${BUTTON_HEIGHT};
`;

export { OrderResultWrapper, MessageArea, Button };
