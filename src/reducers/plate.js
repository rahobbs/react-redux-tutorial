import {ADD_TO_PLATE} from '../constants.js';

//todo: define a reducer for plate
//NOTE reducer takes a state and action. empty state by default here
export default function plate (state=[], action) {
  switch (action.type) {
    case ADD_TO_PLATE: return state.concat(action.item);
    default: return state;
  }
}

//QUESTION how does action.item get here? action holds type and item
