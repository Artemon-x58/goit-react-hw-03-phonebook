import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Title } from './Form/Form.styled';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/home';
import { RestrictedRoute } from 'Routes/RestrictedRoute';
import { RegisterPage } from 'pages/register';
import { LoginPage } from 'pages/login';
import { PrivateRoute } from 'Routes/PrivateRoute';
import { ContactsPage } from 'pages/contacts';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/authOperations';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Title>Phonebook</Title>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
};
