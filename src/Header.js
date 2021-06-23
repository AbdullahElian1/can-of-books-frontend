import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './header.css';
import { withAuth0 } from '@auth0/auth0-react';
import Loginbutton1 from './component/Loginbutton1';
import Logoutbottun from './component/Logoutbottun'
class Header extends React.Component {

  // constructor(props){

  // }
  // const {isAuthenticated}  = this.props.auth0;


  render() {
    const {isAuthenticated}  = this.props.auth0;

    return(
      <Navbar className="nav" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className="title">My Favorite Books</Navbar.Brand>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}
          {/* <Loginbutton1 />
          <Logoutbottun /> */}

         { (isAuthenticated) ?  <Logoutbottun /> : <Loginbutton1 /> }
         

      </Navbar>
    )
  }
}

export default withAuth0(Header);
