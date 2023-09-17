import React from 'react';
import { Toaster } from 'react-hot-toast';

import { ContactsList } from './ContactsList/ContsctsList';
import { FormComponent } from './Form/Form';
import { Filter } from './Filter/Filter';
import { Title } from './Form/Form.styled';

export const App = () => {
  return (
    <>
      <Title>Phonebook</Title>
      <FormComponent />
      <Filter />
      <ContactsList />
      <Toaster />
    </>
  );
};
