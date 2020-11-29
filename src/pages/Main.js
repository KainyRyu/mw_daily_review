import React from "react";
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Icon, InlineIcon } from '@iconify/react';
import plusOutlined from '@iconify/icons-ant-design/plus-outlined';
import moreHorizontal from '@iconify/icons-feather/more-horizontal';

import Plans from '../components/Plans';
import CurrentEvent from '../components/CurrentEvent';
import { EventProvider, useEventContext } from '../context/EventContext';

export default function Main() {
  const {

  } = useEventContext();

  return (
    <EventProvider>
      <Edge>
        <CurrentEvent />

        <PlanTop>
          <h4>Daily's Plan</h4>
          <Link to="/addplan" >
            <Icon
              icon={plusOutlined}
              style={{
                fontSize: "24px",
                alignSelf: "flex-end",
              }}
              hFlip={true}
            />
          </Link>
        </PlanTop>
        <Plans />
      </Edge>
    </EventProvider>
  );
}

const Edge = styled.div`
  padding: 5px;
`;

const PlanTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  border: #222222 solid 2px;
  padding: 4px;
`
