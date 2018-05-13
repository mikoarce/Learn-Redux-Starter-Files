/*
Reducer takes in 2 things:
1. The action or info about what happened.
2. The copy of the current state.

Ideally, it will find out what happened then give the store.
In comes the store and its updates then return store.
*/

function posts(state = [], action) {
  console.log('The post will change');
  console.log(state, action);
  return state;
}

export default posts;