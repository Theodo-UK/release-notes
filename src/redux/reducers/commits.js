import { types } from './commits.actions';

const initialState = {
  loading: false,
  commits: [],
};

export default function commits(state=initialState, action) {
  switch(action.type) {
    case types.LOAD_COMMITS.REQUEST:
    case types.LOAD_COMMITS.FAILURE:
      return {
        ...state,
        loading: true
      };
    case types.LOAD_COMMITS.SUCCESS:
      return {
        ...state,
        commits: action.commits,
      };
    default:
      return state;
  }
}
