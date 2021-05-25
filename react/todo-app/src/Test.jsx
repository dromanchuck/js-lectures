import { useState } from "react";

import "./App.css";

import { Button, Input } from "./components";

export const Test = () => {
  const [text, setText] = useState("Default");

  const onClick = () => {
    setText("Default");
  };

  const remove = () => {
    setText("");
  };

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      <Input _value={text} _onChange={onChange} />
      <Button _click={onClick} _text="Add" _priority="primary" />
      <Button _click={remove} _text="Remove" _priority="second" />
      <h1>{text}</h1>
    </div>
  );
};
