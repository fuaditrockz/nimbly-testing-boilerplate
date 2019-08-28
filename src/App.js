import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'

import logo from './nimbly.png' 
import Authentication from './components/Authentication'

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {' Nimbly Testing Boilerplate'}
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#home">Authentication</Nav.Link>
          <Nav.Link href="#features">About Us</Nav.Link>
          <Nav.Link href="#pricing">Help</Nav.Link>
        </Nav>
      </Navbar>
      <Authentication />
    </div>
  );
}

export default App;
