import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndUpPage from './pages/sign-in-and-out/sign-in-and-up.component';
import { AUTH, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }

  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = AUTH.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log('in ', this.state)
          })
        });
        
      }
      this.setState({currentUser: userAuth}, () => console.log('out', this.state));
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  

  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndUpPage} />
      </Switch>
        
      </div>
    );
  }
  
}

export default App;
