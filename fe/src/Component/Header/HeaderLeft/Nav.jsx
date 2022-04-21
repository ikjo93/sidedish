import { StyledNav, StyledUl } from "./Nav.styled";
import { MenuDatas } from "../../../MockData/MockData";

const menus = MenuDatas.map((MenuData) => (
  <li key={MenuData.id}>{MenuData.name}</li>
));

const Nav = () => {
  return (
    <StyledNav>
      <StyledUl>{menus}</StyledUl>
    </StyledNav>
  );
};

export default Nav;
