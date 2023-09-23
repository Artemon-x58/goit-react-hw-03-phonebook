import React from 'react';
import { Btn, Form, Input } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import toast from 'react-hot-toast';
import { selectContacts } from 'redux/selectors';

export const FormComponent = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(selectContacts);
  const handleAddContact = (name, phone) => {
    const contactToAdd = {
      name,
      phone,
    };
    dispatch(addContact(contactToAdd));
  };

  const getNameAndNumber = e => {
    e.preventDefault();
    const phone = e.currentTarget.phone.value;
    const name = e.currentTarget.name.value;
    const contactExists = contactsList.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (contactExists) {
      e.currentTarget.reset();
      toast.error('Oops, the contact is already in the list');
      return;
    }

    handleAddContact(name, phone);
    e.currentTarget.reset();
  };
  return (
    <Form onSubmit={getNameAndNumber}>
      <Input
        type="text"
        name="name"
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Input
        type="tel"
        name="phone"
        placeholder="Phone"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Btn>Add contact</Btn>
    </Form>
  );
};
