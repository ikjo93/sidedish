import { useState } from "react";
import StyledHeader from "./Header.styled";
import HeaderRight from "./HeaderRight/HeaderRight";
import HeaderLeft from "./HeaderLeft/HeaderLeft";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const checkIsOpen = () => {
    return isOpen;
  };

  const handleMouseEvent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledHeader zzzz={isOpen}>
      <HeaderLeft ererer={{ handleMouseEvent, checkIsOpen }} />
      <HeaderRight />
    </StyledHeader>
  );
};

export default Header;
