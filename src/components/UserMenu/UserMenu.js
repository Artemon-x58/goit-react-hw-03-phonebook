import { UserMenuBtn, UserMenuContainer, UserMenuText } from './UserMenuStyled';

export const UserMenu = () => {
  return (
    <UserMenuContainer>
      <UserMenuText></UserMenuText>
      <UserMenuBtn>Logout</UserMenuBtn>
    </UserMenuContainer>
  );
};
