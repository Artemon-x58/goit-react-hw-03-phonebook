import React from 'react';
import { FilterContainer, InputFilter } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { addFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FilterContainer>
      <InputFilter
        placeholder="Find contacts by name"
        onChange={e => dispatch(addFilter(e.target.value))}
      />
    </FilterContainer>
  );
};
