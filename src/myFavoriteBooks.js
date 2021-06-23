import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './myFavoriteBooks.css';
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Bestbook from './Bestbook';

class MyFavoriteBooks extends React.Component {

  render() {
    return (
<>
     <Bestbook data={this.props.data} deletebook={this.props.deletebook} updatBookModal={this.props.updatBookModal} flagUpdateBook={this.props.flagUpdateBook} test={this.props.test}/>
     
     </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);



