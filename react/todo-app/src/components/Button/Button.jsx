import React from "react";

import styles from "./Button.module.css";

export class Button1 extends React.Component {
  render() {
    const text = this.props.text;
    const type = this.props.type || "primary";
    const onClick = this.props.onClick;

    return (
      <button
        className={styles[type]}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
}

export function Button({
  text,
  type = "primary",
  onClick,
}) {
  return (
    <button
      className={styles[type]}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
