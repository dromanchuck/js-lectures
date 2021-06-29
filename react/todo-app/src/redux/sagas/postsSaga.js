import {
  takeEvery,
  call,
  put,
} from 'redux-saga/effects';

import { ACTIONS } from '../constants';

function* getPhotosSaga() {
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
  } catch (e) {
    console.log({ e });
    yield put({
      type: ACTIONS.GET_PHOTOS_FAILURE,
      error: e.message,
    });
  }
}

function* getOnePhotoSaga(action) {
  try {
    const res = yield call(() =>
      fetch(
        `https://jsonplaceholder.typicode.com/photos/${action.id}`,
      ),
    );

    const photo = yield res.json();

    yield put({
      type: ACTIONS.GET_ONE_PHOTO_SUCCESS,
      photo,
    });
  } catch (e) {}
}

export function* postsSaga() {
  yield takeEvery(
    ACTIONS.GET_PHOTOS_REQUEST,
    getPhotosSaga,
  );

  yield takeEvery(
    ACTIONS.GET_ONE_PHOTO_REQUEST,
    getOnePhotoSaga,
  );
}
