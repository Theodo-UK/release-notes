import { combineReducers } from 'redux';

import boards from './boards';
import cards from './cards';
import commits from './commits';
import pulls from './pulls';
import repos from './repos';
import trello from './trello';
import user from './user';

export default combineReducers({
  boards,
  cards,
  commits,
  pulls,
  repos,
  trello,
  user,
});
