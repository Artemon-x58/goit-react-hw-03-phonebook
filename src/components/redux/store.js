import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

export const contactsFromLocalStorage = () => {
  const contacts = localStorage.getItem('contacts');
  const parsedContacts = JSON.parse(contacts);
  return parsedContacts || [];
};

const contactsReducer = (state = contactsFromLocalStorage(), action) => {
  console.log(state);
  switch (action.type) {
    case 'contacts/addContactRedux':
      return [...state, action.payload];
    case 'contacts/removeContactRedux':
      return state.filter(contact => contact.id !== action.payload.id);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  // filter: filterReducer,
});

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
