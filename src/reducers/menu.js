import items from '../items';
//here, we are setting the array in 'items' as our default menu state

export default function menu (state=items, action) {  
  switch (action.type) {
    default: return state;
  }
}