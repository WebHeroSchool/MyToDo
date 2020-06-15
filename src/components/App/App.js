import React from 'react';
import ItemList from '../ItemList/ItemList';
import Left from '../Left/Left';
import Input from '../Input/Input';
import Filter from '../FilterList/FilterList';
import Clear from '../Clear/Clear';
import styles from './App.module.css'

class App extends React.Component {
  state = {
    todoItems:[{
      value: 'важное дело',
      done: false
    },
    {
      value: 'дело',
      done: true
    },
    {
      value: 'еще одно дело',
      done: true
    }],
    
    filterItems: [{
      item: 'Все',
      active: true
    },
    {
      item: 'Активные',
      active: false
    },
    {
      item: 'Выполненые',
      active: false
    }]
  }
  render() {
    return(
      <div className={styles.wrap}>
        <h1 className={styles.title}>M<span className={styles.title_color}>y</span>ToDo</h1>
        <div className={styles.content}>
          <Input />
          <ItemList todoItems={this.state.todoItems} />
        </div>
        <div className={styles.footer}>
          <Left count={2}/>
          <Filter filterItems={this.state.filterItems}/>
          <Clear />
        </div>
      </div>
    )
  }
};

export default App;