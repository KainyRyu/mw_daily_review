import React from 'react';
import styled from '@emotion/styled'

import PlanItem from './PlanItem';


export default function Plans() {
  const hours = [...Array(24).keys()];

  return (
    <PlanWrapper>
      {hours.map(hour => (
        <PlanItem key={hour} hour={hour} title={'title'} review={'review'} />
      ))}
    </PlanWrapper>
  );
}


const PlanWrapper = styled.div`
  border: #222222 solid 2px;
  padding: 0;
  margin: 5px;
`