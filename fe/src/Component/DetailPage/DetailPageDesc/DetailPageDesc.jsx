import { useContext } from "react";
import DetailInfoContext from "Component/DetailPage/DetailInfoContext";
import PropTypes from "prop-types";
import styled from "styled-components";
import CloseBtnArea from "./CloseBtnArea/CloseBtnArea";
import Explaination from "./Explaination/Explaination";

const DetailPageDescSize = {
  width: 960,
  height: 596,
};

const DetailPageDescDiv = styled.div`
  position: fixed;
  top: calc(50% - (${DetailPageDescSize.height / 2}px));
  left: calc(50% - (${DetailPageDescSize.width / 2}px));
  width: ${DetailPageDescSize.width}px;
  height: ${DetailPageDescSize.height}px;
  background-color: white;
  box-shadow: 0px 0px 10px black;
`;

const DetailPageDesc = ({ onClose }) => {
  const { id } = useContext(DetailInfoContext);
  if (!id) return null;

  return (
    <DetailPageDescDiv>
      <CloseBtnArea onClose={onClose} />
      <Explaination />
    </DetailPageDescDiv>
  );
};

DetailPageDesc.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default DetailPageDesc;
