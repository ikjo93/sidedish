import PropTypes from "prop-types";
import styled from "styled-components";
import { useEffect, useState } from "react";
import sideDishesApi from "Service/sideDishesApi";
import DetailPageDesc from "./DetailPageDesc/DetailPageDesc";
import DetailInfoContext from "./DetailInfoContext";

const DetailPageWrapper = styled.div`
  position: absolute;
  display: block;
  top: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(248, 247, 247, 0.8);
  overflow: hidden;
`;

const DetailPage = ({ onClose, id }) => {
  const [sideDish, setSideDish] = useState({});
  const fetchDetailData = async (sideDishId) => {
    const sideDishData = await sideDishesApi.getSideDish(sideDishId);
    setSideDish(sideDishData);
  };

  useEffect(() => {
    fetchDetailData(id);
  }, []);

  return (
    <DetailInfoContext.Provider value={sideDish}>
      <DetailPageWrapper>
        <DetailPageDesc onClose={onClose} />
        {/* <DetailPageRelated /> */}
      </DetailPageWrapper>
    </DetailInfoContext.Provider>
  );
};

DetailPage.propTypes = {
  onClose: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default DetailPage;
