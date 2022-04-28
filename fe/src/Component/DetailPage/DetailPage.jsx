import PropTypes from "prop-types";
import styled from "styled-components";
import { useEffect, useState } from "react";
import sideDishesApi from "Service/sideDishesApi";
import DetailPageDesc from "./DetailPageDesc/DetailPageDesc";
import DetailInfoContext from "./DetailInfoContext";

const ModalPortalDiv = styled.div`
  overflow: hidden;
`;

const DetailPageWrapper = styled.div`
  position: absolute;
  display: block;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(248, 247, 247, 0.8);
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
      <ModalPortalDiv>
        <DetailPageWrapper>
          <DetailPageDesc onClose={onClose} />
          {/* <DetailPageRelated /> */}
        </DetailPageWrapper>
      </ModalPortalDiv>
    </DetailInfoContext.Provider>
  );
};

DetailPage.propTypes = {
  onClose: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default DetailPage;
