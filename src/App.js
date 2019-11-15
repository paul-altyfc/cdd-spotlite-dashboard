import React, { Component } from 'react';
import Item from './compoments/Item';
import styles from './App.module.css';

export default class App extends Component {
  state = {
    cart: [],
    shop: [
      { id: 35, name: 'jumper', color: 'red', price: 20 },
      { id: 42, name: 'shirt', color: 'blue', price: 15 },
      { id: 56, name: 'pants', color: 'green', price: 25 },
      { id: 71, name: 'socks', color: 'black', price: 5 },
      { id: 72, name: 'socks', color: 'white', price: 5 }
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
