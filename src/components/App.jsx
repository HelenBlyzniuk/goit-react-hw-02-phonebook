import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { PhonebookSection } from './PhonebookSection/PhonebookSection';
import { ContactForm } from './ContactForm/ContactForm';

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
        </PhonebookSection>
      </div>
    );
  }
}
