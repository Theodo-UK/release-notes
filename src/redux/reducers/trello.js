import { types } from './trello.actions';

const initialState = {
  loading: false,
  authorized: false,
};

export default function trello(state=initialState, action) {
  switch(action.type) {
    case types.AUTHORIZE_TRELLO.REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.AUTHORIZE_TRELLO.SUCCESS:
      return {
        ...state,
        loading: false,
        authorized: true,
      };
    case types.AUTHORIZE_TRELLO.FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
