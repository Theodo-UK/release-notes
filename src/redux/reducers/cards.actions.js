export const types = {
  LOAD_CARDS: {
    REQUEST: 'LOAD_CARDS.REQUEST',
    SUCCESS: 'LOAD_CARDS.SUCCESS',
    FAILURE: 'LOAD_CARDS.FAILURE',
  },
}

export const loadCards = () => ({
  type: types.LOAD_CARDS.REQUEST
});

export const loadCardsSuccess = cards => ({
  type: types.LOAD_CARDS.SUCCESS,
  cards
});

export const loadCardsFailure = error => ({
  type: types.LOAD_CARDS.FAILURE,
  error
});
