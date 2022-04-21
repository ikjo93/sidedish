// import PropTypes from "prop-types";
import Menu from "./Menu";
import { StyledNav, StyledUl } from "./Nav.styled";

const Nav = ({ ererer }) => {
  return (
    <StyledNav>
      <StyledUl>
        <Menu ererer={ererer} />
      </StyledUl>
    </StyledNav>
  );
};

// Nav.propTypes = {
//   ererer: PropTypes.node.isRequired,
// };

export default Nav;
