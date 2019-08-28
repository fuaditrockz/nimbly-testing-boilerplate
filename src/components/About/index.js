import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { FirebaseContext } from '../Firebase'

class AboutPage extends Component {
  render() {
    return (
      <Container>
        <h1>Hello World</h1>
        <FirebaseContext.Consumer>
          {firebase => {
            return <div>I've access to Firebase and render something.</div>;
          }}
        </FirebaseContext.Consumer>
      </Container>
    )
  }
}

export default AboutPage