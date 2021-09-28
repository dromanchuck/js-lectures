import React from "react";

import { Form } from "../Form";
import { Button } from "../Button";
import { ListItem } from "../ListItem/ListItem";
import styles from "./TodoList.module.css";

export class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      type: "ALL",
      filteredTodos: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      const todos = JSON.parse(localStorage.getItem("todos"));

      this.setState({ todos, filteredTodos: todos, isLoading: false });
    }, 3000);
  }

  componentDidUpdate() {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  onClickAdd = (todoshka) => {
    const newTodos = [...this.state.todos, todoshka];

    this.setState({
      todos: newTodos,
      filteredTodos: newTodos,
    });
  };

  onClickDelete = (id) => {
    const filteredTodos = this.state.todos.filter((item) => item.id !== id);

    this.setState({
      todos: filteredTodos,
      filteredTodos,
    });
  };

  onClickDone = (id) => {
    const filteredTodos = this.state.todos.map((item) =>
      item.id === id
        ? {
            ...item,
            checked: !item.checked,
            selected: false,
          }
        : item
    );

    this.setState({
      todos: filteredTodos,
      filteredTodos,
    });
  };

  onDoubleClick = (id) => {
    const filteredTodos = this.state.todos.map((item) =>
      item.id === id ? { ...item, selected: !item.selected } : item
    );

    this.setState({
      todos: filteredTodos,
      filteredTodos,
    });
  };

  onEditText = (id, newText) => {
    const newTodos = this.state.todos.map((item) => {
      if (item.id === id) {
        item.text = newText;

        return item;
      }

      return item;
    });

    this.setState({
      todos: newTodos,
      filteredTodos: newTodos,
    });
  };

  onRemoveAll = () => {
    const filteredTodos = this.state.todos.filter((item) => !item.selected);

    this.setState({
      todos: filteredTodos,
      filteredTodos,
    });
  };

  onDoneAll = () => {
    const filteredTodos = this.state.todos.map((item) =>
      item.selected
        ? {
            ...item,
            checked: !item.checked,
            selected: false,
          }
        : item
    );

    this.setState({
      todos: filteredTodos,
      filteredTodos,
    });
  };

  render() {
    const haveSelected = this.state.todos.some((item) => item.selected);

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>TODODODO list</h1>
        <Form onClick={this.onClickAdd} />
        {this.state.isLoading ? <div>Loading...</div> : null}
        {this.state.todos.length ? (
          <div style={{ display: "flex" }}>
            <Button
              text="ALL"
              type={this.state.type === "ALL" ? "primary" : "secondary"}
              onClick={() => {
                const filteredTodos = this.state.todos;

                this.setState({
                  type: "ALL",
                  filteredTodos,
                });
              }}
            />
            <Button
              text="Done"
              type={this.state.type === "DONE" ? "primary" : "secondary"}
              onClick={() => {
                const filteredTodos = this.state.todos.filter((item) => item.checked);

                this.setState({
                  type: "DONE",
                  filteredTodos,
                });
              }}
            />
            <Button
              text="UnDone"
              type={this.state.type === "UNDONE" ? "primary" : "secondary"}
              onClick={() => this.setState({ type: "UNDONE" })}
            />
          </div>
        ) : null}
        {this.state.filteredTodos.map((item) => {
          return (
            <ListItem
              key={item.id}
              text={item.text}
              id={item.id}
              onClickDelete={this.onClickDelete}
              onClickDone={this.onClickDone}
              onDoubleClick={this.onDoubleClick}
              selected={item.selected}
              checked={item.checked}
              onEditText={this.onEditText}
            />
          );
        })}
        {this.state.todos.length && haveSelected ? (
          <div style={{ display: "flex" }}>
            <Button text="Remove selected" onClick={this.onRemoveAll} />
            <Button text="Done selected" onClick={this.onDoneAll} />
          </div>
        ) : null}
      </div>
    );
  }
}
