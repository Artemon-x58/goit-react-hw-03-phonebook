import React from 'react';
import PropTypes from 'prop-types';
import { List, Title } from './ContactsList.styled';
import { ListItem } from 'components/ListItem/ListItem';

export const ContactsList = ({ contactsState, deleteContact }) => {
  return (
    <>
      <Title>Contacts</Title>
      <List>
        {contactsState.map(contact => (
          <ListItem
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))}
      </List>
    </>
  );
};

ContactsList.propTypes = {
  contactsState: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
