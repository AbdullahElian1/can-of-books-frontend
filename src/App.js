import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
// import login from './login';
import MyFavoriteBooks from './myFavoriteBooks';
import Login from './login';
import Profile from './Profile';




import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
  state = { redirect: null };

  render() {
    console.log('app', this.props)
    const {isAuthenticated}  = this.props.auth0;

    return(
      <>
        <Router>
          {/* <IsLoadingAndError> */}
            <Header />
              <Switch>
                <Route exact path="/">
                  {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}
                  { (isAuthenticated ?  <MyFavoriteBooks /> : <Login />) }

                </Route>
                {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
                {/* {(this.state.redirect ?  <Redirect to={this.state.redirect} /> : this.setState({ redirect: "/Profile" }) ) } */}
                <Route path="/Profile">
                  <Profile />

                </Route>
)
              </Switch>
            <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    )
  }
}

export default  withAuth0(App);

