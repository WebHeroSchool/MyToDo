import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({todoItems, checkboxClickDone}) => (<ul className={styles.list}>
  {todoItems.map(item => <li key={item.value} className={styles.item}>
    <Item value={item.value} done={item.done} checkboxClickDone={checkboxClickDone} />
  </li>)}
</ul>);

export default ItemList;


