/*
 * action types
 */
export const ADD_TODO = 'ADD_TODO';
export const EAT_TODO = 'EAT_TODO';


/*
 * action creators
 */
export function addTodo(count) {
  return {
    type: ADD_TODO,
    payload: { count },
  };
}

export function eatTodo(count) {
  return {
    type: EAT_TODO,
    payload: { count },
  };
}
