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

  return (
    <div className="App">
      <Form submit={onClickForm} />
      <ul style={{ listStyleType: 'none' }}>
        {todos.map((item) => (
          <ListItem
            key={item.id}
            checked={item.checked}
            setChecked={setChecked}
            idishnik={item.id}>
            {item.text}
          </ListItem>
        ))}
      </ul>
    </div>
  );
};
