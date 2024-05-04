import React, { Component } from 'react';
import ContactForm from './ContactForm.jsx';
import ContactList from './ContactList.jsx';
import Filter from './Filter';
import { nanoid } from 'nanoid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      filter: '',
    };
  }

  addContact = (name, number) => {
    const trimmedName = name.trim();
    const { contacts } = this.state;

    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === trimmedName.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${trimmedName} is already in contacts!`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: trimmedName,
      number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilterChange = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactList contacts={filteredContacts} onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;

/* export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
}; */
