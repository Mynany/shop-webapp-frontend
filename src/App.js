import React from 'react';
import { Route,Link,Switch } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.util'
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx'
import SigninandSignupPage from './pages/signin-and-signup/signin-and-signup.component.jsx'


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if(!userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshop(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        });
        console.log(this.state)

      }

      // this.setState({currentUser: user});
      // console.log(this.state.currentUser);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route component={HomePage} exact path="/" />
            <Route component={ShopPage} exact path="/shop" />
            <Route component={SigninandSignupPage} exact path="/signin" />
          </Switch> 
      </div>
    );
  }
  
}

export default App;
