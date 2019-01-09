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

  getNewId = () => {
    let min = 1000000000000;
    let max = 9999999999999;
    const id = Math.floor(Math.random() * (max - min + 1)) + min;
    return id;
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  addTask = e => {
    e.preventDefault();
    console.log("button fired");

    this.setState({
      todoData: [
        ...this.state.todoData,
        {
          task: this.state.taskInput,
          taskDescription: this.state.taskInputText,
          id: this.getNewId(),
          completed: false
        }
      ],
      inputText: ""
    });
  };

  completeTask = (id) => {
    this.setState(prevState => {
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
  }

  render() {
    return (
      <div className="app">
        <TodoList todoList={this.state.todoData} completeTask={this.completeTask} />
        <TodoForm
          inputText={this.state.taskInput}
          handleChange={this.handleChange}
          addTask={this.addTask}
          descriptionInput={this.state.taskTextInput}
        />
      </div>
    );
  }
}

export default App;
