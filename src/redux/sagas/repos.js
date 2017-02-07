import { call, put, select, takeEvery } from 'redux-saga/effects';
import {
  types,
  loadReposSuccess,
  loadReposFailure,
} from '../reducers/repos.actions';
import { loadPullRequests } from '../reducers/pulls.actions';
import github from '../../services/github';

export function* loadRepos() {
  try {
    const token = yield select(state => state.user.token);
    const repos = yield call(github.getRepositories, token);
    yield put(loadReposSuccess(repos.map(repo => ({
      id: repo.id,
      name: repo.name,
      owner: repo.owner.login,
    }))));
  }
  catch (error) {
    yield put(loadReposFailure(error));
  }
}

export function* watchRepos() {
  yield takeEvery(types.LOAD_REPOSITORIES.REQUEST, loadRepos);

  yield takeEvery(types.SELECT_REPO, function*() {
    yield put(loadPullRequests());
  });
}
