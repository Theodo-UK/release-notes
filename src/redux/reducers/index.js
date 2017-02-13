import { combineReducers } from 'redux';

import commits from './commits';
import pulls from './pulls';
import repos from './repos';
import trello from './trello';
import user from './user';

export default combineReducers({
  commits,
  pulls,
  repos,
  trello,
  user,
});
