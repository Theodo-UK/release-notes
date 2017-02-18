import { types } from './pulls.actions';

const initialState = {
  loading: false,
  pullRequests: [],
  selected: null,
};

export default function pulls(state=initialState, action) {
  switch(action.type) {
    case types.LOAD_PRS.REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.LOAD_PRS.SUCCESS:
      return {
        ...state,
        loading: false,
        pullRequests: action.pulls,
      };
    case types.LOAD_PRS.FAILURE:
      return {
        ...state,
        loading: false,
      };
    case types.SELECT_PR:
      return {
        ...state,
        selected: action.pr,
      }
    default:
      return state;
  }
}
