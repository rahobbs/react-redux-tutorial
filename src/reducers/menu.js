import items from '../items';
//here, we are setting the array in 'items' as our default menu state
//NOTE set default states in these reducers
export default function menu (state=items, action) {
  switch (action.type) {
    default: return state;
  }
}
