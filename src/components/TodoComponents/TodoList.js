// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";


const TodoList = props => {
  return (
    <React.Fragment>
      {
        props.todoList.map(todo => {
          return <Todo todo={todo} key={todo.id} completeTask={props.completeTask} />
        })
      }
    </React.Fragment>
    
  );
};

export default TodoList;
