import React from 'react';
import { useDispatch } from 'react-redux';
import { UserMenuBtn, UserMenuContainer, UserMenuText } from './UserMenuStyled';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/authOperations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <UserMenuContainer>
      <UserMenuText>Welcome, {user.name}</UserMenuText>
      <UserMenuBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </UserMenuBtn>
    </UserMenuContainer>
  );
};
