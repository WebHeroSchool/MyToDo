import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import Input from '../Input/Input';


const todoItem = ['важное дело', 'дело', 'еще одно дело'];

const App = () => (<div>
  <h1>MyToDo</h1>
  <Input />
  <ItemList todoItem={todoItem}/>
  <Footer count={3}/>
</div>);

export default App;