import React, { useEffect, useState } from "react";

import { Form } from "../Form";
import { Button } from "../Button";
import { ListItem } from "../ListItem/ListItem";
import styles from "./TodoList.module.css";

export function TodoList() {
  const [todos, setTodos] = useState([]);
  const [type, setType] = useState("ALL");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("useEffect1");
    setTimeout(() => {
      const todos = JSON.parse(localStorage.getItem("todos")) || [];
      console.log({ todos, fromLS: localStorage.getItem("todos") });
      setFilteredTodos(todos);
      setTodos(todos);
      setIsLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    console.log("useEffect2");
    if (!isLoading) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos, isLoading]);

  const onClickAdd = (todoshka) => {
    const newTodos = [...todos, todoshka];

    setFilteredTodos(newTodos);
    setTodos(newTodos);
  };

  const onClickDelete = (id) => {
    const filteredTodos = todos.filter((item) => item.id !== id);

    setFilteredTodos(filteredTodos);
    setTodos(filteredTodos);
  };

  const onClickDone = (id) => {
    const filteredTodos = todos.map((item) =>
      item.id === id
        ? {
            ...item,
            checked: !item.checked,
            selected: false,
          }
        : item
    );

    setFilteredTodos(filteredTodos);
    setTodos(filteredTodos);
  };

  const onDoubleClick = (id) => {
    const filteredTodos = todos.map((item) =>
      item.id === id ? { ...item, selected: !item.selected } : item
    );

    setFilteredTodos(filteredTodos);
    setTodos(filteredTodos);
  };

  const onEditText = (id, newText) => {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        item.text = newText;

        return item;
      }

      return item;
    });

    setFilteredTodos(newTodos);
    setTodos(newTodos);
  };

  const onRemoveAll = () => {
    const filteredTodos = todos.filter((item) => !item.selected);

    setFilteredTodos(filteredTodos);
    setTodos(filteredTodos);
  };

  const onDoneAll = () => {
    const filteredTodos = todos.map((item) =>
      item.selected
        ? {
            ...item,
            checked: !item.checked,
            selected: false,
          }
        : item
    );

    setFilteredTodos(filteredTodos);
    setTodos(filteredTodos);
  };

  const haveSelected = todos.some((item) => item.selected);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>TODODODO list</h1>
      <Form onClick={onClickAdd} />
      {isLoading ? <div>Loading...</div> : null}
      {todos.length ? (
        <div style={{ display: "flex" }}>
          <Button
            text="ALL"
            type={type === "ALL" ? "primary" : "secondary"}
            onClick={() => {
              const filteredTodos = todos;

              setFilteredTodos(filteredTodos);
              setType("ALL");
            }}
          />
          <Button
            text="Done"
            type={type === "DONE" ? "primary" : "secondary"}
            onClick={() => {
              const filteredTodos = todos.filter((item) => item.checked);

              setFilteredTodos(filteredTodos);
              setType("DONE");
            }}
          />
          <Button
            text="UnDone"
            type={type === "UNDONE" ? "primary" : "secondary"}
            onClick={() => setType("UNDONE")}
          />
        </div>
      ) : null}
      {filteredTodos.map((item) => {
        return (
          <ListItem
            key={item.id}
            text={item.text}
            id={item.id}
            onClickDelete={onClickDelete}
            onClickDone={onClickDone}
            onDoubleClick={onDoubleClick}
            selected={item.selected}
            checked={item.checked}
            onEditText={onEditText}
          />
        );
      })}
      {todos.length && haveSelected ? (
        <div style={{ display: "flex" }}>
          <Button text="Remove selected" onClick={onRemoveAll} />
          <Button text="Done selected" onClick={onDoneAll} />
        </div>
      ) : null}
    </div>
  );
}
