import { useEffect, useState } from 'react';

import { Input } from '../Input';
import { Button } from '../Button';

export const Form = ({ submit }) => {
  const [text, setText] = useState('');

  const _onChange = (event) => {
    console.log('_onChange Form');

    if (event.target.keyCode === 'enter') {
      submit(event.target.value);

      setText('');
      return;
    }

    setText(event.target.value);
  };

  const onClickButton = () => {
    submit(text);

    setText('');
  };

  const onKeyPressValue = (event) => {
    if (event.code === 'Enter') {
      onClickButton();
    }
  };

  return (
    <>
      <Input
        inputValue={text}
        onChangeValue={_onChange}
        onKeyPressValue={onKeyPressValue}
      />
      {text && (
        <Button
          _click={onClickButton}
          _text="Add"
          _priority="primary"
        />
      )}
    </>
  );
};
