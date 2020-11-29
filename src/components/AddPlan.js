import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

import styled from '@emotion/styled';

import { useEventContext } from '../context/EventContext';

export default function AddPlan() {
  const {plans, setPlans} = useEventContext();

  const [newEvent, setNewEvent] = useState({
    title: '',
    starts: 0,
    ends: 0
  });

  const history = useHistory();

  const hours = [...Array(24).keys()];

  const getTitle = (e) => {setNewEvent({ ...newEvent, title: e.target.value.trim()})};
  const getStart = (e) => {setNewEvent({ ...newEvent, starts: Number(e.target.value)})};
  
  const getEnds = (e) => {
    const endsTime = Number(e.target.value);
    setNewEvent({ ...newEvent, ends: endsTime})
  };


  const submitHandler = () => {
    let newPlan = {};
    for (let i = newEvent.starts; i <= newEvent.ends; i++) {
      newPlan[i] = newEvent.title;
    }
    setPlans(newPlan);
    history.push('/');
  };

  return (
    <Add>
      <h2>Add Your Plan</h2>
      <AddBox>
        <ItemWrapper>
          <Input type="text" placeholder="Title" onChange={getTitle}/>
        </ItemWrapper>
        <ItemWrapper>
          <p style={{ margin: 0 }}>Starts</p>
          <Select onChange={getStart}>
            {hours.map(hour => (
              <option>{hour.toString().padStart(2, '0')}</option>
            ))}
          </Select>
        </ItemWrapper>
        <ItemWrapper>
          <p style={{ margin: 0 }}>Ends</p>
          <Select onChange={getEnds}>
            {hours.map(hour => (
              <option>{hour.toString().padStart(2, '0')}</option>
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

const Title = styled.input`
  border-style: none;
  font-size: 28px;
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
