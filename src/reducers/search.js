const initialState = {};
export default (state = initialState, action) => {
  if (action.type === 'SEARCH') {
    return { ...state, ...action.search };
  }
  return state;
};
