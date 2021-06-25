import { ACTIONS } from '../constants';

const defaultState = {
  photos: [],
};

export function photosReducer(state, action) {
  switch (action.type) {
    case ACTIONS.GET_PHOTOS_SUCCESS: {
      return { ...state, photos: action.photos };
    }
    default:
      return defaultState;
  }
}
