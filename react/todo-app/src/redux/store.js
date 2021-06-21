import { createStore } from 'redux';

import { todolistReducer } from './reducers';

export const store = createStore(
  todolistReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
);

//store.getState() - возвращает весь store
//store.dispath(action) - для диспатча экшенов
//store.subscribe() - подписка на изменения стора
