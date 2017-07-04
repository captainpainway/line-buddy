export const reducer = (state = {}, action) => {
  let newState = state;  
  switch(action.type) {
    case 'UPDATE_DATA':
      newState = Object.assign({}, state, {data: action.data})
      return newState;
    default:
      return newState;
  }
}