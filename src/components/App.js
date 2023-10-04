import React from 'react';
import { Toaster } from 'react-hot-toast';

import { ContactsList } from './ContactsList/ContsctsList';
import { FormComponent } from './Form/Form';
import { Filter } from './Filter/Filter';
import { Title } from './Form/Form.styled';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { LoginForm } from './LogInForm/LogInForm';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <>
      <Title>Phonebook</Title>

      {/* <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes> */}

      <RegisterForm />
      <LoginForm />
      <FormComponent />
      <Filter />
      <ContactsList />
      <Toaster />
    </>
  );
};
