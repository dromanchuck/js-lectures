import { useState } from "react";

import { Form, ListItem } from "./components";
import "./App.css";

function getID() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

export const Todolist = () => {
  const [todos, setTodos] = useState([]);

  function onClickForm(text) {
    if (!text) {
      alert("Введи же уже что-нибудь!");
      return;
    }

    const todo = {
      text,
      id: getID(),
      done: false,
      checked: false,
    };

    setTodos([...todos, todo]);
  }

  return (
    <div className="App">
      <Form submit={onClickForm} />
      <ul style={{ listStyleType: "none" }}>
        {todos.map((item) => (
          <ListItem key={item.id}>{item.text}</ListItem>
        ))}
      </ul>
    </div>
  );
};
