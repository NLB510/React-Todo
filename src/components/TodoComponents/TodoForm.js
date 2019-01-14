import React from "react";

const TodoForm = props => {
  return (
    <div>
      <form onSubmit={props.addTask}>
        <h1 className="form-item title">Task Manager</h1>
        <div className="form-container">
          <label>Task Name:</label>
          <input
            type="text"
            placeholder="What's the task?"
            value={props.inputText}
            name="taskInput"
            onChange={props.handleChange}
            className="form-item input"
          />
          <label>Task Description:</label>
          <textarea
            name="taskInputText"
            placeholder="Task Description"
            value={props.descriptionInput}
            onChange={props.handleChange}
            className="form-item textarea"
          />
          <div className="button-container">
            <button className="form-item button" type="submit">
              Add Task
            </button>
            <button
              className="form-item button"
              onClick={props.removeCompletedTasks}
            >
              Remove Completed
            </button>
          </div>
          <div>
            <label>Search Tasks:</label>
            <input
              type="text"
              className="form-item input"
              placeholder="Search Tasks"
              name="searchInput"
              value={props.searchInput}
              onChange={props.handleChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
