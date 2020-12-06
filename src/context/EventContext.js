import React, { useContext, useState } from 'react';

const EventContext = React.createContext();

function EventProvider(props) {
  const [plans, setPlans] = useState({});
  const [hours, setHours] = useState([...Array(24).keys()]);

  return (
    <EventContext.Provider
      value={{
        plans,
        hours,
        setPlans,
        setHours
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
}

const useEventContext = () => useContext(EventContext);
export { useEventContext, EventContext, EventProvider };
