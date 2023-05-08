import React, { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.onFormReset();
  };

  onFormReset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <form className="contactForm" onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            className="contact_name"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
            value={this.state.number}
          />
        </label>
        <button className="submit" type="submit" onSubmit={this.handleSubmit}>
          Add contact
        </button>
      </form>
    );
  }
}
