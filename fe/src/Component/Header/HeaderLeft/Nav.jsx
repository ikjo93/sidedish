import PropTypes from "prop-types";
import { StyledNav, StyledUl } from "./Nav.styled";
import { MenuDatas } from "../../../MockData/MockData";

const SubMenu = ({ subMenuDatas }) => {
  const subMenuList = subMenuDatas.map((subMenuData) => (
    <li key={subMenuData.id}>{subMenuData.name}</li>
  ));
  return <ul>{subMenuList}</ul>;
};

SubMenu.propTypes = {
  subMenuDatas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const menus = MenuDatas.map((MenuData) => (
  <li key={MenuData.id}>
    {MenuData.name}
    <SubMenu subMenuDatas={MenuData.subMenu} />
  </li>
));

const Nav = () => {
  return (
    <StyledNav>
      <StyledUl>{menus}</StyledUl>
    </StyledNav>
  );
};

export default Nav;
