
import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector } from "reselect";

import {GlobalStyle} from "./global.styles"
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './components/shop/shop-page.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from "./pages/checkout/checkout.component";

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from "./redux/user/user.selector";

import  ScrollToTop from "./components/scroll-to-top/scroll-to-top.component";

class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              photoURL: userAuth.photoURL,
              ...snapShot.data()
          });

        });
      }
      setCurrentUser(userAuth);
    });
  }


  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <GlobalStyle />
          <Header />
          <ScrollToTop>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route  path='/shop' component={ShopPage} />
              <Route  exact path='/checkout' component={CheckoutPage} />
              <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
            </Switch>
            </ScrollToTop>
      </div>
    );
  }
  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
