import { call, put, takeEvery } from 'redux-saga/effects';
import {
  types,
  loadBoardsSuccess,
  loadBoardsFailure,
} from '../reducers/boards.actions';
import { loadCards } from '../reducers/cards.actions';
import trello from '../../services/trello';

export function* loadBoards() {
  try {
    const boards = yield call(trello.getBoards);
    yield put(loadBoardsSuccess(boards.map(board => ({
      id: board.id,
      name: board.name,
    }))));
  }
  catch (error) {
    yield put(loadBoardsFailure(error));
  }
}

export function* watchBoards() {
  yield takeEvery(types.LOAD_BOARDS.REQUEST, loadBoards);

  yield takeEvery(types.SELECT_BOARD, function*() {
    yield put(loadCards());
  });
}
