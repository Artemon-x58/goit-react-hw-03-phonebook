import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 40px);
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 24px;
`;

export const AuthNavContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const AuthNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 40px;
  color: #007acc;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  transition: background-color 0.3s;
  background-color: #fff8dc;
  cursor: pointer;

  &:hover {
    background-color: #ffa500;
    color: #fff;
  }

  &.active {
    background-color: #007acc;
    color: #fff;
  }
`;
