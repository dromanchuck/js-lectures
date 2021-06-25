import {
  takeEvery,
  call,
  put,
} from 'redux-saga/effects';

import { ACTIONS } from '../constants';

function* getPhotosSaga() {
  console.log('GET_PHOTOS_REQUEST');
  try {
    const res = yield call(() =>
      fetch(
        'https://jsonplaceholder.typicode.com/photos',
      ),
    );

    const photos = yield res.json();

    yield put({
      type: ACTIONS.GET_PHOTOS_SUCCESS,
      photos,
    });
    console.log({ photos });
  } catch (e) {}
}

export function* postsSaga() {
  yield takeEvery(
    ACTIONS.GET_PHOTOS_REQUEST,
    getPhotosSaga,
  );
}
