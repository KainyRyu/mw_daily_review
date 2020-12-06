import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import styled from '@emotion/styled';

import { useEventContext } from '../context/EventContext';

export default function AddPlan() {
  const { hours, setHours } = useEventContext();

  const [newEvent, setNewEvent] = useState({
    plan: '',
    starts: 0,
    ends: 0
  });

  const history = useHistory();

  const getPlan = useCallback(
    e => {
      setNewEvent({ ...newEvent, plan: e.target.value.trim() });
    },
    [newEvent]
  );

  const getStart = useCallback(
    e => {
      setNewEvent({ ...newEvent, starts: Number(e.target.value) });
    },
    [newEvent]
  );

  const getEnds = useCallback(
    e => {
      const endsTime = Number(e.target.value);
      setNewEvent({ ...newEvent, ends: endsTime });
    },
    [newEvent]
  );

  const submitHandler = useCallback(() => {
    const newHours = hours.map((item, idx) => {
      if (idx >= newEvent.starts && idx <= newEvent.ends) {
        return { plan: newEvent.plan };
      }
      return item;
    });
    history.push('/');
    setHours(newHours);
  }, [newEvent, history, setHours, hours]);

  return (
    <Add>
      <h2>Add Your Plan</h2>
      <AddBox>
        <ItemWrapper>
          <Input type="text" placeholder="Event" onChange={getPlan} />
        </ItemWrapper>
        <ItemWrapper>
          <p style={{ margin: 0 }}>Starts</p>
          <Select onChange={getStart}>
            {hours.map((hour, index) => (
              <option key={index}>{index.toString().padStart(2, '0')}</option>
            ))}
          </Select>
        </ItemWrapper>
        <ItemWrapper>
          <p style={{ margin: 0 }}>Ends</p>
          <Select onChange={getEnds}>
            {hours.map((hour, index) => (
              <option key={index}>{index.toString().padStart(2, '0')}</option>
            ))}
          </Select>
        </ItemWrapper>
      </AddBox>
      <Submit onClick={submitHandler}>Add</Submit>
    </Add>
  );
}

const Add = styled.div`
  text-align: center;
`;

const AddBox = styled.div`
  border: #222222 2px solid;
  padding: 10px;
  margin: 0 5vw;
`;

const ItemWrapper = styled.div`
  border-bottom: lightgray 1px solid;
  display: flex;
  font-size: 20px;
  justify-content: space-between;
  padding: 10px 0;
  margin: 0 15px;
`;

const Input = styled.input`
  border: none;
  font-size: 28px;
`;

const Select = styled.select`
  border: none;
  font-size: 20px;
`;

const Submit = styled.button`
  align-self: flex-end;
  border: solid 2px #222222;
  background-color: white;
  font-size: 20px;
  padding: 5px 10px;
  margin: 15px;
`;
