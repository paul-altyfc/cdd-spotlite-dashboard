import React, { Component } from 'react';
import Item from './components/Item';
import styles from './App.module.css';

export default class App extends Component {
  state = {
    cart: [],
    shop: [
      {
        id: 1,
        label: 'Name',
        content: 'UK Credit Header (AML)'
      },
      {
        id: 2,
        label: 'Description',
        content:
          'UK Credit Header Database. Provides authentication of name, address and date of birth against Credit Header information for an Anti Money Laundering Check.'
      },
      { id: 3, label: 'ID', content: '155' },
      { id: 4, label: 'Pass', content: '1' },
      {
        id: 5,
        label: 'Address',
        content: '73 Ashley Drive, United Kingdom'
      },
      {
        id: 6,
        label: 'Forename',
        content: 'Christopher'
      },
      {
        id: 7,
        label: 'Surname',
        content: 'Pimlott'
      },
      {
        id: 8,
        label: 'DOB',
        content: '1978-06-28'
      },
      {
        id: 9,
        label: 'Alert',
        content: '3'
      },
      {
        id: 10,
        label: 'PublishedTelephoneNumber',
        content: '004407961857265'
      }
    ]
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <header className={styles.header}>Captured Field Information</header>
        {this.state.shop.map((item, key) => (
          <Item className={styles.wrapper} item={item} key={item.id} />
        ))}
      </div>
    );
  }
}
