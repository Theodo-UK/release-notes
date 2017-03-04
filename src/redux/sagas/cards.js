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
    const sorted = cards.sort((a, b) => {
      if (a.type === 'github' && b.type === 'github') return 0;
      if (a.type === 'github') return 1;
      if (b.type === 'github') return -1;

      return a.number - b.number;
    });
    yield put(loadCardsSuccess(sorted));
  }
  catch (error) {
    yield put(loadCardsFailure(error));
  }
}

export function* watchCards() {
  yield takeEvery(types.LOAD_CARDS.REQUEST, loadCards);
}
