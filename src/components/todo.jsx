import React from "react";
import { Actions } from "./test";

export default function Todo({ todo, dispatch }) {
  return (
    <>
      <br />
      <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
        {todo.id} - {todo.name}
      </span>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: Actions.TOGGLE_TODO, payload: { id: todo.id } });
        }}
      >
        Toggle
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: Actions.DELETE_TODO, payload: { id: todo.id } });
        }}
      >
        Delete
      </button>
    </>
  );
}
