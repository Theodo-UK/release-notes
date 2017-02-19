import { types } from './boards.actions';

const initialState = {
  loading: false,
  boards: [],
  selected: null,
};

export default function boards(state=initialState, action) {
  switch(action.type) {
    case types.LOAD_BOARDS.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_BOARDS.SUCCESS:
      return {
        ...state,
        boards: action.boards,
        loading: false,
      };
    case types.LOAD_BOARDS.FAILURE:
      return {
        ...state,
        loading: false,
      };
    case types.SELECT_BOARD:
      return {
        ...state,
        selected: action.board,
      };
    default:
      return state;
  }
}
