import PropTypes from "prop-types";
import Menu from "./Menu";
import { StyledNav, StyledUl } from "./Nav.styled";

const Nav = ({ state }) => {
  return (
    <StyledNav>
      <StyledUl>
        <Menu state={state} />
      </StyledUl>
    </StyledNav>
  );
};

Nav.propTypes = {
  state: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default Nav;
