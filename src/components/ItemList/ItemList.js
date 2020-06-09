import React from 'react';
import Item from '../Item/Item';

const ItemList = ({todoItem}) => (<ul>
  <Item todoItem={todoItem[0]}/>
  <Item todoItem={todoItem[1]}/>
  <Item todoItem={todoItem[2]}/>
</ul>);

export default ItemList;


