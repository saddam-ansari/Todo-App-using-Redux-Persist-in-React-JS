import React, { Component } from "react";
import { connect } from "react-redux";
import AddTodo from "../components/addTodo/AddTodo";
import TodoItem from "../components/todoItem/TodoItem";
import { addTask, deleteTask, completeTask } from "../redux/actions";
import styles from "./Main.style";

export class Main extends Component {
  render() {
    console.log("===>", this.props.taskItems);
    return (
      <div style={styles.appContainer}>
        <div style={styles.container}>
          <h1 style={styles.title}>Todo List</h1>
          <div style={styles.inputWrapper}>
            <AddTodo addTodo={(todo) => { this.props.addTodo(todo);}}/>
            <hr style={styles.seperator} />
          </div>
          {this.props.taskItems.map((task) => {
            return <TodoItem task={task} deleteTodo={(task) => this.props.deleteTodo(task.text)} completeTodo={(task) => this.props.completeTodo(task)}/>;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  taskItems: state.taskItems,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (task) => dispatch(addTask(task)),
  deleteTodo: (task) => dispatch(deleteTask(task)),
  completeTodo: (task) => dispatch(completeTask(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
