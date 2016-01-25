export default function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (!handlers.hasOwnProperty(action.type)) {
      return state;
    }
    return handlers[action.type](state, action);
  };
}
