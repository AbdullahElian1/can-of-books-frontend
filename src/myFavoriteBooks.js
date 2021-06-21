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
     <Bestbook data={this.props.data}/>
     </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);



