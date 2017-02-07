import { types } from './pulls.actions';

const initialState = {
  loading: false,
  pullRequests: [],
  selected: null,
};

export default function pulls(state=initialState, action) {
  switch(action.type) {
    case types.LOAD_PRS.REQUEST:
    case types.LOAD_PRS.FAILURE:
      return {
        ...state,
        loading: true
      };
    case types.LOAD_PRS.SUCCESS:
      return {
        ...state,
        pullRequests: action.pulls,
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
