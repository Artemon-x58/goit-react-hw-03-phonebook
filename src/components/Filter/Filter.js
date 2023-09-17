import React from 'react';
import PropTypes from 'prop-types';
import { InputFilter, Text } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { addFilter } from 'components/redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <InputFilter onChange={e => dispatch(addFilter(e.target.value))} />
      <Text>Find contacts by name</Text>
    </>
  );
};

// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
// };
