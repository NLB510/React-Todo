import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./app.css";

const todoData = [
  {
    task: "Organize Garage",
    taskDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    id: 1528817077286,
    completed: true
  },
  {
    task: "Bake Cookies",
    taskDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    id: 1528817084358,
    completed: false
  },
  {
    task: "Finish Project",
    taskDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    id: 1528817484358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();

    this.state = {
      todoData: todoData,
      taskInput: "",
      taskInputText: ""
    };
  }

  // Creates a random Id
  getNewId = () => {
    let min = 1000000000000;
    let max = 9999999999999;
    const id = Math.floor(Math.random() * (max - min + 1)) + min;
    return id;
  };

  handleChange = e => {
    const { name, value } = e.target;
    // Looks at name of the targeted input field and changes it's value
    this.setState({
      [name]: value
    });
  };

  addTask = e => {
    e.preventDefault();
    console.log("button fired");

    // alert pops up if the task and description fields are empty
    if (this.state.taskInput === "" || this.state.taskInputText === "") {
      return alert("Please insert a task and description to continue");
    }

    this.setState({
      todoData: [
        ...this.state.todoData,
        {
          task: this.state.taskInput,
          taskDescription: this.state.taskInputText,
          id: this.getNewId(), // random id created with each new task
          completed: false
        }
      ],
      taskInput: "",
      taskInputText: ""
    });
  };

  // Handles the changing the completed state of a task
  completeTask = id => {
    this.setState(prevState => {
      // Mapping over the current state of todos and reverses the
      // state of the completed
      const completedTodos = prevState.todoData.map(task => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      });

      return {
        todoData: completedTodos
      };
    });
  };

  // Handles removing all completed tasks
  removeCompletedTasks = e => {
    e.preventDefault();
    console.log("remove button fired");

    // filters through the completed task for tasks that aren't completed
    // returns an array of only uncompleted tasks
    const updatedTodos = this.state.todoData.filter(task => {
      if (!task.completed) {
        return task;
      }
    });

    // updates the todoData with the filtered array
    this.setState({
      todoData: updatedTodos
    });

    console.log(updatedTodos);
  };

  render() {
    return (
      <div className="app">
        <div className="form-main-container">
          <TodoForm
            inputText={this.state.taskInput}
            handleChange={this.handleChange}
            addTask={this.addTask}
            descriptionInput={this.state.taskInputText}
            removeCompletedTasks={this.removeCompletedTasks}
          />
        </div>
        <div className="todo-main-container">
          <TodoList
            todoList={this.state.todoData}
            completeTask={this.completeTask}
          />
        </div>
      </div>
    );
  }
}

export default App;
