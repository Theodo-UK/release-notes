export const types = {
  LOAD_REPOSITORIES: {
    REQUEST: 'LOAD_REPOSITORIES.REQUEST',
    SUCCESS: 'LOAD_REPOSITORIES.SUCCESS',
    FAILURE: 'LOAD_REPOSITORIES.FAILURE',
  },
  SELECT_REPO: 'SELECT_REPO'
}

export const loadRepos = () => ({
  type: types.LOAD_REPOSITORIES.REQUEST
});

export const loadReposSuccess = repos => ({
  type: types.LOAD_REPOSITORIES.SUCCESS,
  repos
});

export const loadReposFailure = error => ({
  type: types.LOAD_REPOSITORIES.FAILURE,
  error
});

export const selectRepo = repo => ({
  type: types.SELECT_REPO,
  repo
});
