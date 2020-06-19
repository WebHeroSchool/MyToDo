import React from 'react';
import PropTypes from 'prop-types';
import style from './FilterList.module.css'
import FilterItem from '../FilterItem/FilterItem'

const Filter = ({filterItems}) => (<ul className={style.list}>
  {filterItems.map((item, key) =>
    <FilterItem key={key} item={item.item} active={item.active}/>
  )}
</ul>)

FilterItem.propTypes = {
  item: PropTypes.string,
  active: PropTypes.bool
}

export default Filter;