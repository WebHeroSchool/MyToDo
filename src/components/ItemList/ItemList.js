import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({todoItems, checkboxChange, onClickDelete}) => (<ul className={styles.list}>
  {todoItems.map(item => <li key={item.id} className={styles.item}>
    <Item value={item.value}
          done={item.done}
          id={item.id}
          checkboxChange={checkboxChange}
          onClickDelete={onClickDelete}
    />
  </li>)}
</ul>);

export default ItemList;


