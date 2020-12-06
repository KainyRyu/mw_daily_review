import React, { useState, useEffect } from 'react';

import styled from '@emotion/styled';
import { useEventContext } from '../context/EventContext';

export default function CurrentEvent() {
  const { hours } = useEventContext();

  const newDate = new Date();

  const currentTime = {
    hour: newDate.getHours().toString().padStart(2, '0'),
    minute: newDate.getMinutes().toString().padStart(2, '0')
  };

  let currentEvent = hours[currentTime.hour].plan;

  return (
    <Wrapper>
      <DisplayCurrentTime>{`${currentTime.hour}: ${currentTime.minute}`}</DisplayCurrentTime>
      <EventTitle>{currentEvent ? currentEvent : 'No Event.'}</EventTitle>
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
