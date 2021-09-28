import { useState } from "react";
import { Button } from "../Button";

import styles from "./ListItem.module.css";

export function ListItem({
  text,
  id,
  onClickDelete,
  checked,
  onClickDone,
  onDoubleClick,
  selected,
  onEditText,
}) {
  const [newText, setNewText] = useState(text);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div
      className={styles.container}
      onDoubleClick={() => onDoubleClick(id)}
      style={{
        background: selected
          ? "yellow"
          : checked
          ? "green"
          : "white",
      }}
    >
      {isEdit ? (
        <input
          className={styles.text}
          value={newText}
          onChange={(event) =>
            setNewText(event.target.value)
          }
        />
      ) : (
        <p
          className={styles.text}
          style={{
            textDecoration: checked
              ? "line-through"
              : "",
            color: selected
              ? "black"
              : checked
              ? "white"
              : "black",
          }}
        >
          {text}
        </p>
      )}
      <div className={styles.buttons}>
        <Button
          text={checked ? "UnDone" : "Done"}
          onClick={() => onClickDone(id)}
        />

        {isEdit ? (
          <Button
            text="Save"
            onClick={() => {
              onEditText(id, newText);
              setIsEdit(false);
            }}
          />
        ) : null}

        {isEdit ? null : (
          <Button
            text={"Edit"}
            onClick={() => setIsEdit(true)}
          />
        )}

        <div
          className={styles.remove}
          onClick={() => onClickDelete(id)}
        >
          &#10006;
        </div>
      </div>
    </div>
  );
}
