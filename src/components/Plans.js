import React from "react";
import styled from "@emotion/styled";

import PlanItem from "./PlanItem";

export default function Plans() {
  const hours = [...Array(24).keys()];
  const currentHour = new Date().getHours();

  return (
    <LegalPad>
      {hours.map((hour) => (
        <PlanItem key={hour} hour={hour} title={"title"} review={"review"} />
      ))}
    </LegalPad>
  );
}

const LegalPad = styled.div`
  background: #faf4a1;
  border: #222222 solid 2px;
  padding: 0;
`;
