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
        token: action.user.token,
        uid: action.user.uid,
      };
    case types.LOGIN.FAILURE:
    case types.LOGOUT.SUCCESS:
    case types.LOGOUT.FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
