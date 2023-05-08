import React, { Component } from 'react';
import { PhonebookSection } from './PhonebookSection/PhonebookSection';
import { ContactForm } from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
  };

  addNumber = data => {
    console.log(data);
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
        <PhonebookSection></PhonebookSection>
        <ContactForm onSubmit={this.addNumber} />
      </div>
    );
  }
}
