import { useState } from 'react';

import { Form, ListItem } from './components';
import './App.css';

function getID() {
  return (
    '_' + Math.random().toString(36).substr(2, 9)
  );
}

export const Todolist = () => {
  const [todos, setTodos] = useState([]);

  function onClickForm(text) {
    console.log('onClickForm Todolist');
    if (!text) {
      alert('Введи же уже что-нибудь!');
      return;
    }

    const todo = {
      text,
      id: getID(),
      checked: false,
      selected: false,
    };

    setTodos([...todos, todo]);
  }

  const setChecked = ({ checked, idishnik }) => {
    console.log('setChecked Todolist');
    setTodos(
      todos.map((item) =>
        item?.id === idishnik
          ? { ...item, checked }
          : item,
      ),
    );
  };

  const setSelected = ({
    selected,
    idishnik,
  }) => {
    console.log('setSelected Todolist');
    setTodos(
      todos.map((item) =>
        item?.id === idishnik
          ? { ...item, selected }
          : item,
      ),
    );
  };

  const removeItem = (idishnik) => {
    console.log('removeItem Todolist');
    console.log(idishnik);

    setTodos(
      todos.filter((todo) => {
        if (todo.id === idishnik) {
          return false;
        }

        return true;
      }),
    );
  };

  const deleteAllSelected = () => {
    setTodos(
      todos.filter((todo) => {
        if (todo.selected) {
          return false;
        }

        return true;
      }),
    );
  };

  const checkAllSelected = () => {
    setTodos(
      todos.map((todo) => {
        if (todo.selected) {
          todo.checked = true;
          todo.selected = false;
        }

        return todo;
      }),
    );
  };

  let isCheckedSomth = todos.some((item) => item);

  return (
    <div className="App">
      <Form submit={onClickForm} />
      <ul style={{ listStyleType: 'none' }}>
        {todos.map((item) => (
          <ListItem
            key={item.id}
            checked={item.checked}
            setChecked={setChecked}
            idishnik={item.id}
            removeItem={removeItem}
            selected={item.selected}
            setSelected={setSelected}>
            {item.text}
          </ListItem>
        ))}
      </ul>
      <button
        disabled={false}
        onClick={deleteAllSelected}>
        Удалить выделенные
      </button>
      <button
        disabled={false}
        onClick={checkAllSelected}>
        Выполнить выделенные
      </button>
    </div>
  );
};
