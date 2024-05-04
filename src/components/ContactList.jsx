import React, { Component } from 'react';

class ContactList extends Component {
  render() {
    const { contacts, onDelete } = this.props;

    return (
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name} - {contact.number}
            <button onClick={() => onDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
