import PropTypes from "prop-types";
import { css } from "styled-components";
import { useEffect, useState } from "react";
import sideDishesApi from "Service/sideDishesApi";
import DetailPageDesc from "./DetailPageDesc/DetailPageDesc";
import DetailInfoContext from "./DetailInfoContext";
import DetailPageWrapper from "./DetailPage.styled";

const DetailPage = ({ onClose, id }) => {
  const [sideDish, setSideDish] = useState({});
  const fetchDetailData = async (sideDishId) => {
    const sideDishData = await sideDishesApi.getSideDish(sideDishId);
    setSideDish(sideDishData);
  };

  useEffect(() => {
    document.body.style = css`
      position: relative;
      overflow: hidden;
    `;

    return () => {
      document.body.style = css`
        position: "";
        overflow: auto;
      `;
    };
  }, []);

  useEffect(() => {
    fetchDetailData(id);
  }, [id]);

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
