export const addContactRedux = (id, name, number) => {
  return {
    type: 'contacts/addContactRedux',
    payload: {
      id,
      name,
      number,
    },
  };
};

export const removeContactRedux = id => {
  return {
    type: 'contacts/removeContactRedux',
    payload: {
      id: id,
    },
  };
};
