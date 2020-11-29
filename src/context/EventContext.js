import React, { useContext, useState, useEffect } from 'react';

const EventContext = React.createContext({
  plans: {},
});

function EventProvider(props) {
  const [plans, setPlans] = useState({});

  useEffect(() => {
    console.log(plans);
  }, [plans]);

  return (
    <EventContext.Provider
      value={{
        plans,
        setPlans,
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
}

const useEventContext = () => useContext(EventContext);
export { useEventContext, EventContext, EventProvider };
