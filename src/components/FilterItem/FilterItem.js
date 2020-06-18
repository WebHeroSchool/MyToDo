import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './FilterItem.module.css'

const FilterItem = ({item , active}) => (<li className={
  classnames({
    [styles.item]:true,
    [styles.active]:active
  })
}>{item}</li>)

FilterItem.propTypes = {
  active: PropTypes.bool
}

export default FilterItem;