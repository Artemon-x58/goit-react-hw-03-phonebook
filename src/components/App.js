import React, { useEffect, useState } from 'react';
import { ContactsList } from './ContactsList/ContsctsList';
import { FormComponent } from './Form/Form';
import { nanoid } from 'nanoid/non-secure';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filterContacts = newFilter => setFilter(newFilter);
  const getFilterAddContact = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  const deleteContact = id =>
    setContacts(contacts.filter(contact => contact.id !== id));

  const handleAddContact = (name, number) => {
    const contactExists = contacts.some(
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
    setContacts([...contacts, newContact]);
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
