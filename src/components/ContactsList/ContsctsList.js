import React from 'react';

import { Container, List, Title, TitleNotFound } from './ContactsList.styled';
import { ListItem } from 'components/ListItem/ListItem';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../redux/contactsSlice';

export const ContactsList = () => {
  const filterStore = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const listState = useSelector(state => state.contacts);

  const filterSelecter = listState.filter(contact =>
    contact.name.toLowerCase().includes(filterStore.toLowerCase())
  );

  const deleteContact = id => {
    dispatch(removeContact(id));
  };

  return (
    <Container>
      <Title>Contacts</Title>

      {filterSelecter.length !== 0 ? (
        <List>
          {filterSelecter.map(contact => (
            <ListItem
              key={contact.id}
              contact={contact}
              deleteContact={deleteContact}
            />
          ))}
        </List>
      ) : (
        <TitleNotFound>No contacts found</TitleNotFound>
      )}
    </Container>
  );
};
