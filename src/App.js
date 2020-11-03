import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndUpPage from './pages/sign-in-and-out/sign-in-and-up.component';

import './App.css';

function App() {
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={SignInAndUpPage} />
    </Switch>
      
    </div>
  );
}

export default App;
