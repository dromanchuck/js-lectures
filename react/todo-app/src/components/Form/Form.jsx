import { useState } from "react";

import { Button } from "../Button";

function getId() {
  return (
    "_" + Math.random().toString(36).substr(2, 9)
  );
}

export function Form({ onClick }) {
  const [text, setText] = useState("");

  const onChangeInput = (event) => {
    setText(event.target.value);
  };

  const onClickAdd = () => {
    const todoshka = {
      text: text,
      checked: false,
      id: getId(),
    };

    onClick(todoshka);
    setText("");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <input
        style={{ fontSize: 100 }}
        value={text}
        onChange={onChangeInput}
        placeholder="Сделай же что-нибудь!"
      />
      <Button text="Add" onClick={onClickAdd} />
    </div>
  );
}
