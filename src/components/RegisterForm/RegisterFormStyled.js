import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 400px;
  margin: 0 auto;

  label {
    display: flex;
    flex-direction: column;
    gap: 6px;
    text-align: left;
    font-weight: bold;
    color: #333;
  }

  input[type='text'],
  input[type='email'],
  input[type='password'] {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 16px;
  }

  button[type='submit'] {
    background-color: #007acc;
    color: #fff;
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0055a3;
    }
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333;
`;

export const ErrorText = styled.p`
  color: #ff0000;
  font-size: 16px;
  margin-top: 8px;
`;

export const SuccessText = styled.p`
  color: #00aa00;
  font-size: 16px;
  margin-top: 8px;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  align-items: center;

  p {
    font-size: 16px;
    margin-right: 10px;
    color: #333;
  }

  a {
    text-decoration: none;
    color: #007acc;
    font-weight: bold;
    font-size: 16px;
    transition: color 0.3s ease;

    &:hover {
      color: #0055a3;
    }
  }
`;
