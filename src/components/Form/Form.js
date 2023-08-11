import React from 'react';
import PropTypes from 'prop-types';
import { Btn, Form, Input, Label } from './Form.styled';
import { nanoid } from 'nanoid/non-secure';

const idName = nanoid();
const idNumber = nanoid();

export class FormComponent extends React.Component {
  getNameAndNumber = e => {
    const number = e.currentTarget.number.value;
    const name = e.currentTarget.name.value;
    e.preventDefault();
    this.props.addContact(name, number);
    e.currentTarget.reset();
  };

  render() {
    return (
      <Form onSubmit={this.getNameAndNumber}>
        <Label htmlFor={idName}>
          Name
          <Input
            id={idName}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          ></Input>
        </Label>
        <Label htmlFor={idNumber}>
          Number
          <Input
            id={idNumber}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          ></Input>
        </Label>
        <Btn>Add contact</Btn>
      </Form>
    );
  }
}

FormComponent.propTypes = {
  addContact: PropTypes.func.isRequired,
};
