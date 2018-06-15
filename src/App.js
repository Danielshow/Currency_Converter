import React, { Component } from 'react';
//import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './component/MenuComponent'
import Footer from './component/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/"> Daniel Show </NavbarBrand>
            </div>
        </Navbar>
        <Menu />
        <Footer />
      </div>
    );
  }
}

export default App;
