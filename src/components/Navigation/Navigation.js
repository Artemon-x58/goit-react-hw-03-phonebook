import { useAuth } from '../../hooks/useAuth';
import {
  LinkList,
  LinkItem,
  LinkStyled,
  Logo,
  LinksContainer,
  Nav,
} from './NavigationStyled';
import { FaPhone } from 'react-icons/fa';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <LinksContainer>
        <Logo to="/">
          <FaPhone />
        </Logo>
        <LinkList>
          <LinkItem>
            <LinkStyled to="/">Home</LinkStyled>
          </LinkItem>
          {isLoggedIn && (
            <LinkItem>
              <LinkStyled to="/contacts">Contacts</LinkStyled>
            </LinkItem>
          )}
        </LinkList>
      </LinksContainer>
    </Nav>
  );
};
