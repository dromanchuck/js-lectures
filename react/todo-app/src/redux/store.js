import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';

import createSagaMiddleware from 'redux-saga';

import {
  todolistReducer,
  photosReducer,
} from './reducers';

import { postsSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
  compose;

export const store = createStore(
  combineReducers({
    todolistReducer,
    photosReducer,
  }),
  composeEnhancers(
    applyMiddleware(sagaMiddleware),
  ),
);

sagaMiddleware.run(postsSaga);

//store.getState() - возвращает весь store
//store.dispath(action) - для диспатча экшенов
//store.subscribe() - подписка на изменения стора
