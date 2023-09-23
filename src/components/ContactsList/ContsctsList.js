import React, { useEffect } from 'react';

import { Container, List, Title, TitleNotFound } from './ContactsList.styled';
import { ListItem } from 'components/ListItem/ListItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsSlice';
import { selectFilteredContacts, selectIsLoading } from 'redux/selectors';
import { ThreeDots } from 'react-loader-spinner';

export const ContactsList = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Contacts {filteredContacts.length}</Title>
      {isLoading && (
        <ThreeDots
          marginLeft="auto"
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
          wrapperClassName=""
          visible={true}
        />
      )}
      {filteredContacts.length !== 0 ? (
        <List>
          {filteredContacts.map(contact => (
            <ListItem key={contact.id} contact={contact} />
          ))}
        </List>
      ) : (
        <TitleNotFound>No contacts found</TitleNotFound>
      )}
    </Container>
  );
};
