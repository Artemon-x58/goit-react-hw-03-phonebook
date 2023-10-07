import React from 'react';
import {
  AuthNavContainer,
  AuthNavLink,
  Title,
  WelcomeContainer,
} from './AuthNavStyled';

export const AuthNav = () => {
  return (
    <WelcomeContainer>
      <Title>Welcome to your phonebook</Title>
      <AuthNavContainer>
        <AuthNavLink to="/register">Register</AuthNavLink>
        <AuthNavLink to="/login">Log In</AuthNavLink>
      </AuthNavContainer>
    </WelcomeContainer>
  );
};
