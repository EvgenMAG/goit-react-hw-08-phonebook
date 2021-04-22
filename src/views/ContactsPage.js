import React, { Component } from 'react';

import ContactList from '../components/ContactList';
import Form from '../components/Form';
import Filter from '../components/Filter';

import s from '../App.module.css';

import { connect } from 'react-redux';

class Contacts extends Component {
  render() {
    const { contacts } = this.props;

    return (
      <div className={s.blocks}>
        <h1 className={s.title}>Phonebook</h1>
        <Form />
        {!!contacts.length && <h2 className={s.title__contacts}>Contacts</h2>}
        {contacts.length > 1 && <Filter />}
        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts.items,
  };
};

export default connect(mapStateToProps, null)(Contacts);
