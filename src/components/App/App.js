import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import Left from '../Left/Left';
import Input from '../Input/Input';
import Filter from '../FilterList/FilterList';
import Clear from '../Clear/Clear';
import styles from './App.module.css'

const App = () => {
  const initialState = {
    todoItems:[{
      value: 'важное дело',
      done: false,
      id: 1
    },
    {
      value: 'дело',
      done: true,
      id: 2
    },
    {
      value: 'еще одно дело',
      done: true,
      id: 3
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
    }],
    
    count: 3 
  }

  const [todoItems, setTodoItems] = useState(initialState.todoItems);
  const [filterItems] = useState(initialState.filterItems);
  const [count, setCount] = useState(initialState.count);

  useEffect(() => {
    console.log('useEffect');
  })

  const checkboxChange = id => {
    const newTodoItems = todoItems.map(item => {
      const newItem = { ...item };
      if(item.id === id){
        newItem.done = !newItem.done;
      }
      return newItem;
    })
    setTodoItems(newTodoItems);
  }

  const onClickDelete = id => {
    const newTodoItems = todoItems.filter(item => item.id !== id)
    setTodoItems(newTodoItems);
    setCount(count - 1);
  }

  const onKeyDownAdd = (value) => {
    const newTodoItems = [
    ...todoItems,
    {
      value,
      done: false,
      id: count +1
    }];
    setTodoItems(newTodoItems);
    setCount(count +1);
  };


  return(
    <div className={styles.wrap}>
      <h1 className={styles.title}>M<span className={styles.title_color}>y</span>ToDo</h1>
      <div className={styles.content}>
        <Input onKeyDownAdd={onKeyDownAdd}/>
        <ItemList todoItems={todoItems} 
                  checkboxChange={checkboxChange} 
                  onClickDelete={onClickDelete}
        />
      </div>
      <div className={styles.footer}>
        <Left count={todoItems.length}/>
        <Filter filterItems={filterItems}/>
        <Clear />
      </div>
    </div>
  )

};

export default App;