import React from "react";
import "./Todo.css";

const Todo = props => {
  return <div className="todo-item">
      <input type="checkbox" />
      <div className="todo-content">
        <h2>{props.todo.task}</h2>
        <p>{props.todo.taskDescription}</p>
      </div>
    </div>;
};

export default Todo;
