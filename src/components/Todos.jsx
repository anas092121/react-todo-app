import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  let todosStyle = {
    minHeight: "50vh",
  };

  return (
    <div className="container text-start my-5" style={todosStyle}>
      <h2 className="fw-bold display-2">Todos List</h2>
      {props.todos.length === 0
        ? "No todos to display"
        : props.todos.map((todo) => {
            return (
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};
