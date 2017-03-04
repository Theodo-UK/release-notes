import feature from './feature';
import trello from './trello';

const ticketNumberStrategies = [
  message => {
    const matches = message.match(/^\(((?:#\d+(?: |, | \+ )?)+)\)/);
    if (!matches) return null;

    const numbers = [];
    const regex = /#(\d+)/g;
    let match;
    while ((match = regex.exec(matches[1])) !== null) {
      numbers.push(parseInt(match[1]));
    }
    return numbers;
  },
  message => {
    const matches = message.match(/^feature\/(\d+)/);
    if (!matches) return null;

    return matches[1];
  },
];

function getTicketNumbers(commit) {
  let result;

  for (let strategy of ticketNumberStrategies) {
    result = strategy(commit.message);

    if (result) return result;
  }

  return [];
}

export function singleCommitToCards(board, commit) {
  const ticketNumbers = getTicketNumbers(commit);

  if (ticketNumbers.length == 0) return Promise.resolve([
    feature.fromCommit(commit)
  ]);

  return Promise.all(ticketNumbers.map(number =>
    trello.getCard(board.id, number)
    .then(feature.fromCard)
  ));
}

export function multipleCommitToCards(board, commits) {
  return Promise.all(commits.map(
    commit => singleCommitToCards(board, commit)
  ))
  .then(doubleArray => doubleArray.reduce(
    (acc, cards) => acc.concat(cards),
    []
  ));
}
