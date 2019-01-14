// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  const searchedTasks = props.todoList
    .filter(todo => {
      return todo.task.toLowerCase().includes(props.searchInput.toLowerCase());
    })
    .map(todo => {
      return (
        <Todo todo={todo} key={todo.id} completeTask={props.completeTask} />
      );
    });

  const TodoList = props.todoList.map(todo => {
    return <Todo todo={todo} key={todo.id} completeTask={props.completeTask} />;
  });

  return (
    <React.Fragment>
      {props.searchInput !== "" ? searchedTasks : TodoList}
    </React.Fragment>
  );
};

export default TodoList;
