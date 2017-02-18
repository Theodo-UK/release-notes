import { types } from './repos.actions';

const initialState = {
  loading: false,
  repositories: [],
  selected: null,
};

export default function repos(state=initialState, action) {
  switch(action.type) {
    case types.LOAD_REPOSITORIES.REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.LOAD_REPOSITORIES.SUCCESS:
      return {
        ...state,
        loading: false,
        repositories: action.repos,
      };
    case types.LOAD_REPOSITORIES.FAILURE:
      return {
        ...state,
        loading: false,
      };
    case types.SELECT_REPO:
      return {
        ...state,
        selected: action.repo,
      };
    default:
      return state;
  }
}
