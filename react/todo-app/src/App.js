import { createContext, useState } from 'react';

import { Test } from './Test';
import { Todolist } from './Todolist';
import { UserList } from './UserList';
import { RouterTest } from './RouterTest';

const themes = {
  black: {
    header: 'white',
    background: 'black',
  },
  white: { header: 'black', background: 'white' },
};

export const Context = createContext();

function App() {
  const [theme, setTheme] = useState('white');

  const onClickTheme = () => {
    setTheme(
      theme === 'white' ? 'black' : 'white',
    );
  };

  return (
    <Context.Provider value={{ themes, theme }}>
      <div
        style={{
          background: themes[theme].background,
        }}>
        {/* <h1>Test</h1>
        <Test /> */}

        {/* <Todolist /> */}
        {/* <h1>USER LIST</h1>
        <UserList /> */}
        {/* <button onClick={onClickTheme}>
          {theme}
        </button> */}
        <RouterTest />
      </div>
    </Context.Provider>
  );
}

export default App;
