import React from 'react';
import classnames from 'classnames';
import styles from './FilterItem.module.css'

const FilterItem = ({item , active}) => (<li className={
  classnames({
    [styles.item]:true,
    [styles.active]:active
  })
}>{item}</li>)

export default FilterItem;