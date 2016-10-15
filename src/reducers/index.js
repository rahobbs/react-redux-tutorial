import { combineReducers } from 'redux';
import menu from './menu.js';
import plate from './plate.js';
//todo: build a rootReducer:
const rootReducer=combineReducers({
  menu,
  plate
});

export default rootReducer;
