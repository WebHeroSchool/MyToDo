import React, {useState} from 'react';
import ItemList from '../ItemList/ItemList';
import Left from '../Left/Left';
import Input from '../Input/Input';
import Filter from '../FilterList/FilterList';
import Clear from '../Clear/Clear';
import styles from './Todo.module.css'

const Todo = () => {
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
  }

  const onKeyDownAdd = value => {
    const newTodoItems = [
    ...todoItems,
    {
      value: value,
      done: false,
      id: count +1
    }];
    setTodoItems(newTodoItems);
    setCount(count +1);
  };

  const onClickDeleteComplete = () => {
    const newTodoItems = todoItems.filter(item => !item.done )
    setTodoItems(newTodoItems);
  }

  
  return(<>
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
        <Clear onClickDeleteComplete={onClickDeleteComplete}/>
      </div>
    </>)
}

export default Todo;