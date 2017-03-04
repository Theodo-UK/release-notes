function cleanCardName(cardName) {
  const matches = cardName.match(/^\(\d+\) ?(.+)$/);

  return matches ? matches[1] : cardName;
}

export default {
  fromCommit(commit) {
    return {
      id: commit.sha,
      name: commit.message,
      type: 'github',
    };
  },
  fromCard(card) {
    return {
      id: card.id,
      name: cleanCardName(card.name),
      number: card.idShort,
      type: 'trello',
    };
  },
}
