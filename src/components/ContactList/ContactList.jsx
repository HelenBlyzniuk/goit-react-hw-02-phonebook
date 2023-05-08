import React, { Component } from 'react';

export class ContactList extends Component {
  render() {
    return (
      <ul className="contactList">
        List of contacts
        <li className="cintactItem">
          <p className="contactName"></p>
          <p className="contactPhone"></p>
          <button type="button" className="deleteContact"></button>
        </li>
      </ul>
    );
  }
}
