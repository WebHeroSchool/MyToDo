import React from 'react';
import ItemList from './itemList';
import Footer from './footer';
import Input from './input';


const App = () => (<div>
  <h1>MyToDo</h1>
  <Input />
  <ItemList />
  <Footer />
</div>);

export default App;