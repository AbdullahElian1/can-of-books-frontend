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
import axios from 'axios';





import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
      data: [],
      flag:true

    }
  }

  getBook= ()=>{
    let email=this.props.auth0.user.email;
    let url=`http://localhost:3010/book?email=${email}`;
    axios.get(url).then((bookResult)=>{
      let bookData=bookResult.data;
      this.setState({
        data:bookData,
        flag:false
      })
      console.log(this.state.data);
  })
  }



  
  
  render() {
    // console.log('app', this.props)
    const {isAuthenticated}  = this.props.auth0;
    
    return(
      <>
      {isAuthenticated&& this.state.flag&&this.getBook()}
        <Router>
          {/* <IsLoadingAndError> */}
            <Header />
              <Switch>
                <Route exact path="/">
                  {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}
                  { (isAuthenticated ?  <MyFavoriteBooks data={this.state.data}/> : <Login />) }

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

