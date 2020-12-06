import React from 'react';

import styled from '@emotion/styled';

function PlanItem({ hour, plan, review }) {
  const addHourPad = num => {
    return num.toString().padStart(2, '0');
  };

  return (
    <ItemWrapper>
      <Hour>{`${addHourPad(hour)} - ${addHourPad(hour + 1)}`}</Hour>
      <Title>{plan}</Title>
      <Review>{review}</Review>
    </ItemWrapper>
  );
}

export default PlanItem;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px dodgerblue;
  padding: 0px 2px;
`;

const Hour = styled.div`
  text-align: center;
  flex: 2;
  padding: 5px 0px;
`;

const Title = styled.div`
  border-left: red double;
  text-align: start;
  flex: 4;
  padding: 5px;
`;

const Review = styled.div`
  border-left: grey 1px dotted;
  text-align: start;
  flex: 4;
  padding: 5px;
`;
