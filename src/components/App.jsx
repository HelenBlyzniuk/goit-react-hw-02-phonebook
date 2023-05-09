import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addNumber = ({ name, number }) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
    console.log(this.state);
  };

  removeContact = id => {
    console.log(id);
    const removedContact = this.state.contacts.filter(
      contact => contact.id !== id
    );
    console.log(removedContact);
    this.setState({
      contacts: [...removedContact],
    });
  };

  onFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div
        style={{
          height: '100vh',
          display: 'block',
          fontSize: 30,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>

        <ContactForm onSubmit={this.addNumber} />

        <h2>Contacts</h2>

        <Filter
          value={this.state.filter}
          onFilterChange={this.onFilterChange}
        />
        <ContactList contacts={visibleContacts} getId={this.removeContact} />
      </div>
    );
  }
}
