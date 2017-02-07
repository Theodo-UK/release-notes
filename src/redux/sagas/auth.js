import { call, put, takeEvery } from 'redux-saga/effects';
import {
  types,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
} from '../reducers/user.actions';
import { loadRepos } from '../reducers/repos.actions';
import { auth } from '../../firebase';

export function* login() {
  try {
    const user = yield call(auth.login);
    yield put(loginSuccess({
      name: user.displayName,
      uid: user.uid,
      token: user.token,
    }));
    yield put(loadRepos());
  }
  catch (error) {
    yield put(loginFailure(error));
  }
}

export function* logout() {
  try {
    yield call(auth.logout);
    yield put(logoutSuccess());
  }
  catch (error) {
    yield put(logoutFailure(error));
  }
}

export function* watchLogin() {
  yield takeEvery(types.LOGIN.REQUEST, login);
  yield takeEvery(types.LOGOUT.REQUEST, logout);
}
