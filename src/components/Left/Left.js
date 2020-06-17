import React from 'react';
import styles from './Left.module.css';

const Left = ({count}) => (<div>Осталось выполнить : <span className={styles.num}>{count}</span></div>);

Left.defaultProps = {
  count: 0
};

export default Left;