import React from 'react';
import PropTypes from 'prop-types';
import { List, Title } from './ContactsList.styled';
import { ListItem } from 'components/ListItem/ListItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContactRedux,
  removeContactRedux,
} from 'components/redux/contactsSlice';

export const ContactsList = ({ deleteContact }) => {
  const listState = useSelector(state => state.contacts);

  const dispatch = useDispatch();
  return (
    <>
      <Title>Contacts</Title>
      <button
        onClick={() => dispatch(addContactRedux('12', 'Anton', '124124124'))}
      >
        Add Redux
      </button>
      <button
        onClick={() => dispatch(removeContactRedux('GAXYKs-8dtxQuMboKyK_F'))}
      >
        Remove Redux
      </button>
      <List>
        {listState.map(contact => (
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
