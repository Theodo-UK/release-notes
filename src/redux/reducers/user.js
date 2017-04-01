import { types } from './user.actions';

const initialState = {
  loading: false,
  loggedIn: false,
  name: '',
  token: '',
  uid: '',
};

export default function user(state=initialState, action) {
  switch(action.type) {
    case types.LOGIN.REQUEST:
    case types.LOGOUT.REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.LOGIN.SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        name: action.user.name,
        uid: action.user.uid,
      };
    case types.LOGOUT.SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        name: '',
        uid: '',
      };
    case types.LOGIN.FAILURE:
    case types.LOGOUT.FAILURE:
      return {
        ...state,
        loading: false,
      };
    case types.SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case types.SYNC_USER:
      return {
        ...state,
        token: state.token || action.user.token,
      };
    default:
      return state;
  }
}
