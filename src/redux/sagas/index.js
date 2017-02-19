import { watchLogin } from './auth';
import { watchBoards } from './boards';
import { watchCards } from './cards';
import { watchCommits } from './commits';
import { watchPullRequests } from './pulls';
import { watchRepos } from './repos';
import { watchTrello } from './trello';

export default function* rootSaga() {
  yield [
    watchBoards(),
    watchCards(),
    watchCommits(),
    watchLogin(),
    watchPullRequests(),
    watchRepos(),
    watchTrello(),
  ];
}
