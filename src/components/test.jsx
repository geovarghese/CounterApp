import React, { useState, useReducer } from "react";
import Todo from "./todo";

export const Actions = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  DELETE_TODO: "DELETE_TODO",
};

function reducer(todos, action) {
  switch (action.type) {
    case Actions.ADD_TODO:
      console.log(action.type);
      return [...todos, newTodo(action.payload.name)];
    case Actions.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          console.log(todo);
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case Actions.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function newTodo(name) {
  console.log(name);
  return { id: Date.now(), name: name, complete: false };
}

export default function Test() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: Actions.ADD_TODO, payload: { name: name } });
    setName("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>

        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
        })}
      </form>
    </>
  );
}
