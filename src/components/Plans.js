import React from 'react';
import styled from '@emotion/styled';

import PlanItem from './PlanItem';
import { useEventContext } from '../context/EventContext';

export default function Plans() {
  const { hours } = useEventContext();

  return (
    <LegalPad>
      {hours.map((hour, index) => (
        <PlanItem key={index} hour={index} plan={hour.plan} review={'review'} />
      ))}
    </LegalPad>
  );
}

const LegalPad = styled.div`
  border: #222222 solid 2px;
  padding: 0;
`;
