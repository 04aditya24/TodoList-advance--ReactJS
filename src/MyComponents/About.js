import React from "react";

export default function About() {
  return (
    <div className="container" style={{fontSize:"20px"}}>
      <br></br>
      <h3><strong>Todo List</strong></h3>
      <hr></hr>
      <u>
        <li>A to-do list webapp based on React.</li>
        <li>It has two tabs Home and About.</li>

        <li>
       
          <strong>Home </strong>
        </li>
        <ol>
          <li>Add Item - Task can be added to the list of To-Do Tasks.</li>
          <li>User can also delete todo-item from the the list.</li>
          <li>Validation, Title or Description cannot be blank </li>
        </ol>
        <li>
          <strong>About</strong>
        </li>
        <ol>
          <li>About the Project.</li>
        </ol>


      </u>
    </div>
  );
}
