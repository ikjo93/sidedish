import StyledHeader from "./Header.styled";
import HeaderRight from "./HeaderRight/HeaderRight";
import HeaderLeft from "./HeaderLeft/HeaderLeft";

const Header = () => {
  return (
    <StyledHeader>
      <HeaderLeft />
      <HeaderRight />
    </StyledHeader>
  );
};

export default Header;
