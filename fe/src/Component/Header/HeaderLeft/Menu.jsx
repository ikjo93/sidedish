import PropTypes from "prop-types";
import { MenuDatas } from "../../../MockData/MockData";
import { MainMenuUl, SubMenuUl } from "./Menu.Styled";

const SubMenu = ({ subMenuDatas }) => {
  const subMenuList = subMenuDatas.map((subMenuData) => (
    <li key={subMenuData.id}>{subMenuData.name}</li>
  ));

  return <SubMenuUl>{subMenuList}</SubMenuUl>;
};

const Menu = ({ isOpen }) => {
  const subMenuContents = (subMenu) => {
    return isOpen() ? <SubMenu subMenuDatas={subMenu} /> : null;
  };

  const MainMenu = MenuDatas.map(({ id, name, subMenu }) => (
    <li key={id}>
      {name}
      {subMenuContents(subMenu)}
    </li>
  ));

  return <MainMenuUl>{MainMenu}</MainMenuUl>;
};

Menu.propTypes = {
  isOpen: PropTypes.func.isRequired,
};

SubMenu.propTypes = {
  subMenuDatas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Menu;
