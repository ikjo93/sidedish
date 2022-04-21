// import PropTypes from "prop-types";
import Nav from "./Nav";
import NavArea from "./HeaderLeft.styled";

const HeaderLeft = ({ ererer }) => {
  return (
    <NavArea>
      <h1>Ordering</h1>
      <Nav ererer={ererer} />
    </NavArea>
  );
};

// HeaderLeft.propTypes = {
//   ererer: PropTypes.node.isRequired,
// };

export default HeaderLeft;
