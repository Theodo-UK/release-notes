import { watchLogin } from './auth';
import { watchCommits } from './commits';
import { watchPullRequests } from './pulls';
import { watchRepos } from './repos';
import { watchTrello } from './trello';

export default function* rootSaga() {
  yield [
    watchCommits(),
    watchLogin(),
    watchPullRequests(),
    watchRepos(),
    watchTrello(),
  ];
}
