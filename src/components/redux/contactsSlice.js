export const contactsFromLocalStorage = () => {
  const contacts = localStorage.getItem('contacts');
  const parsedContacts = JSON.parse(contacts);
  return parsedContacts || [];
};

export const addContact = (id, name, number) => {
  return {
    type: 'contacts/addContact',
    payload: {
      id,
      name,
      number,
    },
  };
};

export const removeContact = id => {
  return {
    type: 'contacts/removeContact',
    payload: {
      id: id,
    },
  };
};

export const contactsReducer = (state = contactsFromLocalStorage(), action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return [...state, action.payload];
    case 'contacts/removeContact':
      return state.filter(contact => contact.id !== action.payload.id);
    default:
      return state;
  }
};
