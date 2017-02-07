export const types = {
  LOAD_PRS: {
    REQUEST: 'LOAD_PRS.REQUEST',
    SUCCESS: 'LOAD_PRS.SUCCESS',
    FAILURE: 'LOAD_PRS.FAILURE',
  },
  SELECT_PR: 'SELECT_PR',
}

export const loadPullRequests = () => ({
  type: types.LOAD_PRS.REQUEST
});

export const loadPullRequestsSuccess = pulls => ({
  type: types.LOAD_PRS.SUCCESS,
  pulls
});

export const loadPullRequestsFailure = error => ({
  type: types.LOAD_PRS.FAILURE,
  error
});

export const selectPR = pr => ({
  type: types.SELECT_PR,
  pr,
});
