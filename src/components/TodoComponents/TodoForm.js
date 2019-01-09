import React from "react";

const TodoForm = props => {
  return (
    <div>
      <form  onSubmit={props.addTask}>
        <div>
          <input
            type="text"
            placeholder="What's the task?"
            value={props.inputText}
            name="taskInput"
            onChange={props.handleChange}
          />
          <textarea
            name="taskInputText"
            
            // placeholder="Type Description Here"
            value={props.descriptionInput}
            onChange={props.handleChange}


          />
           
         
          <button type="submit">Add Task</button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
