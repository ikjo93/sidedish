import PropTypes from "prop-types";
import { MenuDatas } from "../../../MockData/MockData";
import SubMenuUl from "./Menu.Styled";

const SubMenu = ({ subMenuDatas }) => {
  const subMenuList = subMenuDatas.map((subMenuData) => (
    <li key={subMenuData.id}>{subMenuData.name}</li>
  ));

  return <SubMenuUl>{subMenuList}</SubMenuUl>;
};

SubMenu.propTypes = {
  subMenuDatas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const Menu = () => {
  return MenuDatas.map((MenuData) => (
    <li key={MenuData.id}>
      {MenuData.name}
      <SubMenu subMenuDatas={MenuData.subMenu} />
    </li>
  ));
};

export default Menu;
