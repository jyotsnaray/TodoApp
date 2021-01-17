import React, { Component } from "react";
import "./todo.css";

class Todo extends Component {
  constructor() {
    super();

    this.state = {
      task: "",
      todoData: [
        {
          todo: "pay electricity bill",
          isCompleted: false
        }
      ]
    };
  }

  addTodo(task) {
    let todosArray = [...this.state.todoData];
    todosArray.push({
      todo: task,
      isCompleted: false
    });
    this.setState({ todoData: todosArray });
  }

  finishTodo(index) {
    let todosArray = [...this.state.todoData];
    todosArray[index].isCompleted = !todosArray[index].isCompleted;
    this.setState({ todoData: todosArray });
  }

  deleteTodo(index) {
    let todosArray = [...this.state.todoData];
    todosArray.splice(index, 1);
    this.setState({ todoData: todosArray });
  }

  render() {
    return (
      <div className="todo_main">
        <input
          className="todo-input"
          value={this.state.task}
          onChange={e => {
            this.setState({ task: e.target.value });
          }}
          onKeyPress={e => {
            if (e.key === "Enter") {
              this.addTodo(this.state.task);
              this.setState({ task: "" });
            }
          }}
          placeholder="What to do?"
        />
        {this.state.todoData.length > 0 && ` Total tasks: ${this.state.todoData.length}`}
        {this.state.todoData.map((todo, index) => (
          <div key={todo} className="todoTask">
            <div className="checkbox" onClick={() => this.finishTodo(index)}>
              {todo.isCompleted && <span><input type="radio"/></span>}
            </div>
            <div className={todo.isCompleted ? "done" : ""}>{todo.todo}</div>
            <div className="delete" onClick={() => this.deleteTodo(index)}>
            <button type="button" className="deleteButton">Delete</button>
            </div>
          </div>
        ))}
        
      </div>
    );
  }
}
export default Todo;