import React from "react";

import { Form } from "../Form";
import { ListItem } from "../ListItem/ListItem";
import styles from "./TodoList.module.css";

export class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  onClickAdd = (todoshka) => {
    const newTodos = [
      ...this.state.todos,
      todoshka,
    ];

    this.setState({ todos: newTodos });
  };

  onClickDelete = (id) => {
    const filteredTodos = this.state.todos.filter(
      (item) => item.id !== id
    );

    this.setState({ todos: filteredTodos });
  };

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>
          TODODODO list
        </h1>
        <Form onClick={this.onClickAdd} />
        {this.state.todos.map((item) => {
          return (
            <ListItem
              key={item.id}
              text={item.text}
              id={item.id}
              onClickDelete={this.onClickDelete}
            />
          );
        })}
      </div>
    );
  }
}
