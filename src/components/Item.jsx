import React, { Component } from 'react';
import styles from './Item.module.css';

export default class Item extends Component {
  render() {
    return (
      <div className={styles.grid}>
        <p>{this.props.item.name}</p>
        <p>{this.props.item.color}</p>
        {/* <p>${this.props.item.price}</p> */}
      </div>
    );
  }
}
