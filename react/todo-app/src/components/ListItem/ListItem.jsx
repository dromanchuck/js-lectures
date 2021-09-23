import styles from "./ListItem.module.css";

export function ListItem({
  text,
  id,
  onClickDelete,
}) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{text}</p>
      <div
        className={styles.remove}
        onClick={() => onClickDelete(id)}
      >
        &#10006;
      </div>
    </div>
  );
}
