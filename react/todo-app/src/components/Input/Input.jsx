import { useEffect, useRef } from 'react';

export const Input = ({
  inputValue,
  onChangeValue,
  onKeyPressValue,
}) => {
  const refInputEpt = useRef();

  useEffect(() => {
    if (refInputEpt.current) {
      refInputEpt.current.focus();
    }
  }, []);

  return (
    <input
      ref={refInputEpt}
      value={inputValue}
      onChange={onChangeValue}
      onKeyPress={onKeyPressValue}
    />
  );
};
