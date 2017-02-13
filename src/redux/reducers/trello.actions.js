export const types = {
  AUTHORIZE_TRELLO: {
    REQUEST: 'AUTHORIZE_TRELLO.REQUEST',
    SUCCESS: 'AUTHORIZE_TRELLO.SUCCESS',
    FAILURE: 'AUTHORIZE_TRELLO.FAILURE',
  },
}

export const authorizeTrello = () => ({
  type: types.AUTHORIZE_TRELLO.REQUEST
});

export const authorizeTrelloSuccess = () => ({
  type: types.AUTHORIZE_TRELLO.SUCCESS
});

export const authorizeTrelloFailure = () => ({
  type: types.AUTHORIZE_TRELLO.FAILURE
});
