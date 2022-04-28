import { useContext } from "react";
import DetailInfoContext from "Component/DetailPage/DetailInfoContext";
import PropTypes from "prop-types";
import styled from "styled-components";
import CloseBtnArea from "./CloseBtnArea/CloseBtnArea";
import Explaination from "./Explaination/Explaination";

const DetailPageDescDiv = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  width: 960px;
  height: 596px;
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
