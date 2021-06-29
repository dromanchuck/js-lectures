import { ACTIONS } from '../constants';

const defaultState = {
  photos: [],
  error: null,
  photo: {},
};

export function photosReducer(state, action) {
  switch (action.type) {
    case ACTIONS.GET_PHOTOS_SUCCESS: {
      return { ...state, photos: action.photos };
    }
    case ACTIONS.GET_PHOTOS_FAILURE: {
      return { ...state, error: action.error };
    }
    case ACTIONS.GET_ONE_PHOTO_SUCCESS: {
      return { ...state, photo: action.photo };
    }
    default:
      return defaultState;
  }
}
