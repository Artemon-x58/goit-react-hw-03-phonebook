import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contatcts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://650e994354d18aabfe994a43.mockapi.io/contacts/contacts'
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(
        `https://650e994354d18aabfe994a43.mockapi.io/contacts/contacts/${contactId}`
      );
      return contactId;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const res = await axios.post(
        'https://650e994354d18aabfe994a43.mockapi.io/contacts/contacts',
        contact
      );
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.error.message;
};
const handleFetchContactsFulfilled = (state, action) => {
  state.isLoading = false;
  state.items = action.payload;
};
const handleDeleteContactFulfilled = (state, action) => {
  state.isLoading = false;
  state.items = state.items.filter(contact => contact.id !== action.payload);
};
const handleAddContactFulfilled = (state, action) => {
  state.isLoading = false;
  state.items.push(action.payload);
};

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};
const slice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFetchContactsFulfilled)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, handleDeleteContactFulfilled)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handleAddContactFulfilled)
      .addCase(addContact.rejected, handleRejected);
  },
});

export const contactsReducer = slice.reducer;
