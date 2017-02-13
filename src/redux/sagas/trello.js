import { call, put, takeEvery } from 'redux-saga/effects';
import {
  types,
  authorizeTrelloSuccess,
  authorizeTrelloFailure,
} from '../reducers/trello.actions';
import { loadBoards } from '../reducers/boards.actions';
import trello from '../../services/trello';

export function* authorizeTrello() {
  try {
    yield call(trello.authorize);
    yield put(authorizeTrelloSuccess());

    yield put(loadBoards());
  }
  catch (error) {
    yield put(authorizeTrelloFailure(error));
  }
}

export function* watchTrello() {
  yield takeEvery(types.AUTHORIZE_TRELLO.REQUEST, authorizeTrello);
}
