import React, { Component } from 'react';

class Filter extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search contacts..."
      />
    );
  }
}

export default Filter;
