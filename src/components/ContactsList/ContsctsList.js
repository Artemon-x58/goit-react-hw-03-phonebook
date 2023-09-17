import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { List, Title } from './ContactsList.styled';
import { ListItem } from 'components/ListItem/ListItem';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../redux/contactsSlice';
import { contactsFromLocalStorage } from '../redux/contactsSlice';

export const ContactsList = () => {
  useEffect(() => {
    if (contactsFromLocalStorage().length === 0) {
      localStorage.removeItem('contacts');
      return;
    }
    localStorage.setItem(
      'contacts',
      JSON.stringify(contactsFromLocalStorage())
    );
  }, []);
  const filterStore = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const listState = useSelector(state => state.contacts);

  const filterSelecter = listState.filter(contact =>
    contact.name.toLowerCase().includes(filterStore.toLowerCase())
  );

  const deleteContact = id => {
    dispatch(removeContact(id));
    const updatedContacts = contactsFromLocalStorage().filter(
      contact => contact.id !== id
    );
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  return (
    <>
      <Title>Contacts</Title>

      <List>
        {filterSelecter.map(contact => (
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

// ContactsList.propTypes = {
//   contactsState: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };
