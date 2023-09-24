import React from 'react';
import PropTypes from 'prop-types';
import { Delete, Item } from './ListItem.styled';
import { deleteContact } from '../../redux/operations';

import { useDispatch } from 'react-redux';

export const ListItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <Item id={contact.id}>
      {contact.name}: {contact.phone}
      <Delete
        onClick={e => {
          dispatch(deleteContact(contact.id));
        }}
      >
        Delete
      </Delete>
    </Item>
  );
};

ListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
