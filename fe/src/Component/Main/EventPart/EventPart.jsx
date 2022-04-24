import axios from "axios";
import { useEffect, useState } from "react";
import {
  StyledEventDesc,
  StyledEventLogo,
  StyledEventTitle,
  StyledEventPart,
} from "./EventPart.styled";
import EventTab from "./EventTab/EventTab";
import EventCards from "./EventCards/EventCards";

const EventPart = () => {
  const [name, setName] = useState(null);
  const [categories, setCategories] = useState(null);

  async function getData() {
    await axios("/api/event-categories")
      .then(({ data }) => {
        setName(data.eventName);
        setCategories(data.eventCategories);
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <StyledEventPart>
      <StyledEventTitle>
        <StyledEventLogo>기획전</StyledEventLogo>
        <StyledEventDesc>{name}</StyledEventDesc>
      </StyledEventTitle>
      <EventTab categories={categories} />
      <EventCards />
    </StyledEventPart>
  );
};

export default EventPart;
