import { SET_INPUT_CHANGE } from '../actions/index';

export default function(state = {term: ''}, action) {
  switch (action.type) {
    case SET_INPUT_CHANGE:
    return { ...state, term: action.term }
    default:
      return state;
  }
}
