const defaultState = 0;
const rootReducer = (count = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return count + action.payload.count;
    case 'EAT_TODO':
      return count === defaultState ? defaultState : count - action.payload.count;
    default:
      return count;
  }
};

export default rootReducer;
