import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = [];
const slice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state = state.push(action.payload);
      },
      prepare(id, name, number) {
        return {
          payload: {
            id,
            name,
            number,
          },
        };
      },
    },
    removeContact(state, action) {
      return (state = state.filter(contact => contact.id !== action.payload));
    },
  },
});

export const contactsReducer = slice.reducer;
export const { addContact, removeContact } = slice.actions;
