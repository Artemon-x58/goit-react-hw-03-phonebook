import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';
import {
  FormContainer,
  Form,
  Title,
  LinkContainer,
} from './LogInFormStyled.js';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormContainer>
      <Title>Welcome to Your Phonebook</Title>
      <Form onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </Form>
      <LinkContainer>
        <p>Don't have an account?</p>
        <Link to="/register">Register</Link>{' '}
      </LinkContainer>
    </FormContainer>
  );
};
