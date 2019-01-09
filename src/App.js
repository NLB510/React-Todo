import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const todoData = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
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
      taskInput: ""
    };
  }

  getNewId = () => {
    let min = 1000000000000;
    let max = 9999999999999;
    const id = Math.floor(Math.random() * (max - min + 1)) + min;
    return id;
  };

  handleChange = e => {
    const {name, value} = e.target;

    this.setState({
      [name]: value
    })

  }


  render() {
    return (
      <div>
        <TodoList todoList={this.state.todoData} />
        <TodoForm inputText={this.taskInput} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
