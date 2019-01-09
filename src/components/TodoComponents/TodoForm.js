import React from "react";

const TodoForm = props => {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="What's the task?"
          value={props.inputText}
          name="taskInput"
          onChange={props.handleChange}
        />
        <button onClick={props.addTask}>Add Task</button>
      </form>
    </div>
  );
};

export default TodoForm;
