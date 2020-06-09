import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import Input from '../Input/Input';


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
<div>
  <h1>MyToDo</h1>
  <Input />
  <ItemList todoItems={todoItems}/>
  <Footer count={3}/>
</div>)
};

export default App;