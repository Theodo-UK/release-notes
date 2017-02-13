export default {
  authorize() {
    return new Promise((resolve, reject) => {
      Trello.authorize({
        type: 'popup',
        name: 'Release notes',
        scope: { read: 'true' },
        expiration: 'never',
        success: resolve,
        error: reject
      });
    });
  },
  getBoards() {
    return new Promise((resolve, reject) => {
      Trello.get(
        '/member/me/boards',
        resolve,
        reject
      );
    });
  },
  getCard(boardId, cardNumber) {
    return new Promise((resolve, reject) => {
      Trello.get(
        `/boards/${boardId}/cards/${cardNumber}`,
        resolve,
        reject
      );
    });
  }
};
