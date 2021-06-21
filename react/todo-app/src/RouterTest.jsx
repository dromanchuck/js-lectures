import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import { UserList } from './UserList';
import { Todolist } from './Todolist';
import { Test } from './Test';

export const RouterTest = () => {
  return (
    <Router>
      <Route exact path="/">
        <UserList />
      </Route>
      <Route exact path="/todolist">
        <Test />
      </Route>
      <Route exact path="/todolist/:name">
        <Todolist />
      </Route>
    </Router>
  );
};

//styled component test
const Button = styled.button`
  background-color: black;
  width: 200px;
  height: 50px;
  border: none;
  outline: none;
  color: white;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s;

  ${({ type }) =>
    type === 'second'
      ? `
    border-radius: 0;
    background: gray;
    `
      : ''}

  ${({ isActive }) =>
    isActive
      ? ``
      : `
    opacity: 0.5;
  `}

  &:hover {
    border: 1px solid black;
    background: white;
    color: black;
  }
`;

const Btn = styled(Button)`
  background: red;
`;
