import styles from "./Input.module.css";

export function Input({
  value,
  onChange,
  placeholder,
}) {
  return (
    <input
      className={styles.input}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
