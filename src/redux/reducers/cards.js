import { types } from './cards.actions';

const initialState = {
  loading: false,
  cards: [],
};

export default function cards(state=initialState, action) {
  switch(action.type) {
    case types.LOAD_CARDS.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_CARDS.SUCCESS:
      return {
        ...state,
        cards: action.cards,
        loading: false,
      };
    case types.LOAD_CARDS.FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
