import React from "react";
import { Card } from "react-bootstrap";

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h4>{todo.title}</h4>
        </div>
        <div className="card-body">
          <p className="card-text">{todo.desc}</p>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => {
              onDelete(todo);
            }}
          >
            Delete{" "}
          </button>
        </div>
      </div>
      <br></br>
    </>
  );
};
