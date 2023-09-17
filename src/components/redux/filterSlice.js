export const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'filter/addFilter':
      return action.payload;
    default:
      return state;
  }
};

export const addFilter = newFilter => {
  return {
    type: 'filter/addFilter',
    payload: newFilter,
  };
};
