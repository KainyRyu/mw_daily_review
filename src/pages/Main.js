import React from "react";
import styled from "@emotion/styled";
import { Icon } from "@iconify/react";
import moreHorizontal from "@iconify/icons-feather/more-horizontal";

import Plans from "../components/Plans";
import CurrentEvent from "../components/CurrentEvent";

export default function Main() {
  return (
    <Edge>
      <CurrentEvent />

      <PlanTop>
        <h4>Daily's Plan</h4>
        <Icon
          icon={moreHorizontal}
          style={{
            fontSize: "24px",
            alignSelf: "flex-end",
          }}
          hFlip={true}
        />
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
