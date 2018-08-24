import { combineReducers } from 'redux';

import map from './map';
import users from './users';

export default combineReducers({
  map,
  users,
});
