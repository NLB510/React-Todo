import React from "react";
import "./Todo.css";



const Todo = props => {
  const completed = () => {
    return props.todo.completed ? "completed" : null;
  }
  
  const display = () => {
    return props.todo.display === false && "hide" 
  }

  return (
    
    <div className={`todo-item ${completed()} ${display()}`}>
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => props.completeTask(props.todo.id)} // !! Create function like completed and pass in here
      />
      
      <div className="todo-content">
        <h2>{props.todo.task}</h2>
        <p>{props.todo.taskDescription}</p>
        </div>
      
    </div>
  );
};

export default Todo;
