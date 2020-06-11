import React from 'react';
import style from './FilterList.module.css'
import FilterItem from '../FilterItem/FilterItem'

const Filter = ({filterItems}) => (<ul key={filterItems.item} className={style.list}>
  {filterItems.map(item =>
    <FilterItem item={item.item} active={item.active}/>
  )}
</ul>)

export default Filter;