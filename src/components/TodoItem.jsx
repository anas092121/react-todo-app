import React from "react";

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="container text-start my-4">
      <h6 className="my-0">{todo.title}</h6>
      <p className="my-0">{todo.desc}</p>
      <button
        className="btn btn-sm btn-success my-0"
        onClick={() => {
          onDelete(todo);
        }}
      >
        Done
      </button>
    </div>
  );
};
