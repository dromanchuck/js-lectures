import { useContext, useState } from 'react';
import {
  useHistory,
  useParams,
} from 'react-router-dom';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { Form, ListItem } from './components';
import './App.css';
import { Context } from './App';
import { ACTIONS } from './redux/constants';

function getID() {
  return (
    '_' + Math.random().toString(36).substr(2, 9)
  );
}

export const Todolist = () => {
  const contextValue = useContext(Context);
  const theme = contextValue.theme;
  const themes = contextValue.themes;
  const hist = useHistory();
  const params = useParams();
  const dispatch = useDispatch();

  const todos = useSelector(
    (store) => store.todos,
  );

  console.log({ todos });

  function setTodos() {}

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

    dispatch({ type: ACTIONS.ADD_TODO, todo });
  }

  const setChecked = ({ checked, idishnik }) => {
    console.log('setChecked Todolist');
    dispatch({
      type: ACTIONS.SET_CHECKED,
      checked,
      idishnik,
    });
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

  function goBack() {
    hist.push('/');
  }

  return (
    <div className="App">
      <button onClick={goBack}>{'<-'}</button>
      <h1 style={{ color: themes[theme].header }}>
        TODO list {`for ${params.name}`}
      </h1>
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
