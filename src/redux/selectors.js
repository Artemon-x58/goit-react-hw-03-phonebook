import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.filter;
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const lowerCaseFilter = filter.toLowerCase();
    if (!filter.trim() || isNaN(filter)) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(lowerCaseFilter)
      );
    } else {
      return contacts.filter(contact =>
        contact.phone.includes(lowerCaseFilter)
      );
    }
  }
);
