import styled from 'styled-components';

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserMenuText = styled.p`
  font-size: 24px;
  font-family: 'Arial', sans-serif;
  text-align: center;
  margin-right: 16px;
`;

export const UserMenuBtn = styled.button`
  background-color: #f56a6a;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  font-family: 'Arial', sans-serif;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff4545;
  }

  &:focus {
    outline: none;
  }
`;
