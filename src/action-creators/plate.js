import { ADD_TO_PLATE } from '../constants';

//NOTE tells the reducer what action to take on which object

export const addItemToPlate = item => ({
  type: ADD_TO_PLATE,
  item
});
