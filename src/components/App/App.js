import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import Input from '../Input/Input';


const App = () => (<div>
  <h1>MyToDo</h1>
  <Input />
  <ItemList />
  <Footer />
</div>);

export default App;