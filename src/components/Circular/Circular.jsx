import React from 'react';
import styles from './Circular.module.css'
import spinner from '../../assets/images/spinner.gif'

export default function Circular() {
  return (
    <div className={styles.spinnerContainer}>     
      <img className={styles.spinner} src={spinner} alt="spinner"/>
    </div>
  );
}
