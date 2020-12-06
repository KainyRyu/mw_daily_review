import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Icon } from '@iconify/react';
import plusOutlined from '@iconify/icons-ant-design/plus-outlined';
// import moreHorizontal from '@iconify/icons-feather/more-horizontal';

import Plans from '../components/Plans';
import CurrentEvent from '../components/CurrentEvent';

export default function Main() {
  return (
    <Edge>
      <CurrentEvent />
      <PlanTop>
        <h4>Daily's Plan</h4>
        <Link to="/addplan">
          <Icon
            icon={plusOutlined}
            style={{
              fontSize: '24px',
              alignSelf: 'flex-end'
            }}
            hFlip={true}
          />
        </Link>
      </PlanTop>
      <Plans />
    </Edge>
  );
}

const Edge = styled.div`
  padding: 5px;
`;

const PlanTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
