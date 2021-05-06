import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className=" my-3">Todos List</h3>
      {props.todos.length === 0 ? (
        <h4 style={{ color: "red" }}>No todos in a list </h4>
      ) : (
        props.todos.map((todo) => {
          console.log(todo.sno);
          return (
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          );
        })
      )}
    </div>
  );
};
