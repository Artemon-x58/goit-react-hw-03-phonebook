import React from 'react';
import { Btn, Form, Input } from './Form.styled';
import { nanoid } from 'nanoid/non-secure';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import toast from 'react-hot-toast';
import { getContacts } from 'redux/selectors';

const idName = nanoid();
const idNumber = nanoid();

export const FormComponent = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(getContacts);
  const handleAddContact = (name, number) => {
    dispatch(addContact(nanoid(), name, number));
  };

  const getNameAndNumber = e => {
    e.preventDefault();
    const number = e.currentTarget.number.value;
    const name = e.currentTarget.name.value;
    const contactExists = contactsList.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (contactExists) {
      e.currentTarget.reset();
      toast.error('Oops, the contact is already in the list');
      return;
    }

    handleAddContact(name, number);
    e.currentTarget.reset();
  };
  return (
    <Form onSubmit={getNameAndNumber}>
      <Input
        id={idName}
        type="text"
        name="name"
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Input
        id={idNumber}
        type="tel"
        name="number"
        placeholder="Number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Btn>Add contact</Btn>
    </Form>
  );
};
