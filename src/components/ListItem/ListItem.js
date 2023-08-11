import React from 'react';
import PropTypes from 'prop-types';
import { Delete, Item } from './ListItem.styled';

export const ListItem = ({ contact, deleteContact }) => {
  return (
    <Item id={contact.id}>
      {contact.name}: {contact.number}
      <Delete onClick={e => deleteContact(e.target.parentNode.id)}>
        Delete
      </Delete>
    </Item>
  );
};

ListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
