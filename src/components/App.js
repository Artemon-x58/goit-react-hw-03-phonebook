import React from 'react';
import { ContactsList } from './ContactsList/ContsctsList';
import { FormComponent } from './Form/Form';

import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <FormComponent />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};
