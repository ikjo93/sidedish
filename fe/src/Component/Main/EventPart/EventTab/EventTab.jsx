import PropTypes from "prop-types";
import { useState } from "react";
import StyledEventTab from "./EventTab.styled";

const tabClickHandler = ({ target: { id } }, selectedId, setSelectedId) => {
  const targetId = Number(id);
  if (targetId !== selectedId) setSelectedId(targetId);
};

const EventTab = ({ categories }) => {
  const [selectedId, setSelectedId] = useState(1);

  if (!categories) return null;

  const eventList = categories.map((category) => (
    <li key={category.id} id={category.id}>
      {category.name}
    </li>
  ));

  return (
    <StyledEventTab
      id={selectedId}
      onClick={(event) => tabClickHandler(event, selectedId, setSelectedId)}
    >
      {eventList}
    </StyledEventTab>
  );
};

EventTab.defaultProps = {
  categories: null,
};

EventTab.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default EventTab;
