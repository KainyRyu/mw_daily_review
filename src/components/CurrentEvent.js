import React from "react";

import styled from "@emotion/styled";

export default function CurrentEvent() {
  const currentTime = () => {
    const newDate = new Date();
    const hour = newDate.getHours();
    const min = newDate.getMinutes();
    console.log(hour);
    return `${hour}: ${min}`;
  };

  return (
    <Wrapper>
      <DisplayCurrentTime>{currentTime()}</DisplayCurrentTime>
      <EventTite>Current Event</EventTite>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: black 2px solid;
  display: flex;
  padding: 10px 3px;
`;

const DisplayCurrentTime = styled.div`
  flex: 1;
  padding: 5px;
`;

const EventTite = styled.div`
  flex: 5;
  padding: 5px;
`;
