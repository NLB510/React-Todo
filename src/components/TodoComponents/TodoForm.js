import React from "react";

const TodoForm = props => {
  return (
    <div>
      <form onSubmit={props.addTask}>
        <input
          type="text"
          placeholder="What's the task?"
          value={props.inputText}
          name="taskInput"
          onChange={props.handleChange}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TodoForm;
