import React, { Component } from 'react';
import styles from './Item.module.css';

export default class Item extends Component {
  render() {
    const { label, content } = this.props.item;
    return (
      <div className={styles.grid}>
        <p className={styles.label}>{label}</p>
        <p className={styles.content}>{content}</p>
      </div>
    );
  }
}
