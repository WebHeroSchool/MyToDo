import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import Input from '../Input/Input';
import styles from './App.module.css'

const App = () => {
  const todoItems = [{
    value: 'важное дело',
  },
  {
    value: 'дело'
  },
  {
    value: 'еще одно дело'
  }];

return(
<div className={styles.wrap}>
  <h1 className={styles.title}>MyToDo</h1>
  <Input />
  <ItemList todoItems={todoItems} />
  <Footer count={3}/>
</div>)
};

export default App;