import { useState } from "react";

import { Input } from "../Input";
import { Button } from "../Button";

export const Form = ({ submit }) => {
  const [text, setText] = useState("");

  const _onChange = (event) => {
    setText(event.target.value);
  };

  const onClickButton = () => {
    submit(text);

    setText("");
  };

  return (
    <>
      <Input _value={text} _onChange={_onChange} />
      {text && (
        <Button _click={onClickButton} _text="Add" _priority="primary" />
      )}
    </>
  );
};
