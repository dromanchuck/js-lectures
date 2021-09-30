import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { TodoList } from "../components/TodoList";
import { UserList } from "../components/UserList";

export function RootRouter() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <Link to="/todolist">Todolist</Link>
        <Link to="/userlist">Userlist</Link>
        <Switch>
          <Route exact={true} path="/">
            <h1>Welcome to helllll</h1>
          </Route>
          <Route path="/todolist">
            <TodoList />
          </Route>
          <Route path="/userlist">
            <UserList />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
