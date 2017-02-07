export const types = {
  LOAD_COMMITS: {
    REQUEST: 'LOAD_COMMITS.REQUEST',
    SUCCESS: 'LOAD_COMMITS.SUCCESS',
    FAILURE: 'LOAD_COMMITS.FAILURE',
  },
}

export const loadCommits = () => ({
  type: types.LOAD_COMMITS.REQUEST
});

export const loadCommitsSuccess = commits => ({
  type: types.LOAD_COMMITS.SUCCESS,
  commits
});

export const loadCommitsFailure = error => ({
  type: types.LOAD_COMMITS.FAILURE,
  error
});
