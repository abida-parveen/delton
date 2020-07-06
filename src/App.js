import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage.component.jsx';
import ShopPage from './pages/shop/Shop.component.jsx'
import Header from './components/header/Header.component.jsx'
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp.component.jsx'
import { Route,Switch, Redirect } from 'react-router-dom';
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {setCurrentUser} from './redux/user/User.actions'
import { connect } from 'react-redux';
import { SelectCurrentUser } from './redux/user/User.selectors';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './pages/CheckoutPage/Checkout.component';

class App extends React.Component
{

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          },console.log('set current user', setCurrentUser));
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUp />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: SelectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
