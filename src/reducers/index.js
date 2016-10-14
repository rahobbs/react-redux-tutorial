import { combineReducers } from 'redux';

import plate from './plate';
import menu from './menu';

const rootReducer = combineReducers({
  plate,
  menu
});

export default rootReducer;
