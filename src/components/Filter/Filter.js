import React from 'react';
import { FilterContainer, InputFilter } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { addFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = e => {
    const filterValue = e.target.value;
    dispatch(addFilter(filterValue));
  };

  return (
    <FilterContainer>
      <InputFilter
        placeholder="Find contacts by name or by phone"
        onChange={handleChange}
      />
    </FilterContainer>
  );
};
