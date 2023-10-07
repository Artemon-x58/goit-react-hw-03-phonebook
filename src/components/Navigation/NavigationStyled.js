import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: #3498db;
  padding: 10px 0;
`;

export const LinksContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const Logo = styled(NavLink)`
  font-size: 24px;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
`;

export const LinkList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0;
`;

export const LinkItem = styled.li`
  &:last-child {
    margin-right: 0;
  }
`;

export const LinkStyled = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #ffaf40;
  }
`;
