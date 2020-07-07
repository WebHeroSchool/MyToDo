import React, {useState} from 'react';
import ItemList from '../ItemList/ItemList';
import Left from '../Left/Left';
import Input from '../Input/Input';
import Filter from '../FilterList/FilterList';
import Clear from '../Clear/Clear';
import styles from './Todo.module.css'

const Todo = () => {
  const initialState = {
    todoItems:[],
    
    filter: 'Все',
    
    count: 0 
  }

  const [todoItems, setTodoItems] = useState(initialState.todoItems);
  const [filter, setFilter] = useState(initialState.filter);
  const [count, setCount] = useState(initialState.count);

  const checkboxChange = id => {
    const newTodoItems = todoItems.map(item => {
      const newItem = { ...item };
      if(item.id === id){
        newItem.done = !newItem.done;
        if(newItem.done){
          setCount(count -1)
        }else{
          setCount(count +1)
        }
      }
      return newItem;
    })
    setTodoItems(newTodoItems);
  }

  const onClickDelete = (id, done) => {
    const newTodoItems = todoItems.filter(item => item.id !== id)
    if(done === false){
      setCount(count -1)
    }
    setTodoItems(newTodoItems);
  }

  const onKeyDownAdd = value => {
    const newTodoItems = [
    ...todoItems,
    {
      value: value,
      done: false,
      id: Number(new Date())
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
        <Left count={count}/>
        <Filter filter={filter} setFilter={setFilter}/>
        <Clear onClickDeleteComplete={onClickDeleteComplete}/>
      </div>
    </>)
}

export default Todo;