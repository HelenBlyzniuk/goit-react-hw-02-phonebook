import React from 'react';

export const ContactList = ({ contacts }) => {
  return (
    <ul className="contactList">
      List of contacts
      {contacts.map(({ name, number, id }) => (
        <li className="cintactItem" id={id} key={id}>
          <p className="contactName">{name}</p>
          <p className="contactPhone">{number}</p>
          <button type="button" className="deleteContact">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
