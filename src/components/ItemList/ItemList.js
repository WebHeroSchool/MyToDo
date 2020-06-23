import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item';
import styles from './ItemList.module.css';


const ItemList = ({todoItems, checkboxChange, onClickDelete}) => (<ul className={styles.list}>
  {todoItems.map((item, key) => <li key={key} className={styles.item}>
    <Item value={item.value}
          done={item.done}
          id={item.id}
          checkboxChange={checkboxChange}
          onClickDelete={onClickDelete}
    />
  </li>)}
</ul>);

Item.propTypes = {
	value: PropTypes.string,
	done: PropTypes.bool,
	id: PropTypes.number,
	checkboxChange: PropTypes.func,
	onClickDelete: PropTypes.func
};

export default ItemList;


