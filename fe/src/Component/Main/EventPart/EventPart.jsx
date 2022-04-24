import {
  StyledEventDesc,
  StyledEventLogo,
  StyledEventTitle,
} from "./EventPart.styled";

const EventPart = () => {
  return (
    <>
      <StyledEventTitle>
        <StyledEventLogo>기획전</StyledEventLogo>
        <StyledEventDesc>{name}</StyledEventDesc>
      </StyledEventTitle>
    </>
  );
};

export default EventPart;
