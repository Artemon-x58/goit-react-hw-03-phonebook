import React from 'react';
import { ContactsList } from './ContactsList/ContsctsList';
import { FormComponent } from './Form/Form';
import { nanoid } from 'nanoid/non-secure';
import { Filter } from './Filter/Filter';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  filterContacts = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };

  getFilterAddContact = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleAddContact = (name, number) => {
    const contactExists = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (contactExists) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <FormComponent addContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter onChange={this.filterContacts} />
        <ContactsList
          contactsState={this.getFilterAddContact()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
