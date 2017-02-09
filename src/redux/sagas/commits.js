import { call, put, select, takeEvery } from 'redux-saga/effects';
import {
  types,
  loadCommitsSuccess,
  loadCommitsFailure,
} from '../reducers/commits.actions';
import github from '../../services/github';

function* loadCommits() {
  try {
    const token = yield select(state => state.user.token);
    const repo = yield select(state => state.repos.selected);
    const pr = yield select(state => state.pulls.selected);

    const commits = yield call(github.getCommits, token, repo.owner, repo.name, pr.number);
    yield put(loadCommitsSuccess(commits.map(commit => ({
      message: commit.commit.message.split('\n')[0],
      sha: commit.sha,
    }))));
  }
  catch (error) {
    yield put(loadCommitsFailure(error));
  }
}

export function* watchCommits() {
  yield takeEvery(types.LOAD_COMMITS.REQUEST, loadCommits);
}
