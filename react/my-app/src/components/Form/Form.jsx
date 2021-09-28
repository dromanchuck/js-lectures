import { useState } from "react";

import { Button } from "../Button";
import { Input } from "../Input";

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
    if (!text) {
      alert("Введите что-нибудь=)");

      return;
    }

    const todoshka = {
      text: text,
      checked: false,
      selected: false,
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
        position: "relative",
      }}
    >
      <Input
        value={text}
        onChange={onChangeInput}
        placeholder="Сделай же что-нибудь!"
      />
      <Button text="Add" onClick={onClickAdd} />
    </div>
  );
}
