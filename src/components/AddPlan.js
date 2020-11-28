import React from "react";

import styled from "@emotion/styled";

export default function AddPlan() {
  const onSubmit = () => {};
  const hours = [...Array(24).keys()];

  return (
    <Add>
      <h2>Add Your Plan</h2>
      <AddBox>
        <ItemWrapper>
          <Input type="text" placeholder="Title" />
        </ItemWrapper>
        <ItemWrapper>
          <p style={{ margin: 0 }}>Starts</p>
          <Select>
            {hours.map(hour => (
              <option>{hour.toString().padStart(2, '0')}</option>
            ))}
          </Select>
        </ItemWrapper>
        <ItemWrapper>
          <p style={{ margin: 0 }}>Ends</p>
          <Select>
            {hours.map(hour => (
              <option>{hour.toString().padStart(2, '0')}</option>
            ))}
          </Select>
        </ItemWrapper>
      </AddBox>
      <Submit to="/" onClick={onSubmit}>Add</Submit>
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
