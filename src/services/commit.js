import trello from './trello';

const ticketNumberRegexps = [
  /^\(#(\d+)\)/,
  /^feature\/(\d+)/,
];

function getTicketNumber(commit) {
  let matches;

  for (let regexp of ticketNumberRegexps) {
    matches = commit.message.match(regexp);

    if (matches) return matches[1];
  }

  return null;
}

function cleanCardName(cardName) {
  const matches = cardName.match(/^\(\d+\) ?(.+)$/);

  return matches ? matches[1] : cardName;
}

export function toCard(board, commit) {
  const ticketNumber = getTicketNumber(commit);

  if (!ticketNumber) return Promise.resolve({
    id: commit.sha,
    name: commit.message,
    type: 'github',
  });

  return trello.getCard(board.id, ticketNumber)
  .then(card => ({
    id: card.id,
    name: cleanCardName(card.name),
    number: card.idShort,
    type: 'trello',
  }));
}
