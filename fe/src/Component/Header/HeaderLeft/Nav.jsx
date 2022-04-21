import { StyledNav, StyledUl } from "./Nav.styled";

const MenuDatas = [
  {
    id: 0,
    name: "든든한 메인요리",
    subMenu: [
      { id: 0, name: "육류요리" },
      { id: 1, name: "해산물요리" },
    ],
  },
  { id: 1, name: "뜨끈한 국물요리", subMenu: [{ id: 0, name: "국/탕/찌개" }] },
  {
    id: 2,
    name: "정갈한 밑반찬",
    subMenu: [
      { id: 0, name: "나물/무침" },
      { id: 1, name: "조림/볶음" },
      { id: 2, name: "절임/장아찌" },
    ],
  },
];

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
