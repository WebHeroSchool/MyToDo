import React from 'react';
import style from './FilterList.module.css'

const Filter = ({filter, setFilter}) => (<ul className={style.list}>
  <li className={filter === 'Все' ? style.active : style.item}
      onClick={() => setFilter('Все')}>
      Все
  </li>
  <li className={filter === 'Аквтивные' ? style.active : style.item}
      onClick={() => setFilter('Аквтивные')}>
      Аквтивные
  </li>
  <li className={filter === 'Выполненые' ? style.active : style.item}
      onClick={() => setFilter('Выполненые')}>
      Выполненые
  </li>
</ul>)

export default Filter;