import { watchLogin } from './auth';
import { watchBoards } from './boards';
import { watchCommits } from './commits';
import { watchPullRequests } from './pulls';
import { watchRepos } from './repos';
import { watchTrello } from './trello';

export default function* rootSaga() {
  yield [
    watchBoards(),
    watchCommits(),
    watchLogin(),
    watchPullRequests(),
    watchRepos(),
    watchTrello(),
  ];
}
