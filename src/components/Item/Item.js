import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';

const Item = ({value , done}) => (<span className={
  classnames({
    [styles.item]:true,
    [styles.done]:done
  })
}>{value}</span>)

export default Item;