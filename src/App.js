import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'

import * as ROUTES from './constants/routes';
import logo from './nimbly.png' 
import Authentication from './components/Authentication'

function App() {
  return (
    <Router>
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
          <Nav.Link href="#home" to={ROUTES.AUTHENTICATION}>Authentication</Nav.Link>
          <Nav.Link href="#features" to={ROUTES.ABOUT_US}>About Us</Nav.Link>
          <Nav.Link href="#pricing" to={ROUTES.HELP}>Help</Nav.Link>
        </Nav>
      </Navbar>
      <Route exact path={ROUTES.AUTHENTICATION} component={Authentication} />
    </Router>
  );
}

export default App;
