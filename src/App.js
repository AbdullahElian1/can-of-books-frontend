import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
    console.log('app', this.props)
    return(
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
              <Switch>
                <Route exact path="/">
                  {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}
                </Route>
                {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    )
  }
}

export default App;