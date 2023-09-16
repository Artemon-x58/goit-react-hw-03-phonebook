import React, { useEffect, useState } from 'react';
import { ContactsList } from './ContactsList/ContsctsList';
import { FormComponent } from './Form/Form';
import { nanoid } from 'nanoid/non-secure';
import { Filter } from './Filter/Filter';
import { useDispatch } from 'react-redux';
import { contactsFromLocalStorage } from './redux/store';
import { addContactRedux, removeContactRedux } from './redux/contactsSlice';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    return parsedContacts || [];
  });

  const dispatch = useDispatch();

  const [filter, setFilter] = useState('');
  useEffect(() => {
    if (contactsFromLocalStorage().length === 0) {
      localStorage.removeItem('contacts');
      return;
    }
    localStorage.setItem(
      'contacts',
      JSON.stringify(contactsFromLocalStorage())
    );
  }, []);

  const filterContacts = newFilter => setFilter(newFilter);
  const getFilterAddContact = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  const deleteContact = id => {
    dispatch(removeContactRedux(id));
    const updatedContacts = contactsFromLocalStorage().filter(
      contact => contact.id !== id
    );
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  const handleAddContact = (name, number) => {
    const contactExists = contactsFromLocalStorage().some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (contactExists) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    const updatedContacts = [...contactsFromLocalStorage(), newContact];
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    dispatch(addContactRedux(nanoid(), name, number));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <FormComponent addContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter onChange={filterContacts} />
      <ContactsList
        contactsState={getFilterAddContact()}
        deleteContact={deleteContact}
      />
    </div>
  );
};
