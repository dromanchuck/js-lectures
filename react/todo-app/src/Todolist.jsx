import { useState } from "react";

import "./App.css";

import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";

export const Todolist = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const onClick = () => {
    if (!text) {
      alert("Введи же уже что-нибудь!");
      return;
    }

    setTodos([...todos, text]);
    setText("");
  };

  const _onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      <Input _value={text} _onChange={_onChange} />
      <Button _click={onClick} _text="Add" _priority="primary" />
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
