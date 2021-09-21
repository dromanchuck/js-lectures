import React from "react";

import { Form } from "../Form";

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

  render() {
    return (
      <div>
        <Form onClick={this.onClickAdd} />
        {this.state.todos.map((item) => {
          return (
            <div key={item.id}>
              <p style={{ fontSize: 50 }}>
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}
