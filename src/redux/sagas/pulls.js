import { call, put, select, takeEvery } from 'redux-saga/effects';
import {
  types,
  loadPullRequestsSuccess,
  loadPullRequestsFailure,
} from '../reducers/pulls.actions';
import { loadCommits } from '../reducers/commits.actions';
import github from '../../services/github';

function* loadPullRequests() {
  try {
    const token = yield select(state => state.user.token);
    const repo = yield select(state => state.repos.selected);

    const pullRequests = yield call(github.getPullRequests, token, repo.owner, repo.name);
    yield put(loadPullRequestsSuccess(pullRequests.map(pr => ({
      url: pr.url,
      number: pr.number,
      target: pr.base.ref,
      title: pr.title,
    }))));
  }
  catch (error) {
    yield put(loadPullRequestsFailure(error));
  }
}

export function* watchPullRequests() {
  yield takeEvery(types.LOAD_PRS.REQUEST, loadPullRequests);

  yield takeEvery(types.SELECT_PR, function*() {
    yield put(loadCommits());
  });
}
