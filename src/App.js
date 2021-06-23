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
import BookFormModal from './component/BookFormModal';





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
      flag:true,
      showModal:false,
      newBook:{}

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
      console.log('s');
  })
  }
 
  updateModal=()=>{
    console.log('test');
    this.setState({
      showModal:!this.state.showModal,
    })
  }

  getBookDataFromForm=(event)=>{
    event.preventDefault();
    
    const bookInfo2 = {
      name: event.target.book.value,
      description: event.target.des.value,
      status:event.target.Status.value,
      email:this.props.auth0.user.email
    }
    let url=`http://localhost:3010/addbook`;
    
    axios.post(url,bookInfo2).then((result)=>{
      this.setState({
        data:result.data,
        
      })

    });



  }

  deleteBook = async(index)=>{
    const userName = {
      email:this.props.auth0.user.email
        }
    let result = await axios.delete(`http://localhost:3010/deletebook/${index}`,{ params: userName })
    this.setState({
      data:result.data
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
                  { (isAuthenticated ?  <MyFavoriteBooks data={this.state.data} deletebook={this.deleteBook} updatBook={this.updateModal} flag={this.state.showModal}/> : <Login />) }
                  {isAuthenticated&& <BookFormModal updatBook={this.updateModal} flag={this.state.showModal} bookInfo={this.getBookDataFromForm}/>}

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

