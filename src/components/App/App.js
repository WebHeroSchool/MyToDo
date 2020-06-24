import React from 'react';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import styles from './App.module.css'
import Todo from '../Todo/Todo';
import Contacts from '../Contacts/Contacts';
import About from '../About/About';

const App = () => {
  return(
    <BrowserRouter>
      <div className={styles.nav}>
        <NavLink className={styles.link} activeClassName={styles.active} to='/about'>About Me</NavLink>
        <NavLink className={styles.link} exact activeClassName={styles.active} to='/'>MyToDo</NavLink>
        <NavLink className={styles.link} activeClassName={styles.active} to='/contacts'>Contacts</NavLink>
      </div>
      <div className={styles.card}>
        <Route path='/about' component={About}></Route>
        <Route path='/' exact component={Todo}></Route>
        <Route path='/contacts' component={Contacts}></Route>
      </div>
    </BrowserRouter>
  )

};

export default App;