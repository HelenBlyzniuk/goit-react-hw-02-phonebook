import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { PhonebookSection } from './PhonebookSection/PhonebookSection';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
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

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'block',
          fontSize: 30,
          color: '#010101',
        }}
      >
        <PhonebookSection>
          <ContactForm onSubmit={this.addNumber} />
          <ContactList contacts={this.state.contacts} />
        </PhonebookSection>
      </div>
    );
  }
}
