import React from 'react';

import styled from '@emotion/styled';

function PlanItem({ hour, title, review }) {
  const addHourPad = num => {
    return num.toString().padStart(2, '0');
  };

  return (
    <ItemWrapper>
      <Hour>{`${addHourPad(hour)} - ${addHourPad(hour + 1)}`}</Hour>
      <Item>{title}</Item>
      <Item>{review}</Item>
    </ItemWrapper>
  );
}

export default PlanItem;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: dotted 1px #333333;
  padding: 0px 2px;
`;

const Hour = styled.div`
  text-align: center;
  flex: 2;
`;

const Item = styled.div`
  border-left: red 1px solid;
  text-align: start;
  flex: 4;
  padding: 0px 5px;
  `;
  