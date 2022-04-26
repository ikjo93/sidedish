import { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import eventCategoriesApi from "Service/eventCategoriesApi";
import Card from "../../../Card/Card";

const StyledEventCards = styled.ul`
  font-family: "Noto Sans KR";
  padding-top: 34px;
  padding-bottom: 56px;
  display: flex;
  > li {
    margin-right: 24px;
  }
`;

const EventContents = ({ selectedId }) => {
  const [sideDishes, setSideDishes] = useState([]);

  const fetchCurCategorySideDishes = async (eventCategoryId) => {
    const responseData = await eventCategoriesApi.getSideDishes(
      eventCategoryId
    );
    setSideDishes(responseData.sideDishes);
  };

  const eventCards = sideDishes.map((sideDish) => {
    return <Card key={sideDish.id} props={sideDish} type="event" />;
  });

  useEffect(() => {
    fetchCurCategorySideDishes(selectedId);
  }, [selectedId]);

  return <StyledEventCards>{eventCards}</StyledEventCards>;
};

EventContents.propTypes = {
  selectedId: PropTypes.number.isRequired,
}.isRequired;

export default EventContents;
