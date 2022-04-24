import PropTypes from "prop-types";
import { StyledEventTab } from "./EventTab.styled";

const EventTab = ({ categories }) => {
  const eventList = categories
    ? categories.map((category) => <li key={category.id}>{category.name}</li>)
    : null;

  return <StyledEventTab>{eventList}</StyledEventTab>;
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
