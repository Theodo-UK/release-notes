const GitHub = require('github');

const token = 'cb0ee61d52fdd8f0856ed4e2a537cb9e9306ab79';

const github = new GitHub();

github.authenticate({
    type: 'token',
    token,
});

function cleanMessage(message) {
  const firstLine = message.split('\n')[0];
  const matches = firstLine.match(/(.+)\(#\d+\)$/);

  if (matches) return matches[1];
  else return firstLine;
}

github.pullRequests.getCommits({
  owner: 'rentecarlo',
  repo: 'csi',
  number: 481,
  per_page:  100
})
.then(commits => {
  const messages = commits.map(c => cleanMessage(c.commit.message));

  messages.forEach(message => console.log(`- ${message}`));
})
.catch(error => console.error('Error', error));
