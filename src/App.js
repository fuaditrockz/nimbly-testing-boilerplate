import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'

import * as ROUTES from './constants/routes';
import logo from './nimbly.png'

import AuthenticationPage from './components/Authentication'
import AboutPage from './components/About'
import HelpPage from './components/Help'
import PostForm from './components/PostForm'

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to={ROUTES.AUTHENTICATION} style={style.linkStyle}>
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {' Nimbly Testing Boilerplate'}
          </Link>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <NavLink to={ROUTES.POST_FORM} style={style.linkStyle} activeStyle={style.activeStyle}>
            Post Form
          </NavLink>
          <NavLink to={ROUTES.ABOUT_US} style={style.linkStyle} activeStyle={style.activeStyle}>
            About Us
          </NavLink>
          <NavLink to={ROUTES.HELP} style={style.linkStyle} activeStyle={style.activeStyle}>
            Help
          </NavLink>
        </Nav>
      </Navbar>
      <Route exact path={ROUTES.AUTHENTICATION} component={AuthenticationPage} />
      <Route path={ROUTES.ABOUT_US} component={AboutPage} />
      <Route path={ROUTES.HELP} component={HelpPage} />
      <Route path={ROUTES.POST_FORM} component={PostForm} />
    </Router>
  );
}

const style = {
  activeStyle: {
    fontWeight: "bold",
    color: "#636e72"
  },
  linkStyle: {
    marginRight: 10,
    color: 'white'
  }
}

export default App;
