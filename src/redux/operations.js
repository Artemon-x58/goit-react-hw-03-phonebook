import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASIC_URL = 'https://connections-api.herokuapp.com/contacts/';

export const fetchContacts = createAsyncThunk(
  'contatcts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(BASIC_URL);
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
      await axios.delete(`${BASIC_URL}${contactId}`);
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
      const res = await axios.post(BASIC_URL, contact);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
