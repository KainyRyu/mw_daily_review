import React from 'react';
import { Link } from 'react-router-dom';
import listIcon from '@iconify/icons-bi/list-check';
import Icon from '@iconify/react';
import styled from 'styled-components';

export default function Header() {
  function today() {
    let newDate = new Date();
    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Satuday',
    ];
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let day = days[newDate.getDay()];
    let date = newDate.getDate();
    let month = months[newDate.getMonth()];
    let year = newDate.getFullYear();
    return `${day}, ${date} ${month} ${year}`;
  }

  return (
    <TopBar>
      <Link to="/">
        <h4>{today()}</h4>
      </Link>
      <Link to="/priority">
        <Icon icon={listIcon} style={{ fontSize: '37px' }} />
      </Link>
    </TopBar>
  );
}

const TopBar = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
  border-bottom: #222222 solid 2px;
`;
