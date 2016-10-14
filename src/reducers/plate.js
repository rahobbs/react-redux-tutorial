import { ADD_TO_PLATE } from '../constants';

export default function plate (state=[], action) {  
  switch (action.type) {
    case ADD_TO_PLATE: return state.concat(action.item);
    default: return state;
  }
}