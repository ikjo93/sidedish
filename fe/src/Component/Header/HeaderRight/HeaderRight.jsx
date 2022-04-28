import ButtonWrap from "Component/Header/HeaderRight/HeaderRight.styled";
import { icons } from "MockData/MockData";
import { useEffect } from "react";
import loginApi from "Service/loginApi";

const Buttons = () => {
  useEffect(() => {
    const fetchLoginData = async () => {
      const response = await loginApi.getLoginInfo();
      console.log(response);
    };
    console.log(fetchLoginData(), "테스트");
  }, []);

  return icons.map((icon) => (
    <a
      href="https://github.com/login/oauth/authorize?client_id=52d17ef5577e55a18ca3&scope=user:email"
      type="button"
      key={icon.id}
    >
      {icon.svg}
    </a>
  ));
};

const HeaderRight = () => {
  return (
    <ButtonWrap>
      <Buttons />
    </ButtonWrap>
  );
};

export default HeaderRight;
