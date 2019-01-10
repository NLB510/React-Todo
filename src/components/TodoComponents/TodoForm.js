import React from "react";

const TodoForm = props => {
  return (
    <div>
      <form  onSubmit={props.addTask}>
        <div className="form-container">
          <input
            type="text"
            placeholder="What's the task?"
            value={props.inputText}
            name="taskInput"
            onChange={props.handleChange}
            
            className="form-item input"
          />
          <textarea
            name="taskInputText"
            
            placeholder="Task Description"
            value={props.descriptionInput}
            onChange={props.handleChange}

          className="form-item textarea"
          />
           
         
          <button className="form-item" type="submit">Add Task</button>
          <button className="form-item" onClick={props.removeCompletedTasks}>Remove Completed</button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
