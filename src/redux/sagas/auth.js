import { call, put, take, takeEvery } from 'redux-saga/effects';
import {
  types,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
  setToken,
} from '../reducers/user.actions';
import { loadRepos } from '../reducers/repos.actions';
import rsf, { authProvider } from '../../firebase';

export function* login() {
  try {
    const { accessToken } = yield call(rsf.login, authProvider);

    // Wait to be logged in and set new token.
    yield take(types.LOGIN.SUCCESS);
    yield put(setToken(accessToken));
    yield put(loadRepos());
  }
  catch (error) {
    yield put(loginFailure(error));
  }
}

export function* logout() {
  try {
    yield call(rsf.logout);
    yield put(logoutSuccess());
  }
  catch (error) {
    yield put(logoutFailure(error));
  }
}

export function* syncAuthSaga({ user }) {
  if (user) {
    yield put(loginSuccess({
      name: user.displayName,
      uid: user.uid,
    }));
  }
}

export function* watchLogin() {
  const channel = rsf.authChannel();

  yield takeEvery(types.LOGIN.REQUEST, login);
  yield takeEvery(types.LOGOUT.REQUEST, logout);
  yield takeEvery(channel, syncAuthSaga);
}
