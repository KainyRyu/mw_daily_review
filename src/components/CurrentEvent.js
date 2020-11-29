import React from 'react';

import styled from '@emotion/styled';

export default function CurrentEvent() {
  const currentTime = () => {
    const newDate = new Date();
    const hour = newDate.getHours().toString().padStart(2, '0');
    const min = newDate.getMinutes().toString().padStart(2, '0');

    return `${hour}: ${min}`;
  };

  return (
    <Wrapper>
      <DisplayCurrentTime>{currentTime()}</DisplayCurrentTime>
      <EventTitle>Current Event</EventTitle>
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

const EventTitle = styled.div`
  flex: 5;
  padding: 5px;
`;
