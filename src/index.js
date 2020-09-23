import React from 'react';
import ReactDOM from 'react-dom';

import Home from './Home';
import App2 from './App2'
import Navbar from './navbar';
import store from './store/Store'
import { Provider } from 'react-redux';



ReactDOM.render(
  <>
  <Provider store = {store}>
  <Navbar/>

  <App2/>
  <Home/>
  
 </Provider>     
  </>,
  document.getElementById('root')
);



