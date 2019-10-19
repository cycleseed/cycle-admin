import React, {Component} from 'react';
import NavBar from './navBar';
import CardGridStyled from '../materials /cardGrid'
import Footer from './footer';

class Homepage extends Component {
  render(){
    return (
      <div>
      <NavBar/>
      <CardGridStyled/>
      <Footer/>
      </div>
    )
  }
}

export default Homepage;