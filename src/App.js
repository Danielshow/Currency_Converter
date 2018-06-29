import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Footer from './component/Footer';
import Currency from './component/Currency';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/"> Currency Converter </NavbarBrand>
            </div>
        </Navbar>
        <Currency />
        <Footer />

      </div>

    );
  }
}

export default App;
