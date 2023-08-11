import React from 'react';
import PropTypes from 'prop-types';
import { InputFilter, Text } from './Filter.styled';

export const Filter = ({ onChange }) => {
  return (
    <>
      <InputFilter onChange={e => onChange(e.target.value)} />
      <Text>Find contacts by name</Text>
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
