import React, { Component } from 'react';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit(name, number);
    this.setState({
      name: '',
      number: '',
    });
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleNumberChange = e => {
    this.setState({ number: e.target.value });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={this.handleNameChange}
          placeholder="Name"
          required
        />
        <input
          type="tel"
          value={number}
          onChange={this.handleNumberChange}
          placeholder="Phone Number"
          required
        />
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

export default ContactForm;
