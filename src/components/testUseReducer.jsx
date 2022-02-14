import React, { useState, useReducer } from "react";

const Actions = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    case Actions.INCREMENT:
      return { count: state.count + 1 };
    case Actions.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function TestUseReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  //const [state, setState] = useState(0);

  const handleMinus = () => {
    //setState(state - 1);
    dispatch({ type: Actions.DECREMENT });
  };

  const handlePlus = () => {
    //setState(state + 1);
    dispatch({ type: Actions.INCREMENT });
  };

  return (
    <>
      <button onClick={handleMinus}>-</button>
      <span>{state.count}</span>
      <button onClick={handlePlus}>+</button>
    </>
  );
}
