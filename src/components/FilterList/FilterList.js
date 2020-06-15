import React from 'react';
import style from './FilterList.module.css'
import FilterItem from '../FilterItem/FilterItem'

const Filter = ({filterItems}) => (<ul className={style.list}>
  {filterItems.map((item, key) =>
    <FilterItem key={key} item={item.item} active={item.active}/>
  )}
</ul>)

export default Filter;