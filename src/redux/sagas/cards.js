import { call, put, select, takeEvery } from 'redux-saga/effects';
import {
  types,
  loadCardsSuccess,
  loadCardsFailure,
} from '../reducers/cards.actions';
import { toCard } from '../../services/commit';

export function* loadCards() {
  const [board, commits] = yield [
    select(state => state.boards.selected),
    select(state => state.commits.commits),
  ];

  try {
    const cards = yield commits.map(
      commit => call(toCard, board, commit)
    );
    yield put(loadCardsSuccess(cards));
  }
  catch (error) {
    yield put(loadCardsFailure(error));
  }
}

export function* watchCards() {
  yield takeEvery(types.LOAD_CARDS.REQUEST, loadCards);
}
