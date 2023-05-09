import React, { Component } from 'react';

export class ContactList extends Component {
  handleClick = e => {
    console.log(e.currentTarget.id);
    this.props.getId(e.currentTarget.id);
  };
  render() {
    const { contacts } = this.props;
    return (
      <ul className="contactList">
        List of contacts
        {contacts.map(({ name, number, id }) => (
          <li className="contactItem" id={id} key={id}>
            {name}: {number};
            <button
              type="button"
              className="deleteContact"
              id={id}
              onClick={this.handleClick}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
