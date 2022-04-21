import Menu from "./Menu";
import { StyledNav, StyledUl } from "./Nav.styled";

const Nav = () => {
  return (
    <StyledNav>
      <StyledUl>
        <Menu />
      </StyledUl>
    </StyledNav>
  );
};

export default Nav;
