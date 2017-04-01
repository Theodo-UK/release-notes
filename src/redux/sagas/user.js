import { call, put, select, take, takeEvery } from 'redux-saga/effects';
import { loadRepos } from '../reducers/repos.actions';
import { types, syncUser } from '../reducers/user.actions';
import rsf from '../../firebase';

function* setTokenSaga({ token }) {
  const uid = yield select(state => state.user.uid);
  yield call(rsf.patch, `users/${uid}`, { token });
}

function* syncUserSaga({ user }) {
  const userPath = `users/${user.uid}`;
  const channel = rsf.channel(userPath);

  yield takeEvery(channel, function*(data) {
    yield put(syncUser(data));

    const token = yield select(state => state.user.token);
    if (token !== data.token) {
      yield call(rsf.patch, userPath, { token });
    }
    else {
      yield put(loadRepos());
    }
  });

  yield take(types.LOGOUT.SUCCESS);
  channel.close();
}

export default function* rootUserSaga() {
  yield takeEvery(types.LOGIN.SUCCESS, syncUserSaga);
  yield takeEvery(types.SET_TOKEN, setTokenSaga);
}
