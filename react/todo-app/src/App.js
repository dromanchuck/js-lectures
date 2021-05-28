import { Test } from "./Test";
import { Todolist } from "./Todolist";
import { UserList } from "./UserList";

function App() {
  return (
    <div>
      <h1>Test</h1>
      <Test />
      <h1>TODO list</h1>
      <Todolist />

      <h1>USER LIST</h1>
      <UserList />
    </div>
  );
}

export default App;
